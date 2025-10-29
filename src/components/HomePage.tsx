import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SEO, { generateWebsiteSchema, generateOrganizationSchema } from "./SEO";
import { articles } from "../data/articles";
import { videos } from "../data/videos";
import {
  Clock,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Play,
  Eye,
} from "lucide-react";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { useState, useEffect, useRef } from "react";

export default function HomePage() {
  const siteUrl = "https://todaymedia.net"; // Replace with your actual domain

  const topArticles = articles.slice(0, 5);
  const worldNews = articles.filter((a) => a.categorySlug === "world-news");
  const economyNews = articles.filter((a) => a.categorySlug === "economy");
  const middleEastNews = articles.filter(
    (a) => a.categorySlug === "middle-east"
  );
  const internationalNews = articles.filter(
    (a) => a.categorySlug === "international"
  );
  const analysisNews = articles.filter((a) => a.categorySlug === "analysis");
  const varietyNews = articles.filter((a) => a.categorySlug === "variety");
  const healthNews = articles.filter((a) => a.categorySlug === "health");
  const technologyNews = articles.filter(
    (a) => a.categorySlug === "technology"
  );
  const cultureNews = articles.filter((a) => a.categorySlug === "culture");
  const opinionsNews = articles.filter((a) => a.categorySlug === "opinions");
  const sportsNews = articles.filter((a) => a.categorySlug === "sports");

  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % topArticles.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + topArticles.length) % topArticles.length
    );
  };

  // Handle touch/swipe gestures for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // Swiped left (next slide in RTL)
      prevSlide();
    }
    if (touchEndX.current - touchStartX.current > 50) {
      // Swiped right (previous slide in RTL)
      nextSlide();
    }
  };

  // Auto scroll for breaking news
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      let scrollAmount = 0;
      const scroll = () => {
        scrollAmount += 1;
        if (
          scrollAmount >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          scrollAmount = 0;
        }
        scrollContainer.scrollLeft = scrollAmount;
      };
      const interval = setInterval(scroll, 50);
      return () => clearInterval(interval);
    }
  }, []);

  // Section with overlay image
  const OverlaySection = ({
    title,
    articles,
    color,
  }: {
    title: string;
    articles: typeof middleEastNews;
    color: string;
  }) => (
    <section className="mb-12">
      <div className="container mx-auto px-4">
        <h2
          className={`text-2xl mb-6 pb-2 border-b-4 border-[${color}] inline-block text-right`}
        >
          {title}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {articles.slice(0, 2).map((article) => (
            <Link
              key={article.id}
              to={`/article/${article.id}`}
              className="group block relative overflow-hidden rounded-lg h-80 shadow-md hover:shadow-xl transition-all"
            >
              <ImageWithFallback
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              <div className="absolute bottom-0 right-0 left-0 p-6 text-white text-right">
                <Badge className={`bg-[${color}] mb-3`}>
                  {article.category}
                </Badge>
                <h3 className="text-xl mb-2 leading-tight font-semibold">
                  {article.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-200 justify-start">
                  <Clock className="w-4 h-4" />
                  <span>{article.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );

  // Regular grid section
  const GridSection = ({
    title,
    articles,
    color,
  }: {
    title: string;
    articles: typeof economyNews;
    color: string;
  }) => (
    <section className="mb-12">
      <div className="container mx-auto px-4">
        <h2
          className={`text-2xl mb-6 pb-2 border-b-4 border-[${color}] inline-block text-right`}
        >
          {title}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.slice(0, 4).map((article) => (
            <Link
              key={article.id}
              to={`/article/${article.id}`}
              className="group block h-full"
            >
              <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all border border-border h-full flex flex-col">
                <ImageWithFallback
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 lg:h-58 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4 text-right flex flex-col flex-grow">
                  <h3 className="mb-2 leading-snug group-hover:text-[#c90000] transition-colors line-clamp-2 font-semibold flex-grow">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground justify-start mt-auto">
                    <Clock className="w-3 h-3" />
                    <span>{article.date}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen">
      <Header />

      {/* SEO Meta Tags */}
      <SEO
        title="اليوم ميديا - موقع إخباري شامل | آخر الأخبار العربية والعالمية"
        description="اليوم ميديا هو موقع إلكتروني إخباري يعرض مختلف الأخبار السياسية والمنوعة. تغطية شاملة للشرق الأوسط، الاقتصاد، الرياضة، التكنولوجيا والثقافة"
        canonical={siteUrl}
        ogType="website"
        ogImage={topArticles[0]?.image || `${siteUrl}/assets/img/logo.webp`}
        ogImageAlt="اليوم ميديا - موقع إخباري شامل"
        schema={[
          generateWebsiteSchema(siteUrl),
          generateOrganizationSchema(siteUrl),
        ]}
      />

      {/* Breaking News Bar */}
      <div className="bg-[#efefef] dark:bg-gray-800 text-[#0a0a0a] dark:text-white py-2">
        <div className="container mx-auto px-4">
          <div
            className="flex items-center gap-3 overflow-x-auto"
            ref={scrollRef}
          >
            <span className="px-3 py-1 bg-[#c90000] text-white text-sm shrink-0 font-bold sticky right-0 md:static">
              عاجل
            </span>
            <p className="text-sm whitespace-nowrap">{topArticles[0]?.title}</p>
          </div>
        </div>
      </div>

      <main>
        {/* Hero Slider */}
        <section className="container mx-auto px-4 py-8">
          <div className="relative">
            <div
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 shadow-2xl min-h-[600px] lg:h-[600px] mb-4 lg:mb-0"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {topArticles.map((article, index) => (
                <div
                  key={article.id}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="grid lg:grid-cols-5 gap-0 h-full">
                    {/* Text Content - 40% Left Side */}
                    <div className="lg:col-span-2 p-6 lg:p-12 flex flex-col justify-center text-right relative z-10 order-2 lg:order-1 h-full overflow-hidden pb-8 lg:pb-12">
                      <div className="space-y-4 lg:space-y-6">
                        {/* Category Badge with Icon */}
                        <div className="flex items-center gap-2 justify-start">
                          <div className="w-8 h-8 lg:w-12 lg:h-12 bg-[#c90000] rounded-full flex items-center justify-center shadow-lg">
                            <TrendingUp className="w-4 h-4 lg:w-6 lg:h-6 text-white" />
                          </div>
                          <Badge className="bg-[#c90000] hover:bg-[#a00000] text-white px-2 py-1 lg:px-4 lg:py-2 text-xs lg:text-sm shadow-lg">
                            {article.category}
                          </Badge>
                        </div>

                        {/* Title */}
                        <Link to={`/article/${article.id}`}>
                          <h2 className="text-2xl lg:text-3xl xl:text-4xl leading-tight text-foreground hover:text-[#c90000] transition-colors cursor-pointer line-clamp-3">
                            {article.title}
                          </h2>
                        </Link>

                        {/* Excerpt */}
                        <p className="text-muted-foreground text-base lg:text-lg leading-relaxed line-clamp-2 lg:line-clamp-3">
                          {article.excerpt}
                        </p>

                        {/* Decorative Line */}
                        <div className="w-20 h-1 bg-gradient-to-l from-[#c90000] to-[#ff4444] ml-auto"></div>

                        {/* Meta Info */}
                        <div className="flex items-center gap-3 lg:gap-4 text-xs lg:text-sm text-muted-foreground justify-start">
                          <span>{article.date}</span>
                          <span>•</span>
                          <span className="hover:text-[#c90000] cursor-pointer transition-colors truncate max-w-[100px]">
                            {article.author}
                          </span>
                          <span>•</span>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{article.readTime}</span>
                          </div>
                        </div>

                        {/* Read More Button */}
                        <Link to={`/article/${article.id}`}>
                          <button className="bg-[#c90000] hover:bg-[#a00000] text-white px-4 lg:px-8 py-1.5 lg:py-3 rounded-lg transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-1 lg:gap-2 ml-auto text-sm lg:text-base">
                            <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5" />
                            <span>اقرأ المزيد</span>
                          </button>
                        </Link>
                      </div>
                    </div>

                    {/* Image - 60% Right Side */}
                    <div className="lg:col-span-3 relative overflow-hidden order-1 lg:order-2 h-full">
                      <Link
                        to={`/article/${article.id}`}
                        className="block h-full group"
                      >
                        <ImageWithFallback
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        {/* Subtle gradient overlay for better text readability on mobile */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:hidden" />

                        {/* Decorative corner element */}
                        <div className="absolute top-0 left-0 w-32 h-32 bg-[#c90000] opacity-20 rounded-br-full hidden lg:block"></div>
                        <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-[#c90000]/30 to-transparent rounded-tl-full hidden lg:block"></div>
                      </Link>

                      {/* Slider Controls - Desktop only, positioned at bottom left of image */}
                      <div className="hidden lg:flex absolute left-6 bottom-6 gap-3 z-20">
                        <button
                          onClick={nextSlide}
                          className="w-12 h-12 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-700 rounded-full flex items-center justify-center text-foreground backdrop-blur-sm shadow-xl hover:scale-110 transition-all"
                          aria-label="Next slide"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                        <button
                          onClick={prevSlide}
                          className="w-12 h-12 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-700 rounded-full flex items-center justify-center text-foreground backdrop-blur-sm shadow-xl hover:scale-110 transition-all"
                          aria-label="Previous slide"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Slider Dots - Outside on mobile only */}
            <div className="flex lg:hidden justify-center gap-2 mt-6">
              {topArticles.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`transition-all ${
                    index === currentSlide
                      ? "w-8 h-3 bg-[#c90000]"
                      : "w-3 h-3 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400"
                  } rounded-full`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        <div className="gridholder mx-auto px-4 py-8">
          {/* أخبار العالم - 3 Grid Articles */}
          {worldNews.length > 0 && (
            <div className="bg-background py-12">
              <section className="container mx-auto px-4">
                <h2 className="text-2xl mb-6 pb-2 border-b-4 border-[#c90000] inline-block text-right">
                  أخبار العالم
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {worldNews.slice(0, 3).map((article) => (
                    <Link
                      key={article.id}
                      to={`/article/${article.id}`}
                      className="group block h-full"
                    >
                      <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all border border-border h-full flex flex-col">
                        <ImageWithFallback
                          src={article.image}
                          alt={article.title}
                          className="w-full h-48 lg:h-58 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="p-4 text-right flex flex-col flex-grow">
                          <h3 className="mb-2 leading-snug group-hover:text-[#c90000] transition-colors line-clamp-2 font-semibold flex-grow">
                            {article.title}
                          </h3>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground justify-start mt-auto">
                            <Clock className="w-3 h-3" />
                            <span>{article.date}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            </div>
          )}

          {/* اقتصاد - Grid */}
          {economyNews.length > 0 && (
            <div className="bg-muted/20 py-12">
              <GridSection
                title="اقتصاد"
                articles={economyNews}
                color="#16a34a"
              />
            </div>
          )}

          {/* الشرق الأوسط - Overlay */}
          {middleEastNews.length > 0 && (
            <div className="bg-background py-12">
              <section className="container mx-auto px-4">
                <h2 className="text-2xl mb-6 pb-2 border-b-4 border-[#dc2626] inline-block text-right">
                  الشرق الأوسط
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {middleEastNews.slice(0, 3).map((article) => (
                    <Link
                      key={article.id}
                      to={`/article/${article.id}`}
                      className="group block h-full"
                    >
                      <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all border border-border h-full flex flex-col">
                        <ImageWithFallback
                          src={article.image}
                          alt={article.title}
                          className="w-full h-48 lg:h-58 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="p-4 text-right flex flex-col flex-grow">
                          <h3 className="mb-2 leading-snug group-hover:text-[#c90000] transition-colors line-clamp-2 font-semibold flex-grow">
                            {article.title}
                          </h3>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground justify-start mt-auto">
                            <Clock className="w-3 h-3" />
                            <span>{article.date}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            </div>
          )}

          {/* الدولي - Grid */}
          {internationalNews.length > 0 && (
            <div className="bg-muted/20 py-12">
              <GridSection
                title="الدولي"
                articles={internationalNews}
                color="#2563eb"
              />
            </div>
          )}

          {/* تحليلات */}
          {analysisNews.length > 0 && (
            <div className="bg-background py-12">
              <section className="container mx-auto px-4">
                <h2 className="text-2xl mb-6 pb-2 border-b-4 border-[#6366f1] inline-block text-right">
                  تحليلات
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {analysisNews.slice(0, 3).map((article) => (
                    <Card
                      key={article.id}
                      className="overflow-hidden shadow-md hover:shadow-xl transition-all flex flex-col h-full"
                    >
                      <Link
                        to={`/article/${article.id}`}
                        className="block flex flex-col h-full"
                      >
                        <ImageWithFallback
                          src={article.image}
                          alt={article.title}
                          className="w-full h-48 lg:h-58 object-cover"
                        />
                        <div className="p-4 text-right flex flex-col flex-grow">
                          <h3 className="mb-2 leading-snug hover:text-[#c90000] transition-colors font-semibold line-clamp-2 flex-grow">
                            {article.title}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                            {article.excerpt}
                          </p>
                          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 justify-start mt-auto">
                            <Clock className="w-3 h-3" />
                            <span>{article.date}</span>
                          </div>
                        </div>
                      </Link>
                    </Card>
                  ))}
                </div>
              </section>
            </div>
          )}

          {/* منوعات - Grid */}
          {varietyNews.length > 0 && (
            <div className="bg-muted/20 py-12">
              <GridSection
                title="منوعات"
                articles={varietyNews}
                color="#ec4899"
              />
            </div>
          )}

          {/* صحة - Overlay */}
          {healthNews.length > 0 && (
            <div className="bg-background py-12">
              <section className="container mx-auto px-4">
                <h2 className="text-2xl mb-6 pb-2 border-b-4 border-[#14b8a6] inline-block text-right">
                  صحة
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {healthNews.slice(0, 3).map((article) => (
                    <Link
                      key={article.id}
                      to={`/article/${article.id}`}
                      className="group block h-full"
                    >
                      <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all border border-border h-full flex flex-col">
                        <ImageWithFallback
                          src={article.image}
                          alt={article.title}
                          className="w-full h-48 lg:h-58 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="p-4 text-right flex flex-col flex-grow">
                          <h3 className="mb-2 leading-snug group-hover:text-[#c90000] transition-colors line-clamp-2 font-semibold flex-grow">
                            {article.title}
                          </h3>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground justify-start mt-auto">
                            <Clock className="w-3 h-3" />
                            <span>{article.date}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            </div>
          )}

          {/* تكنولوجيا - Grid */}
          {technologyNews.length > 0 && (
            <div className="bg-muted/20 py-12">
              <GridSection
                title="تكنولوجيا"
                articles={technologyNews}
                color="#8b5cf6"
              />
            </div>
          )}

          {/* ثقافة */}
          {cultureNews.length > 0 && (
            <div className="bg-background py-12">
              <section className="container mx-auto px-4">
                <h2 className="text-2xl mb-6 pb-2 border-b-4 border-[#f59e0b] inline-block text-right">
                  ثقافة
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {cultureNews.slice(0, 2).map((article) => (
                    <Link
                      key={article.id}
                      to={`/article/${article.id}`}
                      className="flex gap-4 bg-white dark:bg-card p-4 rounded-lg shadow-md hover:shadow-xl transition-all border border-gray-100 dark:border-border h-full"
                    >
                      <ImageWithFallback
                        src={article.image}
                        alt={article.title}
                        className="w-32 h-32 object-cover rounded shrink-0"
                      />
                      <div className="flex-1 text-right flex flex-col">
                        <h3 className="mb-2 leading-snug hover:text-[#c90000] transition-colors font-semibold flex-grow line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 line-clamp-2">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 justify-end mt-auto">
                          <span>{article.date}</span>
                          <Clock className="w-3 h-3" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            </div>
          )}

          {/* آراء - Grid with Carousel and Author */}
          {opinionsNews.length > 0 && (
            <div className="bg-muted/20 py-12">
              <section className="container mx-auto px-4">
                <h2 className="text-2xl mb-6 pb-2 border-b-4 border-[#f97316] inline-block text-right">
                  آراء
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {opinionsNews.slice(0, 4).map((article) => (
                    <Link
                      key={article.id}
                      to={`/article/${article.id}`}
                      className="group block h-full"
                    >
                      <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all border border-border h-full flex flex-col">
                        <ImageWithFallback
                          src={article.image}
                          alt={article.title}
                          className="w-full h-48 lg:h-58 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="p-4 text-right flex flex-col flex-grow">
                          <h3 className="mb-2 leading-snug group-hover:text-[#c90000] transition-colors line-clamp-2 font-semibold flex-grow">
                            {article.title}
                          </h3>
                          <div className="flex items-center gap-3 mt-4">
                            <div>
                              <p className="text-sm font-medium">
                                {article.author}
                              </p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">
                                {article.date}
                              </p>
                            </div>
                            <div className="w-10 h-10 bg-[#c90000] rounded-full flex items-center justify-center text-white shrink-0">
                              {article.author.charAt(0)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            </div>
          )}

          {/* الرياضة - Grid */}
          {sportsNews.length > 0 && (
            <div className="bg-background py-12">
              <GridSection
                title="الرياضة"
                articles={sportsNews}
                color="#ea580c"
              />
            </div>
          )}

          {/* فيديو - Video Section */}
          <div className="bg-muted/20 py-12">
            <section className="container mx-auto px-4">
              <div className="flex justify-between items-center mb-6">
                <Link
                  to="/videos"
                  className="group flex items-center gap-2 bg-[#c90000] hover:bg-[#a00000] text-white px-5 py-2.5 rounded-lg transition-all shadow-md hover:shadow-lg hover:scale-105"
                >
                  <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  <span className="font-medium">عرض الكل</span>
                </Link>
                <h2 className="text-2xl pb-2 border-b-4 border-[#c90000] inline-block text-right">
                  فيديو
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.slice(0, 3).map((video) => (
                  <Link
                    key={video.id}
                    to="/videos"
                    className="group block h-full"
                  >
                    <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all border border-border h-full flex flex-col">
                      <div className="relative">
                        <ImageWithFallback
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-48 lg:h-58 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                          <div className="w-16 h-16 bg-[#c90000] hover:bg-[#a00000] rounded-full flex items-center justify-center text-white transition-colors">
                            <Play className="w-8 h-8 mr-1" />
                          </div>
                        </div>
                        <Badge className="absolute top-2 right-2 bg-black/70 text-white">
                          {video.category}
                        </Badge>
                        <span className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                          {video.duration}
                        </span>
                      </div>
                      <div className="p-4 text-right flex flex-col flex-grow">
                        <h3 className="mb-3 leading-snug group-hover:text-[#c90000] transition-colors line-clamp-2 font-semibold flex-grow">
                          {video.title}
                        </h3>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground justify-start mt-auto">
                          <div className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            <span>{video.views}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{video.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
