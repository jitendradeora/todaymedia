# SEO Configuration Guide - اليوم ميديا

## Overview

Complete SEO implementation for the Arabic news website with comprehensive meta tags, Open Graph, Twitter Cards, and JSON-LD schema markup following Google News and schema.org standards.

## Features Implemented

✅ **Meta Tags**: Title, Description, Canonical, Robots  
✅ **Open Graph**: Facebook & LinkedIn optimization  
✅ **Twitter Cards**: Large image cards  
✅ **JSON-LD Schema**: NewsArticle, Website, Organization, BreadcrumbList, CollectionPage  
✅ **Arabic RTL Support**: Full RTL language and locale settings  
✅ **Image Fallbacks**: Automatic fallback to logo for OG/Twitter images  
✅ **Pagination Support**: Ready for prev/next page meta tags  
✅ **Google News Optimization**: News-specific keywords and metadata

---

## Installation

The SEO component uses `react-helmet-async` for managing head tags:

```bash
npm install react-helmet-async
```

Already integrated in `/App.tsx` with `<HelmetProvider>` wrapper.

---

## Component Usage

### Home Page Example

```tsx
import SEO, {
  generateWebsiteSchema,
  generateOrganizationSchema,
} from "./SEO";

<SEO
  title="اليوم ميديا"
  description="اليوم ميديا هو موقع إلكتروني إخباري يعرض مختلف الأخبار السياسية والمنوعة."
  canonical="https://todaymedia.net"
  ogType="website"
  ogImage="https://todaymedia.net/assets/img/logo.webp"
  ogImageAlt="اليوم ميديا - موقع إخباري شامل"
  schema={[
    generateWebsiteSchema("https://todaymedia.net"),
    generateOrganizationSchema("https://todaymedia.net"),
  ]}
/>;
```

### Article Details Page Example

```tsx
import SEO, {
  generateNewsArticleSchema,
  generateBreadcrumbSchema,
  generateOrganizationSchema,
} from "./SEO";

<SEO
  title={`${article.title} | اليوم ميديا`}
  description={article.excerpt}
  canonical={`https://todaymedia.net/article/${article.id}`}
  ogType="article"
  ogImage={article.image}
  ogImageAlt={article.title}
  articlePublishedTime="2025-10-26T10:00:00.000Z"
  articleModifiedTime="2025-10-26T15:30:00.000Z"
  articleAuthor={article.author}
  articleSection={article.category}
  articleTags={["الاقتصاد", "أخبار", "الشرق الأوسط"]}
  schema={[
    generateNewsArticleSchema({
      title: article.title,
      description: article.excerpt,
      image: article.image,
      datePublished: "2025-10-26T10:00:00.000Z",
      dateModified: "2025-10-26T15:30:00.000Z",
      authorName: article.author,
      category: article.category,
      url: `https://todaymedia.net/article/${article.id}`,
      siteUrl: "https://todaymedia.net",
    }),
    generateBreadcrumbSchema([
      { name: "الرئيسية", url: "https://todaymedia.net" },
      {
        name: article.category,
        url: `https://todaymedia.net/articles/${article.categorySlug}`,
      },
      {
        name: article.title,
        url: `https://todaymedia.net/article/${article.id}`,
      },
    ]),
    generateOrganizationSchema("https://todaymedia.net"),
  ]}
/>;
```

### Category Listing Page Example

```tsx
import SEO, {
  generateCollectionPageSchema,
  generateBreadcrumbSchema,
  generateOrganizationSchema,
} from "./SEO";

<SEO
  title="اقتصاد - آخر الأخبار والمقالات | اليوم ميديا"
  description="تصفح جميع أخبار ومقالات اقتصاد على موقع اليوم ميديا. تغطية شاملة ومحدثة على مدار الساعة"
  canonical="https://todaymedia.net/articles/economy"
  ogType="website"
  ogImage={
    firstArticle?.image ||
    "https://todaymedia.net/assets/img/logo.webp"
  }
  schema={[
    generateCollectionPageSchema({
      title: "اقتصاد",
      description: "تصفح جميع أخبار ومقالات اقتصاد",
      url: "https://todaymedia.net/articles/economy",
      siteUrl: "https://todaymedia.net",
    }),
    generateBreadcrumbSchema([
      { name: "الرئيسية", url: "https://todaymedia.net" },
      {
        name: "اقتصاد",
        url: "https://todaymedia.net/articles/economy",
      },
    ]),
    generateOrganizationSchema("https://todaymedia.net"),
  ]}
/>;
```

### Pagination Support

For listing pages with pagination:

```tsx
<SEO
  title="اقتصاد - صفحة 2 | اليوم ميديا"
  description="تصفح أخبار اقتصاد - الصفحة 2"
  canonical="https://todaymedia.net/articles/economy?page=2"
  prevPage="https://todaymedia.net/articles/economy?page=1"
  nextPage="https://todaymedia.net/articles/economy?page=3"
  robots="index, follow"
  // ... other props
