"use client";
import SEO from "@/components/data/seo";
import Header from "@/components/layout/headers/header";
import BreadCrumb from "../common/breadcrumb";
import CaseStudies from "./case-studies";
import Footer from "@/components/layout/footers/footer";
import ScrollToTop from "../common/scroll/scroll-to-top";

const CaseStudiesPage = () => {
  return (
    <>
      <SEO pageTitle="Case Studies" />
      <Header />
      <BreadCrumb title="Case Studies" innerTitle="Case Studies" />
      <CaseStudies />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default CaseStudiesPage;
