export type AppRoute = {
  href: string;
  title: string;
};

export type AppConfig = {
  routes: AppRoute[];
};

export const appConfig = {
  routes: [
    { href: '/', title: 'Home' },
    { href: '/about', title: 'About Us' },
    { href: '/services', title: 'Our Services' },
    { href: '/case-studies', title: 'Case Studies' },
    { href: '/pricing-plan', title: 'Pricing Plans' },
    { href: '/team', title: 'Meet the Team' }, 
    { href: '/blog', title: 'Insights' },
  ],
};
