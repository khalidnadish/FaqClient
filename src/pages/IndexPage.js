import React, { useEffect, useState } from "react";
import { Box, Paper, Stack } from "@mui/material";
import styled from "@emotion/styled";
import Faq from "./HomeCompnent/faq/Faq";
import Category from "./HomeCompnent/faq/faqComponent/Category/Category";
import { axios } from "../helper/axios/axios";

const Boxwraper = styled(Box)({
  // p={2}
  display: { xs: "block", sm: "block" },
  maxWidth: { md: "80%" },
  marginTop: "10px",
});
const CatWraper = styled(Paper)({
  // p={2}
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
  width: "20%",
  height: "75vh",
  overflow: "auto",
});

function IndexPage() {
  const [faqdata, setFaqdata] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [isLoading, setIsloading] = useState(false);

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

  useEffect(() => {
    getallFaq();
    // // DOTO: chk  isloading stuts
    // if (isLoading) {
    //   console.table(faqdata);
    //   console.table(categoryData);
    // }
  }, []);

  return (
    <>
      <Boxwraper>
        <Stack
          sx={{ flexDirection: "row", gap: 1, justifyContent: "space-between" }}
        >
          <Box flex={4}>
            <Faq
              lookup={"home"}
              faqDataFromData={faqdata}
              isLoading={isLoading}
            />
          </Box>
          <Box flex={1} sx={{ overflow: "auto" }}>
            <CatWraper>
              <Box sx={{ overflow: "auto" }}>
                <Category categoryData={categoryData} />
              </Box>
            </CatWraper>
          </Box>
        </Stack>
      </Boxwraper>
    </>
  );
}

export default IndexPage;
