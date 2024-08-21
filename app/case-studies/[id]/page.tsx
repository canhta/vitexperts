"use client";
import { useParams, useRouter } from "next/navigation";
import showcaseData from "@/components/data/showcase-data";
import CaseStudyDetails from "@/components/pages/case-studies/case-study-details";

const CaseStudyDetail = () => {
  const params = useParams();
  const singleData = showcaseData?.find(
    (showcase) => showcase.id === params.id,
  );
  const router = useRouter();
  if (!singleData) {
    return router.push("/404-error");
  }
  return (
    <>
      <CaseStudyDetails singleData={singleData} />
    </>
  );
};

export default CaseStudyDetail;
