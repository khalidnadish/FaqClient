import React, { useEffect, useState, useContext } from "react";
import { Box, Stack } from "@mui/material";
import Faq from "./HomeCompnent/faq/Faq";
import Category from "./HomeCompnent/faq/faqComponent/Category/Category";
import PepoleYouFollow from "./HomeCompnent/faq/faqComponent/FollowPepole/PepoleYouFollow";
import { FaqDetail } from "../helper/FAQContext";

function IndexPage() {
  const { faqUrl } = useContext(FaqDetail);

  useEffect(() => {}, [faqUrl]);

  return (
    <>
      <Stack
        sx={{
          flexDirection: "row",
          gap: 3,
          justifyContent: "space-between",
          alignItems: "flex-start",
          borderRadius: "8px",
          position: "relative",
          overflow: "auto",
        }}
      >
        <Box
          flex={1}
          sx={{
            display: { xs: "none", sm: "block" },
            width: { xs: "100vw", sm: "100vw", md: "100vw" },
          }}
        >
          <PepoleYouTrack />
        </Box>

        <Box flex={4} sx={{ width: { xs: "100vw", sm: "80vw", md: "100vw" } }}>
          <Faq faqUrlLink={faqUrl} />
        </Box>
        <Box flex={1} sx={{ display: { xs: "none", sm: "block" } }}>
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
            <Category />
          </Box>
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
