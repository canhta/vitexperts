'use client';
import SEO from '@/components/data/seo';
import Header from '@/components/layout/headers/header';
import BreadCrumb from '../common/breadcrumb';
import Portfolio from './portfolio';
import Footer from '@/components/layout/footers/footer';
import ScrollToTop from '../common/scroll/scroll-to-top';

const PortfolioPage = () => {
  return (
    <>
      <SEO pageTitle='Showcase' />
      <Header />
      <BreadCrumb title='Showcase' innerTitle='Showcase' />
      <Portfolio />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default PortfolioPage;
