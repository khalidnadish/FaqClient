import React, { useState } from "react";
import {
  Avatar,
  Button,
  ButtonGroup,
  Tooltip,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { FcBusinessman } from "react-icons/fc";
import { t, useTranslation } from "react-i18next";
import ShowModel from "../basicmodal/ShowModel";

function Myfooter() {
  const [t, i18n] = useTranslation();
  const [open, setOpen] = useState(false);
  const controlModel = () => {
    setOpen(true);
  };
  const handleOpenUserMenu = (event) => {
    // setAnchorElUser(event.currentTarget);
  };

  return (
    <>
      <Box>
        <Box
          variant="text"
          aria-label="outlined button group"
          sx={{
            backgroundColor: "lightgray",
            position: "fixed",
            left: 0,
            bottom: 0,
            right: 0,
            display: { xs: "flex", sm: "flex" },
            justifyContent: "space-between",
          }}
        >
          {/* <Tooltip component={"div"} title={t("nav_menu_btn")}>
            <Button
              variant="text"
              onClick={handleOpenUserMenu}
              endIcon={
                <Avatar
                  sx={{ width: 20, height: 20 }}
                  alt="khalid nadish"
                  src={"assets/images/check.png"}
                />
              }
              sx={{
                display: { xs: "flex", sm: "flex" },
                maxWidth: { md: "100%" },
              }}
            >
              <Typography>Hire me Per Hour</Typography>
            </Button>
          </Tooltip> */}
          {/* <Tooltip component={"div"} title={"About me"}>
            <Button
              variant="outlined"
              endIcon={<FcBusinessman />}
              onClick={controlModel}
            ></Button>
          </Tooltip> */}
          devlopment time
        </Box>
        <ShowModel open={open} setOpen={setOpen} />
      </Box>
    </>
  );
}

export default Myfooter;
