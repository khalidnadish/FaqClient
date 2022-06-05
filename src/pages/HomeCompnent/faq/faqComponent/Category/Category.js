import React, { useState } from "react";
import { Box, IconButton, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { BsSearch } from "react-icons/bs";
import Faq from "../../Faq";

function Category({ categoryData }) {
  const [selectedIndex, setSelectedIndex] = useState("");
  const [selectedItem, setSelectedItem] = useState("");
  const [selectedFaq, setSelectedFaq] = useState(false);

  const handleListItemClick = (index, catName) => {
    setSelectedIndex(index);
    setSelectedItem(catName);
    setSelectedFaq(true);
    console.log(selectedIndex);
  };

  return (
    <>
      <Stack direction={"row"} alignItems={"center"}>
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
                      handleListItemClick(itemIndex, catitem.catName);
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
                      {itemIndex} {catitem.catName}
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
