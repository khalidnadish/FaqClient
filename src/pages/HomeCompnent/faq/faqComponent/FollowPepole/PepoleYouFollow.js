import React, { useState, useContext } from "react";
import { Avatar, Box, Button, IconButton, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

import { FaqDetail } from "../../../../../helper/FAQContext";
import { green, pink } from "@mui/material/colors";

import { RiSendPlaneFill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import { BiMessageRoundedDots } from "react-icons/bi";

import Faq from "../../Faq";

function PepoleYouFollow({ categoryData }) {
  const [selectedIndex, setSelectedIndex] = useState("");
  const [selectedItem, setSelectedItem] = useState("");
  const [selectedFaq, setSelectedFaq] = useState(false);
  const { filterName, setFilterName, setFilterCode } = useContext(FaqDetail);

  const handleShowUserFaq = () => {
    alert("handleShowUserFaq");
    // setFilterCode(1);
    // setFilterName("Show all data");
  };
  const handleListItemClick = (index, catName) => {
    // e.preventDefault();
    setSelectedIndex(index);
    setSelectedItem(catName);
    setFilterName(catName);
    setFilterCode(index);
    setSelectedFaq(true);
  };

  return (
    <>
      <Box sx={{ marginLeft: "7px", paddingTop: "7px" }}>
        <Stack
          direction={"row"}
          spacing={1}
          justifyContent="space-between"
          alignItems="center"
          // sx={{ width: "100%" }} // divider={<Divider orientation="vertical" flexItem />}
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
            {categoryData.length}
          </Typography>
        </Stack>

        <nav aria-label="main mailbox folders">
          <List>
            {categoryData.map((catitem, itemIndex) => {
              return (
                <ListItem
                  disablePadding
                  key={catitem.catid}
                  size={"small"}
                  sx={{ padding: 0, fontSize: ".8rem" }}
                >
                  <ListItemButton
                    onClick={() => {
                      handleShowUserFaq();
                    }}
                    sx={{
                      padding: 0,
                      // backgroundColor: "whitesmoke",
                      borderBottom: "1px solid lightgray",
                    }}
                  >
                    <ListData catitem={catitem.username} />
                  </ListItemButton>
                </ListItem>
              );
            })}
            {/* {selectedFaq && <Faq lookup={selectedItem} />} */}

            {/* {selectedFaq && setSelectedFaq(false)} */}
          </List>
        </nav>

        <Divider />
      </Box>
    </>
  );
}

export default PepoleYouFollow;

function ListData({ catitem, rowcount }) {
  return (
    <ListItemText disableTypography>
      <Stack
        direction={"row"}
        // alignItems={"center"}
        justifyContent={"space-between"}
        sx={{ padding: "5px", fontSize: ".8rem" }}
      >
        <Avatar
          flex={1}
          sx={{
            width: 35,
            height: 35,
            fontSize: ".8rem",
          }}
          variant="circle"
          alignItems={"center"}
        ></Avatar>

        <Typography
          variant="subtitle1"
          fontWeight={"normal"}
          flex={4}
          ml={1}
          alignItems={"center"}
        >
          {catitem}
        </Typography>

        <IconButton size="small" color="primary" flex={1} alignItems={"center"}>
          <RiSendPlaneFill size={15} />
        </IconButton>
      </Stack>
    </ListItemText>
  );
}
