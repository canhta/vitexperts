"use client";
import SEO from "@/components/data/seo";
import Header from "@/components/layout/headers/header";
import BreadCrumb from "../../common/breadcrumb";
import TeamMain from "./team";
import Footer from "@/components/layout/footers/footer";
import ScrollToTop from "../../common/scroll/scroll-to-top";

const TeamPage = () => {
  return (
    <>
      <SEO pageTitle="Our Team" />
      <Header />
      <BreadCrumb title="Our Team" innerTitle="Our Team" />
      <TeamMain />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default TeamPage;
