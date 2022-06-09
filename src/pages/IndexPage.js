import React, { useEffect, useState, useContext } from "react";
import { Box, Stack } from "@mui/material";

import Faq from "./HomeCompnent/faq/Faq";
import Category from "./HomeCompnent/faq/faqComponent/Category/Category";
import PepoleYouFollow from "./HomeCompnent/faq/faqComponent/FollowPepole/PepoleYouFollow";
import { axios } from "../helper/axios/axios";
import { FaqDetail } from "../helper/FAQContext";
import { UserDetail } from "../helper/userContext";
import { Boxwraper, CatWraper } from "./indexPageHelper";

function IndexPage() {
  const [faqdata, setFaqdata] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [flowerData, setFlowerData] = useState([]);

  const [isLoading, setIsloading] = useState(false);
  const { filterName, filterCode } = useContext(FaqDetail);

  const { userName, setUserName, userAvatar, userId } = useContext(UserDetail);

  const getallFaq = async () => {
    try {
      const resposn = await Promise.all([
        axios.get("/faq"),
        axios.get("/faq/category"),
        axios.get(`/user/showflower/${userId}`),
      ]);

      if (resposn) {
        setFaqdata((oldFaq) => resposn[0].data.data);
        setCategoryData((oldCat) => resposn[1].data);
        setFlowerData(resposn[2].data);
        setIsloading((checkLoad) => !checkLoad);
      }
      setIsloading(true);
    } catch (error) {
      console.log("Error :", error);
    }
  };

  const getFaqByGroup = async () => {
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
      <Stack
        sx={{
          flexDirection: "row",
          gap: 3,
          justifyContent: "space-between",
          alignItems: "flex-start",

          borderRadius: "8px",
          width: "100vw",
          padding: "15px",

          margin: "0 auto",
          position: "relative",
          overflow: "auto",
        }}
      >
        <Box flex={1}>
          <Box
            sx={{
              position: "fixed",
              alignItems: "center",
              width: "14%",
              border: ".5px solid lightgray",
              borderRadius: "8px",
              height: "70vh",
              overflow: "auto",
              padding: "2px",
            }}
          >
            <PepoleYouFollow categoryData={flowerData} />
          </Box>
        </Box>
        <Box flex={4} sx={{ width: "70vw" }}>
          <Faq
            lookup={filterName}
            filterRow={faqdata.length}
            faqDataFromData={faqdata}
            isLoading={isLoading}
          />
        </Box>
        <Box flex={1}>
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
        </Box>
      </Stack>
    </>
  );
}

export default IndexPage;
