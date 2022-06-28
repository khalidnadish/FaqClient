import React, { lazy, Suspense } from "react";
import Loader from "../../../component/loader/Loader";

import "./faq.module.css";
// import { ShowFaqCard } from "./faqHelper";
import useAxiosToGetData from "../../../helper/custemHook/useAxiosToGetData";
const ShowFaqCard = lazy(() => import("./faqHelper"));

export default function Faq({ faqUrlLink }) {
  const { data, dataIsLoading } = useAxiosToGetData(faqUrlLink);

  return (
    <>
      <Suspense fallback={<Loader />}>
        {dataIsLoading && <ShowFaqCard faqdata={data} />}
      </Suspense>
      {/* {isLoading ? <ShowFaq faqdata={faqDataFromData} /> : <Loader />} */}
    </>
  );
}
