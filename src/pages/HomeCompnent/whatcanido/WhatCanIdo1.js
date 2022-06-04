import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import styles from "./whatcanido.module.css";
import BrushIcon from "@mui/icons-material/Brush";

import DuoIcon from "@mui/icons-material/Duo";
import InterestsIcon from "@mui/icons-material/Interests";
import CodeIcon from "@mui/icons-material/Code";
import BorderInnerIcon from "@mui/icons-material/BorderInner";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import { useTranslation } from "react-i18next";
import { Box, Grid } from "@mui/material";

export default function CustomizedTimeline() {
  const [t] = useTranslation();
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
        <Timespretorfirst title={t("home_ido.maintitle")} />
        <TimespretorWithIcon
          title={t("home_ido.option1.title")}
          text={t("home_ido.option1.subtitle")}
          icon={<BrushIcon className={styles.icon_desien} />}
        />
        <TimespretorWithIcon
          title={t("home_ido.option2.title")}
          text={t("home_ido.option2.subtitle")}
          icon={<InterestsIcon className={styles.icon_desien} />}
        />
        <TimespretorWithIcon
          title={t("home_ido.option3.title")}
          text={t("home_ido.option3.subtitle")}
          icon={<DuoIcon className={styles.icon_desien} />}
        />
        <TimespretorWithIcon
          title={t("home_ido.option4.title")}
          text={t("home_ido.option4.subtitle")}
          icon={<BorderInnerIcon className={styles.icon_desien} />}
        />
        <TimespretorWithIcon
          title={t("home_ido.option5.title")}
          text={t("home_ido.option5.subtitle")}
          icon={<CodeIcon className={styles.icon_desien} />}
        />
        <TimespretorLast
          title={t("home_ido.option6.title")}
          text={t("home_ido.option6.subtitle")}
          icon={<AccountTreeIcon className={styles.icon_desien} />}
        />
      </Timeline>
    </div>
  );
}

const TimespretorWithIcon = ({ title, text, icon }) => {
  const [i18n] = useTranslation();
  return (
    <TimelineItem
      sx={{
        "& .MuiTimelineItem-root": {
          minHeight: "40px",
        },
      }}
    >
      <TimelineSeparator className={styles.lineseprator}>
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
      <TimelineContent
        sx={
          i18n.language === "ar"
            ? { textAlign: "right" }
            : { textAlign: "left" }
        }
      >
        <Typography
          component={"div"}
          className={styles.aligntypo}
          sx={{
            color: "black",
            fontSize: ".9rem",

            paddingTop: "107px",
            textAlign: "right",
            fontWeight: "bold",
            marginRight: i18n.language === "en" ? 1 : null,
            marginLeft: i18n.language === "ar" ? 1 : null,
            wordWrap: "break-word",
            textAlign: "initial",
          }}
        >
          {title}
        </Typography>
        <Typography
          component={"div"}
          variant="h9"
          sx={{
            color: "#777",
            fontSize: ".8rem",
            // marginTop: "17px",
            wordWrap: "break-word",
            textAlign: "initial",
          }}
          // style={{ wordWrap: "break-word" }}
        >
          {text}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
};

const TimespretorLast = ({ title, text, icon }) => {
  const [i18n] = useTranslation();
  return (
    <>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot className={styles.icon_size}>{icon}</TimelineDot>
        </TimelineSeparator>
        <TimelineContent
          sx={
            i18n.language === "ar"
              ? { textAlign: "right" }
              : { textAlign: "left" }
          }
        >
          <Typography
            component={"div"}
            variant="h8"
            sx={{
              color: "black",
              fontSize: ".9rem",
              fontWeight: "bold",
              marginRight: i18n.language === "en" ? 1 : null,
              marginLeft: i18n.language === "ar" ? 1 : null,
              wordWrap: "break-word",
              textAlign: "initial",
            }}
          >
            {title}
          </Typography>
          <Typography
            component={"div"}
            variant="h9"
            className="type_style"
            sx={{
              color: "#777",
              fontSize: ".8rem",
              wordWrap: "break-word",
              textAlign: "initial",
            }}
          >
            {text}
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </>
  );
};

const Timespretorfirst = ({ title }) => {
  return (
    <TimelineItem
      sx={{
        "& .MuiTimelineDot-root": {
          borderRadius: "10px",
          width: "140px",
          marginTop: 0,
          marginBottom: "17px",
          color: "black",
        },
      }}
    >
      <TimelineSeparator>
        <TimelineDot className={styles.icon_size_first}>
          <Typography>{title}</Typography>
        </TimelineDot>
        {/* <TimelineConnector /> */}
      </TimelineSeparator>
    </TimelineItem>
  );
};
