# نشر Cubes Paradox على Google Play

كلشي جاهز إلا الخطوات اللي لازم تعملها إنت من حسابك. أسماء الحقول بالإنجليزي زي ما بتطلع بـ Play Console.

## الملفات الجاهزة

| الحقل | الملف |
|---|---|
| ملف الرفع | `CubesParadox-1.3.1.aab` (بمجلد المشروع، مش على الريبو) |
| App icon | `store/icon-512.png` |
| Feature graphic | `store/feature-graphic-1024x500.png` |
| Phone screenshots | `store/screenshots/` (7 صور، 1080×1920) |
| اسم اللعبة والوصف باللغات السبعة | `store/play/<اللغة>/` |
| Privacy policy | `https://github.com/DAOUDsys/cubes-paradox/blob/main/PRIVACY.md` |

## 1. الحساب

- سجّل على [Play Console](https://play.google.com/console/signup): 25 دولار مرة وحدة، وتأكيد هوية.
- **انتبه:** الحساب الشخصي الجديد ما بينشر مباشرة. لازم أول تعمل **closed test مع 12 شخص على الأقل، مشتركين 14 يوم ورا بعض**، وبعدها بتقدم طلب للنشر، والمراجعة عادة 7 أيام أو أقل.
- إذا طلع حسابك أقدم من 13 نوفمبر 2023، أو حساب شركة، هاد الشرط ما بينطبق عليك.

## 2. إنشاء التطبيق

- App name: `Cubes Paradox`
- Default language: `English (United States)`
- App or game: `Game`
- Free or paid: `Free` (ما بتقدر ترجع تحوّله لمدفوع بعدين)

## 3. مفتاح التوقيع (قرار مهم، مرة وحدة وما بينعكس)

لما ترفع أول ملف، جوجل بتسألك عن Play App Signing. **بنصح تختار رفع مفتاحك الحالي** (Use a different key، ثم Export and upload a key from Java keystore) بدل مفتاح تولّده جوجل.

- **السبب:** هيك نسخة جوجل بلاي ونسخة جيت هب وOrion بيكون إلهم نفس التوقيع، وبتتحدث وحدة فوق التانية بدون ما اللاعب يمسح اللعبة ويخسر تقدمه.
- **إذا خليت جوجل تولّد المفتاح:** اللي مثبّت من جيت هب أو Orion لازم يمسح اللعبة ويخسر تقدمه عشان ينتقل لجوجل بلاي.
- المفتاح بمجلد `keys/`. **خذ منه نسخة احتياطية برا الكمبيوتر، مع كلمة السر بملف `android/keystore.properties`.** إذا ضاع ما بتقدر تحدّث نسخة جيت هب أبداً. وما ترفعه على الريبو.

## 4. App content (الأجوبة الجاهزة)

| السؤال | الجواب |
|---|---|
| Privacy policy | الرابط اللي فوق |
| Ads | No, my app does not contain ads |
| App access | All functionality is available without special access |
| Advertising ID | No |
| News / Government / Financial / Health apps | No |
| Data safety: collect or share any user data? | **No** |
| Target audience | **13+** (شوف الملاحظة تحت) |

**Target audience:** إذا اخترت أعمار تحت 13، بتنطبق عليك سياسة Families وبتصير المراجعة أشد. اللعبة ما بتجمع بيانات، فاختيار كل الأعمار ممكن كمان، بس 13+ أبسط. وإذا جوجل سألت إذا اللعبة بتجذب الأطفال، جاوب بصدق: الشخصية لطيفة، بس الألغاز صعبة ومش معمولة للأطفال.

**Content rating (استبيان IARC):** الفئة `Game`. الجواب **No** على كلشي: عنف، جنس، ألفاظ، مخدرات، مقامرة، تفاعل بين المستخدمين، مشاركة الموقع، مشتريات داخل التطبيق.

## 5. Store listing

- Category: `Games` ثم `Puzzle`
- Contact email: **مطلوب وبيبين للناس**، فاختار إيميل ما عندك مشكلة ينعرض
- Website: `https://github.com/DAOUDsys/cubes-paradox`
- كل لغة: انسخ من `store/play/<اللغة>/`:
  - `title.txt` إلى App name
  - `short_description.txt` إلى Short description
  - `full_description.txt` إلى Full description
- ضيف اللغات من Manage translations: `ar`, `es-ES`, `fr-FR`, `de-DE`, `pt-BR`, `tr-TR`

## 6. الاختبار والنشر

1. Testing، ثم Closed testing، ثم Create new release.
2. ارفع `CubesParadox-1.3.1.aab`.
3. Release notes: انسخ من `whats_new.txt` لكل لغة.
4. ضيف إيميلات الـ 12 مختبر، وابعتلهم رابط الاشتراك. كل واحد لازم يضل مشترك **14 يوم ورا بعض**. خذ أكتر من 12 احتياط، لأن اللي بينسحب ممكن يخرّب العدّ.
5. بعد 14 يوم: Dashboard، ثم Apply for production.
6. بعد الموافقة: Production، ثم انشر.

## التحديثات الجاية

كل ملف بترفعه لازم يكون `versionCode` تبعه أكبر من اللي قبله (بملف `android/app/build.gradle`). استعمل نفس الرقم لجيت هب وجوجل بلاي.
