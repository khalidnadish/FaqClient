import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Grid,
  TextField,
  Paper,
  Chip,
  Divider,
} from "@mui/material";
import Axios from "axios";
import Snack from "../../component/SnackBar";

import { useNavigate } from "react-router-dom";
import HowToRegIcon from "@mui/icons-material/HowToReg";

let response1 = "";
function msg(msg) {
  alert(msg);
  return <Snack openSnack={true} msg={msg} sty={"error"} />;
}
function Addfaq() {
  const [username, Username] = useState("");
  const [email, Email] = useState("");
  const [password, Password] = useState("");
  const [phone, Phone] = useState("");
  const [reply, setReply] = useState(null);

  const navigate = useNavigate();

  const saveData = (e) => {
    // e.preventDefault();

    Axios.post("http://localhost:3001/user", {
      username,
      password,
      email,
      phone,
    }).then((res) => {
      // alert(res.data.message);
      setReply(res.data.message);
    });
  };

  useEffect(() => {
    // console.log(reply);
  }, [reply]);

  return (
    <>
      <Container component={Paper} spacing={2}>
        <form method="post" action="">
          <Grid Container>
            <Chip
              label="Regster"
              variant="Login"
              icon={<HowToRegIcon />}
              sx={{ marginTop: 2 }}
            />
            <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={6}>
              <TextField
                required
                id="outlined-required"
                label="Email"
                size="small"
                name="email"
                value={email}
                onChange={(e) => Email(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <TextField
                required
                id="outlined-required"
                label="Name"
                size="small"
                name="username"
                value={username}
                onChange={(e) => Username(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <TextField
                required
                id="outlined-required"
                label="Password"
                size="small"
                name="password"
                value={password}
                onChange={(e) => Password(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <TextField
                required
                id="outlined-required"
                label="Phone"
                size="small"
                name="phone"
                value={phone}
                onChange={(e) => Phone(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} md={6} lg={6}>
              <Button
                variant="contained"
                sx={{ marginBottom: 2 }}
                // type="submit"
                onClick={() => {
                  saveData();

                  setReply(null);
                }}
              >
                Save
              </Button>

              {reply === false && (
                <Snack openSnack={true} msg={"User Exist"} sty={"error"} />
              )}
              {reply === true && (
                <Snack openSnack={true} msg={"User Saved"} sty={"sucess"} />
              )}
            </Grid>
          </Grid>
        </form>
      </Container>
    </>
  );
}

export default Addfaq;