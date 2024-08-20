"use client"

import SEO from "@/components/data/seo";
import Header from "@/components/layout/headers/header";
import BreadCrumb from "../../common/breadcrumb";
import BlogSingleMain from "./blog-details";
import Footer from "@/components/layout/footers/footer";
import ScrollToTop from "../../common/scroll/scroll-to-top";

const BlogDetails = ({singleData}) => {
    const firstThreeWords = singleData?.title.split(' ').slice(0, 3).join(' ') + '...';
    return (
        <>
            <SEO pageTitle={singleData?.title} />
            <Header />
            <BreadCrumb title={firstThreeWords} innerTitle={singleData?.title} />
            <BlogSingleMain singleData={singleData}/>
            <Footer />
            <ScrollToTop />
        </>
    );
};

export default BlogDetails;