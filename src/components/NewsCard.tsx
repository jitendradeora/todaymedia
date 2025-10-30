import { Link } from "react-router-dom";
import { Clock } from "lucide-react";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
}

export default function NewsCard(article: Article) {
  return (
    <Link to={`/article/${article.id}`} className="group block h-full">
      <div className="bg-white dark:bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all h-full flex flex-col">
        <ImageWithFallback
          src={article.image}
          alt={article.title}
          className="w-full h-48 lg:h-58 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="p-4 text-right flex flex-col flex-grow">
          <Badge variant="secondary" className="mb-2 self-start">
            {article.category}
          </Badge>
          <h3 className="mb-2 leading-snug group-hover:text-[#c90000] transition-colors line-clamp-2 font-semibold">
            {article.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2 flex-grow">
            {article.excerpt}
          </p>
          <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mt-auto">
            <div className="flex items-center gap-2">
              <Clock className="w-3 h-3" />
              <span>{article.readTime}</span>
            </div>
            <span>{article.date}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
