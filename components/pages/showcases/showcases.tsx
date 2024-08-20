import React, { useState } from "react";
import Link from "next/link";
import showcaseData from "@/components/data/showcase-data";
import Image from "next/image";

const showShowcaseItem = 4;

const ShowcasesMain = () => {
  const showcaseItem = showcaseData;
  const [items, setItems] = useState(showcaseItem);
  const [next, setNext] = useState(showShowcaseItem);
  const handleLoadData = () => {
    setNext((value) => value + 2);
  };
  return (
    <div className="showcase__two section-padding">
      <div className="container">
        <div className="row">
          {showcaseItem?.slice(0, next)?.map((data, id) => (
            <div className="col-lg-6" key={id}>
              <div className="showcase__two-single-item">
                <div className="showcase__two-single-item-img-wrapper">
                  <Image src={data.image} alt="image" />
                </div>
                <div className="showcase__two-single-item-content">
                  <div className="showcase__two-single-item-content-left">
                    <h3>{data.title}</h3>
                    <p>{data.subtitle}</p>
                  </div>
                  <div className="showcase__two-single-item-content-right">
                    <Link href={`/showcase/${data.id}`}>
                      <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {next < items.length && (
          <div className="row mt-70">
            <div className="col-xl-12 t-center">
              <button onClick={handleLoadData} className="btn-one">
                Load More
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowcasesMain;
