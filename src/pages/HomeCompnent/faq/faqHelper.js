import React, { lazy, Suspense, useContext, useEffect } from "react";
import Loader from "../../../component/loader/Loader";
import { FaqDetail } from "../../../helper/context/FAQContext";

const FaqCrads = lazy(() => import("./faqComponent/FaqCards"));
const Nofaq = lazy(() => import("../faq/faqComponent/NoFaqCards"));

const ShowFaqCard = ({ faqdata }) => {
  const { faqInfo, setFaqInfo } = useContext(FaqDetail);

  // if (faqdata.length === 0) {
  //   return (
  //     <Suspense fallback={<Loader />}>
  //       <Nofaq />
  //     </Suspense>
  //   );
  // }

  useEffect(() => {
    setFaqInfo({ ...faqInfo, recordsCount: faqdata.length });
  }, [faqdata]);

  return (
    <>
      {faqdata.map((faqItem, index) => (
        <Suspense fallback={<Loader />} key={faqItem.faqid}>
          <FaqCrads
            Quastion={faqItem.faq}
            src={faqItem.avatar}
            count={faqItem.rowcount}
            faqid={faqItem.faqid}
            autherName={faqItem.autherName}
            faqGroup={faqItem.catName}
            create_at={faqItem.create_at}
            rowIndex={index}
          />
        </Suspense>
      ))}
    </>
  );
};
export default ShowFaqCard;
