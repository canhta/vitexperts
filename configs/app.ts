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
    { href: '/services', title: 'Our Services' },
    { href: '/team', title: 'Our Team' },
    { href: '/showcases', title: 'Show Cases' },
    { href: '/pricing-plan', title: 'Pricing' },
    { href: '/blog', title: 'Blog' },
    { href: '/about', title: 'About Us' },
  ],
};
