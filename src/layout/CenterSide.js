import React from "react";
import { Box } from "@material-ui/core";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/HomeCompnent/Home";
import Priceing from "../pages/Priceing/Priceing";
import Clients from "../component/Showimage";
import SingIn from "../pages/SignIn/SingIn";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Dashboard from "../pages/dashboard/Dashboard";
import Login from "../pages/SignIn/Login";
import { itemData } from "../helper/profileData";

function CenterSide() {
  return (
    <Box
      // bgcolor="lightBlue"
      p={2}
      flex={4}
      sx={{ display: { xs: "block", sm: "block" } }}
    >
      <Home></Home>
    </Box>
  );
}

export default CenterSide;
