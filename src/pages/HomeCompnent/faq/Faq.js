import React from "react";
import FaqQuastion from "./faqComponent/FaqQuastion";
import Accordion from "@mui/material/Accordion";

import Loader from "../../../helper/Loader";
import { Stack, Chip, Divider } from "@mui/material";

import { HiDocumentSearch } from "react-icons/hi";

import { green } from "@mui/material/colors";
import { GoCommentDiscussion } from "react-icons/go";

import "./faq.module.css";

export default function Faq({ lookup, faqDataFromData, isLoading, filterRow }) {
  return (
    <>
      {/* <Container fixed> */}
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Chip
          label={lookup}
          icon={
            <HiDocumentSearch
              size={20}
              color="white"
              fontSize={"large"}
              style={{ marginRight: "7px" }}
            />
          }
          // color={pink[500]}
          sx={{
            bgcolor: green[500],
            color: "white",
            paddingLeft: "10px",
            paddingRight: "10px",
            width: "auto",
          }}
          variant="containd"
          // size="small"
        />
        <Chip
          label={filterRow}
          icon={
            <GoCommentDiscussion
              size={20}
              color="white"
              style={{ marginRight: "7px" }}
            />
          }
          sx={{ bgcolor: green[500], color: "white", width: "8em" }}
          variant="containd"
          // size="small"
        />
      </Stack>
      <Divider sx={{ marginBottom: "15px", marginTop: "10px" }}></Divider>

      {/* <Stack direction={"row"} sx={{ gap: 1, justifyContent: "space-between" }}> */}
      {/* <Box> */}
      {isLoading ? <ShowFaq faqdata={faqDataFromData} /> : <Loader />}
      {/* </Box> */}
      {/* </Stack> */}
      {/* </Container> */}
    </>
  );
}

const ShowFaq = ({ faqdata }) => {
  return (
    <>
      {faqdata.map((faqItem, idx) => (
        <Accordion
          key={faqItem.faqid}
          sx={{ marginBottom: "5px", width: "100%" }}
        >
          {/* {console.log("image : " + faqItem.avatar)} */}

          <FaqQuastion
            Quastion={faqItem.faq}
            src={faqItem.avatar}
            count={faqItem.rowcount}
            faqid={faqItem.faqid}
            autherName={faqItem.autherName}
            create_at={faqItem.create_at}
          />
        </Accordion>
      ))}
    </>
  );
};
