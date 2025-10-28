import { Link, useNavigate } from "react-router-dom";
import {
  Search,
  Menu,
  Moon,
  Sun,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  X,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "./ui/sheet";
import { useState, useEffect, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { useTheme } from "./ThemeProvider";
import logo from "../assets/img/logo.webp";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileSearchOpen, setMobileSearchOpen] =
    useState(false);
  const [mobileSearchQuery, setMobileSearchQuery] =
    useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [openDropdown, setOpenDropdown] = useState<
    string | null
  >(null);
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  // Handle scroll to show/hide header
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show header when scrolling up, hide when scrolling down
      if (
        currentScrollY < lastScrollY ||
        currentScrollY < 100
      ) {
        setIsVisible(true);
      } else if (
        currentScrollY > lastScrollY &&
        currentScrollY > 100
      ) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  const handleMobileSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (mobileSearchQuery.trim()) {
      navigate(
        `/search?q=${encodeURIComponent(mobileSearchQuery)}`,
      );
      setMobileSearchQuery("");
      setMobileSearchOpen(false);
    }
  };

  const categories = [
    { name: "الرئيسية", path: "/" },
    {
      name: "الشرق الأوسط",
      path: "/articles/middle-east",
      subcategories: [
        {
          name: "سوريا",
          path: "/articles/middle-east/syria",
          subcategories: [
            {
              name: "دمشق",
              path: "/articles/middle-east/syria/damascus",
            },
            {
              name: "حلب",
              path: "/articles/middle-east/syria/aleppo",
            },
            {
              name: "حمص",
              path: "/articles/middle-east/syria/homs",
            },
          ],
        },
        {
          name: "العراق",
          path: "/articles/middle-east/iraq",
          subcategories: [
            {
              name: "بغداد",
              path: "/articles/middle-east/iraq/baghdad",
            },
            {
              name: "البصرة",
              path: "/articles/middle-east/iraq/basra",
            },
            {
              name: "أربيل",
              path: "/articles/middle-east/iraq/erbil",
            },
          ],
        },
        {
          name: "فلسطين",
          path: "/articles/middle-east/palestine",
          subcategories: [
            {
              name: "القدس",
              path: "/articles/middle-east/palestine/jerusalem",
            },
            {
              name: "غزة",
              path: "/articles/middle-east/palestine/gaza",
            },
            {
              name: "الضفة الغربية",
              path: "/articles/middle-east/palestine/west-bank",
            },
          ],
        },
        {
          name: "لبنان",
          path: "/articles/middle-east/lebanon",
        },
        {
          name: "الأردن",
          path: "/articles/middle-east/jordan",
        },
        { name: "اليمن", path: "/articles/middle-east/yemen" },
      ],
    },
    {
      name: "أخبار",
      path: "/articles/news",
      subcategories: [
        { name: "محلية", path: "/articles/news/local" },
        { name: "عربية", path: "/articles/news/arab" },
        { name: "عالمية", path: "/articles/news/world" },
      ],
    },
    { name: "تحليلات", path: "/articles/analysis" },
    {
      name: "اقتصاد",
      path: "/articles/economy",
      subcategories: [
        {
          name: "أسواق",
          path: "/articles/economy/markets",
          subcategories: [
            {
              name: "بورصة",
              path: "/articles/economy/markets/stock",
            },
            {
              name: "عملات",
              path: "/articles/economy/markets/currencies",
            },
            {
              name: "سلع",
              path: "/articles/economy/markets/commodities",
            },
          ],
        },
        { name: "شركات", path: "/articles/economy/companies" },
        { name: "بنوك", path: "/articles/economy/banks" },
        {
          name: "عقارات",
          path: "/articles/economy/real-estate",
        },
      ],
    },
    {
      name: "تكنولوجيا",
      path: "/articles/technology",
      subcategories: [
        {
          name: "هواتف ذكية",
          path: "/articles/technology/smartphones",
        },
        {
          name: "حواسيب",
          path: "/articles/technology/computers",
        },
        {
          name: "ذكاء اصطناعي",
          path: "/articles/technology/ai",
        },
        { name: "ألعاب", path: "/articles/technology/games" },
      ],
    },
    { name: "منوعات", path: "/articles/variety" },
    {
      name: "رياضة",
      path: "/articles/sports",
      subcategories: [
        {
          name: "كرة القدم",
          path: "/articles/sports/football",
          subcategories: [
            {
              name: "دوريات عربية",
              path: "/articles/sports/football/arab-leagues",
            },
            {
              name: "دوريات أوروبية",
              path: "/articles/sports/football/european-leagues",
            },
            {
              name: "كأس العالم",
              path: "/articles/sports/football/world-cup",
            },
          ],
        },
        {
          name: "كرة السلة",
          path: "/articles/sports/basketball",
        },
        { name: "تنس", path: "/articles/sports/tennis" },
        { name: "سباقات", path: "/articles/sports/racing" },
      ],
    },
    { name: "آراء", path: "/articles/opinions" },
    { name: "فيديو", path: "/videos" },
  ];

  return (
    <header
      className={`bg-background shadow-sm sticky top-0 z-50 border-b border-border transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      {/* Top Bar */}
      <div className="bg-[#c90000] text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-right">
          <div className="flex gap-4 items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="h-8 w-8 text-white hover:bg-white/20"
            >
              {theme === "light" ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </Button>
          </div>
          <div className="flex gap-4">
            <span className="text-sm">
              الخميس 23 أكتوبر 2025
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileSearchOpen(true)}
            >
              <Search className="w-5 h-5" />
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] sm:w-[400px] p-0 flex flex-col"
              >
                {/* Custom close button on left */}
                <SheetClose className="absolute right-auto left-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary z-50">
                  <X className="h-6 w-6 text-white" />
                  <span className="sr-only">إغلاق</span>
                </SheetClose>

                <div className="bg-gradient-to-b from-[#c90000] to-[#a00000] p-6 text-white">
                  <h2 className="text-2xl text-right mb-2">
                    القائمة الرئيسية
                  </h2>
                  <p className="text-sm text-white/80 text-right">
                    تصفح الأقسام
                  </p>
                </div>
                <nav className="flex-1 flex flex-col p-4 overflow-y-auto">
                  {categories.map((category) => (
                    <Link
                      key={category.path}
                      to={category.path}
                      onClick={() => setIsOpen(false)}
                      className="text-lg py-2.5 px-4 hover:bg-accent rounded-lg transition-colors text-right border-b border-border last:border-0 group"
                    >
                      <span className="group-hover:text-[#c90000] transition-colors">
                        {category.name}
                      </span>
                    </Link>
                  ))}
                </nav>

                {/* Social Icons at bottom */}
                <div className="border-t border-border p-4 bg-muted/30">
                  <div className="flex gap-2 justify-end">
                    <a
                      href="#"
                      className="w-9 h-9 bg-[#1877f2] rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="w-9 h-9 bg-[#1da1f2] rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="w-9 h-9 bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="w-9 h-9 bg-[#ff0000] rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                    >
                      <Youtube className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="اليوم ميديا"
              className="h-16 w-auto"
            />
          </Link>

          <form
            onSubmit={handleSearch}
            className="relative hidden md:block"
          >
            <input
              type="text"
              placeholder="ابحث عن الأخبار..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pr-10 pl-4 py-2 border border-border bg-input-background rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-[#c90000] text-right"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            >
              <Search className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>

      {/* Mobile Search Dialog */}
      <Dialog
        open={mobileSearchOpen}
        onOpenChange={setMobileSearchOpen}
      >
        <DialogContent className="top-0 translate-y-0 max-w-full w-full rounded-none border-0 p-4">
          <DialogHeader>
            <DialogTitle className="text-right">
              بحث
            </DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground text-right">
              ابحث عن الأخبار التي تهمك
            </DialogDescription>
          </DialogHeader>
          <form
            onSubmit={handleMobileSearch}
            className="relative"
          >
            <Input
              type="text"
              placeholder="ابحث عن الأخبار..."
              value={mobileSearchQuery}
              onChange={(e) =>
                setMobileSearchQuery(e.target.value)
              }
              className="pr-10 pl-4 py-3 text-lg text-right"
              autoFocus
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            >
              <Search className="w-5 h-5" />
            </button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Navigation - Desktop */}
      <nav className="border-t border-border hidden lg:block bg-background relative">
        <div className="container mx-auto px-4">
          <div className="flex gap-8 justify-start overflow-visible">
            {categories.map((category, categoryIndex) => (
              <div
                key={category.path}
                className="relative group/main"
              >
                <Link
                  to={category.path}
                  className="py-4 font-bold text-foreground hover:text-[#c90000] whitespace-nowrap transition-colors flex items-center gap-1"
                >
                  {category.name}
                  {category.subcategories && (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </Link>

                {/* First Level Dropdown */}
                {category.subcategories && (
                  <div
                    className="absolute top-full right-0 mt-0 bg-background border border-border shadow-xl rounded-lg min-w-[220px] py-2 opacity-0 invisible group-hover/main:opacity-100 group-hover/main:visible transition-all duration-200 pointer-events-none group-hover/main:pointer-events-auto"
                    style={{ zIndex: 9999 }}
                  >
                    {category.subcategories.map(
                      (sub, subIndex) => (
                        <div
                          key={sub.path}
                          className="relative group/sub"
                        >
                          <Link
                            to={sub.path}
                            className="block px-4 py-2.5 text-right hover:bg-accent hover:text-[#c90000] transition-colors flex items-center justify-between gap-2"
                          >
                            {sub.subcategories && (
                              <ChevronLeft className="w-4 h-4 flex-shrink-0" />
                            )}
                            <span className="flex-1">
                              {sub.name}
                            </span>
                          </Link>

                          {/* Second Level Dropdown - Smart positioning based on parent position */}
                          {sub.subcategories && (
                            <div
                              className={`absolute top-0 bg-background border border-border shadow-xl rounded-lg min-w-[200px] py-2 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 pointer-events-none group-hover/sub:pointer-events-auto ${
                                categoryIndex < 2
                                  ? "left-full ml-1"
                                  : "right-full mr-1"
                              }`}
                              style={{ zIndex: 9999 }}
                            >
                              {sub.subcategories.map(
                                (subSub) => (
                                  <Link
                                    key={subSub.path}
                                    to={subSub.path}
                                    className="block px-4 py-2.5 text-right hover:bg-accent hover:text-[#c90000] transition-colors"
                                  >
                                    {subSub.name}
                                  </Link>
                                ),
                              )}
                            </div>
                          )}
                        </div>
                      ),
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}