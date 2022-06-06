import React, { useState, useContext } from "react";
import { Avatar, Box, Button, IconButton, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { BsSearch } from "react-icons/bs";
import { FaqDetail } from "../../../../../helper/FAQContext";
import { green, pink } from "@mui/material/colors";
import Faq from "../../Faq";

function Category({ categoryData }) {
  const [selectedIndex, setSelectedIndex] = useState("");
  const [selectedItem, setSelectedItem] = useState("");
  const [selectedFaq, setSelectedFaq] = useState(false);
  const { filterName, setFilterName, setFilterCode } = useContext(FaqDetail);

  const handleShowAll = () => {
    setFilterCode(1);
    setFilterName("Show all data");
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
      <Stack direction={"row"} alignItems={"center"}>
        <Button
          onClick={() => {
            handleShowAll();
          }}
        >
          show all
        </Button>
        <IconButton size="small">
          <BsSearch />
        </IconButton>

        <Typography
          variant="body1"
          color="initial"
          sx={{ borderLeft: "1px solid lightgray", paddingLeft: "5px" }}
        >
          {selectedItem}
        </Typography>
      </Stack>

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
                      handleListItemClick(catitem.catid, catitem.catName);
                    }}
                    style={{
                      backgroundColor: "whitesmoke",
                    }}
                    sx={{
                      paddingTop: 0,
                      paddingBottom: 0,
                      borderBottom: "1px solid lightgray",
                    }}
                  >
                    <ListItemText disableTypography>
                      <Stack
                        direction={"row"}
                        alignItems={"center"}
                        justifyContent={"space-between"}
                      >
                        <Box>
                          <Typography variant="subtitle1" fontWeight={"normal"}>
                            {catitem.catName}
                          </Typography>
                        </Box>
                        <Box>
                          <Avatar
                            sx={{
                              width: 20,
                              height: 20,
                              bgcolor: pink[500],
                              fontSize: ".8rem",
                            }}
                            variant="rounded"
                          >
                            {catitem.faqrowcount}
                          </Avatar>
                        </Box>
                      </Stack>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              );
            })}
            {selectedFaq && <Faq lookup={selectedItem} />}

            {selectedFaq && setSelectedFaq(false)}
          </List>
        </nav>

        <Divider />
      </Box>
    </>
  );
}

export default Category;
