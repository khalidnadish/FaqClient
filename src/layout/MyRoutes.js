import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import ErrorPage from "../component/ErrorPage/ErrorPage";

const Loader = lazy(() => import("../component/loader/Loader"));
const IndexPage = lazy(() => import("../pages/home/IndexPage"));
const FaqId = lazy(() => import("../pages/home/faq/FaqId"));

const MyRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          index
          element={
            <Suspense fallback={<Loader />}>
              <IndexPage />
            </Suspense>
          }
        />

        <Route
          path="/FaqId/:faqid"
          element={
            <Suspense fallback={<Loader />}>
              <FaqId />
            </Suspense>
          }
        />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default MyRoutes;
