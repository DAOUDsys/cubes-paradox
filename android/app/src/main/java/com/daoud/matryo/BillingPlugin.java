package com.daoud.matryo;

import com.android.billingclient.api.AcknowledgePurchaseParams;
import com.android.billingclient.api.BillingClient;
import com.android.billingclient.api.BillingClientStateListener;
import com.android.billingclient.api.BillingFlowParams;
import com.android.billingclient.api.BillingResult;
import com.android.billingclient.api.PendingPurchasesParams;
import com.android.billingclient.api.ProductDetails;
import com.android.billingclient.api.Purchase;
import com.android.billingclient.api.PurchasesUpdatedListener;
import com.android.billingclient.api.QueryProductDetailsParams;
import com.android.billingclient.api.QueryPurchasesParams;
import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import java.util.Collections;
import java.util.List;

/**
 * The one purchase in the game: the "full_game" one-time product, which opens the worlds after the sixth.
 * check() reports its price and whether it is owned; buy() starts Google Play's purchase screen.
 */
@CapacitorPlugin(name = "Billing")
public class BillingPlugin extends Plugin implements PurchasesUpdatedListener {

    private static final String PRODUCT = "full_game";

    private BillingClient client;
    private ProductDetails details;
    private PluginCall buying;

    @Override
    public void load() {
        client = BillingClient
            .newBuilder(getContext())
            .setListener(this)
            .enablePendingPurchases(PendingPurchasesParams.newBuilder().enableOneTimeProducts().build())
            .enableAutoServiceReconnection()
            .build();
    }

    private interface Ready {
        void run();
    }

    private void whenConnected(PluginCall call, Ready next) {
        if (client.isReady()) {
            next.run();
            return;
        }
        client.startConnection(
            new BillingClientStateListener() {
                private boolean answered = false;

                @Override
                public void onBillingSetupFinished(BillingResult result) {
                    if (answered) return;
                    answered = true;
                    if (result.getResponseCode() == BillingClient.BillingResponseCode.OK) next.run();
                    else call.resolve(new JSObject().put("available", false).put("known", false));
                }

                @Override
                public void onBillingServiceDisconnected() {
                    if (answered) return;
                    answered = true;
                    call.resolve(new JSObject().put("available", false).put("known", false));
                }
            }
        );
    }

    @PluginMethod
    public void check(PluginCall call) {
        whenConnected(call, () -> {
            QueryProductDetailsParams.Product product = QueryProductDetailsParams.Product
                .newBuilder()
                .setProductId(PRODUCT)
                .setProductType(BillingClient.ProductType.INAPP)
                .build();
            QueryProductDetailsParams params = QueryProductDetailsParams
                .newBuilder()
                .setProductList(Collections.singletonList(product))
                .build();
            client.queryProductDetailsAsync(params, (result, found) -> {
                List<ProductDetails> list = found.getProductDetailsList();
                details = list.isEmpty() ? null : list.get(0);
                JSObject out = new JSObject();
                out.put("available", details != null);
                if (details != null && details.getOneTimePurchaseOfferDetails() != null) {
                    out.put("price", details.getOneTimePurchaseOfferDetails().getFormattedPrice());
                }
                QueryPurchasesParams owned = QueryPurchasesParams.newBuilder().setProductType(BillingClient.ProductType.INAPP).build();
                client.queryPurchasesAsync(owned, (ownedResult, purchases) -> {
                    boolean known = ownedResult.getResponseCode() == BillingClient.BillingResponseCode.OK;
                    out.put("known", known);
                    if (known) describe(purchases, out);
                    call.resolve(out);
                });
            });
        });
    }

    @PluginMethod
    public void buy(PluginCall call) {
        if (details == null) {
            call.resolve(new JSObject().put("error", true));
            return;
        }
        BillingFlowParams.ProductDetailsParams item = BillingFlowParams.ProductDetailsParams.newBuilder().setProductDetails(details).build();
        BillingFlowParams params = BillingFlowParams.newBuilder().setProductDetailsParamsList(Collections.singletonList(item)).build();
        buying = call;
        getActivity().runOnUiThread(() -> {
            BillingResult result = client.launchBillingFlow(getActivity(), params);
            if (result.getResponseCode() != BillingClient.BillingResponseCode.OK) finishBuying(new JSObject().put("error", true));
        });
    }

    @Override
    public void onPurchasesUpdated(BillingResult result, List<Purchase> purchases) {
        int code = result.getResponseCode();
        JSObject out = new JSObject();
        if (code == BillingClient.BillingResponseCode.OK && purchases != null) describe(purchases, out);
        else if (code == BillingClient.BillingResponseCode.ITEM_ALREADY_OWNED) out.put("owned", true);
        else if (code == BillingClient.BillingResponseCode.USER_CANCELED) out.put("cancelled", true);
        else out.put("error", true);
        finishBuying(out);
    }

    private void finishBuying(JSObject out) {
        if (buying != null) buying.resolve(out);
        buying = null;
    }

    // Fills in owned/pending, and acknowledges a new purchase (Google refunds it after 3 days otherwise).
    private void describe(List<Purchase> purchases, JSObject out) {
        boolean owned = false, pending = false;
        for (Purchase p : purchases) {
            if (!p.getProducts().contains(PRODUCT)) continue;
            if (p.getPurchaseState() == Purchase.PurchaseState.PENDING) pending = true;
            if (p.getPurchaseState() == Purchase.PurchaseState.PURCHASED) {
                owned = true;
                if (!p.isAcknowledged()) {
                    AcknowledgePurchaseParams ack = AcknowledgePurchaseParams.newBuilder().setPurchaseToken(p.getPurchaseToken()).build();
                    client.acknowledgePurchase(ack, (r) -> {});
                }
            }
        }
        out.put("owned", owned);
        out.put("pending", pending);
    }
}
