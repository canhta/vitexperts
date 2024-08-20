"use client";
import SEO from "@/components/data/seo";
import Header from "@/components/layout/headers/header";
import BreadCrumb from "../common/breadcrumb";
import Showcases from "./showcases";
import Footer from "@/components/layout/footers/footer";
import ScrollToTop from "../common/scroll/scroll-to-top";

const ShowcasesPage = () => {
  return (
    <>
      <SEO pageTitle="Showcase" />
      <Header />
      <BreadCrumb title="Showcase" innerTitle="Showcase" />
      <Showcases />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default ShowcasesPage;
