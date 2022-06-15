import React from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import CustomizedTimeline from "../../../component/Profilecompnent/Pr_Timeline";

import { useTranslation } from "react-i18next";

import "./profle.css";

const cardStyle = {
  display: "block",
  transitionDuration: "0.3s",
  // height: "48vw",
  maxWidth: "200px",
};
export default function RecipeReviewCard() {
  const [expanded] = React.useState(false);
  const [t, i18n] = useTranslation();

  return (
    <>
      <Card sx={cardStyle}>
        <CardHeader
          title={t("main_info.name")}
          subheader={t("main_info.title")}
        ></CardHeader>

        <CardMedia
          className="profile_img"
          component="img"
          height="150"
          image="https://images.unsplash.com/photo-1644982648791-a010e61aa845?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="khalidnadish"
        />
        <CardContent>
          <CustomizedTimeline />
        </CardContent>
      </Card>
    </>
  );
}
