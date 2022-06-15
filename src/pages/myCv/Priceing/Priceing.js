import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";

import FacebookIcon from "@mui/icons-material/Facebook";
import styles from "./prising.module.css";
import { Box, Grid, Paper } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

import ClearIcon from "@mui/icons-material/Clear";

import {
  SilverData,
  packgeTilte,
  GoldenData,
  DimondData,
  OtherdData,
  lastitemTilte,
} from "../../../helper/tempData/product";

export default function Priceing() {
  return (
    <>
      {/* <ResponsiveAppBar /> */}
      <Paper sx={{ paddingTop: "30px" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3} mb={5}>
              <Paper elevation={3}>
                <Silver
                  data={SilverData}
                  title={packgeTilte.silverTitle}
                  price={packgeTilte.SilverPrice}
                  lastitem={lastitemTilte.sliverlast}
                />
              </Paper>
            </Grid>

            <Grid item xs={12} md={3} mb={5}>
              <Silver
                data={GoldenData}
                title={packgeTilte.goldTitle}
                price={packgeTilte.goldPrice}
                lastitem={lastitemTilte.goldlast}
              />
            </Grid>

            <Grid item xs={12} md={3} mb={5}>
              <Silver
                data={DimondData}
                title={packgeTilte.dimondTitle}
                price={packgeTilte.dimondPrice}
                lastitem={lastitemTilte.dimonlast}
              />
            </Grid>
            <Grid item xs={12} md={3} mb={5}>
              <Silver
                data={OtherdData}
                title={packgeTilte.otherTitle}
                price={packgeTilte.otherPrice}
                lastitem={lastitemTilte.otherlast}
              />
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </>
  );
}

const Silver = ({ data, title, price, lastitem }) => {
  return (
    <div className={styles.timeline_div}>
      <Timeline
        className={styles.main_timeline}
        sx={{
          "& .MuiTimelineDot-root": {
            borderRadius: "50%",
            marginBottom: 0,
            marginTop: 0,
          },

          "& .MuiTimelineItem-root": {
            minHeight: "40px",
          },
        }}
      >
        <Timespretorfirst title={`${title}  | ${price}`} />
        {data &&
          data.map((item) => {
            return (
              <TimespretorWithIcon
                key={item.id}
                title={item.caption}
                text={item.description}
                icon={
                  item.stuts ? (
                    <CheckIcon className={styles.icon_desien} />
                  ) : (
                    <ClearIcon className={styles.icon_desien_x} />
                  )
                }
                // classx={item.stuts}
                // icon={<CheckIcon className={styles.icon_desien} />}
              />
            );
          })}

        <TimespretorLast
          title={lastitem}
          // text={"Sure You Get it"}
          icon={<FacebookIcon className={styles.icon_desien} />}
        />
      </Timeline>
    </div>
  );
};

const TimespretorWithIcon = ({ title, text, icon, classx }) => {
  return (
    <TimelineItem
      sx={{
        "& .MuiTimelineItem-root": {
          minHeight: "40px",
        },
      }}
    >
      <TimelineSeparator className={styles.icon_size}>
        <TimelineDot
          sx={{
            "& .MuiTimelineDot-root": {
              borderRadius: "50%",
              marginBottom: 0,
              marginTop: 0,
            },
          }}
          className={styles.icon_size}
        >
          {" "}
          {icon}{" "}
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Typography
          component={"span"}
          sx={{ color: "black", fontSize: ".8rem", paddingTop: "17px" }}
        >
          {title}{" "}
        </Typography>
        <Typography
          component={"span"}
          variant="h9"
          sx={{ color: "#777", fontSize: ".8rem", marginTop: "17px" }}
        >
          {text}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
};

const TimespretorLast = ({ title, text, icon }) => {
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot className={styles.icon_size}>{icon}</TimelineDot>
      </TimelineSeparator>
      <TimelineContent>
        <Typography
          component={"span"}
          variant="h8"
          sx={{ color: "black", fontSize: ".9rem" }}
        >
          {title}
        </Typography>
        <Typography
          component={"span"}
          variant="h9"
          className="type_style"
          sx={{ color: "#777", fontSize: ".8rem" }}
        >
          {text}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
};

const Timespretorfirst = ({ title }) => {
  return (
    <TimelineItem
      sx={{
        "& .MuiTimelineDot-root": {
          borderRadius: "4px",

          width: "150px",
          marginTop: 0,
          marginBottom: "17px",
          fontSize: "12px",
          fontWeight: 600,
          color: "black",
        },
      }}
    >
      <TimelineSeparator>
        <TimelineDot className={styles.icon_size_first}>
          <Typography variant="h9">{title}</Typography>
        </TimelineDot>
        {/* <TimelineConnector /> */}
      </TimelineSeparator>
    </TimelineItem>
  );
};
