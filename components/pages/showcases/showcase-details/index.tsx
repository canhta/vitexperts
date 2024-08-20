"use client";
import SEO from "@/components/data/seo";
import Header from "@/components/layout/headers/header";
import BreadCrumb from "../../common/breadcrumb";
import ShowcaseDetailsMain from "./showcase-details";
import Footer from "@/components/layout/footers/footer";
import ScrollToTop from "../../common/scroll/scroll-to-top";

type Props = {
  singleData: any;
};

const ShowcaseDetails = ({ singleData }: Props) => {
  return (
    <>
      <SEO pageTitle={singleData?.title} />
      <Header />
      <BreadCrumb title={singleData?.title} innerTitle={singleData?.title} />
      <ShowcaseDetailsMain singleData={singleData} />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default ShowcaseDetails;
