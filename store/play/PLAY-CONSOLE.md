# نشر Cubes Paradox على Google Play

كلشي جاهز إلا الخطوات اللي لازم تعملها إنت من حسابك. أسماء الحقول بالإنجليزي زي ما بتطلع بـ Play Console.

## الملفات الجاهزة

| الحقل | الملف |
|---|---|
| ملف الرفع | `CubesParadox-1.5.1.aab` (بمجلد المشروع، مش على الريبو) |
| App icon | `store/icon-512.png` |
| Feature graphic | `store/feature-graphic-1024x500.png` |
| Phone screenshots | `store/screenshots/` (7 صور، 1080×1920) |
| اسم اللعبة والوصف باللغات السبعة | `store/play/<اللغة>/` |
| Privacy policy | `https://daoudsys.github.io/cubes-paradox-privacy/` |
| Terms of Service (للجهة التجارية) | `https://daoudsys.github.io/cubes-paradox-privacy/terms` |

## 1. الحساب

- سجّل على [Play Console](https://play.google.com/console/signup): 25 دولار مرة وحدة، وتأكيد هوية.
- **انتبه:** الحساب الشخصي الجديد ما بينشر مباشرة. لازم أول تعمل **closed test مع 12 شخص على الأقل، مشتركين 14 يوم ورا بعض**، وبعدها بتقدم طلب للنشر، والمراجعة عادة 7 أيام أو أقل.
- إذا طلع حسابك أقدم من 13 نوفمبر 2023، أو حساب شركة، هاد الشرط ما بينطبق عليك.

## حساب الدفع (عشان تستلم المصاري)

- من Play Console: Setup، ثم Payments profile. أنشئ ملف دفع واربطه بحساب بنكي.
- بحسب [جدول جوجل](https://support.google.com/googleplay/android-developer/answer/9306917?hl=en) فلسطين مدعومة لاستلام الأرباح، وعملتها الدولار. راجع الجدول حسب البلد اللي مسجل فيه.
- **بلد الحساب ما بيتغير بعد التسجيل**، فاختاره صح من الأول.

## حالة الجهة التجارية (Trader status)

- اللعبة فيها شراء، فالخيار المناسب إذا بتنزلها بأوروبا وبريطانيا هو **جهة تجارية (trader)**. [شرح جوجل](https://support.google.com/googleplay/android-developer/answer/17594752?hl=en)
- بالحساب الشخصي، عنوانك ورقم هاتفك بيبينوا للناس.
- لازم تضيف رابط Terms of Service اللي فوق لكل تطبيق: Monitor and improve، ثم Policy and programs، ثم App content.

## 2. إنشاء التطبيق

- App name: `Cubes Paradox`
- Default language: `English (United States)`
- App or game: `Game`
- Free or paid: `Free`. اللعبة مجانية التنزيل، والدفع من جوا اللعبة. (ما بتقدر تغيّرها لـ Paid بعدين)

## 3. مفتاح التوقيع

لما ترفع أول ملف، جوجل بتسألك عن Play App Signing. اختار **Use Google-generated key**، وهو الخيار الأبسط.

- الملف موقّع بمفتاحك بمجلد `keys/`، وهاد بيصير مفتاح الرفع (upload key)، وجوجل بتوقّع النسخة النهائية بمفتاحها.
- **انتبه:** اللي مثبّت اللعبة من Orion أو جيت هب لازم يمسحها ويخسر تقدمه عشان ينزلها من جوجل بلاي.
- خذ نسخة احتياطية من `keys/` ومن `android/keystore.properties` برا الكمبيوتر. إذا ضاعوا، بتقدر تطلب من جوجل مفتاح رفع جديد، بس بياخد وقت. وما ترفعهم على أي ريبو.

## 4. App content (الأجوبة الجاهزة)

| السؤال | الجواب |
|---|---|
| Privacy policy | الرابط اللي فوق |
| Ads | No, my app does not contain ads |
| App access | All functionality is available without special access |
| Advertising ID | No |
| News / Government / Financial / Health apps | No |
| Data safety: collect or share any user data? | **No** (الدفع كله عند جوجل، واللعبة ما بتبعت إشي لحدا. راجع نص الأسئلة وقت التعبئة) |
| Target audience | **13+** (شوف الملاحظة تحت) |

**Target audience:** إذا اخترت أعمار تحت 13، بتنطبق عليك سياسة Families وبتصير المراجعة أشد. اللعبة ما بتجمع بيانات، فاختيار كل الأعمار ممكن كمان، بس 13+ أبسط. وإذا جوجل سألت إذا اللعبة بتجذب الأطفال، جاوب بصدق: الشخصية لطيفة، بس الألغاز صعبة ومش معمولة للأطفال.

**Content rating (استبيان IARC):** الفئة `Game`. الجواب **No** على كلشي: عنف، جنس، ألفاظ، مخدرات، مقامرة، تفاعل بين المستخدمين، مشاركة الموقع. بس **In-app purchases: Yes**.

## 5. Store listing

- Category: `Games` ثم `Puzzle`
- Contact email: **مطلوب وبيبين للناس**، فاختار إيميل ما عندك مشكلة ينعرض
- Website: خليه فاضي (الريبو خاص)
- كل لغة: انسخ من `store/play/<اللغة>/`:
  - `title.txt` إلى App name
  - `short_description.txt` إلى Short description
  - `full_description.txt` إلى Full description
- ضيف اللغات من Manage translations: `ar`, `es-ES`, `fr-FR`, `de-DE`, `pt-BR`, `tr-TR`

## منتج الشراء (لازم يكون اسمه بالضبط هيك)

بعد ما ترفع أول ملف AAB (جوجل ما بتسمح بإنشاء منتجات قبل هيك):

1. Monetize with Play، ثم Products، ثم One-time products، ثم Create.
2. Product ID: **`full_game`**. لازم يطابق الكود حرفياً، وما بيتغير بعدين.
3. الاسم والوصف: `Full game` و`Unlocks worlds 7 to 14`.
4. حدد السعر وفعّل المنتج (Activate). السعر بيطلع لحاله جوا اللعبة، فبتقدر تغيّره بدون تحديث.
5. **جرّب الشراء:** Setup، ثم License testing، وضيف إيميلك وإيميلات المختبرين. هدول بيشتروا بدون ما ينخصم منهم إشي.

**لازم تجرب الشراء قبل النشر.** هاد الجزء ما بينفحص إلا من نسخة منزّلة من جوجل بلاي مع منتج مفعّل.

## 6. الاختبار والنشر

1. Testing، ثم Closed testing، ثم Create new release.
2. ارفع `CubesParadox-1.5.1.aab`.
3. Release notes: انسخ من `whats_new.txt` لكل لغة.
4. ضيف إيميلات الـ 12 مختبر، وابعتلهم رابط الاشتراك. كل واحد لازم يضل مشترك **14 يوم ورا بعض**. خذ أكتر من 12 احتياط، لأن اللي بينسحب وبيرجع بيبدأ عدّه من جديد، ولازم يكون في 12 مشتركين وقت ما تقدم الطلب.
   جوجل بتسأل بالطلب عن تفاعل المختبرين وملاحظاتهم، فاطلب منهم يلعبوا فعلاً، وسجّل ملاحظاتهم.
5. بعد 14 يوم: Dashboard، ثم Apply for production.
6. بعد الموافقة: Production، ثم انشر.

## التحديثات الجاية

كل ملف بترفعه لازم يكون `versionCode` تبعه أكبر من اللي قبله (بملف `android/app/build.gradle`). 
