import React from "react";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { Box, Stack } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: alpha(theme.palette.common.white, 0.25),
  //   backgroundColor: alpha(theme.palette.common.green, 0.25),
  borderRadius: theme.shape.borderRadius,
  border: ".25px solid #dee0e1",
  //   backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.warning.main, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1),
  color: alpha(theme.palette.warning.main, 0.25),
  //   backgroundColor: alpha(theme.palette.warning.main, 0.25),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",

  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  alignItems: "center",
  justifyContent: "center",
  //   backgroundColor: alpha(theme.palette.warning.main, 0.25),
  //   backgroundColor: alpha(theme.palette.warning.main, 0.25),
  //   backgroundColor: "yellow",
  "& .MuiInputBase-input": {
    // padding: theme.spacing(1.5, 0, 0, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
}));

function MySearch() {
  return (
    <>
      <Search>
        <Box>
          <Stack
            direction="row"
            spacing={1}
            justifyContent="cenetr"
            alignItems="center"
            // sx={{ flexDirection: { xs: "column", sm: "row", md: "row" } }}
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search… "
              inputProps={{ "aria-label": "search" }}
            />
          </Stack>
        </Box>
      </Search>
    </>
  );
}

export default MySearch;
