import React, { useState, useContext } from "react";
import {
  Avatar,
  Box,
  IconButton,
  ListItemAvatar,
  ListSubheader,
  Stack,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { FaqDetail } from "../../../../../helper/FAQContext";
import { RiSendPlaneFill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import useAxiosToGetData from "../../../../../helper/useAxiosToGetData";
import { UserDetail } from "../../../../../helper/userContext";

function PepoleYouFollow() {
  const { userId } = useContext(UserDetail);

  const { data: dataFloewr, dataIsLoading: FloewrDataIsLoading } =
    useAxiosToGetData(`/user/showflower/${userId}`);
  console.log(dataFloewr);
  return (
    <>
      <Box sx={{ marginLeft: "7px", paddingTop: "7px" }}>
        <nav aria-label="main mailbox folders">
          <List
            // dense
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                <Stack
                  direction={"row"}
                  spacing={1}
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <FaUsers
                    color={"blue"}
                    size={25}
                    flex={1}
                    style={{ margin: "auto" }}
                  />

                  <Typography
                    variant="caption"
                    textAlign={"left"}
                    flex={4}
                    ml={1}
                  >
                    You Tracking
                  </Typography>
                  <Typography variant="caption" textAlign={"center"} flex={1}>
                    {FloewrDataIsLoading && dataFloewr.length}
                  </Typography>
                </Stack>
              </ListSubheader>
            }
          >
            {FloewrDataIsLoading && <ShowFlower datax={dataFloewr} />}
          </List>
        </nav>

        <Divider />
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

  const handleListItemClick = (index, catName) => {
    setSelectedIndex(index);
    setSelectedItem(catName);
    setSelectedFaq(true);
    // CONTROL SEARCH CONDITION
    setFaqUrl(`/faq/FaqByFollowerUser/${index}`);
    setFaqInfo({ titleName: catName, recordsCount: 0 });
  };

  return datax.map((catitem, index) => {
    return (
      <>
        <ListItem
          alignItems="flex-start"
          key={catitem.id}
          disablePadding
          // size={"small"}
          disableGutters
          secondaryAction={
            <IconButton
              // size="small"
              color="primary"
              sx={{ marginRight: "3px", bgcolor: "whitesmoke" }}
              onClick={() => {
                {
                  alert(index);
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
                src={"http://localhost:3001/images/avatar/1653493960018_1.jpg"}
                variant="rounded"
                sx={{ width: 24, height: 24 }}
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
