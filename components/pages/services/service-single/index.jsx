"use client"
import SEO from "@/components/data/seo";
import Header from "@/components/layout/headers/header";
import BreadCrumb from "../../common/breadcrumb";
import ServicesSingleMain from "./services-single";
import Footer from "@/components/layout/footers/footer";
import ScrollToTop from "../../common/scroll/scroll-to-top";

const ServicesSingle = ({serviceDetails}) => {
    const words = serviceDetails.title.split(' ');
    const firstAndSecondWord = words.slice(0, 2).join(' ');
    return (
        <>
            <SEO pageTitle={serviceDetails?.title} />            
            <Header />
            <BreadCrumb title={firstAndSecondWord} innerTitle={serviceDetails?.title} />
            <ServicesSingleMain firstAndSecondWord={firstAndSecondWord}/>
            <Footer />
            <ScrollToTop />
        </>
    );
};

export default ServicesSingle;