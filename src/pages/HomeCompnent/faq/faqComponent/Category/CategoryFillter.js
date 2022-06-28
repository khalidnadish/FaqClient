import React, { useContext, useState } from "react";
import { IconButton } from "@mui/material";
import { FaLayerGroup } from "react-icons/fa";
import { VscLayersActive } from "react-icons/vsc";
import useAxiosToGetData from "../../../../../helper/custemHook/useAxiosToGetData";
import { UserDetail } from "../../../../../helper/context/userContext";
import { FaqDetail } from "../../../../../helper/context/FAQContext";
import { Box } from "@mui/system";

function CategoryFillter() {
  const [urlx, setUrlx] = useState("/category");
  const { data: dataCategory, dataIsLoading: catDataIsLoading } =
    useAxiosToGetData(urlx);

  const { setFaqUrl, setFaqInfo } = useContext(FaqDetail);
  const { userId } = useContext(UserDetail);
  const [followstuts, setFollowstuts] = useState(0);

  const handleShowAll = () => {
    setFaqUrl(`/faq`);
    setFaqInfo({ titleName: "Show ALL  Faq", recordsCount: 0 });
    setUrlx("/category");
    setFollowstuts(0);
  };
  const handleShowMyGroup = () => {
    setUrlx(`/category/getUserCategory/${userId}`);
    setFollowstuts(1);
  };

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <IconButton
          variant="outlined" // color="primary.main"
          onClick={() => {
            handleShowAll();
          }}
        >
          <FaLayerGroup color="green" />
        </IconButton>
        <IconButton
          variant="outlined"
          onClick={() => {
            handleShowMyGroup();
          }}
        >
          <VscLayersActive color="blue" size={30} />
        </IconButton>
      </Box>
    </>
  );
}

export default CategoryFillter;
