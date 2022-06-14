import React, { useState, useContext } from "react";
import { Avatar, Box, Button, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { BsSearch } from "react-icons/bs";
import { FaqDetail } from "../../../../../helper/FAQContext";
import { pink } from "@mui/material/colors";
import useAxiosToGetData from "../../../../../helper/useAxiosToGetData";

function Category() {
  const { data: dataCategory, dataIsLoading: catDataIsLoading } =
    useAxiosToGetData("/faq/category");

  const { setFaqUrl } = useContext(FaqDetail);

  const handleShowAll = () => {
    setFaqUrl(`/faq`);
  };
  return (
    <>
      <Box sx={{ marginLeft: "7px", paddingTop: "7px" }}>
        <Button
          variant="outlined"
          endIcon={<BsSearch />}
          fullWidth
          onClick={() => {
            handleShowAll();
          }}
        >
          Show all
        </Button>
        <nav aria-label="main mailbox folders">
          <List>
            {catDataIsLoading && <ShowGropdata showMyGroup={dataCategory} />}
          </List>
        </nav>
        <Divider />
      </Box>
    </>
  );
}

export default Category;

const ShowGropdata = ({ showMyGroup }) => {
  const [selectedIndex, setSelectedIndex] = useState("");
  const [selectedItem, setSelectedItem] = useState("");
  const [selectedFaq, setSelectedFaq] = useState(false);
  const { setFaqUrl } = useContext(FaqDetail);
  const handleListItemClick = (index, catName) => {
    setSelectedIndex(index);
    setSelectedItem(catName);
    setFaqUrl(`/faq/bygroup/${index}`);
    setSelectedFaq(true);
  };

  return showMyGroup.map((catitem, _itemIndex) => {
    return (
      <>
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
            sx={{
              padding: 0,
              // backgroundColor: "whitesmoke",
              borderBottom: "1px solid lightgray",
            }}
          >
            <ListItemText disableTypography>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ padding: "5px", fontSize: ".8rem" }}
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
      </>
    );
  });
};
