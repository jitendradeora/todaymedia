import { useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import NewsCard from './NewsCard';
import { authors } from '../data/authors';
import { articles } from '../data/articles';
import { User, FileText } from 'lucide-react';

export default function AuthorPage() {
  const { id } = useParams<{ id: string }>();
  const author = authors.find(a => a.id === Number(id));
  
  if (!author) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl mb-4">الكاتب غير موجود</h1>
        </div>
        <Footer />
      </div>
    );
  }

  // Filter articles by author
  const authorArticles = articles.filter(a => a.author === author.name);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Author Profile */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 mb-8 border border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-32 h-32 bg-[#c90000] rounded-full flex items-center justify-center text-white text-5xl shrink-0">
              {author.name.charAt(0)}
            </div>
            <div className="flex-1">
              <h1 className="text-3xl mb-2">{author.name}</h1>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{author.role}</p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">{author.bio}</p>
              <div className="flex gap-6 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span>{author.articles} مقال</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Author Articles */}
        <div className="mb-6">
          <h2 className="text-2xl mb-4">المقالات</h2>
        </div>
        
        {authorArticles.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {authorArticles.map((article) => (
              <NewsCard key={article.id} {...article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">لا توجد مقالات لهذا الكاتب حاليًا</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}