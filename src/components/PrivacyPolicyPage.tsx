import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SEO from "./SEO";
import { Shield, Lock, Eye, FileText, AlertCircle } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <>
      <SEO
        title="سياسة الخصوصية - اليوم ميديا"
        description="سياسة الخصوصية لموقع اليوم ميديا. تعرف على كيفية جمع واستخدام وحماية معلوماتك الشخصية"
        keywords="سياسة الخصوصية، حماية البيانات، الخصوصية، اليوم ميديا"
        canonicalUrl="https://todaymedia.net/privacy-policy"
      />
      <Header />

      <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 py-8 max-w-[85.375rem]">
          {/* Page Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-full">
                <Shield className="w-12 h-12 text-[#c90000]" />
              </div>
            </div>
            <h1 className="text-4xl mb-4 text-gray-900 dark:text-white">
              سياسة الخصوصية
            </h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              آخر تحديث: 27 أكتوبر 2025
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-6 text-right">
              <h2 className="text-2xl mb-4 text-gray-900 dark:text-white flex items-center justify-end gap-2">
                <span>مقدمة</span>
                <FileText className="w-6 h-6 text-[#c90000]" />
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  نحن في موقع "اليوم ميديا" (todaymedia.net) نقدر خصوصيتك ونلتزم بحماية معلوماتك الشخصية. توضح سياسة الخصوصية هذه كيفية جمع واستخدام وحماية ومشاركة معلوماتك عند استخدامك لموقعنا الإلكتروني.
                </p>
                <p>
                  باستخدامك لموقعنا، فإنك توافق على جمع واستخدام المعلومات وفقاً لهذه السياسة. إذا كنت لا توافق على هذه السياسة، يرجى عدم استخدام موقعنا.
                </p>
              </div>
            </div>

            {/* Information We Collect */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-6 text-right">
              <h2 className="text-2xl mb-4 text-gray-900 dark:text-white flex items-center justify-end gap-2">
                <span>المعلومات التي نجمعها</span>
                <Eye className="w-6 h-6 text-[#c90000]" />
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <div>
                  <h3 className="text-xl mb-2 text-gray-900 dark:text-white">
                    1. المعلومات التي تقدمها طوعاً
                  </h3>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>الاسم والبريد الإلكتروني عند الاتصال بنا</li>
                    <li>التعليقات والمشاركات على المقالات</li>
                    <li>الاشتراك في النشرة الإخبارية</li>
                    <li>أي معلومات أخرى تختار مشاركتها معنا</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl mb-2 text-gray-900 dark:text-white">
                    2. المعلومات التي نجمعها تلقائياً
                  </h3>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>عنوان IP الخاص بك</li>
                    <li>نوع المتصفح ونظام التشغيل</li>
                    <li>الصفحات التي تزورها على موقعنا</li>
                    <li>الوقت والتاريخ الذي قمت فيه بزيارة موقعنا</li>
                    <li>الموقع الذي أحالك إلى موقعنا</li>
                    <li>ملفات تعريف الارتباط (Cookies)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Information */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-6 text-right">
              <h2 className="text-2xl mb-4 text-gray-900 dark:text-white flex items-center justify-end gap-2">
                <span>كيفية استخدام المعلومات</span>
                <FileText className="w-6 h-6 text-[#c90000]" />
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>نستخدم المعلومات التي نجمعها للأغراض التالية:</p>
                <ul className="list-disc list-inside space-y-2 mr-4">
                  <li>تقديم وتحسين خدماتنا</li>
                  <li>الرد على استفساراتك وطلباتك</li>
                  <li>إرسال النشرات الإخبارية والتحديثات (في حال الاشتراك)</li>
                  <li>تحليل استخدام الموقع لتحسين المحتوى والأداء</li>
                  <li>حماية الموقع من الاحتيال والأنشطة غير المشروعة</li>
                  <li>الامتثال للالتزامات القانونية</li>
                  <li>عرض إعلانات مخصصة (عبر شركاء إعلانيين)</li>
                </ul>
              </div>
            </div>

            {/* Cookies */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-6 text-right">
              <h2 className="text-2xl mb-4 text-gray-900 dark:text-white flex items-center justify-end gap-2">
                <span>ملفات تعريف الارتباط (Cookies)</span>
                <Lock className="w-6 h-6 text-[#c90000]" />
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  نستخدم ملفات تعريف الارتباط لتحسين تجربة المستخدم. ملفات تعريف الارتباط هي ملفات نصية صغيرة يتم تخزينها على جهازك عند زيارة موقعنا.
                </p>
                <div>
                  <h3 className="text-xl mb-2 text-gray-900 dark:text-white">
                    أنواع ملفات تعريف الارتباط التي نستخدمها:
                  </h3>
                  <ul className="list-disc list-inside space-y-2 mr-4">
                    <li>
                      <strong>ملفات تعريف الارتباط الضرورية:</strong> ضرورية لتشغيل الموقع
                    </li>
                    <li>
                      <strong>ملفات تعريف الارتباط التحليلية:</strong> تساعدنا على فهم كيفية استخدام الزوار للموقع
                    </li>
                    <li>
                      <strong>ملفات تعريف الارتباط الإعلانية:</strong> تُستخدم لعرض إعلانات ذات صلة
                    </li>
                    <li>
                      <strong>ملفات تعريف الارتباط الوظيفية:</strong> تذكر تفضيلاتك (مثل اللغة والموضوع)
                    </li>
                  </ul>
                </div>
                <p>
                  يمكنك التحكم في ملفات تعريف الارتباط وحذفها من خلال إعدادات متصفحك. ومع ذلك، قد يؤثر هذا على وظائف معينة من الموقع.
                </p>
              </div>
            </div>

            {/* Sharing Information */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-6 text-right">
              <h2 className="text-2xl mb-4 text-gray-900 dark:text-white flex items-center justify-end gap-2">
                <span>مشاركة المعلومات</span>
                <AlertCircle className="w-6 h-6 text-[#c90000]" />
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  نحن لا نبيع أو نؤجر معلوماتك الشخصية لأطراف ثالثة. قد نشارك معلوماتك في الحالات التالية:
                </p>
                <ul className="list-disc list-inside space-y-2 mr-4">
                  <li>
                    <strong>مقدمي الخدمات:</strong> قد نشارك المعلومات مع مقدمي خدمات موثوقين يساعدوننا في تشغيل موقعنا (مثل خدمات الاستضافة، التحليلات، البريد الإلكتروني)
                  </li>
                  <li>
                    <strong>الامتثال القانوني:</strong> قد نكشف عن المعلومات إذا كان ذلك مطلوباً بموجب القانون أو استجابة لطلبات قانونية صالحة
                  </li>
                  <li>
                    <strong>حماية الحقوق:</strong> قد نكشف عن المعلومات لحماية حقوقنا أو ممتلكاتنا أو سلامة مستخدمينا أو الآخرين
                  </li>
                  <li>
                    <strong>الشركاء الإعلانيون:</strong> قد نستخدم شبكات إعلانية تابعة لأطراف ثالثة لعرض إعلانات على موقعنا
                  </li>
                </ul>
              </div>
            </div>

            {/* Data Security */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-6 text-right">
              <h2 className="text-2xl mb-4 text-gray-900 dark:text-white flex items-center justify-end gap-2">
                <span>أمان البيانات</span>
                <Lock className="w-6 h-6 text-[#c90000]" />
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  نتخذ تدابير أمنية معقولة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التغيير أو الإفشاء أو التدمير. ومع ذلك، لا يمكن ضمان أمان نقل البيانات عبر الإنترنت بنسبة 100٪.
                </p>
                <p>
                  نستخدم تشفير SSL/TLS لحماية المعلومات الحساسة المرسلة عبر الإنترنت. كما نحد من الوصول إلى معلوماتك الشخصية للموظفين الذين يحتاجون إلى معرفتها لأداء وظائفهم.
                </p>
              </div>
            </div>

            {/* Your Rights */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-6 text-right">
              <h2 className="text-2xl mb-4 text-gray-900 dark:text-white flex items-center justify-end gap-2">
                <span>حقوقك</span>
                <Shield className="w-6 h-6 text-[#c90000]" />
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>لديك الحقوق التالية فيما يتعلق بمعلوماتك الشخصية:</p>
                <ul className="list-disc list-inside space-y-2 mr-4">
                  <li>
                    <strong>الوصول:</strong> يحق لك طلب نسخة من المعلومات الشخصية التي نحتفظ بها عنك
                  </li>
                  <li>
                    <strong>التصحيح:</strong> يحق لك طلب تصحيح أي معلومات غير دقيقة
                  </li>
                  <li>
                    <strong>الحذف:</strong> يحق لك طلب حذف معلوماتك الشخصية
                  </li>
                  <li>
                    <strong>الاعتراض:</strong> يحق لك الاعتراض على معالجة معلوماتك الشخصية
                  </li>
                  <li>
                    <strong>إلغاء الاشتراك:</strong> يمكنك إلغاء الاشتراك في النشرات الإخبارية في أي وقت
                  </li>
                </ul>
                <p>
                  لممارسة أي من هذه الحقوق، يرجى الاتصال بنا عبر البريد الإلكتروني: privacy@todaymedia.net
                </p>
              </div>
            </div>

            {/* Third Party Links */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-6 text-right">
              <h2 className="text-2xl mb-4 text-gray-900 dark:text-white">
                روابط لمواقع الطرف الثالث
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  قد يحتوي موقعنا على روابط لمواقع ويب تابعة لأطراف ثالثة. نحن لسنا مسؤولين عن ممارسات الخصوصية أو محتوى هذه المواقع. ننصحك بقراءة سياسات الخصوصية الخاصة بأي موقع تابع لطرف ثالث تزوره.
                </p>
              </div>
            </div>

            {/* Children's Privacy */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-6 text-right">
              <h2 className="text-2xl mb-4 text-gray-900 dark:text-white">
                خصوصية الأطفال
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  موقعنا غير موجه للأطفال دون سن 13 عاماً. نحن لا نجمع عن قصد معلومات شخصية من الأطفال دون سن 13 عاماً. إذا كنت والداً أو وصياً وكنت تعلم أن طفلك قد قدم لنا معلومات شخصية، يرجى الاتصال بنا.
                </p>
              </div>
            </div>

            {/* Changes to Privacy Policy */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-6 text-right">
              <h2 className="text-2xl mb-4 text-gray-900 dark:text-white">
                التغييرات على سياسة الخصوصية
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سنقوم بإخطارك بأي تغييرات عن طريق نشر سياسة الخصوصية الجديدة على هذه الصفحة وتحديث تاريخ "آخر تحديث" في أعلى الصفحة.
                </p>
                <p>
                  يُنصح بمراجعة سياسة الخصوصية هذه بشكل دوري للتعرف على أي تغييرات. تصبح التغييرات على سياسة الخصوصية سارية المفعول عند نشرها على هذه الصفحة.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-6 text-right">
              <h2 className="text-2xl mb-4 text-gray-900 dark:text-white">
                اتصل بنا
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  إذا كان لديك أي أسئلة أو استفسارات حول سياسة الخصوصية هذه، يرجى الاتصال بنا:
                </p>
                <ul className="space-y-2 mr-4">
                  <li>
                    <strong>البريد الإلكتروني:</strong> privacy@todaymedia.net
                  </li>
                  <li>
                    <strong>البريد الإلكتروني العام:</strong> info@todaymedia.net
                  </li>
                  <li>
                    <strong>العنوان:</strong> Arab Media House, London, United Kingdom
                  </li>
                </ul>
              </div>
            </div>

            {/* Alert Box */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 p-6 rounded-lg text-right">
              <div className="flex items-start justify-end gap-3">
                <div className="flex-1">
                  <h3 className="text-lg mb-2 text-gray-900 dark:text-white">
                    ملاحظة مهمة
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    باستخدامك المستمر لموقعنا بعد نشر أي تغييرات على سياسة الخصوصية، فإنك توافق على السياسة المعدلة. إذا كنت لا توافق على أي من الشروط، يرجى التوقف عن استخدام موقعنا.
                  </p>
                </div>
                <AlertCircle className="w-6 h-6 text-yellow-600 dark:text-yellow-500 flex-shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
