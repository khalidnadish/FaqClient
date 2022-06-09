import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./i18n";
// import * as Sentry from "@sentry/react";

import App from "./App";

// Sentry.init({
//   dsn: "https://decec48d48c14a78819cb690e0182b9b@o1182058.ingest.sentry.io/6298529",
//   // integrations: [new BrowserTracing()],
//   integrations: [new Sentry.Integrations.Breadcrumbs({ console: false })],

//   tracesSampleRate: 1.0,
// });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>

//         {/* <MyRoutes /> */}
//         <App className="mainpage" />

//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
