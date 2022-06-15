import React from "react";
import { UserProvider } from "./helper/context/userContext";

import ReactDOM from "react-dom/client";
// import "./index.css";
import "./i18n";
// import * as Sentry from "@sentry/react";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <UserProvider>
    <App />
  </UserProvider>
);
