"use client";
import { useEffect } from "react";

type SEOProps = {
  pageTitle: string;
};

const SEO = ({ pageTitle }: SEOProps) => {
  useEffect(() => {
    document.title =
      pageTitle + " - VIT Experts - IT Services & Technology Next js Template";
  }, [pageTitle]);

  return null;
};

export default SEO;
