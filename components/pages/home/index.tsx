"use client";
import SEO from "@/components/data/seo";
import BannerTwo from "./banner";
import AboutTwo from "./about";
import ServicesTwo from "./services";
import SkillArea from "./skill";
import Team from "./team";
import ContactForm from "./contact-form";
import WorkProcess from "./work";
import Testimonial from "./testimonial";
import BlogTwo from "./blog";
import TextSlide from "./text-slide";
import ScrollToTop from "../common/scroll/scroll-to-top";
import Footer from "@/components/layout/footers/footer";
import Header from "@/components/layout/headers/header";

const Home = () => {
  return (
    <>
      <SEO pageTitle="IT Consulting" />
      <Header />
      <BannerTwo />
      <AboutTwo />
      <ServicesTwo />
      <SkillArea />
      <Team />
      <TextSlide />
      <ContactForm />
      <WorkProcess />
      <Testimonial />
      <BlogTwo />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Home;
