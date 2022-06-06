import React from "react";
import FaqQuastion from "./faqComponent/FaqQuastion";
import Accordion from "@mui/material/Accordion";

import Container from "@mui/material/Container";
import Loader from "../../../helper/Loader";
import { Stack, Box, Chip, Divider } from "@mui/material";
import { BsSearch } from "react-icons/bs";

import "./faq.module.css";

export default function Faq({ lookup, faqDataFromData, isLoading }) {
  return (
    <>
      {/* <Container fixed> */}
      <Chip
        label={lookup}
        icon={<BsSearch />}
        color="success"
        variant="outlined"
        size="small"
      />
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
