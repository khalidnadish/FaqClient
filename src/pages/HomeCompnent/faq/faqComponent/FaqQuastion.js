import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Avatar from "@mui/material/Avatar";
import FaqAction from "./FaqAction";
import { axios } from "../../../../helper/axios/axios";
import { FcBusinessman } from "react-icons/fc";

import {
  Accordion,
  Badge,
  Chip,
  Divider,
  IconButton,
  Stack,
} from "@mui/material";
import { Box } from "@mui/system";
import FaqAnswerId from "../faqComponent/FaqAnswerId";
import Loader from "../../../../helper/Loader";

export default function FaqQuastion({
  Quastion,
  src,
  count,
  faqid,
  autherName,
  create_at,
}) {
  const [faqwithid, setFaqWithId] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleReply = (faqid) => {
    setShowAnswer(true);
  };

  return (
    <>
      <FaqAction
        answerCount={count}
        faqid={faqid}
        autherName={autherName}
        create_at={create_at}
      />
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          // noWrap={false}
          sx={{
            backgroundColor: "#E5E5E5",
            justifyContent: "flex-start",
          }}
          onClick={() => {
            handleReply(faqid);
          }}
        >
          <Box alignItems="center">
            <Stack
              direction="row"
              spacing={1}
              justifyContent="space-between"
              alignItems="center"
              divider={<Divider orientation="vertical" flexItem />}
            >
              <IconButton
                aria-label="delete"
                size="small"
                onClick={() => {
                  alert("sd");
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src={src}
                  sx={{ width: 24, height: 24 }}
                ></Avatar>
              </IconButton>
              <Box>
                <Chip
                  size="small"
                  label={autherName}
                  variant="outlined"
                  icon={<FcBusinessman />}
                  // onClick={() => {
                  //   faqHandle(fid);
                  // }}
                  // sx={{ marginLeft: 1 }}
                />
                <Typography sx={{ wordBreak: "break-word" }}>
                  {Quastion}
                </Typography>
              </Box>
            </Stack>
          </Box>
        </AccordionSummary>
        {showAnswer && (
          <AccordionDetails>
            <FaqAnswerId id={faqid} />
          </AccordionDetails>
        )}
      </Accordion>
    </>
  );
}
const ShowAnwer = ({ faqwithidData }) => {
  return (
    <>
      <FaqAnswerId> {faqwithidData} </FaqAnswerId>;
    </>
  );
};
