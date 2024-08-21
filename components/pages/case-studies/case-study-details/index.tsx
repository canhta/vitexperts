"use client";
import SEO from "@/components/data/seo";
import Header from "@/components/layout/headers/header";
import BreadCrumb from "../../common/breadcrumb";
import CaseStudyDetailsMain from "./case-study-details";
import Footer from "@/components/layout/footers/footer";
import ScrollToTop from "../../common/scroll/scroll-to-top";

type Props = {
  singleData: any;
};

const CaseStudyDetails = ({ singleData }: Props) => {
  return (
    <>
      <SEO pageTitle={singleData?.title} />
      <Header />
      <BreadCrumb title={singleData?.title} innerTitle={singleData?.title} />
      <CaseStudyDetailsMain singleData={singleData} />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default CaseStudyDetails;
