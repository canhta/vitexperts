'use client';
import SEO from '@/components/data/seo';
import Header from '@/components/layout/headers/header';
import BreadCrumb from '../../common/breadcrumb';
import PortfolioDetailsMain from './portfolio-details';
import Footer from '@/components/layout/footers/footer';
import ScrollToTop from '../../common/scroll/scroll-to-top';

type Props = {
  singleData: any;
};

const PortfolioDetails = ({ singleData }: Props) => {
  return (
    <>
      <SEO pageTitle={singleData?.title} />
      <Header />
      <BreadCrumb title={singleData?.title} innerTitle={singleData?.title} />
      <PortfolioDetailsMain singleData={singleData} />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default PortfolioDetails;
