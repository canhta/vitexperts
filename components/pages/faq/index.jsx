"use client";
import SEO from "@/components/data/seo";
import Header from "@/components/layout/headers/header";
import BreadCrumb from "../common/breadcrumb";
import FaqPage from "./faq-page";
import Footer from "@/components/layout/footers/footer";
import ScrollToTop from "../common/scroll/scroll-to-top";

const Faq = () => {
  return (
    <>
      <SEO pageTitle="FAQ" />
      <Header />
      <BreadCrumb title="Question & Ans." innerTitle="FAQ's" />
      <FaqPage />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Faq;
