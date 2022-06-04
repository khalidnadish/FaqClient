import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./i18n";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import MyRoutes from "./layout/MyRoutes";
Sentry.init({
  dsn: "https://decec48d48c14a78819cb690e0182b9b@o1182058.ingest.sentry.io/6298529",
  // integrations: [new BrowserTracing()],
  integrations: [new Sentry.Integrations.Breadcrumbs({ console: false })],

  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        {/* <MyRoutes /> */}
        <App className="mainpage" />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
