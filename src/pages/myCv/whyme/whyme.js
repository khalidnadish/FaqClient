import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";

import TimelineDot from "@mui/lab/TimelineDot";

import Typography from "@mui/material/Typography";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailIcon from "@mui/icons-material/Mail";
import FacebookIcon from "@mui/icons-material/Facebook";

import { useTranslation } from "react-i18next";
import styles from "./whyme.module.css";

import { motion } from "framer-motion";
import i18n from "../../../i18n";

export default function Whyme() {
  const [t] = useTranslation();
  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: -100, right: 100 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.1 }}
      // animate={{ rotate: 360 }}
      transition={{ duration: 0.5 }}
      className={styles.timeline_div}
    >
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
        <Timespretorfirst />
        <TimespretorWithIcon
          title={t("home_whyme.option1.title")}
          text={t("home_whyme.option1.subtitle")}
          icon={<LocalPhoneIcon className={styles.icon_desien} />}
        />
        <TimespretorWithIcon
          title={t("home_whyme.option2.title")}
          text={t("home_whyme.option2.subtitle")}
          icon={<WhatsAppIcon className={styles.icon_desien} />}
        />
        <TimespretorWithIcon
          title={t("home_whyme.option3.title")}
          text={t("home_whyme.option3.subtitle")}
          icon={<MailIcon className={styles.icon_desien} />}
        />
        <TimespretorLast
          title={t("home_whyme.option4.title")}
          text={t("home_whyme.option4.subtitle")}
          icon={<FacebookIcon className={styles.icon_desien} />}
        />
      </Timeline>
    </motion.div>
  );
}

const TimespretorWithIcon = ({ title, text, icon }) => {
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
          {title}{" "}
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
            height: "100%",
          }}
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
  );
};

const Timespretorfirst = () => {
  const [t] = useTranslation();
  return (
    <TimelineItem
      sx={{
        "& .MuiTimelineDot-root": {
          borderRadius: "10px",

          width: "100px",
          marginTop: 0,
          marginBottom: "17px",
          fontSize: "1.2rem",
          color: "black",
        },
      }}
    >
      <TimelineSeparator>
        <TimelineDot className={styles.icon_size_first}>
          <Typography>{t("home_whyme.maintitle")}</Typography>
        </TimelineDot>
        {/* <TimelineConnector /> */}
      </TimelineSeparator>
    </TimelineItem>
  );
};
