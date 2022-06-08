import React, { useState, createContext } from "react";

export const UserDetail = createContext();
UserDetail.displayName = "UserContext>>>";

export const UserProvider = (props) => {
  const [userName, setUserName] = useState("Nadish");
  const [userId, setUserId] = useState(1);

  const [userAvatar, setUserAvatar] = useState(
    "http://localhost:3001/images/avatar/1653493960018_1.jpg"
  );

  return (
    <UserDetail.Provider
      value={{
        userName: userName,
        setUserName: setUserName,
        userAvatar: userAvatar,
        userId: userId,
        setUserId: setUserId,
      }}
    >
      {props.children}
    </UserDetail.Provider>
  );
};
