import React, { useEffect, useContext } from "react";
import { Box, Stack } from "@mui/material";
import Faq from "./HomeCompnent/faq/Faq";
import Category from "./HomeCompnent/faq/faqComponent/Category/Category";
import PepoleYouFollow from "./HomeCompnent/faq/faqComponent/FollowPepole/PepoleYouFollow";
import { FaqDetail } from "../helper/context/FAQContext";
import {
  rootStackStyle,
  FlowerBoxStyle,
  FaqBoxStyle,
  groupBoxStyle,
  postionGroupBoxStyle,
  postionFlowerBoxStyle,
} from "./indexPageHelper";

function IndexPage() {
  const { faqUrl, faqInfo } = useContext(FaqDetail);

  useEffect(() => {}, [faqUrl]);

  return (
    <>
      <Stack sx={rootStackStyle}>
        <Box sx={FlowerBoxStyle}>
          <PepoleYouTrack />
        </Box>

        <Box sx={FaqBoxStyle}>
          <Faq
            faqUrlLink={faqUrl}
            lookup={faqInfo.titleName}
            filterRow={faqInfo.recordsCount}
          />
        </Box>
        <Box sx={groupBoxStyle}>
          <Box sx={postionGroupBoxStyle}>
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
    <Box sx={postionFlowerBoxStyle}>
      <PepoleYouFollow categoryData={flowerData} />
    </Box>
  );
}
