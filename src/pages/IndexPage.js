import React, { useEffect, useState, useContext } from "react";
import { Box, Paper, Stack } from "@mui/material";
import styled from "@emotion/styled";
import Faq from "./HomeCompnent/faq/Faq";
import Category from "./HomeCompnent/faq/faqComponent/Category/Category";
import { axios } from "../helper/axios/axios";
import { FaqDetail } from "../helper/FAQContext";

const Boxwraper = styled(Box)({
  // p={2}
  display: { xs: "block", sm: "block" },
  maxWidth: { md: "80%" },
  marginTop: "10px",
});
const CatWraper = styled(Paper)({
  marginTop: "10px",
  position: "fixed",
  marginRight: 20,
  marginBottom: "10px",
  borderRadius: "8px",
  backgroundColor: "somkewhite",
  minWidth: "120px",
  bgcolor: "background.paper",
  border: "1px solid lightgray",
  fontWeight: "normal",
  // width: "20%",
  height: "75vh",
  overflow: "auto",
});

function IndexPage() {
  const [faqdata, setFaqdata] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const { filterName, filterCode } = useContext(FaqDetail);

  const getallFaq = async () => {
    try {
      const resposn = await Promise.all([
        axios.get("/faq"),
        axios.get("/faq/category"),
      ]);

      if (resposn) {
        setFaqdata((oldFaq) => resposn[0].data.data);
        setCategoryData((oldCat) => resposn[1].data);
        setIsloading((checkLoad) => !checkLoad);
      }
      setIsloading(true);
    } catch (error) {
      console.log("Error :", error);
    }
  };

  const getFaqByGroup = async () => {
    // alert("getFaqByGroup");
    try {
      const resposn = await Promise.all([
        axios.get(`/faq/bygroup/${filterCode}`),
        axios.get("/faq/category"),
      ]);

      if (resposn) {
        setFaqdata((oldFaq) => resposn[0].data.data);
        setCategoryData((oldCat) => resposn[1].data);
        setIsloading((checkLoad) => !checkLoad);
      }
      setIsloading(true);
    } catch (error) {
      console.log("Error :", error);
    }
  };

  useEffect(() => {
    {
      filterCode === 1 && getallFaq();
    }
    {
      filterCode !== 1 && getFaqByGroup();
    }
  }, [filterCode]);

  return (
    <>
      {/* <Boxwraper> */}
      <Stack
        sx={{
          flexDirection: "row",
          gap: 4,
          justifyContent: "space-between",
          alignItems: "flex-start",

          borderRadius: "8px",
          width: "100vw",
          padding: "15px",
          width: "940px",
          margin: "0 auto",
          position: "relative",
          overflow: "auto",
        }}
      >
        <Box flex={4} sx={{ width: "70vw" }}>
          <Faq
            lookup={filterName + "" + filterCode}
            faqDataFromData={faqdata}
            isLoading={isLoading}
          />
        </Box>
        <Box flex={1}>
          {/* <CatWraper> */}
          <Box
            sx={{
              position: "fixed",

              width: "14%",
              border: ".5px solid lightgray",
              borderRadius: "8px",
              height: "70vh",
              overflow: "auto",
              padding: "2px",
            }}
          >
            <Category categoryData={categoryData} />
          </Box>
          {/* </CatWraper> */}
        </Box>
      </Stack>
      {/* </Boxwraper> */}
    </>
  );
}

export default IndexPage;
