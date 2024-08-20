"use client"
import SEO from "@/components/data/seo";
import Header from "@/components/layout/headers/header";
import BreadCrumb from "../../common/breadcrumb";
import BlogGridMain from "./blog-grid";
import Footer from "@/components/layout/footers/footer";
import ScrollToTop from "../../common/scroll/scroll-to-top";


const BlogGrid = () => {
    return (
        <>
            <SEO pageTitle='Blog' />
            <Header />
            <BreadCrumb title="Blog" innerTitle="Blog" />
            <BlogGridMain />
            <Footer />
            <ScrollToTop />
        </>
    );
};

export default BlogGrid;