/>
```

---

## SEO Component Props

### Basic Meta

- `title` (required): Page title (60-70 characters recommended)
- `description` (required): Meta description (150-160 characters recommended)
- `canonical` (optional): Canonical URL (auto-generated from window.location)
- `robots` (optional): Default: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"

### Open Graph (Facebook/LinkedIn)

- `ogType` (optional): 'website' or 'article' (default: 'website')
- `ogTitle` (optional): OG title (defaults to main title)
- `ogDescription` (optional): OG description (defaults to main description)
- `ogImage` (optional): OG image URL (1200x630px recommended)
- `ogImageAlt` (optional): Alt text for OG image
- `ogUrl` (optional): OG URL (defaults to canonical)

### Twitter Card

- `twitterCard` (optional): 'summary' or 'summary_large_image' (default: 'summary_large_image')
- `twitterTitle` (optional): Twitter title (defaults to ogTitle)
- `twitterDescription` (optional): Twitter description (defaults to ogDescription)
- `twitterImage` (optional): Twitter image (defaults to ogImage)
- `twitterImageAlt` (optional): Alt text for Twitter image

### Article Specific (when ogType="article")

- `articlePublishedTime` (optional): ISO 8601 date string
- `articleModifiedTime` (optional): ISO 8601 date string
- `articleAuthor` (optional): Author name
- `articleSection` (optional): Category/section name
- `articleTags` (optional): Array of tag strings

### Pagination

- `prevPage` (optional): URL of previous page
- `nextPage` (optional): URL of next page

### Schema

- `schema` (optional): Single schema object or array of schema objects

---

## Schema Markup Functions

### 1. generateOrganizationSchema()

Creates Organization schema for the website.

```tsx
generateOrganizationSchema("https://todaymedia.net");
```

**Output:**

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "اليوم ميديا",
  "alternateName": "Today Media",
  "url": "https://todaymedia.net",
  "logo": {
    "@type": "ImageObject",
    "url": "https://todaymedia.net/assets/img/logo.webp",
    "width": 600,
    "height": 60
  },
  "sameAs": [
    "https://www.facebook.com/TodaymediaT",
    "https://x.com/TodaymediaT",
    "https://www.instagram.com/toda.ymedia/",
    "https://www.youtube.com/channel/UCrFx2VgF0Pw33-_dC5K8EQg"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "خدمة العملاء",
    "email": "info@todaymedia.net"
  }
}
```

### 2. generateWebsiteSchema()

Creates WebSite schema with search functionality.

```tsx
generateWebsiteSchema("https://todaymedia.net");
```

**Output:**

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "اليوم ميديا",
  "alternateName": "Today Media",
  "url": "https://todaymedia.net",
  "description": "اليوم ميديا هو موقع إلكتروني إخباري يعرض مختلف الأخبار السياسية والمنوعة.",
  "inLanguage": "ar",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://todaymedia.net/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  },
  "publisher": { /* Organization schema */ }
}
```

### 3. generateNewsArticleSchema()

Creates NewsArticle schema for individual articles.

```tsx
generateNewsArticleSchema({
  title: "عنوان المقال",
  description: "وصف المقال",
  image: "https://example.com/image.jpg",
  datePublished: "2025-10-26T10:00:00.000Z",
  dateModified: "2025-10-26T15:30:00.000Z",
  authorName: "محمد أحمد",
  category: "اقتصاد",
  url: "https://todaymedia.net/article/123",
  siteUrl: "https://todaymedia.net",
});
```

**Output:**

```json
{
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "headline": "عنوان المقال",
  "description": "وصف المقال",
  "image": {
    "@type": "ImageObject",
    "url": "https://example.com/image.jpg",
    "width": 1200,
    "height": 630
  },
  "datePublished": "2025-10-26T10:00:00.000Z",
  "dateModified": "2025-10-26T15:30:00.000Z",
  "author": {
    "@type": "Person",
    "name": "محمد أحمد",
    "url": "https://todaymedia.net/author/محمد%20أحمد"
  },
  "publisher": { /* Organization schema */ },
  "articleSection": "اقتصاد",
  "inLanguage": "ar",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://todaymedia.net/article/123"
  }
}
```

### 4. generateBreadcrumbSchema()

Creates BreadcrumbList schema for navigation.

```tsx
generateBreadcrumbSchema([
  { name: "الرئيسية", url: "https://todaymedia.net" },
  {
    name: "اقتصاد",
    url: "https://todaymedia.net/articles/economy",
  },
  {
    name: "عنوان المقال",
    url: "https://todaymedia.net/article/123",
  },
]);
```

**Output:**

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "الرئيسية",
      "item": "https://todaymedia.net"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "اقتصاد",
      "item": "https://todaymedia.net/articles/economy"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "عنوان المقال",
      "item": "https://todaymedia.net/article/123"
    }
  ]
}
```

### 5. generateCollectionPageSchema()

Creates CollectionPage schema for category/tag listings.

```tsx
generateCollectionPageSchema({
  title: "اقتصاد",
  description: "تصفح جميع أخبار ومقالات اقتصاد",
  url: "https://todaymedia.net/articles/economy",
  siteUrl: "https://todaymedia.net",
});
```

**Output:**

