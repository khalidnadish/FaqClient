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
