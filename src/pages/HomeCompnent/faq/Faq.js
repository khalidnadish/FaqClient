import React from "react";
import Loader from "../../../helper/Loader";
import { Stack, Chip, Divider } from "@mui/material";
import { HiDocumentSearch } from "react-icons/hi";
import { GoCommentDiscussion } from "react-icons/go";
import "./faq.module.css";
import { ShowFaqCard, sx_HiDocumentSearch } from "./faqHelper";
import useAxiosToGetData from "../../../helper/useAxiosToGetData";

export default function Faq({ lookup, filterRow, faqUrlLink }) {
  const { data, dataIsLoading } = useAxiosToGetData(faqUrlLink);

  return (
    <>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        sx={{
          border: `1px solid #EAEAE9`,
          borderRadius: "20px",
        }}
      >
        <Chip
          label={lookup}
          icon={
            <HiDocumentSearch
              size={20}
              color="red"
              fontSize={"large"}
              style={{ marginRight: "7px" }}
            />
          }
          sx={sx_HiDocumentSearch}
          variant="outlined"
        />
        <Chip
          label={dataIsLoading && data.length}
          icon={
            <GoCommentDiscussion
              size={20}
              color="white"
              style={{ marginRight: "7px" }}
            />
          }
          sx={{ bgcolor: "primary.main", color: "white", width: "8em" }}
          variant="containd"
        />
      </Stack>
      <Divider sx={{ marginBottom: "15px", marginTop: "10px" }}></Divider>
      {dataIsLoading ? <ShowFaqCard faqdata={data} /> : <Loader />}
      {/* {isLoading ? <ShowFaq faqdata={faqDataFromData} /> : <Loader />} */}
    </>
  );
}
