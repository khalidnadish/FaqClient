import React from "react";
import { Routes, Route } from "react-router-dom";

import Priceing from "../pages/Priceing/Priceing";
import Clients from "../component/Showimage";
import SingIn from "../pages/SignIn/SingIn";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Dashboard from "../pages/dashboard/Dashboard";
import Login from "../pages/SignIn/Login";
import { itemData } from "../helper/profileData";
import IndexPage from "../pages/IndexPage";
import FaqId from "../pages/HomeCompnent/faq/FaqId";

const MyRoutes = () => {
  return (
    <>
      <Routes>
        <Route index element={<IndexPage />} />
        <Route path="/Home" element={<IndexPage />} />

        <Route path="/FaqId/:faqid" element={<FaqId />} />

        <Route path="/Price" element={<Priceing />} />
        <Route path="/SingIn" element={<SingIn />} />
        <Route path="/SingIn" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Profile" element={<Clients itemData={itemData} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default MyRoutes;
