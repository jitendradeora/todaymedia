import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";

export default function Footer() {
  const [quickLinksOpen, setQuickLinksOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show scroll to top button when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer className="bg-gray-900 text-white mt-12">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* About */}
            <div className="text-right">
              <h3 className="text-xl mb-4 text-red-500">
                أخبار اليوم
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                موقع إخباري شامل يقدم آخر الأخبار العربية
                والعالمية على مدار الساعة
              </p>
            </div>

            {/* Quick Links - Collapsible on Mobile */}
            <div className="text-right">
              <Collapsible
                open={quickLinksOpen}
                onOpenChange={setQuickLinksOpen}
                className="md:hidden"
              >
                <CollapsibleTrigger className="flex items-center justify-between w-full mb-4">
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      quickLinksOpen ? "rotate-180" : ""
                    }`}
                  />
                  <h4>روابط سريعة</h4>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <ul className="space-y-2 text-sm pb-4">
                    <li>
                      <Link
                        to="/"
                        className="text-gray-400 hover:text-white block"
                      >
                        الرئيسية
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/articles/middle-east"
                        className="text-gray-400 hover:text-white block"
                      >
                        الشرق الأوسط
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/articles/world-news"
                        className="text-gray-400 hover:text-white block"
                      >
                        أخبار العالم
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/articles/economy"
                        className="text-gray-400 hover:text-white block"
                      >
                        اقتصاد
                      </Link>
                    </li>
                  </ul>
                </CollapsibleContent>
              </Collapsible>

              {/* Desktop version */}
              <div className="hidden md:block">
                <h4 className="mb-4">روابط سريعة</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      to="/"
                      className="text-gray-400 hover:text-white"
                    >
                      الرئيسية
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/articles/middle-east"
                      className="text-gray-400 hover:text-white"
                    >
                      الشرق الأوسط
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/articles/world-news"
                      className="text-gray-400 hover:text-white"
                    >
                      أخبار العالم
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/articles/economy"
                      className="text-gray-400 hover:text-white"
                    >
                      اقتصاد
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Categories - Collapsible on Mobile */}
            <div className="text-right">
              <Collapsible
                open={categoriesOpen}
                onOpenChange={setCategoriesOpen}
                className="md:hidden"
              >
                <CollapsibleTrigger className="flex items-center justify-between w-full mb-4">
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      categoriesOpen ? "rotate-180" : ""
                    }`}
                  />
                  <h4>الأقسام</h4>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <ul className="space-y-2 text-sm pb-4">
                    <li>
                      <Link
                        to="/articles/technology"
                        className="text-gray-400 hover:text-white block"
                      >
                        تكنولوجيا
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/articles/sports"
                        className="text-gray-400 hover:text-white block"
                      >
                        رياضة
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/articles/culture"
                        className="text-gray-400 hover:text-white block"
                      >
                        ثقافة
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/videos"
                        className="text-gray-400 hover:text-white block"
                      >
                        فيديو
                      </Link>
                    </li>
                  </ul>
                </CollapsibleContent>
              </Collapsible>

              {/* Desktop version */}
              <div className="hidden md:block">
                <h4 className="mb-4">الأقسام</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      to="/articles/technology"
                      className="text-gray-400 hover:text-white"
                    >
                      تكنولوجيا
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/articles/sports"
                      className="text-gray-400 hover:text-white"
                    >
                      رياضة
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/articles/culture"
                      className="text-gray-400 hover:text-white"
                    >
                      ثقافة
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/videos"
                      className="text-gray-400 hover:text-white"
                    >
                      فيديو
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Social Media */}
            <div className="text-right">
              <h4 className="mb-4">تابعنا</h4>
              <div className="flex gap-3 justify-start">
                <a
                  href="#"
                  className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>جميع الحقوق محفوظة لـ Todaymedia© 2025</p>
            <p>Affiliated with the Arab Media House - London</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 bg-[#c90000] hover:bg-[#a00000] text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-40 group"
          aria-label="العودة إلى الأعلى"
        >
          <ChevronUp className="w-5 h-5" />
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            العودة للأعلى
          </span>
        </button>
      )}
    </>
  );
}