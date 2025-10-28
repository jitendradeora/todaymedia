import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SEO from "./SEO";
import { Users, Target, Eye, Award, Globe, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <SEO
        title="من نحن - اليوم ميديا"
        description="تعرف على موقع اليوم ميديا، رؤيتنا، رسالتنا، وقيمنا. نحن نلتزم بتقديم أخبار موثوقة ودقيقة للقراء العرب في جميع أنحاء العالم"
        keywords="من نحن، عن الموقع، اليوم ميديا، رؤيتنا، رسالتنا"
        canonicalUrl="https://todaymedia.net/about"
      />
      <Header />

      <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 py-8 max-w-[85.375rem]">
          {/* Page Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-full">
                <Users className="w-12 h-12 text-[#c90000]" />
              </div>
            </div>
            <h1 className="text-4xl mb-4 text-gray-900 dark:text-white">
              من نحن
            </h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              موقع إخباري عربي شامل يقدم آخر الأخبار والتحليلات من جميع أنحاء العالم
            </p>
          </div>

          {/* Introduction */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md text-right">
              <h2 className="text-2xl mb-4 text-gray-900 dark:text-white">
                نبذة عن اليوم ميديا
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  اليوم ميديا هو موقع إخباري عربي رائد يقدم تغطية شاملة للأحداث المحلية والعالمية على مدار الساعة. منذ انطلاقتنا، كنا ملتزمين بتوفير محتوى إخباري موثوق ودقيق لملايين القراء العرب حول العالم.
                </p>
                <p>
                  نفخر بكوننا جزءاً من "Arab Media House" في لندن، مما يمنحنا منظوراً عالمياً فريداً ومصداقية دولية. نسعى دائماً لتقديم الأخبار بموضوعية ومهنية عالية، مع الحفاظ على معايير الصحافة الأخلاقية.
                </p>
                <p>
                  يغطي موقعنا مجموعة واسعة من المواضيع بما في ذلك السياسة، الاقتصاد، التكنولوجيا، الرياضة، الثقافة، والترفيه. نحرص على تقديم محتوى متنوع يلبي اهتمامات جميع قرائنا.
                </p>
              </div>
            </div>
          </div>

          {/* Vision and Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-6xl mx-auto">
            {/* Vision */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md text-right">
              <div className="flex justify-end mb-4">
                <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-full">
                  <Eye className="w-8 h-8 text-[#c90000]" />
                </div>
              </div>
              <h2 className="text-2xl mb-4 text-gray-900 dark:text-white">
                رؤيتنا
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                أن نكون المنصة الإخبارية العربية الأولى والأكثر موثوقية، حيث يلجأ القراء للحصول على أخبار دقيقة وشاملة وتحليلات عميقة للأحداث المحلية والعالمية. نسعى لبناء مجتمع قراء واعٍ ومطّلع على ما يحدث حولهم في العالم.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md text-right">
              <div className="flex justify-end mb-4">
                <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-full">
                  <Target className="w-8 h-8 text-[#c90000]" />
                </div>
              </div>
              <h2 className="text-2xl mb-4 text-gray-900 dark:text-white">
                رسالتنا
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                تقديم محتوى إخباري عالي الجودة باللغة العربية، مع الالتزام بالموضوعية والمصداقية والمهنية. نعمل على تمكين قرائنا بالمعلومات الصحيحة التي تساعدهم على فهم العالم من حولهم واتخاذ قرارات مستنيرة.
              </p>
            </div>
          </div>

          {/* Our Values */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md text-right">
              <h2 className="text-2xl mb-6 text-gray-900 dark:text-white text-center">
                قيمنا ومبادئنا
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Value 1 */}
                <div className="text-right">
                  <div className="flex justify-end mb-3">
                    <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-full">
                      <Award className="w-6 h-6 text-[#c90000]" />
                    </div>
                  </div>
                  <h3 className="text-xl mb-2 text-gray-900 dark:text-white">
                    المصداقية
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    نلتزم بتقديم أخبار دقيقة ومؤكدة من مصادر موثوقة، ونتحقق من جميع المعلومات قبل نشرها.
                  </p>
                </div>

                {/* Value 2 */}
                <div className="text-right">
                  <div className="flex justify-end mb-3">
                    <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-full">
                      <Eye className="w-6 h-6 text-[#c90000]" />
                    </div>
                  </div>
                  <h3 className="text-xl mb-2 text-gray-900 dark:text-white">
                    الموضوعية
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    نقدم الأخبار والتحليلات بحيادية تامة، دون تحيز أو تأثر بأجندات سياسية أو اقتصادية.
                  </p>
                </div>

                {/* Value 3 */}
                <div className="text-right">
                  <div className="flex justify-end mb-3">
                    <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-full">
                      <Globe className="w-6 h-6 text-[#c90000]" />
                    </div>
                  </div>
                  <h3 className="text-xl mb-2 text-gray-900 dark:text-white">
                    الشمولية
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    نغطي جميع جوانب الأخبار من مختلف المناطق والقطاعات لتقديم صورة كاملة ومتوازنة.
                  </p>
                </div>

                {/* Value 4 */}
                <div className="text-right">
                  <div className="flex justify-end mb-3">
                    <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-full">
                      <Target className="w-6 h-6 text-[#c90000]" />
                    </div>
                  </div>
                  <h3 className="text-xl mb-2 text-gray-900 dark:text-white">
                    المهنية
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    نتبع أعلى المعايير المهنية في الصحافة، مع احترام أخلاقيات المهنة والخصوصية.
                  </p>
                </div>

                {/* Value 5 */}
                <div className="text-right">
                  <div className="flex justify-end mb-3">
                    <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-full">
                      <Users className="w-6 h-6 text-[#c90000]" />
                    </div>
                  </div>
                  <h3 className="text-xl mb-2 text-gray-900 dark:text-white">
                    التفاعل مع الجمهور
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    نقدّر آراء قرائنا ونشجع التفاعل البناء والحوار الهادف حول القضايا المهمة.
                  </p>
                </div>

                {/* Value 6 */}
                <div className="text-right">
                  <div className="flex justify-end mb-3">
                    <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-full">
                      <Heart className="w-6 h-6 text-[#c90000]" />
                    </div>
                  </div>
                  <h3 className="text-xl mb-2 text-gray-900 dark:text-white">
                    المسؤولية الاجتماعية
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    نؤمن بدورنا في خدمة المجتمع وتعزيز الوعي بالقضايا المهمة التي تؤثر على حياة الناس.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What We Cover */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md text-right">
              <h2 className="text-2xl mb-6 text-gray-900 dark:text-white">
                ما نغطيه
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 dark:text-gray-300">
                <div>
                  <h3 className="text-lg mb-2 text-gray-900 dark:text-white">
                    الأخبار المحلية والعالمية
                  </h3>
                  <p className="text-sm">
                    تغطية شاملة للأحداث في الشرق الأوسط والعالم، مع تركيز خاص على القضايا التي تهم القارئ العربي.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg mb-2 text-gray-900 dark:text-white">
                    الاقتصاد والأعمال
                  </h3>
                  <p className="text-sm">
                    تحليلات اقتصادية عميقة، أخبار الأسواق المالية، وتطورات قطاع الأعمال محلياً وعالمياً.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg mb-2 text-gray-900 dark:text-white">
                    التكنولوجيا والابتكار
                  </h3>
                  <p className="text-sm">
                    آخر الابتكارات التقنية، مراجعات للمنتجات، والاتجاهات الحديثة في عالم التكنولوجيا.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg mb-2 text-gray-900 dark:text-white">
                    الرياضة
                  </h3>
                  <p className="text-sm">
                    تغطية حصرية للأحداث الرياضية المحلية والعالمية، مع تحليلات ومقابلات مع النجوم.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg mb-2 text-gray-900 dark:text-white">
                    الثقافة والفنون
                  </h3>
                  <p className="text-sm">
                    أخبار الفن والثقافة، مراجعات للأعمال الفنية، ومقابلات مع الفنانين والمبدعين.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg mb-2 text-gray-900 dark:text-white">
                    الصحة وأسلوب الحياة
                  </h3>
                  <p className="text-sm">
                    نصائح صحية، أخبار الطب والعلوم، وموضوعات تتعلق بتحسين جودة الحياة.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Our Team */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md text-right">
              <h2 className="text-2xl mb-4 text-gray-900 dark:text-white">
                فريقنا
              </h2>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  يتكون فريق اليوم ميديا من مجموعة من الصحفيين والمحررين والمحللين المحترفين الذين يتمتعون بخبرة واسعة في مجال الإعلام والصحافة. نحن فريق متنوع من مختلف الدول العربية، مما يمنحنا فهماً عميقاً للقضايا التي تهم قراءنا في جميع أنحاء العالم العربي.
                </p>
                <p>
                  كل عضو في فريقنا ملتزم بأعلى معايير الصحافة الأخلاقية، ونعمل معاً لضمان تقديم محتوى موثوق ودقيق وجذاب. نحن نستثمر في تطوير مهارات فريقنا باستمرار لضمان مواكبتنا لأحدث التطورات في عالم الصحافة الرقمية.
                </p>
              </div>
            </div>
          </div>

          {/* Join Us */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-[#c90000] to-[#a00000] p-8 rounded-lg shadow-md text-center text-white">
              <h2 className="text-2xl mb-4">
                كن جزءاً من مجتمعنا
              </h2>
              <p className="mb-6 leading-relaxed">
                تابعنا على وسائل التواصل الاجتماعي وكن أول من يعرف بآخر الأخبار والتطورات. نحن نقدر تفاعلك وآرائك!
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="/contact"
                  className="bg-white text-[#c90000] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-block"
                >
                  اتصل بنا
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
