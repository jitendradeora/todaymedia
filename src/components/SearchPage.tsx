import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import NewsCard from './NewsCard';
import { articles } from '../data/articles';
import { Search } from 'lucide-react';
import { Input } from './ui/input';

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchTerm, setSearchTerm] = useState(query);

  useEffect(() => {
    setSearchTerm(query);
  }, [query]);

  const filteredArticles = articles.filter(article => {
    const searchLower = searchTerm.toLowerCase();
    return (
      article.title.toLowerCase().includes(searchLower) ||
      article.excerpt.toLowerCase().includes(searchLower) ||
      article.content.toLowerCase().includes(searchLower) ||
      article.category.toLowerCase().includes(searchLower) ||
      article.author.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl mb-6">نتائج البحث</h1>
          
          <div className="relative max-w-2xl mb-6">
            <Input
              type="text"
              placeholder="ابحث عن الأخبار..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pr-12 pl-4 py-3 text-lg text-right"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>

          {searchTerm && (
            <p className="text-gray-600">
              {filteredArticles.length} نتيجة للبحث عن "{searchTerm}"
            </p>
          )}
        </div>

        {filteredArticles.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <NewsCard key={article.id} {...article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg mb-2">لم يتم العثور على نتائج</p>
            <p className="text-gray-400">جرب البحث بكلمات مختلفة</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
