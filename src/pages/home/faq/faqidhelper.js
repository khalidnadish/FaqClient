import styled from "@emotion/styled";
import { Avatar } from "@mui/material";
import { Box } from "@mui/system";

export const Boxwraper = styled(Box)({
  // backgroundColor: "whitesmoke",
  width: "100vw",
  borderRadius: "8px",
});

export const ProfileBoxwraper = styled(Box)({
  backgroundColor: "whitesmoke",
  width: "85vw",
  borderRadius: "8px",
  display: "flex",
  justifyContent: "space-between",
  margin: "auto",
  alignItems: "center",
  display: { xs: "block", sm: "block" },
  // maxWidth: { md: "100%" },

  flex: "1",
  boxShadow: 24,
});
export const ImagePrfile = styled(Avatar)({
  // position: "absolute",
  border: "1px solid gray",
  width: "60px",
  height: "60px",
  // top: "25px",

  // left: "calc(50% - 30px)",
  marginTop: "5px",
  border: "5px solid whitesmoke",
});
export const badgeStyle = {
  "& .MuiBadge-badge": {
    fontSize: "8px",
    padding: "0px 5px",
    height: "12px",
    lineHeight: "1",
    minWidth: 0,
  },
};
