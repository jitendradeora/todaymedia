export interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  categorySlug: string;
  date: string;
  author: string;
  readTime: string;
}

export const articles: Article[] = [
  {
    id: 1,
    title:
      "قمة عربية تاريخية تناقش التحديات الإقليمية والتعاون الاقتصادي",
    excerpt:
      "اجتمع القادة العرب في قمة استثنائية لمناقشة أهم القضايا الإقليمية وسبل تعزيز التعاون الاقتصادي والسياسي",
    content: `عقدت القمة العربية الاستثنائية في العاصمة اليوم، حيث اجتمع قادة الدول العربية لمناقشة مجموعة من القضايا الملحة التي تواجه المنطقة.

وأكد المشاركون في القمة على أهمية تعزيز التعاون العربي المشترك في مختلف المجالات، وخاصة في المجالات الاقتصادية والتجارية.

وتناولت القمة عددًا من الملفات الساخنة، بما في ذلك الأمن الغذائي، والتحديات البيئية، والتطورات التكنولوجية، بالإضافة إلى القضايا السياسية الإقليمية.

وأشار المراقبون إلى أن هذه القمة تأتي في وقت حرج تشهد فيه المنطقة تحولات كبرى، مما يستدعي موقفًا عربيًا موحدًا وفعالًا.

كما تم الإعلان عن عدة مبادرات جديدة تهدف إلى تعزيز التكامل الاقتصادي بين الدول العربية وتحقيق التنمية المستدامة.`,
    image:
      "https://images.unsplash.com/photo-1672762232115-0b8b1adb8509?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWRkbGUlMjBlYXN0JTIwbmV3c3xlbnwxfHx8fDE3NjEyMzY2Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "الشرق الأوسط",
    categorySlug: "middle-east",
    date: "منذ ساعتين",
    author: "محمد الأحمد",
    readTime: "5 دقائق",
  },
  {
    id: 2,
    title:
      "صندوق النقد الدولي يتوقع نموًا اقتصاديًا قويًا في الشرق الأوسط",
    excerpt:
      "أشار تقرير حديث إلى أن اقتصادات المنطقة تشهد تعافيًا ملحوظًا مع توقعات بنمو يتجاوز 4% هذا العام",
    content: `أصدر صندوق النقد الدولي تقريرًا جديدًا يتوقع فيه نموًا اقتصاديًا قويًا في منطقة الشرق الأوسط وشمال إفريقيا خلال العام الجاري.

ووفقًا للتقرير، من المتوقع أن تحقق المنطقة معدل نمو يتجاوز 4%، مدفوعًا بالإصلاحات الاقتصادية والاستثمارات في البنية التحتية.

وأشاد الصندوق بالجهود المبذولة من قبل عدة دول في تنويع اقتصاداتها والحد من الاعتماد على النفط.

كما أكد التقرير على أهمية مواصلة الإصلاحات الهيكلية وتحسين مناخ الاستثمار لتحقيق نمو مستدام.

وحذر الخبراء من بعض التحديات التي قد تواجه المنطقة، بما في ذلك التقلبات في أسعار النفط والتوترات الجيوسياسية.`,
    image:
      "https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzYxMjA0NTE5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "اقتصاد",
    categorySlug: "economy",
    date: "منذ 3 ساعات",
    author: "سارة الكريم",
    readTime: "4 دقائق",
  },
  {
    id: 3,
    title:
      "المنتخب الوطني يحقق فوزًا تاريخيًا في التصفيات الآسيوية",
    excerpt:
      "تغلب المنتخب على منافسه بنتيجة 3-1 في مباراة مثيرة ضمن تصفيات كأس العالم",
    content: `حقق المنتخب الوطني فوزًا مهمًا على نظيره الآسيوي بنتيجة 3-1 في مباراة مثيرة أقيمت مساء اليوم ضمن تصفيات كأس العالم.

وجاءت أهداف المنتخب عن طريق اللاعبين أحمد وخالد ومحمود، في أداء رائع نال إشادة الجماهير والمحللين الرياضيين.

وبهذا الفوز، يعزز المنتخب موقعه في صدارة المجموعة ويقترب خطوة نحو التأهل لنهائيات كأس العالم.

وأشاد المدرب الوطني بأداء اللاعبين وروحهم القتالية، مؤكدًا أن الفريق قادر على المنافسة على أعلى المستويات.

وعلق المشجعون على وسائل التواصل الاجتماعي بحماس كبير، معبرين عن فخرهم بإنجاز المنتخب.`,
    image:
      "https://images.unsplash.com/photo-1668068873075-cf3e9925eae4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBmb290YmFsbHxlbnwxfHx8fDE3NjEyMzY2Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "رياضة",
    categorySlug: "sports",
    date: "منذ ساعة",
    author: "عمر السعيد",
    readTime: "3 دقائق",
  },
  {
    id: 4,
    title:
      "شركة تقنية عربية تطلق تطبيقًا ذكيًا يستخدم الذكاء الاصطناعي",
    excerpt:
      "التطبيق الجديد يقدم حلولاً مبتكرة في مجال الخدمات الرقمية باستخدام أحدث تقنيات الذكاء الاصطناعي",
    content: `أعلنت شركة تقنية عربية رائدة عن إطلاق تطبيق ذكي جديد يعتمد على تقنيات الذكاء الاصطناعي المتقدمة.

ويهدف التطبيق إلى تقديم حلول مبتكرة في مجالات متعددة، بما في ذلك خدمة العملاء، والترجمة الفورية، والمساعدة الشخصية.

وأكد مسؤولو الشركة أن التطبيق تم تطويره بالكامل من قبل فريق عربي، مما يعكس القدرات التقنية المتنامية في المنطقة.

ويتميز التطبيق بواجهة مستخدم بسيطة وسهلة الاستخدام، مع دعم كامل للغة العربية.

وقد لقي الإطلاق استحسانًا كبيرًا من قبل الخبراء التقنيين، الذين أشادوا بالإمكانيات الواعدة للتطبيق.`,
    image:
      "https://images.unsplash.com/photo-1568952433726-3896e3881c65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbnxlbnwxfHx8fDE3NjEyMzQ5MjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "تكنولوجيا",
    categorySlug: "technology",
    date: "منذ 4 ساعات",
    author: "نور الدين",
    readTime: "4 دقائق",
  },
  {
    id: 5,
    title:
      "تحليل: التحولات الاقتصادية في المنطقة وتأثيرها على المستقبل",
    excerpt:
      "قراءة معمقة في التطورات الاقتصادية الأخيرة وما تحمله من فرص وتحديات للمنطقة العربية",
    content: `تشهد المنطقة العربية تحولات اقتصادية جذرية تعيد تشكيل المشهد الإقليمي بطرق غير مسبوقة.

ويرى المحللون أن هذه التحولات تنبع من عوامل متعددة، بما في ذلك التنويع الاقتصادي والاستثمار في القطاعات غير النفطية.

وتشير البيانات إلى أن الدول التي نجحت في تنويع اقتصاداتها تحقق نموًا مستدامًا وتوفر فرص عمل للشباب.

كما أن التكنولوجيا تلعب دورًا محوريًا في هذه التحولات، مع تزايد الاستثمارات في الذكاء الاصطناعي والتحول الرقمي.

ومع ذلك، تبقى هناك تحديات يجب معالجتها، بما في ذلك البطالة وتطوير المهارات وجذب الاستثمارات الأجنبية.`,
    image:
      "https://images.unsplash.com/photo-1738739905706-2cc26e57f67d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdzJTIwYW5hbHlzaXN8ZW58MXx8fHwxNzYxMjQ2NjgyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "تحليلات",
    categorySlug: "analysis",
    date: "منذ 5 ساعات",
    author: "د. خالد المنصور",
    readTime: "6 دقائق",
  },
  {
    id: 6,
    title: "مهرجان سينمائي دولي يعرض أفلامًا عربية مميزة",
    excerpt:
      "المهرجان يستضيف عروضًا أولى لأعمال سينمائية عربية حصدت إشادات واسعة من النقاد",
    content: `انطلقت فعاليات المهرجان السينمائي الدولي بحضور نخبة من صناع السينما العرب والعالميين.

ويعرض المهرجان مجموعة متنوعة من الأفلام العربية التي تتناول قضايا معاصرة بطرق فنية مبتكرة.

وأكد منظمو المهرجان أن الهدف هو دعم السينما العربية وتعزيز حضورها على الساحة الدولية.

كما يتضمن المهرجان ورش عمل ونقاشات مع مخرجين وممثلين من مختلف أنحاء العالم.

وقد شهدت العروض إقبالًا كبيرًا من الجمهور والنقاد، الذين أشادوا بجودة الأعمال المعروضة.`,
    image:
      "https://images.unsplash.com/photo-1760582912320-79fcbc9f309b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YXJpZXR5JTIwZW50ZXJ0YWlubWVudHxlbnwxfHx8fDE3NjEyNDY2ODN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "منوعات",
    categorySlug: "variety",
    date: "منذ 6 ساعات",
    author: "ليلى حسن",
    readTime: "3 دقائق",
  },
  {
    id: 7,
    title: "رأي: التعليم الرقمي وضرورة التكيف مع العصر الحديث",
    excerpt:
      "كيف يمكن للأنظمة التعليمية العربية الاستفادة من التقنيات الحديثة لتطوير جودة التعليم",
    content: `أصبح التعليم الرقمي ضرورة ملحة في عالمنا المعاصر، وليس مجرد خيار إضافي.

ونرى أن اأنظمة التعليمية العربية بحاجة إلى تبني استراتيجيات جديدة تواكب التطورات التكنولوجية.

فالتعليم عن بعد والمنصات الإلكترونية أثبتت فعاليتها في توفير التعليم الجيد للجميع بغض النظر عن الموقع الجغرافي.

ومع ذل، يجب علينا عدم إغفال أهمية التفاعل البشري والتعليم التقليدي، بل دمجهما بطريقة متوازنة.

إن الاستثمار في تدريب المعلمين على استخدام التقنيات الحديثة هو المفتاح لنجاح أي تحول رقمي في التعليم.`,
    image:
      "https://images.unsplash.com/photo-1759593047650-60328e9356ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGluaW9uJTIwZGlzY3Vzc2lvbnxlbnwxfHx8fDE3NjEyNDY2ODN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "آراء",
    categorySlug: "opinions",
    date: "منذ 7 ساعات",
    author: "د. أحمد السالم",
    readTime: "5 دقائق",
  },
  {
    id: 8,
    title: "فيديو: جولة في أكبر معرض تكنولوجي بالمنطقة",
    excerpt:
      "تقرير مصور يستعرض أبرز الابتكارات التقنية المعروضة في المعرض السنوي",
    content: `شهد المعرض الكنولوجي السنوي إقبالًا كبيرًا من المهتمين بالتقنية والابتكار.

وعرض المعرض أحدث الابتكارات في مجالات الذكاء الاصطناعي، والروبوتات، وإنترنت الأشياء.

وشارك في المعرض أكثر من 200 شركة من مختلف أنحا العالم، قدمت منتجاتها وخدماتها المبتكرة.

كما تضمن المعرض ورش عمل ومحاضرات تقنية قدمها خبراء في مختلف المجالات.

ويمكن مشاهدة التقرير المصور الكامل عبر موقعنا الإلكتروني، حيث نستعرض أبرز الابتكارات بالتفصيل.`,
    image:
      "https://images.unsplash.com/photo-1497015289639-54688650d173?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzYxMjQwNjc5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "فيديو",
    categorySlug: "video",
    date: "منذ 8 ساعات",
    author: "فريق التحرير",
    readTime: "4 دقائق",
  },
  {
    id: 9,
    title: "عاجل: اتفاقية تاريخية بين دول مجلس التعاون الخليجي",
    excerpt:
      "توقيع اتفاقية شاملة تهدف إلى تعزيز التعاون الاقتصادي والأمني بين دول المجلس",
    content: `وقعت دول مجلس التعاون الخليجي اليوم اتفاقية تاريخية تهدف إلى تعزيز التعاون في مختلف المجالات.

وتشمل الاتفاقية بنودًا تتعلق بالتكامل الاقتصادي، والتعاون الأمني، والتنسيق في السياسات الخارجية.

وأكد القادة المشاركون أن هذه الاتفاقية تمثل خطوة مهمة نحو تعزيز الوحدة الخليجية.

كما تتضمن الاتفاقية آليات لتسهيل حركة التجارة والاستثمار بين دول المجلس.

وتوقع المحللون أن تكون لهذه الاتفاقية آثار إيجابية على اقتصادات دول المنطقة.`,
    image:
      "https://images.unsplash.com/photo-1672762232115-0b8b1adb8509?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWRkbGUlMjBlYXN0JTIwbmV3c3xlbnwxfHx8fDE3NjEyMzY2Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "أخبار",
    categorySlug: "news",
    date: "منذ 30 دقيقة",
    author: "ياسر العتيبي",
    readTime: "4 دقائق",
  },
  {
    id: 10,
    title: "أخبار العالم: قمة دولية تناقش التحديات المناخية",
    excerpt:
      "زعماء العالم يجتمعون لمناقشة التغير المناخي واتخاذ إجراءات عاجلة",
    image:
      "https://images.unsplash.com/photo-1596339502177-8de71f7cacfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMG5ld3MlMjBpbnRlcm5hdGlvbmFsfGVufDF8fHx8MTc2MTIyNjc0Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "أخبار العالم",
    categorySlug: "world-news",
    content: `عقدت اليوم قمة دولية بمشاركة قادة من أكثر من 100 دولة لمناقشة قضية التغير المناخي.

وأكد المشاركون على ضرورة اتخاذ إجراءات عاجلة للحد من الانبعاثات الكربونية.

وتم الإعلان عن التزامات جديدة بتقليل الاعتماد على الوقود الأحفوري.

كما تم تخصيص تمويلات ضخمة لدعم الدول النامية في مواجهة آثار التغير المناخي.

وأشاد الخبراء بالتقدم الذي تم إحرازه في المفاوضات.`,
    date: "منذ ساعة",
    author: "محمد الأحمد",
    readTime: "5 دقائق",
  },
  {
    id: 11,
    title:
      "الدولي: اتفاق تجاري جديد بين القوى الاقتصادية الكبرى",
    excerpt:
      "توقيع اتفاقية تجارية تاريخية تهدف إلى تعزيز التبادل التجاري العالمي",
    image:
      "https://images.unsplash.com/photo-1600633349333-eebb43d01e23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwcG9saXRpY3N8ZW58MXx8fHwxNzYxMjQ3ODQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "الدولي",
    categorySlug: "international",
    content: `وقعت القوى الاقتصادية الكبرى اتفاقية تجرية جديدة تهدف إلى تسهيل حركة التجارة العالمية.

وتتضمن الاتفاقية إلغاء العديد من الحواجز الجمركية وتبسيط الإجراءات التجارية.

وأكد المسؤولون أن الاتفاق سيعود بالنفع على جميع الأطراف المعنية.

كما يتوقع أن يؤدي إلى خلق ملايين فرص العمل الجديدة.

وأشاد الاقتصاديون بهذه الخطوة ووصفوها بأنها تاريخية.`,
    date: "منذ ساعتين",
    author: "سارة الكريم",
    readTime: "4 دقائق",
  },
  {
    id: 12,
    title: "صحة: دراسة جديدة تكشف أسرار طول العمر",
    excerpt:
      "باحثون يحددون العوامل الرئيسية التي تساهم في العيش حياة أطول وأكثر صحة",
    image:
      "https://images.unsplash.com/photo-1535914254981-b5012eebbd15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjB3ZWxsbmVzc3xlbnwxfHx8fDE3NjExNTkwNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "صحة",
    categorySlug: "health",
    content: `كشفت دراسة علمية حديثة عن العوامل الرئيسية التي تساهم في طول العمر.

وأشار الباحثون إلى أهمية النظام الغذائي المتوازن والنشاط البدني المنتظم.

كما أكدوا على دور العلاقات الاجتماعية القوية في تحسين الصحة النفسية والجسدية.

وأظهرت الدراسة أن الأشخاص الذين يتبعون أسلوب حياة صحي يعيشون أطول بعشر سنوات في المتوسط.

ونصح الخبراء بضرورة الابتعاد عن التدخين وتجنب التوتر المفرط.`,
    date: "منذ 3 ساعات",
    author: "د. فاطمة العلي",
    readTime: "5 دقائق",
  },
  {
    id: 13,
    title: "ثقافة: معرض للفن الإسلامي يجذب آلاف الزوار",
    excerpt:
      "افتتاح معرض استثنائي يعرض روائع الفن الإسلامي عبر العصور",
    image:
      "https://images.unsplash.com/photo-1621760681857-215258afbbee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWx0dXJlJTIwYXJ0fGVufDF8fHx8MTc2MTI0NzYxNHww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "ثقافة",
    categorySlug: "culture",
    content: `افتتح معرض للفن الإسلامي في العاصمة بحضور جمع غفير من المهتمين بالفن والثقافة.

ويعرض المعرض مجموعة نادرة من التحف والمخطوطات الإسلامية التاريخية.

وأكد منظمو المعرض أن الهدف هو تعريف الأجيال الجديدة بالتراث الإسلامي الغني.

كما يتضمن المعرض ورش عمل تعليمية للزوار من جميع الأعمار.

وقد شهد المعرض إقبالاً كبيراً منذ افتتاحه قبل أسبوع.`,
    date: "منذ 4 ساعات",
    author: "ليلى حسن",
    readTime: "4 دقائق",
  },
  {
    id: 14,
    title: "الرياضة: المنتخب الوطني يتأهل للنهائيات بفوز ساحق",
    excerpt:
      "انتصار كبير للمنتخب الوطني يضمن التأهل لنهائيات البطولة القارية",
    image:
      "https://images.unsplash.com/photo-1693683223438-7da7c75edd91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBmb290YmFsbHxlbnwxfHx8fDE3NjEzNzAwMjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "رياضة",
    categorySlug: "sports",
    content: `حقق المنتخب الوطني فوزًا ساحقًا بنتيجة 4-1 على المنتخب الضيف.

وبهذا الفوز، يضمن المنتخب الوطني تأهله للنهائيات القارية للمرة الأولى منذ خمس سنوات.

وأشاد المدرب بأداء اللاعبين ووصفه بأنه احترافي ومنظم.

كما أعرب الجماهير عن فرحتهم الكبيرة بهذا الإنجاز التاريخي.

ويستعد الفريق الآن لمواجهة أصعب في المراحل المقبلة.`,
    date: "منذ 5 ساعات",
    author: "عمر السالم",
    readTime: "3 دقائق",
  },
  {
    id: 15,
    title:
      "اقتصاد: ارتفاع مؤشرات البورصة وتحسن أداء الأسواق المحلية",
    excerpt:
      "تسجل الأسواق المالية ارتفاعًا ملحوظًا في التداولات اليومية",
    image:
      "https://images.unsplash.com/photo-1560789299-12a60c2b7baa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGVjb25vbXl8ZW58MXx8fHwxNzYxMjkyODk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "اقتصاد",
    categorySlug: "economy",
    content: `شهدت الأسواق المالية المحلية ارتفاعًا ملحوظًا خلال جلسة التداول اليوم.

وأغلق المؤشر الرئيسي على ارتفاع بنسبة 2.5% مقارنة بإغلاق الأمس.

وأرجع المحللون هذا الارتفاع إلى نتائج مالية إيجابية لعدة شركات كبرى.

كما ساهمت التوقعات الاقتصادية المتفائلة في دعم معنويات المستثمرين.

ويتوقع الخبراء استمرار هذا الأداء الإيجابي خلال الأسابيع المقبلة.`,
    date: "منذ 6 ساعات",
    author: "سارة الكريم",
    readTime: "4 دقائق",
  },
  {
    id: 16,
    title: "تكنولوجيا: إطلاق تطبيق ذكي جديد للتعليم عن بعد",
    excerpt:
      "شركة ناشئة تطلق منصة تعليمية تعتمد على الذكاء الاصطناعي",
    image:
      "https://images.unsplash.com/photo-1599081595468-de614fc93694?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBsZWFybmluZ3xlbnwxfHx8fDE3NjEzNzAwMjh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "تكنولوجيا",
    categorySlug: "technology",
    content: `أطلقت شركة تقنية ناشئة اليوم تطبيقًا جديدًا للتعليم عن بعد.

ويعتمد التطبيق على تقنيات الذكاء الاصطناعي لتخصيص المحتوى التعليمي.

وأكد المطورون أن التطبيق يوفر تجربة تعليمية تفاعلية ومتطورة.

كما يتيح التطبيق للمعلمين متابعة تقدم الطلاب بشكل فوري.

وقد حصل التطبيق على تمويل كبير من مستثمرين محليين ودوليين.`,
    date: "منذ 7 ساعات",
    author: "أحمد الزهراني",
    readTime: "5 دقائق",
  },
  {
    id: 17,
    title: "منوعات: مهرجان فني يحتفي بالتراث المحلي",
    excerpt:
      "انطلاق فعاليات مهرجان سنوي يعرض الحرف التقليدية والفنون الشعبية",
    image:
      "https://images.unsplash.com/photo-1621760681857-215258afbbee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWx0dXJlJTIwYXJ0fGVufDF8fHx8MTc2MTI0NzYxNHww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "منوعات",
    categorySlug: "variety",
    content: `انطلقت اليوم فعاليات المهرجان السنوي للتراث والفنون الشعبية.

ويعرض المهرجان مجموعة متنوعة من الحرف التقليدية والفنون المحلية.

وأكد المنظمون أن الهدف هو الحفاظ على التراث الثقافي للأجيال القادمة.

كما يتضمن المهرجان عروضاً موسيقية وفلكلورية متنوعة.

وشهدت الفعاليات حضوراً جماهيرياً كبيراً منذ اليوم الأول.`,
    date: "منذ 8 ساعات",
    author: "ليلى حسن",
    readTime: "3 دقائق",
  },
  {
    id: 18,
    title:
      "آراء: المسؤولية الاجتماعية للشركات في عصر التحول الرقمي",
    excerpt:
      "كيف يمكن للشركات الكبرى أن تساهم في التنمية المستدامة",
    image:
      "https://images.unsplash.com/photo-1759593047650-60328e9356ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGluaW9uJTIwZGlzY3Vzc2lvbnxlbnwxfHx8fDE3NjEyNDY2ODN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "آراء",
    categorySlug: "opinions",
    content: `تزداد أهمية المسؤولية الاجتماعية للشركات في عصرنا الحالي.

ونرى أن الشركات الكبرى يجب أن تلعب دوراً محورياً في التنمية المستدامة.

فالتحول الرقمي يفرض تحديات جديدة لكنه يوفر أيضاً فرصاً كبيرة.

ومن الضروري أن تتبنى الشركات ممارسات أخلاقية ومسؤولة.

إن الاستثمار في المجتمع والبيئة هو استثمار في مستقبل الشركة نفسها.`,
    date: "منذ 9 ساعات",
    author: "د. أحمد السالم",
    readTime: "6 دقائق",
  },
  {
    id: 19,
    title: "صحة: نصائح غذائية لتعزيز المناعة في فصل الشتاء",
    excerpt: "خبراء التغذية يقدمون إرشادات للحفاظ على صحة قوية",
    image:
      "https://images.unsplash.com/photo-1535914254981-b5012eebbd15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjB3ZWxsbmVzc3xlbnwxfHx8fDE3NjExNTkwNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "صحة",
    categorySlug: "health",
    content: `قدم خبراء التغذية مجموعة من النصائح لتعزيز المناعة خلال فصل الشتاء.

وأكدوا على أهمية تناول الفواكه والخضروات الغنية بالفيتامينات.

كما نصحوا بشرب كميات كافية من الماء يومياً.

وأشاروا إلى ضرورة ممارسة الرياضة بانتظام للحفاظ على اللياقة البدنية.

والحصول على قسط كافٍ من النوم أمر أساسي لتقوية جهاز المناعة.`,
    date: "منذ 10 ساعات",
    author: "د. فاطمة العلي",
    readTime: "4 دقائق",
  },
  {
    id: 20,
    title:
      "الشرق الأوسط: مبادرة جديدة لتعزيز السلام في المنطقة",
    excerpt:
      "إطلاق مبادرة دبلوماسية تهدف إلى حل النزاعات الإقليمية",
    image:
      "https://images.unsplash.com/photo-1672762232115-0b8b1adb8509?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWRkbGUlMjBlYXN0JTIwbmV3c3xlbnwxfHx8fDE3NjEyMzY2Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "الشرق الأوسط",
    categorySlug: "middle-east",
    content: `أطلقت عدة دول في المنطقة مبادرة دبلوماسية جديدة.

وتهدف لمبادرة إلى إيجاد حلول سلمية للنزاعات الإقليمية.

وأكد المسؤولون أن المبادرة تحظى بدعم دولي واسع.

كما تتضمن خطة شاملة لتعزيز الحوار والتعاون الإقليمي.

ويأمل الجميع أن تؤدي هذه المبادرة إلى استقرار دائم في المنطقة.`,
    date: "منذ 11 ساعة",
    author: "ياسر العتيبي",
    readTime: "5 دقائق",
  },
  // Additional Middle East articles
  {
    id: 21,
    title: "الشرق الأوسط: تطورات جديدة في المفاوضات الإقليمية",
    excerpt:
      "خطوات إيجابية نحو تسوية القضايا العالقة بين دول المنطقة",
    content: `شهدت المفاوضات الإقليمية تقدماً ملموساً خلال الأيام الماضية.\n\nوأعرب المشاركون عن تفاؤلهم بإمكانية التوصل لحلول شاملة.\n\nكما تم تشكيل لجان فنية لمتابعة تنفيذ الاتفاقات.\n\nويتوقع الخبراء أن تساهم هذه التطورات في تحسين الأوضاع الإقليمية.\n\nوأشادت المنظمات الدولية بالجهود المبذولة من جميع الأطراف.`,
    image:
      "https://images.unsplash.com/photo-1672762232115-0b8b1adb8509?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWRkbGUlMjBlYXN0JTIwbmV3c3xlbnwxfHx8fDE3NjEyMzY2Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "الشرق الأوسط",
    categorySlug: "middle-east",
    date: "منذ 12 ساعة",
    author: "محمد الأحمد",
    readTime: "5 دقائق",
  },
  {
    id: 22,
    title: "الشرق الأوسط: استثمارات ضخمة في البنية التحتية",
    excerpt:
      "مشاريع عملاقة تهدف لتطوير البنية التحتية في دول المنطقة",
    content: `أعلنت عدة دول عن مشاريع استثمارية ضخمة في البنية التحتية.\n\nوتشمل المشاريع الطرق والموانئ والمطارات والسكك الحديدية.\n\nويتوقع أن توفر هذه المشاريع آلاف فرص العمل.\n\nكما ستساهم في تعزيز التجارة البينية بين الدول.\n\nوأشاد المستثمرين بالفرص الواعدة في المنطقة.`,
    image:
      "https://images.unsplash.com/photo-1672762232115-0b8b1adb8509?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWRkbGUlMjBlYXN0JTIwbmV3c3xlbnwxfHx8fDE3NjEyMzY2Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "الشرق الأوسط",
    categorySlug: "middle-east",
    date: "منذ يوم",
    author: "سارة الكريم",
    readTime: "4 دقائق",
  },
  {
    id: 23,
    title: "الشرق الأوسط: قمة للطاقة المتجددة",
    excerpt:
      "مؤتمر إقليمي يناقش مستقبل الطاقة النظيفة في المنطقة",
    content: `استضافت العاصمة قمة إقليمية حول الطاقة المتجددة.\n\nوناقش المشاركون سبل التحول نحو مصادر الطاقة النظيفة.\n\nوتم الإعلان عن خطط طموحة للاستثمار في الطاقة الشمسية والرياح.\n\nكما تم توقيع عدة اتفاقيات للتعاون ا��تقني في هذا المجال.\n\nويأمل الجميع بتحقيق الحياد الكربوني بحلول 2050.`,
    image:
      "https://images.unsplash.com/photo-1672762232115-0b8b1adb8509?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWRkbGUlMjBlYXN0JTIwbmV3c3xlbnwxfHx8fDE3NjEyMzY2Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "الشرق الأوسط",
    categorySlug: "middle-east",
    date: "منذ يومين",
    author: "ياسر العتيبي",
    readTime: "6 دقائق",
  },
  // Additional Economy articles
  {
    id: 24,
    title: "اقتصاد: نمو قياسي في قطاع الصناعات التحويلية",
    excerpt:
      "القطاع الصناعي يحقق أرقاماً قياسية في الإنتاج والتصدير",
    content: `حقق قطاع الصناعات التحويلية نمواً قياسياً هذا العام.\n\nوارتفعت الصادرات الصناعية بنسبة تجاوزت 25%.\n\nوأكد وزير الصناعة أن هذا النمو يعكس نجاح سياسات التنويع الاقتصادي.\n\nكما أشاد بالدور المحوري للقطاع الخاص في هذا الإنجاز.\n\nويتوقع استمرار هذا الزخم خلال السنوات المقبلة.`,
    image:
      "https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzYxMjA0NTE5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "اقتصاد",
    categorySlug: "economy",
    date: "منذ 13 ساعة",
    author: "أحمد الزهراني",
    readTime: "5 دقائق",
  },
  {
    id: 25,
    title: "اقتصاد: إطلاق منصة رقمية لدعم الشركات الصغيرة",
    excerpt:
      "مبادرة حكومية جديدة لتمكين رواد الأعمال والمشاريع الناشئة",
    content: `أطلقت الحكومة منصة رقمية شاملة لدعم المشاريع الصغيرة.\n\nوتوفر المصة خدمات التمويل والاستشارات والتدريب.\n\nكما تسهل إجراءات التسجيل والترخيص للشركات الناشئة.\n\nوأشاد رواد الأعمال بهذه المبادرة ووصفوها بالنقلة النوعية.\n\nويتوقع أن تساهم في خلق آلاف فرص العمل الجديدة.`,
    image:
      "https://images.unsplash.com/photo-1560789299-12a60c2b7baa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGVjb25vbXl8ZW58MXx8fHwxNzYxMjkyODk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "اقتصاد",
    categorySlug: "economy",
    date: "منذ 14 ساعة",
    author: "سارة الكريم",
    readTime: "4 دقائق",
  },
  // Additional Sports articles
  {
    id: 26,
    title: "رياضة: بطولة دوري المحترفين تشهد منافسة قوية",
    excerpt: "الفرق تتنافس على لقب الدوري في موسم استثنائي",
    content: `تشهد بطولة الدوري منافسة شرسة بين الفرق المتصدرة.\n\nوتتساوى أربعة فرق في نقاط الصدارة قبل الجولات الحاسمة.\n\nوأكد المحللون أن هذا الموسم من أقوى المواسم تاريخياً.\n\nكما أشادوا بمستوى الأداء الفني للفرق المتنافسة.\n\nويترقب الجماهير الجولات المقبلة بحماس كبير.`,
    image:
      "https://images.unsplash.com/photo-1668068873075-cf3e9925eae4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBmb290YmFsbHxlbnwxfHx8fDE3NjEyMzY2Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "رياضة",
    categorySlug: "sports",
    date: "منذ 16 ساعة",
    author: "عمر السعيد",
    readTime: "4 دقائق",
  },
  {
    id: 27,
    title: "رياضة: نجم الفريق يفوز بجائزة أفضل لاعب",
    excerpt:
      "تكريم مستحق للاعب بعد موسم استثنائي مليء بالإنجازات",
    content: `فاز نجم الفريق الوطني بجائزة أفضل لاعب للموسم.\n\nوجاء الفوز بعد تصويت من الصحفيين والمدربين واللاعبين.\n\nوأكد الفائز أن هذا الإنجاز ثمرة جهد جماعي من الفريق.\n\nكما أهدى الجائزة للجماهير الوفية.\n\nويعد اللاعب من أبرز النجوم الصاعدة في المنطقة.`,
    image:
      "https://images.unsplash.com/photo-1693683223438-7da7c75edd91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBmb290YmFsbHxlbnwxfHx8fDE3NjEzNzAwMjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "رياضة",
    categorySlug: "sports",
    date: "منذ 17 ساعة",
    author: "عمر السالم",
    readTime: "3 دقائق",
  },
  // Additional Technology articles
  {
    id: 28,
    title: "تكنولوجيا: ابتكار جديد في مجال الأمن السيبراني",
    excerpt: "نظام حماية متطور يعتمد على الذكاء الاصطناعي",
    content: `طورت شركة تقنية محلية نظام حماية إلكترونية متقدم.\n\nويستخدم النظام تقنيات الذكاء الاصطناعي للكشف عن التهديدات.\n\nوأكد الخبراء أن هذا النظام يوفر حماية فائقة ضد الهجمات.\n\nكما حصل الابتكار على براءة اختراع دولية.\n\nوبدأت عدة شركات كبرى باستخدام هذا النظام.`,
    image:
      "https://images.unsplash.com/photo-1568952433726-3896e3881c65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbnxlbnwxfHx8fDE3NjEyMzQ5MjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "تكنولوجيا",
    categorySlug: "technology",
    date: "منذ 18 ساعة",
    author: "نور الدين",
    readTime: "5 دقائق",
  },
  {
    id: 29,
    title: "تكنولوجيا: إطلاق أول قمر صناعي محلي الصنع",
    excerpt:
      "إنجاز تقني كبير يضع البلاد على خريطة تكنولوجيا الفضاء",
    content: `تم إطلاق أول قمر صناعي محلي الصنع بنجاح.\n\nويهدف القمر إلى تحسين خدمات الاتصالات والإنترنت.\n\nوأكد المسؤولون أن هذا الإنجاز ثمرة سنوات من البحث والتطوير.\n\nكما يمثل خطوة مهمة نحو الاستقلال التقني.\n\nوأشاد الخبراء الدوليون بهذا الإنجاز الرائد.`,
    image:
      "https://images.unsplash.com/photo-1599081595468-de614fc93694?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBsZWFybmluZ3xlbnwxfHx8fDE3NjEzNzAwMjh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "تكنولوجيا",
    categorySlug: "technology",
    date: "منذ 19 ساعة",
    author: "أحمد الزهراني",
    readTime: "6 دقائق",
  },
  // Additional Analysis articles
  {
    id: 30,
    title: "تحليلات: مستقبل الطاقة في المنطقة العربية",
    excerpt: "قراءة تحليلية للتحول نحو مصادر الطاقة البديلة",
    content: `تشهد المنطقة العربية تحولات اقتصادية جذرية تعيد تشكيل المشهد الإقليمي بطرق غير مسبوقة.

ويرى المحللون أن هذه التحولات تنبع من عوامل متعددة، بما في ذلك التنويع الاقتصادي والاستثمار في القطاعات غير النفطية.

وتشير البيانات إلى أن الدول التي نجحت في تنويع اقتصاداتها تحقق نموًا مستدامًا وتوفر فرص عمل للشباب.

كما أن التكنولوجيا تلعب دورًا محوريًا في هذه التحولات، مع تزايد الاستثمارات في الذكاء الاصطناعي والتحول الرقمي.

ومع ذلك، تبقى هناك تحديات يجب معالجتها، بما في ذلك البطالة وتطوير المهارات وجذب الاستثمارات الأجنبية.`,
    image:
      "https://images.unsplash.com/photo-1738739905706-2cc26e57f67d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdzJTIwYW5hbHlzaXN8ZW58MXx8fHwxNzYxMjQ2NjgyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "تحليلات",
    categorySlug: "analysis",
    date: "منذ 20 ساعة",
    author: "د. خالد المنصور",
    readTime: "7 دقائق",
  },
  {
    id: 31,
    title: "تحليلات: التعليم وتحديات القرن الواحد والعشرين",
    excerpt: "نظرة معمقة في إصلاح المنظومة التعليمية",
    content: `تواجه المنظومة التعليمية تحديات كبيرة في عصرنا الحالي.\n\nويتطلب الأمر إصلاحات جذرية لمواكبة التطورات.\n\nومن الضروري دمج التكنولوجيا في العملية التعليمية.\n\nكما يجب التركيز على المهارات العملية والإبداعية.\n\nوالاستثمار في المعلمين هو المفتاح لأي إصلاح ناجح.`,
    image:
      "https://images.unsplash.com/photo-1738739905706-2cc26e57f67d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdzJTIwYW5hbHlzaXN8ZW58MXx8fHwxNzYxMjQ2NjgyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "تحليلات",
    categorySlug: "analysis",
    date: "منذ 21 ساعة",
    author: "د. أحمد السالم",
    readTime: "6 دقائق",
  },
  {
    id: 32,
    title: "تحليلات: الأمن الغذائي والتحديات المستقبلية",
    excerpt:
      "استراتيجيات لضمان الأمن الغذائي في ظل التغيرات المناخية",
    content: `يمثل الأمن الغذائي أولوية قصوى للدول العربية.\\n\\nوتفرض التغيرات المناخية تحديات إضافية على الزراعة.\\n\\nومن الضروري تطوير تقنيات زراعية حديثة ومستدامة.\\n\\nكما يجب تعزيز التعاون الإقليمي في هذا المجال.\\n\\nوالاستثمار في البحث العلمي الزراعي أمر حيوي.`,
    image:
      "https://images.unsplash.com/photo-1738739905706-2cc26e57f67d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdzJTIwYW5hbHlzaXN8ZW58MXx8fHwxNzYxMjQ2NjgyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "تحليلات",
    categorySlug: "analysis",
    date: "منذ 22 ساعة",
    author: "د. خالد المنصور",
    readTime: "8 دقائق",
  },
  // World News Articles
  {
    id: 33,
    title: "قمة عالمية للمناخ تختتم بتعهدات تاريخية",
    excerpt:
      "زعماء العالم يتفقون على خفض الانبعاثات الكربونية بنسبة 50% بحلول 2030",
    content: `اختتمت القمة العالمية للمناخ أعمالها بتوقيع اتفاقية تاريخية.\\n\\nوتعهد قادة أكثر من 150 دولة بخفض الانبعاثات الكربونية بشكل كبير.\\n\\nوأشاد المشاركون بالتزام الدول الكبرى بتمويل مشاريع الطاقة النظيفة.\\n\\nكما تم الإعلان عن صندوق بقيمة 100 مليار دولار لمساعدة الدول النامية.\\n\\nوأكد الخبراء أن هذه الاتفاقية تمثل نقطة تحول في مكافحة التغير المناخي.`,
    image:
      "https://images.unsplash.com/photo-1596339502177-8de71f7cacfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMG5ld3MlMjBpbnRlcm5hdGlvbmFsfGVufDF8fHx8MTc2MTQwNDM4OHww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "أخبار العالم",
    categorySlug: "world-news",
    date: "منذ ساعتين",
    author: "نور الدين",
    readTime: "6 دقائق",
  },
  {
    id: 34,
    title: "الاتحاد الأوروبي يعلن عن حزمة مساعدات إنسانية ضخمة",
    excerpt:
      "مليارا دولار لدعم اللاجئين والمتضررين من الأزمات الإنسانية حول العالم",
    content: `أعلن الاتحاد الأوروبي عن حزمة مساعدات إنسانية بقيمة ملياري دولار.\\n\\nوتهدف هذه المساعدات لدعم اللاجئين في مناطق النزاعات.\\n\\nوأكد المسؤولون الأوروبيون التزامهم بمساعدة المجتمعات المتضررة.\\n\\nكما تشمل الحزمة دعماً للرعاية الصحية والتعليم.\\n\\nوأشادت المنظمات الدولية بهذه المبادرة الإنسانية النبيلة.`,
    image:
      "https://images.unsplash.com/photo-1744827324103-6aae68abb440?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBwb2xpdGljcyUyMHN1bW1pdHxlbnwxfHx8fDE3NjE0MDkwMTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "أخبار العالم",
    categorySlug: "world-news",
    date: "منذ 4 ساعات",
    author: "محمد الأحمد",
    readTime: "5 دقائق",
  },
  {
    id: 35,
    title:
      "الأمم المتحدة تدعو لوقف إطلاق النار في مناطق التوتر",
    excerpt:
      "الأمين العام يطالب جميع الأطراف بالعودة إلى طاولة المفاوضات",
    content: `دعا الأمين العام للأمم المتحدة إلى وقف فوري لإطلاق النار.\\n\\nوطالب جميع الأطراف المتنازعة بالعودة للحوار والدبلوماسية.\\n\\nوأكد على أهمية حماية المدنيين وضمان وصول المساعدات الإنسانية.\\n\\nكما أعرب عن قلقه من التدهور الإنساني في مناطق النزاع.\\n\\نودعا المجتمع الدولي للضغط من أجل حل سلمي للأزمات.`,
    image:
      "https://images.unsplash.com/photo-1731191286461-87a731fc7310?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml0ZWQlMjBuYXRpb25zJTIwbWVldGluZ3xlbnwxfHx8fDE3NjE0MDkwMTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "أخبار العالم",
    categorySlug: "world-news",
    date: "منذ 5 ساعات",
    author: "ياسر العتيبي",
    readTime: "4 دقائق",
  },
  {
    id: 36,
    title: "اتفاقية تجارية جديدة بين دول آسيا والمحيط الهادئ",
    excerpt:
      "توقيع اتفاق شراكة اقتصادية شاملة يضم 15 دولة في المنطقة",
    content: `وقعت 15 دولة آسيوية على اتفاقية تجارية تاريخية.\\n\\nوتهدف الاتفاقية لتعزيز التجارة الحرة وتسهيل حركة البضائع.\\n\\nوأكد الموقعون أن الاتفاق سيعزز النمو الاقتصادي الإقليمي.\\n\\nكما سيخل�� ملايين فرص العمل في الدول الأعضاء.\\n\\نأشار الخبراء إلى أن هذه الشراكة ستغير خريطة التجارة العالمية.`,
    image:
      "https://images.unsplash.com/photo-1679145586764-1458de644200?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwZGlwbG9tYWN5fGVufDF8fHx8MTc2MTQwOTAxOXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "أخبار العالم",
    categorySlug: "world-news",
    date: "منذ 6 ساعات",
    author: "سارة الكريم",
    readTime: "5 دقائق",
  },
  // Additional Opinions articles
  {
    id: 37,
    title:
      "رأي: الذكاء الاصطناعي بين الفرص والتحديات الأخلاقية",
    excerpt:
      "كيف يمكن تسخير قوة الذكاء الاصطناعي مع الحفاظ على القيم الإنسانية",
    content: `يمثل الذكاء الاصطناعي أحد أعظم الابتكارات في عصرنا الحالي.\\n\\nلكن معه تأتي تحديات أخلاقية وقانونية تتطلب معالجة جادة.\\n\\nويجب علينا وضع ضوابط واضحة لاستخدام هذه التقنيات.\\n\\nكما يتطلب الأمر تعاوناً دولياً لوضع معايير موحدة.\\n\\nوالأهم هو ضمان أن يبقى الإنسان في صميم هذه التطورات التقنية.`,
    image:
      "https://images.unsplash.com/photo-1598363431659-330370aaaa7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGluaW9uJTIwZWRpdG9yaWFsfGVufDF8fHx8MTc2MTQwOTM3MXww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "آراء",
    categorySlug: "opinions",
    date: "منذ 15 ساعة",
    author: "د. أحمد السالم",
    readTime: "7 دقائق",
  },
  {
    id: 38,
    title: "رأي: الشباب العربي ودورهم في صناعة المستقبل",
    excerpt: "تمكين الشباب هو المفتاح لتحقيق التنمية المستدامة",
    content: `يشكل الشباب العربي ثروة حقيقية للمنطقة.\\n\\nولديهم القدرة على قيادة التغيير والابتكار في مختلف المجالات.\\n\\nويجب على الحكومات توفير الفرص والموارد اللازمة لهم.\\n\\nكما يتطلب الأمر استثماراً في التعليم والتدريب المهني.\\n\\nوتمكين الشباب ليس خياراً بل ضرورة لبناء مستقبل أفضل.`,
    image:
      "https://images.unsplash.com/photo-1723006694466-bebac409aa8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWJhdGUlMjBkaXNjdXNzaW9ufGVufDF8fHx8MTc2MTMxMzIxOHww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "آراء",
    categorySlug: "opinions",
    date: "منذ 23 ساعة",
    author: "د. ليلى النعيمي",
    readTime: "6 دقائق",
  },
  // Additional International articles
  {
    id: 39,
    title:
      "الدولي: قمة العشرين تناقش الاقتصاد العالمي والتجارة",
    excerpt:
      "زعماء أكبر اقتصادات العالم يبحثون سبل تعزيز النمو العالمي",
    content: `عقد قادة مجموعة العشرين اجتماعاً لمناقشة التحديات الاقتصادية العالمية.\\n\\nوتناولوا قضايا التجارة الدولية والتحول الرقمي.\\n\\nوأكدوا على أهمية التعاون متعدد الأطراف.\\n\\nكما ناقشوا سبل دعم الدول النامية في تحقيق أهداف التنمية.\\n\\nوتعهدوا بمواصلة العمل لتحقيق نمو اقتصادي شامل ومستدام.`,
    image:
      "https://images.unsplash.com/photo-1668120084348-efc2ba0ad31d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwZmxhZ3N8ZW58MXx8fHwxNzYxNDA5MzcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "الدولي",
    categorySlug: "international",
    date: "منذ 3 ساعات",
    author: "محمد الأحمد",
    readTime: "5 دقائق",
  },
  {
    id: 40,
    title: "الدولي: منظمة التجارة العالمية تدعو لإصلاحات جذرية",
    excerpt:
      "مطالبات بتحديث القواعد التجارية لمواكبة التحولات العالمية",
    content: `دعت منظمة التجارة العالمية إلى إصلاحات شاملة في نظام التجارة.\\n\\nوأكدت على ضرورة تحديث القواعد لتناسب الاقتصاد الرقمي.\\n\\nكما شددت على أهمية معالجة الخلافات التجارية بطرق سلمية.\\n\\nوحثت الدول الأعضاء على التعاون لتحقيق نظام تجاري عادل.\\n\\nوأشارت إلى أن التجارة الحرة تعود بالنفع على جميع الدول.`,
    image:
      "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMGdsb2JlfGVufDF8fHx8MTc2MTMxMjkxNHww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "الدولي",
    categorySlug: "international",
    date: "منذ 7 ساعات",
    author: "سارة الكريم",
    readTime: "4 دقائق",
  },
  {
    id: 41,
    title: "الدولي: اجتماع وزاري لمكافحة الإرهاب الدولي",
    excerpt:
      "دول العالم تتعهد بتكثيف التعاون الأمني والاستخباراتي",
    content: `عقد وزراء الخارجية من 50 دولة اجتماعاً لمكافحة الإرهاب.\\n\\nوتعهدوا بتبادل المعلومات الاستخباراتية بشكل أفضل.\\n\\nكما أكدوا على ضرورة معالجة الأسباب الجذرية للتطرف.\\n\\nوشددوا على أهمية حماية حقوق الإنسان في هذا السياق.\\n\\nوأعلنوا عن تشكيل فرق عمل مشتركة لمتابعة التنفيذ.`,
    image:
      "https://images.unsplash.com/photo-1668120084348-efc2ba0ad31d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwZmxhZ3N8ZW58MXx8fHwxNzYxNDA5MzcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "الدولي",
    categorySlug: "international",
    date: "منذ 9 ساعات",
    author: "ياسر العتيبي",
    readTime: "6 دقائق",
  },
  // Additional Variety articles
  {
    id: 42,
    title: "منوعات: نجم عالمي يزور المنطقة ضمن جولة فنية",
    excerpt:
      "الفنان العالمي يستعد لتقديم عروض استثنائية في عدة مدن",
    content: `أعلن نجم عالمي شهير عن زيارته للمنطقة ضمن جولة فنية.\\n\\nوسيقدم سلسلة من الحفلات في عدة عواصم عربية.\\n\\nوأعرب عن سعادته بالعودة للمنطقة ولقاء جمهوره.\\n\\nكما وعد بتقديم أغانيه الجديدة إلى جانب الأعمال المحبوبة.\\n\\nوبدأ حجز التذاكر وسط إقبال كبير من المعجبين.`,
    image:
      "https://images.unsplash.com/photo-1760582912320-79fcbc9f309b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YXJpZXR5JTIwZW50ZXJ0YWlubWVudHxlbnwxfHx8fDE3NjE0MDkzNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "منوعات",
    categorySlug: "variety",
    date: "منذ 10 ساعات",
    author: "ليلى حسن",
    readTime: "3 دقائق",
  },
  {
    id: 43,
    title: "منوعات: اكتشاف أثري نادر يعود لآلاف السنين",
    excerpt:
      "علماء آثار يكشفون عن اكتشاف يلقي ضوءاً على حضارة قديمة",
    content: `أعلن فريق من علماء الآثار عن اكتشاف أثري نادر ومهم.\\n\\nويتضمن الاكتشاف قطعاً أثرية تعود لحضارة قديمة.\\n\\nوأكد الخبراء أن هذا الاكتشاف سيعيد كتابة التاريخ.\\n\\nكما سيساعد في فهم أفضل للحياة في تلك الحقبة.\\n\\nوسيتم عرض المكتشفات في متحف وطني قريباً.`,
    image:
      "https://images.unsplash.com/photo-1671402116267-3c8f9f4fd917?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWZlc3R5bGUlMjBwZW9wbGV8ZW58MXx8fHwxNzYxNDA5MzczfDA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "منوعات",
    categorySlug: "variety",
    date: "منذ 14 ساعة",
    author: "د. فاطمة العلي",
    readTime: "5 دقائق",
  },
  // Additional Culture article
  {
    id: 44,
    title: "ثقافة: مهرجان للشعر العربي يحتفي بالأدب العربي",
    excerpt:
      "شعراء من مختلف الدول العربية يتنافسون في مهرجان شعري كبير",
    content: `افتتح مهرجان الشعر العربي بمشاركة شعراء من 20 دولة.\\n\\nويهدف المهرجان للاحتفاء بالأدب العربي وتشجيع الإبداع الشعري.\\n\\nوتضمن البرنامج أمسيات شعرية وورش عمل للشباب.\\n\\nكما سيتم تكريم عدد من الشعراء المخضرمين.\\n\\nوشهدت الفعاليات حضوراً جماهيرياً كبيراً من عشاق الشعر.`,
    image:
      "https://images.unsplash.com/photo-1648026141691-96be4a41b687?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWx0dXJlJTIwbXVzZXVtfGVufDF8fHx8MTc2MTQwOTM3M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    category: "ثقافة",
    categorySlug: "culture",
    date: "منذ 12 ساعة",
    author: "ليلى حسن",
    readTime: "4 دقائق",
  },
  {
    id: 45,
    title: "صحة: دراسة جديدة تكشف أسرار طول العمر",
    excerpt:
      "باحثون يحددون العوامل الرئيسية التي تساهم في العيش حياة أطول وأكثر صحة",
    image:
      "https://images.unsplash.com/photo-1535914254981-b5012eebbd15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjB3ZWxsbmVzc3xlbnwxfHx8fDE3NjExNTkwNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    category: "صحة",
    categorySlug: "health",
    content: `كشفت دراسة علمية حديثة عن العوامل الرئيسية التي تساهم في طول العمر.  وأشار الباحثون إلى أهمية النظام الغذائي المتوازن والنشاط البدني المنتظم.كما أكدوا على دور العلاقات الاجتماعية القوية في تحسين الصحة النفسية والجسدية.وأظهرت الدراسة أن الأشخاص الذين يتبعون أسلوب حياة صحي يعيشون أطول بعشر سنوات في المتوسط.ونصح الخبراء بضرورة الابتعاد عن التدخين وتجنب التوتر المفرط.`,
    date: "منذ 3 ساعات",
    author: "د. فاطمة العلي",
    readTime: "5 دقائق",
  },
];

export const getCategoryName = (slug: string): string => {
  const categoryMap: { [key: string]: string } = {
    "middle-east": "الشرق الأوسط",
    economy: "اقتصاد",
    sports: "رياضة",
    technology: "تكنولوجيا",
    analysis: "تحليلات",
    variety: "منوعات",
    opinions: "آراء",
    video: "فيديو",
    news: "أخبار",
    "world-news": "أخبار العالم",
    international: "الدولي",
    health: "صحة",
    culture: "ثقافة",
  };

  return categoryMap[slug] || slug;
};