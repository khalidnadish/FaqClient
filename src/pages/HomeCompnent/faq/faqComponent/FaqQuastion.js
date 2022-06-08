import React, { useState } from "react";

import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Avatar from "@mui/material/Avatar";
import FaqAction from "./FaqAction";

import { FcBusinessman } from "react-icons/fc";

import { Accordion, Chip, Divider, IconButton, Stack } from "@mui/material";
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
          sx={{
            backgroundColor: "lighgray",
          }}
          onClick={() => {
            handleReply(faqid);
          }}
        >
          <Stack
            direction="row"
            spacing={1}
            justifyContent="space-between"
            alignItems="center"
            divider={<Divider orientation="vertical" flexItem />}
          >
            <Box>
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
            </Box>
            <Box>
              <Chip
                size="small"
                label={autherName}
                variant="outlined"
                icon={<FcBusinessman />}
              />
              <Typography sx={{ wordBreak: "break-word" }}>
                {Quastion}
              </Typography>
            </Box>
          </Stack>
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
