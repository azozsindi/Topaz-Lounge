export interface MenuItem {
  id: string;
  nameAr: string;
  nameEn: string;
  category: 'hot-coffee' | 'cold-drinks' | 'tea' | 'desserts' | 'bites';
  price: number;
  descriptionAr: string;
  notes?: string;
  isSignature?: boolean;
  calories?: number;
  badge?: string;
  imageUrl: string;
}

export const MENU_CATEGORIES = [
  { id: 'all', labelAr: 'الكل', labelEn: 'All' },
  { id: 'hot-coffee', labelAr: 'قهوة مختصة', labelEn: 'Specialty Coffee' },
  { id: 'cold-drinks', labelAr: 'مشروبات باردة', labelEn: 'Cold Drinks' },
  { id: 'tea', labelAr: 'الشاهي الفاخر', labelEn: 'Artisan Tea' },
  { id: 'desserts', labelAr: 'الحلويات', labelEn: 'Desserts' },
  { id: 'bites', labelAr: 'المخبوزات', labelEn: 'Bakery' },
] as const;

export const MENU_ITEMS: MenuItem[] = [
  // 1. Hot Specialty Coffee
  {
    id: 'v60-ethiopian',
    nameAr: 'V60 إثيوبي قوجي',
    nameEn: 'V60 Ethiopian Guji',
    category: 'hot-coffee',
    price: 24,
    descriptionAr: 'قهوة مقطرة خفيفة القوام بنوتات زهرية وإيحاءات الخوخ والياسمين وقوام حريري متوازن.',
    notes: 'إيحاءات: خوخ · ياسمين · حمضيات ناعمة',
    isSignature: true,
    calories: 5,
    badge: 'الأكثر طلباً',
    imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'flat-white',
    nameAr: 'فلات وايت',
    nameEn: 'Flat White',
    category: 'hot-coffee',
    price: 20,
    descriptionAr: 'دبل شوت إسبريسو كولومبي مع حليب مبخر ميكروفوم متجانس بنكهة غنية ومخملية.',
    notes: 'نكهة مركزة وقوام حريري',
    calories: 120,
    imageUrl: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'cortado',
    nameAr: 'كورتادو',
    nameEn: 'Cortado',
    category: 'hot-coffee',
    price: 19,
    descriptionAr: 'توازن متساوٍ ومتقن بنسبة 1:1 بين الإسبريسو المركز والحليب الدافئ المبخر بدقة.',
    notes: 'كثافة نكهة الشوكولاتة الداكنة',
    calories: 75,
    imageUrl: 'https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'cappuccino',
    nameAr: 'كابتشينو كلاسيك',
    nameEn: 'Classic Cappuccino',
    category: 'hot-coffee',
    price: 20,
    descriptionAr: 'إسبريسو غني برغوة حليب كريمية كثيفة متناغمة مع رشة كاكاو سويسري خفيفة.',
    calories: 115,
    imageUrl: 'https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?q=80&w=800&auto=format&fit=crop',
  },

  // 2. Cold & Signature Drinks
  {
    id: 'topaz-coldbrew',
    nameAr: 'كولد برو توباز',
    nameEn: 'Topaz Signature Cold Brew',
    category: 'cold-drinks',
    price: 26,
    descriptionAr: 'منقوع القهوة المختصة الباردة لمدة 18 ساعة، تقدم في كأس كريستالي مع كرة ثلج وقشرة برتقال.',
    notes: 'نكهة صافية وانتعاش فائق',
    isSignature: true,
    badge: 'سيجنتشر توباز',
    calories: 8,
    imageUrl: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'iced-spanish-latte',
    nameAr: 'آيس سبانش لاتيه',
    nameEn: 'Iced Spanish Latte',
    category: 'cold-drinks',
    price: 24,
    descriptionAr: 'طبقات متدرجة من الإسبريسو الكولومبي والحليب البارد مع صوص الحليب المكثف المكرمل.',
    calories: 220,
    badge: 'مفضل السهرات',
    imageUrl: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'iced-matcha',
    nameAr: 'آيس ماتشا يابانية',
    nameEn: 'Iced Ceremonial Matcha',
    category: 'cold-drinks',
    price: 26,
    descriptionAr: 'بودرة ماتشا احتفالية نقية من مقاطعة أوجي مع حليب الشوفان البارد ونكهة عشبية متوازنة.',
    calories: 130,
    imageUrl: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'passion-mojito',
    nameAr: 'موهيتو الباشن فروت',
    nameEn: 'Passion Fruit Refresher',
    category: 'cold-drinks',
    price: 22,
    descriptionAr: 'لب الباشن فروت الطبيعي مع أوراق النعناع الطازج والمياه الفوارة وشرائح الليمون الأخضر.',
    notes: 'خالٍ من الكافيين · انتعاش صيفي',
    calories: 85,
    imageUrl: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop',
  },

  // 3. Artisanal Teas (الشاهي)
  {
    id: 'topaz-mint-tea',
    nameAr: 'شاي توباز المخدّر بالنعناع الحساوي',
    nameEn: 'Topaz Signature Mint Tea',
    category: 'tea',
    price: 16,
    descriptionAr: 'أوراق الشاي السيلاني الفاخر المخدّر على نار هادئة، يقدّم مع نعناع حساوي طازج ونكهة موزونة.',
    notes: 'مخدّر بروقان وعناية',
    isSignature: true,
    badge: 'شاهي توباز',
    calories: 20,
    imageUrl: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'moroccan-saffron-tea',
    nameAr: 'شاي مغربي أصيل بالزعفران',
    nameEn: 'Royal Moroccan Saffron Tea',
    category: 'tea',
    price: 22,
    descriptionAr: 'شاي أخضر بارود مع أوراق النعناع المغربي وخيوط الزعفران الإيراني الفاخر ببراد تقليدي أنيق.',
    notes: 'يقدم في براد مغربي',
    calories: 25,
    imageUrl: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'hibiscus-cold-tea',
    nameAr: 'كركديه توباز البارد بالرمان',
    nameEn: 'Iced Pomegranate Hibiscus',
    category: 'tea',
    price: 20,
    descriptionAr: 'منقوع زهور الكركديه الطبيعية مع عصير الرمان وحبات التوت المنعشة.',
    calories: 65,
    imageUrl: 'https://images.unsplash.com/photo-1556881286-fc6915169721?q=80&w=800&auto=format&fit=crop',
  },

  // 4. Luxury Desserts (الحلا)
  {
    id: 'topaz-date-cake',
    nameAr: 'كيكة التمر بالتوفي الساخن',
    nameEn: 'Topaz Warm Date Pudding',
    category: 'desserts',
    price: 30,
    descriptionAr: 'كيكة تمر خلاص ساخنة وغنية، مغمورة بصوص التوفي المكرمل وتقدم مع كرة آيس كريم فانيليا بوربون.',
    isSignature: true,
    badge: 'الحلا الأشهر',
    calories: 410,
    imageUrl: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'san-sebastian',
    nameAr: 'سان سيباستيان تشيز كيك',
    nameEn: 'San Sebastian Basque Cheesecake',
    category: 'desserts',
    price: 28,
    descriptionAr: 'تشيز كيك باسكية بقوام كريمي فائق النعومة، تقدم مع صوص الشوكولاتة البلجيكية الدافئة.',
    calories: 360,
    badge: 'الأكثر طلباً',
    imageUrl: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'classic-tiramisu',
    nameAr: 'تيراميسو فينيسي كلاسيك',
    nameEn: 'Classic Venetian Tiramisu',
    category: 'desserts',
    price: 28,
    descriptionAr: 'طبقات بسكويت السافوياردي المشبع بإسبريسو توباز مع كريمة ماسكاربوني وبودرة كاكاو داكن.',
    calories: 330,
    imageUrl: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'chocolate-crookie',
    nameAr: 'كروكي الشوكولاتة المقرمش',
    nameEn: 'Belgian Chocolate Crookie',
    category: 'desserts',
    price: 26,
    descriptionAr: 'مزيج ابتكاري بين توريق الكرواسان الفرنسي المقرمش وعجينة كوكيز الشوكولاتة البلجيكية الذائبة.',
    calories: 380,
    imageUrl: 'https://images.unsplash.com/photo-1621236378699-8597fee6a1ce?q=80&w=800&auto=format&fit=crop',
  },

  // 5. Bakery & Savory (المخبوزات)
  {
    id: 'cheese-croissant',
    nameAr: 'كرواسان الجبن والزعتر',
    nameEn: 'Cheese & Wild Thyme Croissant',
    category: 'bites',
    price: 20,
    descriptionAr: 'كرواسان فرنسي طازج بالزبدة الطبيعية محشو بمزيج الأجبان ورشة زعتر بري فاخر.',
    calories: 310,
    imageUrl: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'halloumi-brioche',
    nameAr: 'بريوش الحلوم المشوي',
    nameEn: 'Grilled Halloumi Brioche',
    category: 'bites',
    price: 25,
    descriptionAr: 'شرائح جبن حلومي مشوي مع صلصة البيستو والطماطم المجففة والجرجير في خبز بريوش محمص.',
    calories: 350,
    imageUrl: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=800&auto=format&fit=crop',
  },
];
