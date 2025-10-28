export interface Author {
  id: number;
  name: string;
  bio: string;
  image: string;
  role: string;
  articles: number;
}

export const authors: Author[] = [
  {
    id: 1,
    name: 'د. أحمد السالم',
    bio: 'كاتب وباحث متخصص في قضايا التعليم والتنمية البشرية، حاصل على دكتوراه في علم الاجتماع من جامعة القاهرة',
    image: '',
    role: 'كاتب رأي',
    articles: 45
  },
  {
    id: 2,
    name: 'د. خالد المنصور',
    bio: 'محلل اقتصادي وخبير في الشؤون المالية، يكتب بانتظام عن التحولات الاقتصادية في المنطقة',
    image: '',
    role: 'محلل اقتصادي',
    articles: 38
  },
  {
    id: 3,
    name: 'سارة الكريم',
    bio: 'صحفية متخصصة في الشؤون الاقتصادية والمالية، تمتلك خبرة تزيد عن 10 سنوات في العمل الصحفي',
    image: '',
    role: 'كاتبة رأي',
    articles: 52
  },
];
