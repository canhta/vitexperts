"use client";
import SEO from "@/components/data/seo";
import Header from "@/components/layout/headers/header";
import BreadCrumb from "../common/breadcrumb";
import AboutMain from "./about";
import Footer from "@/components/layout/footers/footer";
import ScrollToTop from "../common/scroll/scroll-to-top";

const AboutUs = () => {
  return (
    <>
      <SEO pageTitle="About Us" />
      <Header />
      <BreadCrumb title="About Us" innerTitle="Company About" />
      <AboutMain />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default AboutUs;
