import React from "react";
import { UserProvider } from "./helper/context/userContext";

import ReactDOM from "react-dom/client";
import "./i18n";
import App from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <UserProvider>
    <App />
  </UserProvider>
);
