import { Link, useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import NewsCard from './NewsCard';
import { articles } from '../data/articles';
import { tagsWithCount } from '../data/tags';
import { Badge } from './ui/badge';
import { Tag } from 'lucide-react';

export default function TagsPage() {
  const { tag } = useParams<{ tag?: string }>();

  // If specific tag is selected, show articles for that tag
  if (tag) {
    const decodedTag = decodeURIComponent(tag);
    const tagArticles = articles.filter(a => 
      a.category === decodedTag || 
      a.title.includes(decodedTag) || 
      a.excerpt.includes(decodedTag)
    );

    return (
      <div className="min-h-screen">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Tag className="w-8 h-8 text-[#c90000]" />
              <h1 className="text-3xl">الوسم: {decodedTag}</h1>
            </div>
            <p className="text-gray-600">
              {tagArticles.length} مقال
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tagArticles.map((article) => (
              <NewsCard key={article.id} {...article} />
            ))}
          </div>

          {tagArticles.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">لا توجد مقالات لهذا الوسم</p>
            </div>
          )}
        </main>

        <Footer />
      </div>
    );
  }

  // Show all tags
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Tag className="w-8 h-8 text-[#c90000]" />
            <h1 className="text-3xl">جميع الوسوم</h1>
          </div>
          <p className="text-gray-600">
            تصفح المقالات حسب الوسوم
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {tagsWithCount.map((tag) => (
            <Link
              key={tag.name}
              to={`/tags/${encodeURIComponent(tag.name)}`}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-right"
            >
              <div className="flex items-center justify-between mb-2">
                <Badge variant="secondary" className="text-sm">{tag.count}</Badge>
                <h3 className="text-lg">{tag.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
