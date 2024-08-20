"use client"
import SEO from "@/components/data/seo";
import Header from "@/components/layout/headers/header";
import BreadCrumb from "../../common/breadcrumb";
import ServicesMain from "./services";
import WorkArea from "../../home/work";
import Testimonial from "../../home/testimonial";
import Footer from "@/components/layout/footers/footer";
import ScrollToTop from "../../common/scroll/scroll-to-top";

const ServicePage = () => {
    return (
        <>
            <SEO pageTitle="Our Services" />
            <Header />
            <BreadCrumb title="Our Services" innerTitle="Our Services" />
            <ServicesMain />
            <WorkArea />
            <Testimonial />
            <Footer />
            <ScrollToTop />
        </>
    );
};

export default ServicePage;