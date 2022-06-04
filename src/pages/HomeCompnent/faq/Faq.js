import React, { useEffect, useState } from "react";
import FaqQuastion from "./faqComponent/FaqQuastion";
import Accordion from "@mui/material/Accordion";

import { axios } from "../../../helper/axios/axios";
// import axios from "axios";

import Container from "@mui/material/Container";
import Loader from "../../../helper/Loader";
import { Stack, Box, Paper } from "@mui/material";
import Category from "./faqComponent/Category/Category";
import "./faq.module.css";

export default function Faq() {
  const [faqdata, setFaqdata] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const noFaq = !faqdata || (faqdata && faqdata.length === 0);
  const [isLoading, setIsloading] = useState(false);

  const getallFaq = async () => {
    try {
      // const resposn = await axios.get("/faq?_limit=5");
      const resposn = await Promise.all([
        axios.get("/faq"),
        axios.get("/faq/category"),
      ]);

      if (resposn) {
        setFaqdata((oldFaq) => resposn[0].data.data);
        setCategoryData((oldCat) => resposn[1].data);
        setIsloading((checkLoad) => !checkLoad);
      }
      setIsloading(true);
    } catch (error) {
      console.log("Error :", error);
    }
  };

  useEffect(() => {
    getallFaq();
    // DOTO: chk  isloading stuts
    if (isLoading) {
      console.table(faqdata);
      console.table(categoryData);
    }
  }, []);

  return (
    <>
      {/* {noFaq && <h1>No Fadddddq</h1>} */}
      <Container fixed>
        <Stack
          // direction={"column"}
          sx={{ flexDirection: "row", gap: 1, justifyContent: "space-between" }}
        >
          <Box flex={4}>
            {isLoading ? <ShowFaq faqdata={faqdata} /> : <Loader />}
          </Box>
          <Box flex={1}>
            <Box
              style={{
                position: "fixed",
                marginRight: 20,
                marginBottom: "10px",
                height: "80vh",
                overflow: "auto",
              }}
            >
              {isLoading ? (
                <ShowCatrgory categoryData={categoryData} />
              ) : (
                <Loader />
              )}
            </Box>
          </Box>
        </Stack>
      </Container>
    </>
  );
}

const ShowFaq = ({ faqdata }) => {
  return (
    <>
      {faqdata.map((faqItem, idx) => (
        <Accordion
          key={faqItem.faqid}
          sx={{ marginBottom: "5px", width: "100%" }}
        >
          {/* {console.log("image : " + faqItem.avatar)} */}
          <FaqQuastion
            Quastion={faqItem.faq}
            src={faqItem.avatar}
            count={faqItem.rowcount}
            faqid={faqItem.faqid}
            autherName={faqItem.autherName}
            create_at={faqItem.create_at}
          />
        </Accordion>
      ))}
    </>
  );
};

const ShowCatrgory = ({ categoryData }) => {
  // console.log("categoryData >>>> " + categoryData[1].catName);

  return (
    <>
      <Paper
        sx={{
          marginRight: 20,
          marginBottom: "10px",
          borderRadius: "8px",
          backgroundColor: "black",
          minWidth: "120px",
          bgcolor: "background.paper",
          border: "1px solid lightgray",
          fontWeight: "normal",
        }}
      >
        <Category categoryData={categoryData} />
      </Paper>
    </>
  );
};

//  Perfect Working Promis for more then one backend

// const getallFaq = async () => {
//   try {
//     // const resposn = await axios.get("/faq?_limit=5");
//     axios
//       .all([
//         axios.get("http://localhost:3001/faq"),
//         axios.get("http://localhost:3001/faq/category"),
//       ])
//       .then(
//         axios.spread((resposn, myCategory) => {
//           if (resposn && resposn.data) {
//             setFaqdata(resposn.data.data);
//             setIsloading(true);
//             console.table(resposn.data.data);
//             console.table(myCategory.data);
//           }
//         })
//       )
//       .catch((error) => {
//         console.log("Error :", error);
//         alert(error);
//       });
//     // const resposn = await axios.get("/faq?_limit=5");
//   } catch (error) {
//     console.log("Error :", error);
//     alert(error);
//   }
// };