```json
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "اقتصاد",
  "description": "تصفح جميع أخبار ومقالات اقتصاد",
  "url": "https://todaymedia.net/articles/economy",
  "inLanguage": "ar",
  "isPartOf": {
    "@type": "WebSite",
    "url": "https://todaymedia.net",
    "name": "اليوم ميديا"
  }
}
```

---

## Best Practices

### Titles

- **Home Page**: 50-60 characters, include main keywords
- **Articles**: Include article title + site name, max 70 characters
- **Categories**: Category name + context + site name

### Descriptions

- **Length**: 150-160 characters for optimal display
- **Content**: Compelling summary with relevant keywords
- **CTA**: Include action words when appropriate

### Images

- **Open Graph**: 1200x630px (1.91:1 ratio)
- **Twitter**: 1200x675px or 1200x630px
- **Format**: JPG, PNG, or WebP
- **Size**: Under 5MB (preferably under 300KB)
- **Alt Text**: Always provide descriptive alt text

### Dates

- Use ISO 8601 format: `YYYY-MM-DDTHH:mm:ss.sssZ`
- Example: `2025-10-26T10:00:00.000Z`
- Include timezone information

### URLs

- **Canonical**: Always set canonical URLs to avoid duplicate content
- **Protocol**: Use HTTPS
- **Structure**: Clean, readable URLs in Arabic or transliterated form

### Arabic SEO

- Set `lang="ar"` and `dir="rtl"` in HTML tag (handled by SEO component)
- Use `ar_AR` locale for Open Graph
- Include Arabic keywords in meta descriptions
- Ensure proper UTF-8 encoding

---

## Testing & Validation

### Tools to Validate SEO

1. **Google Rich Results Test**  
   https://search.google.com/test/rich-results

2. **Facebook Sharing Debugger**  
   https://developers.facebook.com/tools/debug/

3. **Twitter Card Validator**  
   https://cards-dev.twitter.com/validator

4. **Schema.org Validator**  
   https://validator.schema.org/

5. **Google Search Console**  
   Submit sitemap and monitor performance

### Validation Commands

```bash
# View generated HTML head
curl https://todaymedia.net | grep -A 50 "<head>"

# Test specific article
curl https://todaymedia.net/article/1 | grep "application/ld+json"
```

---

## Configuration

### Update Site URL

Replace `https://todaymedia.net` with your actual domain in:

- `/components/SEO.tsx` (default values)
- `/components/HomePage.tsx`
- `/components/ArticleDetailsPage.tsx`
- `/components/ArticleListingPage.tsx`

### Update Social Media Handles

In `/components/SEO.tsx`, update:

```tsx
const twitterHandle = "@Todaymedia"; // Your Twitter handle
```

In `generateOrganizationSchema()`, update:

```tsx
sameAs: [
  "https://facebook.com/your-page",
  "https://twitter.com/your-handle",
  "https://instagram.com/your-profile",
  "https://youtube.com/your-channel",
];
```

---

## Google News Optimization

The SEO component includes Google News specific optimizations:

1. **news_keywords meta tag**: Populated from article tags
2. **Article schema**: Uses NewsArticle type (not just Article)
3. **Publisher information**: Included in schema markup
4. **Author information**: Structured data for author
5. **Publication dates**: Precise ISO 8601 timestamps
6. **Language specification**: Arabic language tags

---

## Social Sharing Preview

### Facebook/LinkedIn Preview

- Title: From `ogTitle` or `title`
- Description: From `ogDescription` or `description`
- Image: 1200x630px from `ogImage`
- Domain: Displayed from canonical URL

### Twitter Preview

- Title: From `twitterTitle` or `ogTitle` or `title`
- Description: From `twitterDescription` or `ogDescription` or `description`
- Image: Large card from `twitterImage` or `ogImage`
- Card type: `summary_large_image` by default

---

## Troubleshooting

### Schema Errors

- Validate JSON-LD with schema.org validator
- Ensure all required fields are present
- Check date formats (ISO 8601)
- Verify image URLs are absolute

### Open Graph Not Updating

- Clear Facebook cache in Sharing Debugger
- Allow 24-48 hours for updates
- Verify og:url matches canonical URL

### Missing Rich Results

- Check Google Search Console for errors
- Ensure schema is valid
- Wait for Google to recrawl (can take weeks)
- Use Google Rich Results Test tool

---

## Performance

The SEO component is optimized for performance:

- ✅ Client-side rendering with react-helmet-async
- ✅ No impact on initial page load
- ✅ Efficient schema generation
- ✅ Minimal bundle size increase (~15KB)

---

## Future Enhancements

Potential additions:

- [ ] AMP (Accelerated Mobile Pages) support
- [ ] RSS feed generation
- [ ] Sitemap.xml automation
- [ ] Multi-language support expansion
- [ ] Video schema markup for video pages
- [ ] FAQ schema for question pages
- [ ] Review/Rating schema

---

## Support

For issues or questions:

- Check validation tools listed above
- Review schema.org documentation
- Consult Google Search Central guidelines
- Test with Google Rich Results Test

---

**Last Updated**: October 26, 2025  
**Version**: 1.0.0