import React from "react";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import FaqAction from "./FaqAction";
import { Box } from "@mui/system";
import { Divider, Stack } from "@mui/material";
import Avatar from "@mui/material/Avatar";
export default function FaqAnswer({ answer, src }) {
  return (
    <>
      <AccordionDetails>
        <Box alignItems="center">
          <Stack
            direction="row"
            spacing={1}
            justifyContent="space-between"
            alignItems="center"
            divider={<Divider orientation="vertical" flexItem />}
          >
            <Avatar
              alt="Remy Sharp"
              src={src}
              sx={{ width: 24, height: 24 }}
            ></Avatar>

            <Typography sx={{ width: "100%" }}>{answer}</Typography>
          </Stack>
        </Box>

        {/* <Typography>{answer}</Typography> */}
      </AccordionDetails>
      <FaqAction answerCount={"4"} />
    </>
  );
}
