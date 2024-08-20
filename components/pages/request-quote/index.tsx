"use client";
import SEO from "@/components/data/seo";
import Header from "@/components/layout/headers/header";
import BreadCrumb from "../common/breadcrumb";
import RequestQuoteMain from "./request-quote";
import Footer from "@/components/layout/footers/footer";
import ScrollToTop from "../common/scroll/scroll-to-top";

const RequestQuotePage = () => {
  return (
    <>
      <SEO pageTitle="Request Quote" />
      <Header />
      <BreadCrumb title="Request Quote" innerTitle="Request Quote" />
      <RequestQuoteMain />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default RequestQuotePage;
