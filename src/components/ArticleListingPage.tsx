import { useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import SEO, { generateCollectionPageSchema, generateBreadcrumbSchema, generateOrganizationSchema } from './SEO';
import NewsCard from './NewsCard';
import { articles, getCategoryName } from '../data/articles';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from './ui/breadcrumb';

export default function ArticleListingPage() {
  const siteUrl = 'https://todaymedia.net'; // Replace with your actual domain
  const { category } = useParams<{ category: string }>();
  const categoryName = getCategoryName(category || '');
  
  // Filter articles by category
  const filteredArticles = category 
    ? articles.filter(article => article.categorySlug === category)
    : articles;
  
  // Generate URLs
  const categoryUrl = `${siteUrl}/articles/${category}`;
  
  // Generate breadcrumb items
  const breadcrumbItems = [
    { name: 'الرئيسية', url: siteUrl },
    { name: categoryName, url: categoryUrl },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* SEO Meta Tags for Category Listing */}
      <SEO
        title={`${categoryName} - آخر الأخبار والمقالات | اليوم ميديا`}
        description={`تصفح جميع أخبار ومقالات ${categoryName} على موقع اليوم ميديا. تغطية شاملة ومحدثة على مدار الساعة`}
        canonical={categoryUrl}
        ogType="website"
        ogImage={filteredArticles[0]?.image || `${siteUrl}/assets/img/logo.webp`}
        ogImageAlt={`${categoryName} - اليوم ميديا`}
        schema={[
          generateCollectionPageSchema({
            title: categoryName,
            description: `تصفح جميع أخبار ومقالات ${categoryName}`,
            url: categoryUrl,
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
              <BreadcrumbPage>{categoryName}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl mb-2">{categoryName}</h1>
          <p className="text-gray-600">
            {filteredArticles.length} {filteredArticles.length === 1 ? 'مقال' : 'مقالات'}
          </p>
        </div>

        {/* Articles Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <NewsCard key={article.id} {...article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">لا توجد مقالات في هذا القسم حاليًا</p>
          </div>
        )}

        {/* Load More Button - for demonstration */}
        {filteredArticles.length > 0 && (
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
              تحميل المزيد
            </button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}