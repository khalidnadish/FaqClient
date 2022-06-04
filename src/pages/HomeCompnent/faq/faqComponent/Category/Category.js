import React, { useEffect, useState, useRef } from "react";
import { Box, Stack } from "@mui/material";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import { positions } from "@mui/system";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import { axios } from "../../../../../helper/axios/axios";
import Loader from "../../../../../helper/Loader";

const AvatarImg = styled(Box)({
  position: "absolute",
  top: "50%",
  width: "40px",
  height: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "3px solid #409eff",
  borderRadius: "2000px",
  left: "-20px",
  marginTop: "-20px",
  background: "#fff",
  fontSize: "20px",
  color: "#409eff",
  fontWeight: "700",
});

function Category({ categoryData }) {
  const [selectedIndex, setSelectedIndex] = useState("");
  const [selectedItem, setSelectedItem] = useState("");
  // console.log("categoryData from modle <<<<>>>> " + categoryData[1].catName);
  const listRef = useRef();
  // listRef.current.style.color = "white";

  // const changeColor = () => {
  //   listRef.current.style.backgroundColor = "white";
  // };
  const handleListItemClick = (event, index) => {
    setSelectedIndex((index) => index);
    console.log(selectedIndex);
  };

  useEffect(() => {
    // console.log(listRef.current);
  }, []);

  // listbtn.current.styled
  return (
    <>
      <h2>
        {selectedIndex} {selectedItem}
      </h2>
      <Box>
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
                      setSelectedIndex(itemIndex);
                      setSelectedItem(catitem.catName);
                      console.log(selectedIndex);
                    }}
                    ref={listRef}
                    style={{
                      backgroundColor: "whitesmoke",
                    }}
                    sx={{
                      paddingTop: 0,
                      paddingBottom: 0,
                      borderBottom: "1px solid lightgray",
                    }}
                  >
                    {/* <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon> */}
                    <ListItemText disableTypography>
                      {itemIndex} {catitem.catName}
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </nav>

        <Divider />
      </Box>
    </>
  );
}

export default Category;

const ShowCat = ({ catdata }) => {
  return <></>;
};
