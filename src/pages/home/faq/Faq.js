import React, { lazy, Suspense } from "react";

import "./faq.module.css";

import useAxiosToGetData from "../../../helper/custemHook/useAxiosToGetData";
const ShowFaqCard = lazy(() => import("./faqHelper"));

const Loader = lazy(() => import("../../../component/loader/Loader"));
const Nofaq = lazy(() => import("../faq/NoFaqCards"));
export default function Faq({ faqUrlLink }) {
  const { data, dataIsLoading } = useAxiosToGetData(faqUrlLink);

  if (data?.length === 0) {
    return (
      <Suspense fallback={<Loader />}>
        <Nofaq />
      </Suspense>
    );
  }

  return (
    <>
      <Suspense fallback={<Loader />}>
        {dataIsLoading && <ShowFaqCard faqdata={data} />}
      </Suspense>
      {/* {isLoading ? <ShowFaq faqdata={faqDataFromData} /> : <Loader />} */}
    </>
  );
}
