import React, { useState, useContext } from "react";
import { Avatar, Box, IconButton, Stack } from "@mui/material";
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

          <Typography variant="caption" textAlign={"left"} flex={4} ml={1}>
            You Track
          </Typography>
          <Typography variant="caption" textAlign={"center"} flex={1}>
            {FloewrDataIsLoading && dataFloewr.length}
          </Typography>
        </Stack>

        <nav aria-label="main mailbox folders">
          <List>
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
  const { setFaqUrl } = useContext(FaqDetail);

  const handleListItemClick = (index, catName) => {
    setSelectedIndex(index);
    setSelectedItem(catName);
    setSelectedFaq(true);
    // CONTROL SEARCH CONDITION
    setFaqUrl(`/faq/FaqByFollowerUser/${index}`);
  };

  return datax.map((catitem) => {
    return (
      <>
        <ListItem
          key={catitem.id}
          disablePadding
          size={"small"}
          sx={{ padding: 0, fontSize: ".8rem" }}
        >
          <ListItemButton
            onClick={() => {
              // handleListItemClick();
              handleListItemClick(catitem.followuser, catitem.username);
            }}
            sx={{
              padding: 0,
              borderBottom: "1px solid lightgray",
            }}
          >
            <ListData catitem={catitem.followuser + catitem.username} />
          </ListItemButton>
        </ListItem>
      </>
    );
  });
};

function ListData({ catitem, rowcount }) {
  return (
    <ListItemText disableTypography>
      <Stack
        direction={"row"}
        // alignItems={"center"}
        justifyContent={"space-between"}
        sx={{ padding: "5px" }}
      >
        <Avatar
          flex={1}
          sx={{
            width: 35,
            height: 35,
            fontSize: ".8rem",
          }}
          variant="circle"
          alignItems="center"
        ></Avatar>

        <Typography
          variant="subtitle1"
          fontWeight={"normal"}
          flex={4}
          ml={1}
          alignItems="center"
        >
          {catitem}
        </Typography>

        <IconButton size="small" color="info" alignItems="center">
          <RiSendPlaneFill size={15} />
        </IconButton>
      </Stack>
    </ListItemText>
  );
}
