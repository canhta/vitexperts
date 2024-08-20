"use client";
import { useParams, useRouter } from "next/navigation";
import showcaseData from "@/components/data/showcase-data";
import ShowcaseDetails from "@/components/pages/showcases/showcase-details";

const ShowcaseDetail = () => {
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
      <ShowcaseDetails singleData={singleData} />
    </>
  );
};

export default ShowcaseDetail;
