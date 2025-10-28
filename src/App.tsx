import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async@2.0.0';
import HomePage from './components/HomePage';
import ArticleListingPage from './components/ArticleListingPage';
import ArticleDetailsPage from './components/ArticleDetailsPage';
import VideoPage from './components/VideoPage';
import SearchPage from './components/SearchPage';
import AuthorPage from './components/AuthorPage';
import TagsPage from './components/TagsPage';
import ContactPage from './components/ContactPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import AboutPage from './components/AboutPage';
import { ThemeProvider } from './components/ThemeProvider';

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/preview_page.html" element={<HomePage />} />
            <Route path="/articles/:category" element={<ArticleListingPage />} />
            <Route path="/article/:id" element={<ArticleDetailsPage />} />
            <Route path="/videos" element={<VideoPage />} />
            <Route path="/author/:id" element={<AuthorPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/tags" element={<TagsPage />} />
            <Route path="/tags/:tag" element={<TagsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}