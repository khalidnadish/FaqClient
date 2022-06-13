import React, { useEffect, useState, useContext } from "react";
import { Box, Stack } from "@mui/material";
import Faq from "./HomeCompnent/faq/Faq";
import Category from "./HomeCompnent/faq/faqComponent/Category/Category";
import PepoleYouFollow from "./HomeCompnent/faq/faqComponent/FollowPepole/PepoleYouFollow";
import { axios } from "../helper/axios/axios";
import { FaqDetail } from "../helper/FAQContext";
import { UserDetail } from "../helper/userContext";

function IndexPage() {
  const [faqdata, setFaqdata] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [flowerData, setFlowerData] = useState([]);

  const [isLoading, setIsloading] = useState(false);
  const { filterByCategory, filterCode } = useContext(FaqDetail);

  const { userId } = useContext(UserDetail);

  const getallFaq = async () => {
    try {
      const resposn = await Promise.all([
        axios.get("/faq"),
        axios.get("/faq/category"),
        axios.get(`/user/showflower/${userId}`),
      ]);

      if (resposn) {
        setFaqdata(resposn[0].data.data);
        setCategoryData(resposn[1].data);
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
          // width: "100vw",
          // padding: "15px",

          // margin: "0 auto",
          position: "relative",
          overflow: "auto",
        }}
      >
        {/* Pepele You Foloow */}
        <Box
          flex={1}
          sx={{
            display: { xs: "none", sm: "block" },
            width: { xs: "100vw", sm: "100vw", md: "100vw" },
          }}
        >
          <PepoleYouTrack flowerData={flowerData} />
        </Box>

        <Box flex={4} sx={{ width: { xs: "100vw", sm: "80vw", md: "100vw" } }}>
          <MainFaq
            filterByCategory={filterByCategory}
            faqdata={faqdata}
            isLoading={isLoading}
          />
        </Box>
        <Box flex={1} sx={{ display: { xs: "none", sm: "block" } }}>
          <GroupToFilter categoryData={categoryData} />
        </Box>
      </Stack>
    </>
  );
}

export default IndexPage;

function PepoleYouTrack({ flowerData }) {
  return (
    <Box
      sx={{
        position: "fixed",
        width: "14%",
        border: ".5px solid lightgray",
        borderRadius: "8px",
        height: "70vh",
        overflow: "auto",
        padding: "2px",
        display: {
          xs: "none",
          sm: "block",
        },
      }}
    >
      <PepoleYouFollow categoryData={flowerData} />
    </Box>
  );
}

function MainFaq({ filterByCategory, faqdata, isLoading }) {
  return (
    <Faq
      lookup={filterByCategory}
      filterRow={faqdata.length}
      faqDataFromData={faqdata}
      isLoading={isLoading}
    />
  );
}

function GroupToFilter({ categoryData }) {
  return (
    <Box
      sx={{
        position: "fixed",
        width: "14%",
        border: ".5px solid lightgray",
        borderRadius: "8px",
        height: "70vh",
        overflow: "auto",
        padding: "2px",
        display: {
          xs: "none",
          sm: "block",
        },
      }}
    >
      <Category categoryData={categoryData} />
    </Box>
  );
}
