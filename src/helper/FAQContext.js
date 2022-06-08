import React, { useState, createContext } from "react";

export const FaqDetail = createContext();
// FaqDetail.displayName = "khalid nadish";
FaqDetail.displayName = "FAQContext>>>";

export const FAQProvider = (props) => {
  const [filterName, setFilterName] = useState("ALL");
  const [filterCode, setFilterCode] = useState(1);

  return (
    <FaqDetail.Provider
      value={{
        filterName: filterName,
        setFilterName: setFilterName,
        filterCode: filterCode,
        setFilterCode: setFilterCode,
      }}
    >
      {props.children}
    </FaqDetail.Provider>
  );
};
