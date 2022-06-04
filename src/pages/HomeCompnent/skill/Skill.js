import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import { t, useTranslation } from "react-i18next";
import { Typography } from "@mui/material";

const styleDvider = {
  textAlign: "right",
};

export default function Skills() {
  const [t, i18n] = useTranslation();
  return (
    <>
      <Grid
        container
        spacing={2}
        justify="center"
        // style={{
        //   maxWidth: "100%",
        //   border: "1px solid red",
        //   marginTop: "30px",
        // }}
      >
        <Grid item ml={"0px"} align="center" xs={12} sm={12} md={4} lg={4}>
          <Divider textAlign="left" sx={styleDvider}>
            <Typography>{t("skills_data.Desinging")}</Typography>
          </Divider>
          <br />

          <InputSlider
            skill={"phtoshp"}
            value={"60"}
            icon={"assets/images/skills/photoshop-48.png"}
          />
          <InputSlider
            skill={"Illastrato"}
            value={"75"}
            icon={"assets/images/skills/css3-48.png"}
          />
          <InputSlider
            skill={"Illastrato"}
            value={"40"}
            icon={"assets/images/skills/after-effects-48.png"}
          />
          <InputSlider
            skill={"Illastrato"}
            value={"55"}
            icon={"assets/images/skills/premiere-pro-48.png"}
          />
        </Grid>

        <Grid item align="center" xs={12} sm={12} md={4} lg={4}>
          <Divider textAlign="left">
            <Typography> {t("skills_data.Codeing")} </Typography>
          </Divider>
          <br />
          <InputSlider
            skill={"Illastrato"}
            value={"80"}
            icon={"assets/images/skills/html-5-48.png"}
          />
          <InputSlider
            skill={"Illastrato"}
            value={"75"}
            icon={"assets/images/skills/css3-48.png"}
          />
          <InputSlider
            skill={"Illastrato"}
            value={"60"}
            icon={"assets/images/skills/javascript-48.png"}
          />
          <InputSlider
            skill={"Illastrato"}
            value={"75"}
            icon={"assets/images/skills/react-100.png"}
          />
          <InputSlider
            skill={"Illastrato"}
            value={"40"}
            icon={"assets/images/skills/flask-50.png"}
          />
          <InputSlider
            skill={"Illastrato"}
            value={"47"}
            icon={"assets/images/skills/python-48.png"}
          />
        </Grid>

        <Grid item align="center" xs={12} sm={12} md={4} lg={4}>
          <Divider textAlign="left">
            <Typography>{t("skills_data.DataBase")}</Typography>
          </Divider>
          <br />
          <InputSlider
            skill={"Illastrato"}
            value={"85"}
            icon={"assets/images/skills/mysql-logo-48.png"}
          />
          <InputSlider
            skill={"Illastrato"}
            value={"50"}
            icon={"assets/images/skills/firebase-48.png"}
          />
          <br />
          <Divider textAlign="left">
            <Typography>{t("skills_data.ui")} </Typography>
          </Divider>
          <br />
          <InputSlider
            skill={"Illastrato"}
            value={"80"}
            icon={"assets/images/skills/icons8-adobe-xd-48.png"}
          />
          <InputSlider
            skill={"Illastrato"}
            value={"70"}
            icon={"assets/images/skills/figma-48.png"}
          />
        </Grid>
      </Grid>
    </>
  );
}

const InputSlider = ({ skill, value, icon }) => {
  value = parseInt(value);
  const marks = [
    {
      value: 0,
      label: "0",
    },
    {
      value: 20,
      label: "20",
    },
    {
      value: 40,
      label: "40",
    },
    {
      value: 60,
      label: "60",
    },
    {
      value: 80,
      label: "80",
    },
    {
      value: 100,
      label: "100",
    },
  ];

  return (
    // <Box sx={{ width: 250 }}>

    <Grid container spacing={2} alignItems="center">
      <Grid item xs={2} sm={2} md={2}>
        <Avatar alt="Remy Sharp" src={icon} sx={{ width: 24, height: 24 }} />

        {/* <Typography variant='H9'  > {skill}  </Typography> */}
      </Grid>
      <Grid item xs={10} sm={10} md={10}>
        <Slider
          value={value}
          size="small"
          aria-labelledby="input-slider"
          // marks={marks}
          // defaultValue={80}
          // disabled

          valueLabelDisplay="auto"
          color="secondary"
        />
      </Grid>
    </Grid>
    // </Box>
  );
};
