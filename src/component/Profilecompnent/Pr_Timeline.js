import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import TimelineDot from "@mui/lab/TimelineDot";

import Typography from "@mui/material/Typography";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailIcon from "@mui/icons-material/Mail";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useTranslation } from "react-i18next";
import "./CustomizedTimeline.css";

import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";

/**
 */
export default function CustomizedTimeline() {
  return (
    <>
      <div className="timeline_div">
        <Timeline
          className="main_timeline"
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
          {/* <Timespretorfirst /> */}
          <TimespretorWithIcon
            title={"Phone :"}
            text={"123456"}
            icon={<LocalPhoneIcon className="icon_desien" />}
          />
          <TimespretorWithIcon
            title={"Whatsapp :"}
            text={"0550212126"}
            icon={<WhatsAppIcon className="icon_desien" />}
          />
          <TimespretorWithIcon
            title={"Email :"}
            text={"w2.nadish@gmail.com"}
            icon={<MailIcon className="icon_desien" />}
          />
          <TimespretorWithIcon
            title={"FaceBook :"}
            text={"w2.nadish"}
            icon={<FacebookIcon className="icon_desien" />}
          />
          <TimespretorWithIcon
            title={"twiter :"}
            text={"w2.nadish"}
            icon={<WhatsAppIcon className="icon_desien" />}
          />
          <TimespretorWithIcon
            title={"Linkdin :"}
            text={"w2.nadish"}
            icon={<LinkedInIcon className="icon_desien" />}
          />
          <TimespretorLast
            title={"Instgram:"}
            text={"w2.nadish"}
            icon={<InstagramIcon className="icon_desien" />}
          />
        </Timeline>
      </div>
    </>
  );
}

const TimespretorWithIcon = ({ title, text, icon }) => {
  return (
    <TimelineItem>
      <TimelineSeparator className="lineseprator">
        <TimelineDot className="icon_size"> {icon} </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        {/* <Typography component={'span'} variant='h8' sx={{ color: 'black' ,fontSize:'.9rem',paddingTop:'17px'}}>{title} </Typography> */}
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
        <TimelineDot className="icon_size">{icon}</TimelineDot>
      </TimelineSeparator>
      <TimelineContent>
        {/* <Typography component={'span'} variant='h8' sx={{ color: 'black' ,fontSize:'.9rem' }}>{title}</Typography> */}
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

const Timespretorfirst = () => {
  const [t] = useTranslation();
  return (
    <TimelineItem
      sx={{
        "& .MuiTimelineDot-root": {
          borderRadius: "10px",

          width: "140px",
          marginTop: 0,
          marginBottom: "17px",
          fontSize: "13.5px",
          color: "black",
        },
      }}
    >
      <TimelineSeparator>
        <TimelineDot className="icon_size_first">
          <HomeRepairServiceIcon className="icon_size_first_color" />
          <Typography className="contactme">
            {t("main_info.contact")}
          </Typography>{" "}
        </TimelineDot>
        {/* <TimelineConnector /> */}
      </TimelineSeparator>
    </TimelineItem>
  );
};
