import React, { useState, useContext, useEffect } from "react";
import {
  Box,
  Stack,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Chip,
} from "@mui/material";
import { FaBell, FaLayerGroup } from "react-icons/fa";

import { UserDetail } from "../../../../../helper/context/userContext";
import { FaqDetail } from "../../../../../helper/context/FAQContext";

import useAxiosToGetData from "../../../../../helper/custemHook/useAxiosToGetData";
import { RiUserFollowFill } from "react-icons/ri";
import { RiUserUnfollowLine } from "react-icons/ri";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import { axios } from "../../../../../helper/axios/axios";
import toast from "react-hot-toast";

function Category() {
  console.log("Category render");
  const [urlx, setUrlx] = useState("/category");
  const { data: dataCategory, dataIsLoading: catDataIsLoading } =
    useAxiosToGetData(urlx);

  const { userId } = useContext(UserDetail);
  const [followstuts, setFollowstuts] = useState(0);

  useEffect(() => {}, [urlx]);

  return (
    <>
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
                sx={{
                  borderBottom: "2px solid",
                  padding: "5px",
                  borderColor: "success.light",
                }}
              >
                <FaLayerGroup color={"#81c784"} size={60} />
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
                    Worksapce's
                  </Typography>
                  <Typography variant="caption" textAlign={"center"} flex={1}>
                    {dataCategory?.length}
                  </Typography>
                </Box>
              </Stack>
            </ListSubheader>
          }
        >
          {catDataIsLoading && (
            <ShowGroupData
              showMyGroup={dataCategory}
              followstuts={followstuts}
              userId={userId}
            />
          )}
        </List>
      </nav>
      {/* <Divider /> */}
    </>
  );
}
export default Category;

const ShowGroupData = ({ showMyGroup, followstuts, userId }) => {
  console.log("ShowGroupData render");
  const [selectedIndex, setSelectedIndex] = useState("");
  const [selectedItem, setSelectedItem] = useState("");
  const [selectedFaq, setSelectedFaq] = useState(false);
  const { setFaqUrl, setFaqInfo } = useContext(FaqDetail);

  const handleListItemClick = (index, catName, rowCount) => {
    setSelectedIndex(index);
    setSelectedItem(catName);
    setFaqUrl(`/faq/bygroup/${index}`);
    setFaqInfo({ titleName: catName, recordsCount: rowCount });
    setSelectedFaq(true);
  };

  return showMyGroup.map((catitem) => {
    return (
      <>
        <ListItem
          // disablePadding
          key={catitem.catid}
          // size={"small"}
          dense
          sx={{ padding: 0, fontSize: ".8rem" }}
        >
          <ListItemButton
            onClick={() => {
              handleListItemClick(
                catitem.catid,
                catitem.catName,
                catitem.faqrowcount
              );
            }}
            sx={{
              padding: 0,
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
                  <Typography variant="subtitle1" fontWeight={"normal"} ml={2}>
                    {catitem.catName}
                  </Typography>
                </Box>

                <Box>
                  <Chip
                    variant="filled"
                    color="success"
                    size="small"
                    label={catitem.faqrowcount}
                    icon={<ModeCommentIcon />}
                  />
                </Box>
              </Stack>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </>
    );
  });
};

// const handleFollowAction = (index) => {
//   try {
//     const respons = axios.post("/category/follow", {
//       userid: userId,
//       groupid: index,
//     });
//     // console.log("dfdfdfdf ;" + respons);
//     if (respons.status === 201) {
//       toast.success("Successfully Join!");
//     } else {
//       toast.error("This is an error!");
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };
