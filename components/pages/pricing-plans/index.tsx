"use client";
import SEO from "@/components/data/seo";
import Header from "@/components/layout/headers/header";
import BreadCrumb from "../common/breadcrumb";
import PricingPlansMain from "./pricing-plans";
import Footer from "@/components/layout/footers/footer";
import ScrollToTop from "../common/scroll/scroll-to-top";

const PricingPages = () => {
  return (
    <>
      <SEO pageTitle="Pricing Plan" />
      <Header />
      <BreadCrumb title="Pricing Plan" innerTitle="Pricing Plan" />
      <PricingPlansMain />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default PricingPages;
