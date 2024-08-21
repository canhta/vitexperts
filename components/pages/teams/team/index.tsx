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
      <SEO pageTitle="Meet The Team" />
      <Header />
      <BreadCrumb title="Meet The Team" innerTitle="Meet The Team" />
      <TeamMain />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default TeamPage;
