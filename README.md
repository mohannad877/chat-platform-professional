# Godzilla Messages (Arabic & English)

## 🇸🇦 نظرة عامة
منصة مراسلة فورية آمنة تم تطويرها بواسطة **Mohannad Nabil Ahmed Mohammed Abdullh**.  
توفر تجربة سلسة للتسجيل، تسجيل الدخول، وإدارة المحادثات في الوقت الحقيقي مع دعم الصور الشخصية وتحديث حالة المستخدم.

### ✨ المزايا
- واجهة كاملة باللغة الإنجليزية بنمط LTR قابلة للتخصيص.
- نظام تسجيل/تسجيل دخول آمن يستخدم `password_hash` مع ترقية تلقائية للحسابات القديمة.
- تحديث فوري لقائمة المستخدمين والرسائل عبر AJAX (بدون إعادة تحميل الصفحة).
- وضع داكن، خلفية تفاعلية، وتصميم متجاوب.
- بنية قاعدة بيانات نظيفة (جداول `users` و `messages` فقط بدون بيانات حساسة).

### ⚙️ المتطلبات والتشغيل
1. **خادم محلي أو استضافة** تدعم PHP 8+ و MySQL/MariaDB (مثل XAMPP).
2. استورد ملف `chatapp.sql` لإنشاء الجداول الفارغة.
3. حدث بيانات الاتصال بقاعدة البيانات في `php/config.php` إذا لزم.
4. شغّل الموقع عبر الخادم (مثلاً: `http://localhost/chatApp`).

### 🧪 اختبار سريع
- جرّب إنشاء حساب جديد عبر `sginup.php`، ثم تسجيل الدخول عبر `login.php`.
- افتح `users.php` للتأكد من ظهور حالة المستخدم وقائمة الدردشات.

### 🛡️ ملاحظات الأمان
- كلمات المرور مشفّرة باستخدام `password_hash`.
- الحسابات القديمة (إن وجدت) يتم ترقيتها تلقائيًا عند أول تسجيل دخول.
- يفضّل استخدام HTTPS وتهيئة إعدادات السيرفر (إخفاء الأخطاء، قيود رفع الملفات).

---

## 🇬🇧 Overview
Godzilla Messages is a secure real-time chat platform built by **Mohannad Nabil Ahmed Mohammed Abdullh**.  
It delivers frictionless signup/login, profile image uploads, and live messaging with polished UI states.

### ✨ Features
- Fully English UI, LTR-friendly, easily themeable.
- Secure auth pipeline using `password_hash` with automatic upgrades for legacy `md5` entries.
- Realtime user list and chat feed refresh via AJAX (no full-page reloads).
- Dark mode toggle, animated background, responsive layout.
- Clean SQL structure (`users`, `messages`) without bundled personal data.

### ⚙️ Requirements & Setup
1. PHP 8+ environment with MySQL/MariaDB support (e.g., XAMPP, Laragon).
2. Import `chatapp.sql` to create the empty schema.
3. Update DB credentials inside `php/config.php` if needed.
4. Serve the project from your web root (`http://localhost/chatApp` or hosting path).

### 🧪 Quick Test
- Sign up via `sginup.php`, then log in through `login.php`.
- Open `users.php` to verify profile status, search, and chat list updates.

### 🛡️ Security Notes
- Passwords are hashed using `password_hash`.
- Legacy accounts automatically upgrade hashes on first login.
- For production deploys, enable HTTPS, hide PHP errors, and restrict upload types/sizes.

---

## 📄 ملكية / Ownership
جميع الحقوق محفوظة لـ **Mohannad Nabil Ahmed Mohammed Abdullh**.  
All rights reserved © Mohannad Nabil Ahmed Mohammed Abdullh.

