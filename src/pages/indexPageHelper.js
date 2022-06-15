import styled from "@emotion/styled";
import { Box, Paper } from "@mui/material";

export const Boxwraper = styled(Box)({
  // p={2}
  display: { xs: "block", sm: "block" },
  maxWidth: { md: "80%" },
  marginTop: "10px",
});

export const CatWraper = styled(Paper)({
  marginTop: "10px",
  position: "fixed",
  marginRight: 20,
  marginBottom: "10px",
  borderRadius: "8px",
  backgroundColor: "somkewhite",
  minWidth: "120px",
  bgcolor: "background.paper",
  border: "1px solid lightgray",
  fontWeight: "normal",
  // width: "20%",
  height: "75vh",
  overflow: "auto",
});

export const rootStackStyle = {
  flexDirection: "row",
  gap: 3,
  justifyContent: "space-between",
  alignItems: "flex-start",
  borderRadius: "8px",
  position: "relative",
  overflow: "auto",
};

export const FaqBoxStyle = {
  flex: 4,
  width: { xs: "100vw", sm: "80vw", md: "100vw" },
};
export const groupBoxStyle = { flex: 1, display: { xs: "none", sm: "block" } };
export const postionGroupBoxStyle = {
  position: "fixed",
  width: "14%",
  border: ".5px solid lightgray",
  borderRadius: "8px",
  height: "75vh",
  overflow: "auto",
  padding: "2px",
  display: {
    xs: "none",
    sm: "block",
  },
};

export const FlowerBoxStyle = {
  flex: 1,
  display: { xs: "none", sm: "block" },
  width: { xs: "100vw", sm: "100vw", md: "100vw" },
};

export const postionFlowerBoxStyle = {
  position: "fixed",
  width: "14%",
  border: ".5px solid lightgray",
  borderRadius: "8px",
  height: "75vh",
  overflow: "auto",
  padding: "2px",
  // bgcolor: "lightgray",

  display: {
    xs: "none",
    sm: "block",
  },
};
