'use client';
import SEO from '@/components/data/seo';
import Header from '@/components/layout/headers/header';
import BreadCrumb from '../../common/breadcrumb';
import TeamSingleMain from './team-single';
import Footer from '@/components/layout/footers/footer';
import ScrollToTop from '../../common/scroll/scroll-to-top';

type Props = {
  teamDetails: any;
};
const TeamSingle = ({ teamDetails }: Props) => {
  return (
    <>
      <SEO pageTitle={teamDetails?.name} />
      <Header />
      <BreadCrumb title={teamDetails?.name} innerTitle={teamDetails?.name} />
      <TeamSingleMain teamDetails={teamDetails} />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default TeamSingle;
