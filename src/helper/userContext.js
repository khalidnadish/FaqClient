import React, { useState, createContext } from "react";

export const UserDetail = createContext();
UserDetail.displayName = "khalid nadish";

export const UserProvider = (props) => {
  const [userName, setUserName] = useState("khalid");

  return (
    <UserDetail.Provider value={[userName, setUserName]}>
      {props.children}
    </UserDetail.Provider>
  );
};
