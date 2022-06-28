import React, { useContext, lazy, Suspense, useState } from "react";
import {
  Chip,
  Container,
  Stack,
  Divider,
  IconButton,
  Tooltip,
  Button,
  Paper,
} from "@mui/material";
import { FaqDetail } from "../../helper/context/FAQContext";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { GoCommentDiscussion } from "react-icons/go";
import { Box } from "@mui/system";
import { FaMugHot } from "react-icons/fa";
import { AiOutlineAim } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { VscLayersActive } from "react-icons/vsc";

const Loader = lazy(() => import("../loader/Loader"));
const Category = () => import("../../pages/home/faq/Category/Category");

const PepoleYouFollow = lazy(() =>
  import("../../pages/home/faq/FollowPepole/PepoleYouFollow")
);
const LeftDrawer = lazy(() => import("../leftDrawer/LeftDrawer"));

function OtherNav() {
  const [openUsers, setOpenUsers] = useState(false);
  const [openGroups, setOpenGroups] = useState(false);
  const { setFaqUrl, faqInfo } = useContext(FaqDetail);

  const handleShowAllFAQ = () => {
    setFaqUrl(`/faq`);
    // setFaqInfo({ titleName: "All Faq", recordsCount: 0 });
  };

  return (
    <>
      <Box
        position="sticky"
        sx={{
          backgroundColor: "background.paper",
          padding: "8px 8px 0px 0px",
        }}
      >
        <Paper elevation={10} sx={{ padding: "10px", alignItems: "center" }}>
          <Container fixed>
            <Stack direction={"row"} gap={1} justifyContent="space-between">
              <Box>
                <Chip
                  label={faqInfo.titleName}
                  icon={
                    <FaLayerGroup size={20} style={{ marginRight: "7px" }} />
                  }
                  color="primary"
                  sx={{
                    color: "primary",
                    width: "8em",
                  }}
                  variant="outlined"
                />

                <Chip
                  label={faqInfo.recordsCount}
                  icon={
                    <GoCommentDiscussion
                      size={20}
                      style={{ marginRight: "7px" }}
                    />
                  }
                  sx={{
                    color: "primary.main",

                    width: "8em",
                    marginLeft: "10px",
                  }}
                  variant="outlined"
                />
              </Box>
              <Box>
                <Button
                  variant="outlined"
                  color="secondary"
                  disableElevation
                  onClick={() => handleShowAllFAQ()}
                  startIcon={<VisibilityIcon />}
                >
                  Show all Quastion
                </Button>
              </Box>
              <Box sx={{ display: "flex", alignitems: "center" }}>
                <Tooltip title="Favorite Question">
                  <IconButton variant="text" color="secondary">
                    <FavoriteIcon />
                  </IconButton>
                </Tooltip>
                <Divider orientation="vertical" />
                <Tooltip title="Most populer Question">
                  <IconButton variant="text" color="primary">
                    <FaMugHot />
                  </IconButton>
                </Tooltip>

                <Divider orientation="vertical" />
                <Tooltip title="Question's You Will Like It">
                  <IconButton variant="text" color="primary">
                    <AiOutlineAim />
                  </IconButton>
                </Tooltip>
                <Divider orientation="vertical" />
                <Tooltip title=" Faq From Pepole you follow">
                  <IconButton
                    variant="text"
                    color="primary"
                    onClick={() => {
                      setOpenUsers(true);
                    }}
                  >
                    <FaUsers />
                  </IconButton>
                </Tooltip>
                <Divider orientation="vertical" />

                <Tooltip title="WorkSpace You Track">
                  <IconButton
                    variant="text"
                    color="secondary"
                    onClick={() => {
                      setOpenGroups(true);
                    }}
                  >
                    <VscLayersActive />
                  </IconButton>
                </Tooltip>
              </Box>
            </Stack>
          </Container>
        </Paper>
      </Box>
      <Suspense fallback={<Loader />}>
        <LeftDrawer open={openUsers} setOpen={setOpenUsers}>
          <PepoleYouFollow />
        </LeftDrawer>
      </Suspense>
      <Suspense fallback={<Loader />}>
        <LeftDrawer open={openGroups} setOpen={setOpenGroups}>
          <Suspense fallback={<Loader />}>
            <Category />
          </Suspense>
        </LeftDrawer>
      </Suspense>
    </>
  );
}

export default OtherNav;
