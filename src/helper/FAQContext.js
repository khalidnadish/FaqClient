import React, { useState, createContext } from "react";

export const FaqDetail = createContext();
FaqDetail.displayName = "FAQContext>>>";

export const FAQProvider = (props) => {
  const [filterByCategory, setfilterByCategory] = useState("ALL");
  const [filterCode, setFilterCode] = useState("showallFaq");
  const [filterId, setFilterId] = useState(0);
  const [faqUrl, setFaqUrl] = useState("/faq");

  return (
    <FaqDetail.Provider
      value={{
        filterByCategory: filterByCategory,
        setfilterByCategory: setfilterByCategory,
        filterCode: filterCode,
        setFilterCode: setFilterCode,

        filterId: filterId,
        setFilterId: setFilterId,
        faqUrl: faqUrl,
        setFaqUrl: setFaqUrl,
      }}
    >
      {props.children}
    </FaqDetail.Provider>
  );
};
