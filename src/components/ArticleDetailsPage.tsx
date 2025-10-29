import { useParams, Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import SEO, { generateNewsArticleSchema, generateBreadcrumbSchema, generateOrganizationSchema } from './SEO';
import { articles } from '../data/articles';
import { Clock, User, Share2, Facebook, Twitter, Printer, ChevronRight, ChevronLeft } from 'lucide-react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from './ui/breadcrumb';
import { useState, useEffect } from 'react';

export default function ArticleDetailsPage() {
  const siteUrl = 'https://todaymedia.net'; // Replace with your actual domain
  const { id } = useParams<{ id: string }>();
  const article = articles.find(a => a.id === Number(id));
  const [selectedImage, setSelectedImage] = useState(0);

  // Scroll to top when component mounts or when article changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!article) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl mb-4">المقال غير موجود</h1>
          <Link to="/" className="text-[#c90000] hover:underline">
            العودة إلى الرئيسية
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Gallery images (main image only by default, add more if needed)
  const galleryImages = [
    article.image,
    // Uncomment lines below to add more images to the gallery:
    // 'https://images.unsplash.com/photo-1672762232115-0b8b1adb8509?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWRkbGUlMjBlYXN0JTIwbmV3c3xlbnwxfHx8fDE3NjEyMzY2Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    // 'https://images.unsplash.com/photo-1709715357520-5e1047a2b691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzYxMjA0NTE5fDA&ixlib=rb-4.1.0&q=80&w=1080',
  ];

  // Find next and previous articles
  const currentIndex = articles.findIndex(a => a.id === article.id);
  const previousArticle = currentIndex > 0 ? articles[currentIndex - 1] : null;
  const nextArticle = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;

  // Generate canonical URL and article URL
  const articleUrl = `${siteUrl}/article/${article.id}`;
  const categoryUrl = `${siteUrl}/articles/${article.categorySlug}`;
  
  // Helper function to parse Arabic relative dates or generate a default date
  const parseArticleDate = (dateStr: string): string => {
    // If the date contains relative time (منذ), generate a recent date
    if (dateStr.includes('منذ')) {
      // Generate a date within the last few days
      const daysAgo = Math.floor(Math.random() * 7); // Random date within last week
      const date = new Date();
      date.setDate(date.getDate() - daysAgo);
      return date.toISOString();
    }
    
    // Try to parse DD/MM/YYYY format
    const parts = dateStr.split('/');
    if (parts.length === 3) {
      const [day, month, year] = parts;
      const date = new Date(`${year}-${month}-${day}`);
      if (!isNaN(date.getTime())) {
        return date.toISOString();
      }
    }
    
    // Fallback to current date
    return new Date().toISOString();
  };
  
  // Generate published and modified dates in ISO format
  const publishedDate = parseArticleDate(article.date);
  const modifiedDate = publishedDate; // Use same date if no modification date available
  
  // Generate breadcrumb items for schema
  const breadcrumbItems = [
    { name: 'الرئيسية', url: siteUrl },
    { name: article.category, url: categoryUrl },
    { name: article.title, url: articleUrl },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* SEO Meta Tags for Article */}
      <SEO
        title={`${article.title} | اليوم ميديا`}
        description={article.excerpt}
        canonical={articleUrl}
        ogType="article"
        ogImage={article.image}
        ogImageAlt={article.title}
        articlePublishedTime={publishedDate}
        articleModifiedTime={modifiedDate}
        articleAuthor={article.author}
        articleSection={article.category}
        articleTags={[article.category, 'أخبار', 'الشرق الأوسط']}
        schema={[
          generateNewsArticleSchema({
            title: article.title,
            description: article.excerpt,
            image: article.image,
            datePublished: publishedDate,
            dateModified: modifiedDate,
            authorName: article.author,
            category: article.category,
            url: articleUrl,
            siteUrl: siteUrl,
          }),
          generateBreadcrumbSchema(breadcrumbItems),
          generateOrganizationSchema(siteUrl),
        ]}
      />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">الرئيسية</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/articles/${article.categorySlug}`}>
                {article.category}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>المقال</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Main Article - Full Width */}
        <article className="max-w-4xl mx-auto">
          {/* Article Header */}
          <Badge className="mb-4 bg-[#c90000]">{article.category}</Badge>
          <h1 className="text-3xl md:text-4xl mb-4 leading-tight">{article.title}</h1>
          
          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span className="text-sm">{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm">وقت القراءة: {article.readTime}</span>
            </div>
          </div>

          {/* Share Buttons */}
          <div className="flex items-center gap-2 mb-6 pb-6 border-b">
            <span className="text-sm text-gray-600 ml-2 hidden md:inline">مشاركة:</span>
            <Button variant="outline" size="sm">
              <Facebook className="w-4 h-4 md:ml-2" />
              <span className="hidden md:inline">فيسبوك</span>
            </Button>
            <Button variant="outline" size="sm">
              <Twitter className="w-4 h-4 md:ml-2" />
              <span className="hidden md:inline">تويتر</span>
            </Button>
            <Button variant="outline" size="sm">
              <Share2 className="w-4 h-4 md:ml-2" />
              <span className="hidden md:inline">مشاركة</span>
            </Button>
            <Button variant="outline" size="sm">
              <Printer className="w-4 h-4 md:ml-2" />
              <span className="hidden md:inline">طباعة</span>
            </Button>
          </div>

          {/* Image Gallery */}
          <div className="mb-8">
            <div className="mb-4">
              <ImageWithFallback
                src={galleryImages[selectedImage]}
                alt={article.title}
                className="w-full h-[250px] md:h-[400px] object-cover rounded-lg"
              />
            </div>
            {galleryImages.length > 1 && (
              <div className="grid grid-cols-3 gap-2 md:gap-4">
                {galleryImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`overflow-hidden rounded-lg ${
                      selectedImage === index ? 'ring-2 ring-[#c90000]' : ''
                    }`}
                  >
                    <ImageWithFallback
                      src={img}
                      alt={`صورة ${index + 1}`}
                      className="w-full h-16 md:h-24 object-cover hover:opacity-80 transition-opacity"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Article Excerpt */}
          <div className="bg-muted/50 border-r-4 border-[#c90000] p-4 mb-6">
            <p className="text-lg leading-relaxed">{article.excerpt}</p>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none dark:prose-invert">
            {article.content.split('\\n\\n').map((paragraph, index) => (
              <p key={index} className="mb-4 leading-relaxed text-foreground">
                {paragraph}
              </p>
            ))}
          </div>

          <Separator className="my-8" />

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8 items-center">
            <span className="text-sm text-gray-600">الوسوم:</span>
            <Link to={`/tags/${encodeURIComponent(article.category)}`}>
              <Badge variant="secondary" className="hover:bg-[#c90000] hover:text-white cursor-pointer transition-colors">{article.category}</Badge>
            </Link>
            <Link to="/tags/أخبار">
              <Badge variant="secondary" className="hover:bg-[#c90000] hover:text-white cursor-pointer transition-colors">أخبار</Badge>
            </Link>
            <Link to={`/tags/${encodeURIComponent('الشرق الأوسط')}`}>
              <Badge variant="secondary" className="hover:bg-[#c90000] hover:text-white cursor-pointer transition-colors">الشرق الأوسط</Badge>
            </Link>
            <Link to="/tags" className="text-sm text-[#c90000] hover:underline mr-2">
              عرض جميع الوسوم
            </Link>
          </div>

          {/* Author Box */}
          <Link to={`/author/${1}`} className="block">
            <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 p-4 md:p-8 rounded-lg mb-8 shadow-md hover:shadow-lg transition-all group">
              <div className="flex items-start gap-3 md:gap-6">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-[#c90000] to-[#a00000] rounded-full flex items-center justify-center text-white text-xl md:text-3xl shrink-0 shadow-lg">
                  {article.author.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg md:text-xl group-hover:text-[#c90000] transition-colors">{article.author}</h3>
                    <Badge variant="outline" className="text-xs">كاتب</Badge>
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-2 md:mb-3">
                    صحفي متخصص في {article.category}، يمتلك خبرة واسعة في تغطية الأحداث
                    والتطورات في هذا المجال.
                  </p>
                  <div className="flex items-center gap-2 md:gap-4 text-xs md:text-sm text-gray-500 dark:text-gray-400">
                    <span>45 مقالاً</span>
                    <span>•</span>
                    <span className="text-[#c90000] group-hover:underline">عرض المقالات ←</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Next and Previous Links */}
          <div className="grid md:grid-cols-2 gap-4">
            {previousArticle && (
              <Link
                to={`/article/${previousArticle.id}`}
                className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
              >
                <ChevronRight className="w-6 h-6 text-[#c90000]" />
                <div className="flex-1">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">المقال السابق</p>
                  <p className="group-hover:text-[#c90000] transition-colors line-clamp-2">
                    {previousArticle.title}
                  </p>
                </div>
              </Link>
            )}
            {nextArticle && (
              <Link
                to={`/article/${nextArticle.id}`}
                className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group md:justify-end md:text-left"
              >
                <div className="flex-1 md:text-left">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">المقال التالي</p>
                  <p className="group-hover:text-[#c90000] transition-colors line-clamp-2">
                    {nextArticle.title}
                  </p>
                </div>
                <ChevronLeft className="w-6 h-6 text-[#c90000]" />
              </Link>
            )}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}