import React, { useState, createContext } from "react";

export const FaqDetail = createContext();
// FaqDetail.displayName = "khalid nadish";

export const FAQProvider = (props) => {
  const [filterName, setFilterName] = useState("ALL");
  const [filterCode, setFilterCode] = useState(1);

  return (
    <FaqDetail.Provider
      // value={{ count: count, setCount: setCount, percentage: percentage, setPercentage: setPercentage }}>
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
