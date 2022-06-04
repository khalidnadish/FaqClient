import { Button, Chip, Grid, Stack } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LoginIcon from "@mui/icons-material/Login";
function Loginmeno() {
  let navigate = useNavigate();

  return (
    <>
      <Stack direction="row" spacing={1}>
        <Chip
          label="Home"
          onClick={() => {
            navigate("/about");
          }}
          icon={<HowToRegIcon />}
        />
        <Chip
          label="Login"
          variant="Login"
          onClick={() => {
            navigate("/login");
          }}
          icon={<LoginIcon />}
        />

        <Chip
          label="Register"
          onClick={() => {
            navigate("/SingIn");
          }}
          icon={<HowToRegIcon />}
        />
      </Stack>
    </>
  );
}

export default Loginmeno;
