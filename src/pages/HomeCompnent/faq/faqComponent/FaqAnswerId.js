import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";

import { Box, height } from "@mui/system";
import { Divider, Stack } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { axios } from "../../../../helper/axios/axios";
import styled from "@emotion/styled";
import { FcPlanner } from "react-icons/fc";

const ProfileBoxwraper = styled(Box)({
  backgroundColor: "whitesmoke",
  width: "100%",
  borderRadius: "8px",
  display: "flex",
  justifyContent: "space-between",

  display: { xs: "block", sm: "block" },
});
const SinglePost = styled(Box)({
  backgroundColor: "pink",
  display: "flex",
  flexDirection: "column",
  flex: 8,
  // border: "1px solid black",
  borderRadius: "8px 8px 0px 0px",
  marginTop: "15px",
  marginBottom: "15px",
  display: "flex",
  padding: "10px",

  // justifyContent: "flex-start",
  // alignItems: "flex-start",

  position: "relative",

  marginBottom: "100px",
  "&::before": {
    backgroundColor: "pink",
    content: '""',
    display: "block",
    position: "absolute",
    borderColor: "black",
    width: 12,
    height: 12,
    top: 18,
    transform: "rotate(45deg)",
    left: "calc(1% - 11px)",
  },
});

const AvtarBox = styled(Box)({
  flex: 0.25,
  marginTop: "15px",
  marginBottom: "15px",
});

export default function FaqAnswerId({ id }) {
  const [faqwithid, setFaqWithId] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const getFaqId = async () => {
    try {
      const resposn = await axios.get(`faq/AnswerByfaqid/${id}`);
      if (resposn && resposn.data) {
        // console.log(resposn);
        setFaqWithId(resposn.data.data);

        setIsLoading(true);
        // console.log("replay :" + resposn.data);
      }
    } catch (error) {
      // console.log("Error :", error);
    }
  };
  // console.log("data reply:" + faqwithid);
  // console.log(faqwithid);

  useEffect(() => {
    getFaqId();
  }, []);

  return (
    <>
      <Box alignItems="center">
        <Stack
          direction="row"
          justifyContent="space-between"
          divider={<Divider orientation="vertical" flexItem />}
        >
          {isLoading && <ShowReplay faqdata={faqwithid} />}
        </Stack>
      </Box>
    </>
  );
}

const ShowReplay = ({ faqdata }) => {
  return (
    <>
      <ProfileBoxwraper>
        {faqdata.map((faqItem, idx) => (
          <>
            <Stack
              direction="row"
              spacing={2}
              justifyContent={idx === 3 ? "flex-start" : "flex-End"}
              alignItems="center"
              sx={{ marginTop: "15px" }}
              // divider={
              //   <Divider
              //     orientation="vertical"
              //     sx={{ margin: "0px" }}
              //     flexItem
              //   />
              // }
              key={faqItem.ansid}
            >
              <AvtarBox>
                <Avatar
                  alt="Remy Sharp"
                  src={faqItem.avatar}
                  // sx={{ width: 30, height: 24 }}
                ></Avatar>
              </AvtarBox>

              <SinglePost>
                <Box>
                  <Typography
                    sx={{
                      overflow: "auto",
                      resize: "both",
                      minHeight: "40px",
                      width: "100%",
                      justifyContent: "flex-end",
                      // border: "1px solid",

                      // display: "block",
                      // margin: "auto",
                    }}
                  >
                    {faqItem.answer}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    justifyContent: "flex-end",

                    position: "absolute",
                    top: "90%",
                    // bottom: "100%",
                    right: "0px",
                    backgroundColor: "pink",

                    borderRadius: "8px",
                    paddingLeft: "10px",
                  }}
                >
                  <FcPlanner />
                  <Typography
                    sx={{
                      fontSize: "10px",
                      fontWeight: "normal",
                      marginRight: "10px",
                      marginLeft: "10px",
                      float: "right",
                      // border:"1px solid"  ,
                    }}
                  >
                    {new Date(faqItem.create_at).toDateString()}
                  </Typography>
                </Box>
              </SinglePost>
            </Stack>

            {/* <Divider /> */}
          </>
        ))}
      </ProfileBoxwraper>
    </>
  );
};
