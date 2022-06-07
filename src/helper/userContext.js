import React, { useState, createContext } from "react";

export const UserDetail = createContext();
UserDetail.displayName = "UserContext>>>";

export const UserProvider = (props) => {
  const [userName, setUserName] = useState("Nadish");

  return (
    <UserDetail.Provider value={[userName, setUserName]}>
      {props.children}
    </UserDetail.Provider>
  );
};
