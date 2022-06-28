import React, { useState, useContext } from "react";
import {
  Avatar,
  Box,
  IconButton,
  ListItemAvatar,
  ListSubheader,
  Stack,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import { FaqDetail } from "../../../../../helper/context/FAQContext";
import { RiSendPlaneFill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import useAxiosToGetData from "../../../../../helper/custemHook/useAxiosToGetData";
import { UserDetail } from "../../../../../helper/context/userContext";
import SendDirectMsg from "../../../../../component/directMsg/SendDirectMsq";

function PepoleYouFollow() {
  const { userId } = useContext(UserDetail);

  const { data: dataFloewr, dataIsLoading: FloewrDataIsLoading } =
    useAxiosToGetData(`/user/showflower/${userId}`);
  // console.log(dataFloewr);
  return (
    <>
      <Box sx={{ marginLeft: "7px", paddingTop: "7px" }}>
        <nav aria-label="main mailbox folders">
          <List
            sx={{ width: "95%", maxWidth: 360, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                <Stack
                  direction={"column"}
                  // spacing={3}
                  justifyContent="space-between"
                  alignItems="center"
                  // mb={4}
                  sx={{
                    borderBottom: "2px solid",
                    padding: "5px",
                    borderColor: "primary.light",
                  }}
                >
                  <FaUsers
                    color={"blue"}
                    size={60}
                    flex={1}
                    style={{ margin: "auto" }}
                  />
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <Typography
                      variant="caption"
                      textAlign={"left"}
                      flex={4}
                      ml={1}
                    >
                      You Tracking
                    </Typography>
                    <Typography variant="caption" textAlign={"center"} flex={1}>
                      {dataFloewr?.length}
                    </Typography>
                  </Box>
                </Stack>
              </ListSubheader>
            }
          >
            {FloewrDataIsLoading && <ShowFlower datax={dataFloewr} />}
          </List>
        </nav>
      </Box>
    </>
  );
}

export default PepoleYouFollow;

const ShowFlower = ({ datax }) => {
  const [selectedIndex, setSelectedIndex] = useState("");
  const [selectedItem, setSelectedItem] = useState("");
  const [selectedFaq, setSelectedFaq] = useState(false);
  const { setFaqUrl, setFaqInfo } = useContext(FaqDetail);
  const [openDirectMsg, setOpenDirectMsg] = useState(false);

  const handleListItemClick = (index, catName) => {
    setSelectedIndex(index);
    setSelectedItem(catName);
    setSelectedFaq(true);
    // CONTROL SEARCH CONDITION
    setFaqUrl(`/faq/FaqByFollowerUser/${index}`);
    setFaqInfo({ titleName: catName, recordsCount: 0 });
  };
  const handleDirectMsg = () => {
    setOpenDirectMsg(true);
  };

  return datax.map((catitem, index) => {
    return (
      <>
        <SendDirectMsg
          open={openDirectMsg}
          setOpen={setOpenDirectMsg}
          userName={"test"}
        />
        <ListItem
          alignItems="flex-start"
          key={catitem.id}
          // disablePadding
          // disableGutters
          secondaryAction={
            <IconButton
              color="primary"
              sx={{ marginLeft: "3px", bgcolor: "background.paper" }}
              onClick={() => {
                {
                  handleDirectMsg();
                }
              }}
            >
              <RiSendPlaneFill size={15} />
            </IconButton>
          }
        >
          <ListItemButton
            onClick={() => {
              handleListItemClick(catitem.followuser, catitem.username);
            }}
            sx={{
              padding: 0,
              borderBottom: "1px solid lightgray",
            }}
          >
            <ListItemAvatar sx={{ alignItems: "center" }}>
              <Avatar
                size="small"
                src={catitem.avatar}
                // variant="rounded"
                // sx={{ width: 24, height: 24 }}
              />
            </ListItemAvatar>
            <ListItemText
              // disableTypography
              primaryTypographyProps
              primary={
                <Typography variant="body2" sx={{ color: "gray" }}>
                  {catitem.username}
                </Typography>
              }
              // sx={{ fontWeight: "normal", fontSize: ".5rem" }}
            />
          </ListItemButton>
        </ListItem>
      </>
    );
  });
};
