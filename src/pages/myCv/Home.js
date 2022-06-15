import React from "react";

import WhatCanIdo1 from "./whatcanido/WhatCanIdo1";
import Grid from "@mui/material/Grid";
import Whyme from "../myCv/whyme/whyme";

import Skill from "./skill/Skill";
import { Container, Typography } from "@mui/material";
import { t, useTranslation } from "react-i18next";

function Home() {
  const [t, i18n] = useTranslation();

  return (
    <>
      <Grid container spacing={2} direction="column">
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={4}>
              <Typography sx={{ fontSize: "1.2 rem", fontWeight: "bold" }}>
                <strong>{t("about_me_title")}</strong>
              </Typography>

              <Typography sx={{ fontWeight: "normal" }}>
                {t("about_me_text")}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={12} md={4}>
              <Whyme />
            </Grid>

            <Grid item xs={12} sm={12} md={4}>
              <WhatCanIdo1 />
            </Grid>
          </Grid>
        </Container>

        {/* skill info */}
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12}>
              <Skill />
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  );
}

export default Home;
