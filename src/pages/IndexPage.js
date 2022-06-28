import React, { useEffect, useContext, lazy, Suspense } from "react";
import { Container, Grid } from "@mui/material";

import { FaqDetail } from "../helper/context/FAQContext";

import Loader from "../component/loader/Loader";

const Navbar = lazy(() => import("../component/Navbar/Navbar.js"));
const Faq = lazy(() => import("./HomeCompnent/faq/Faq"));

const Myfooter = lazy(() => import("../component/footer/footer.js"));
const OtherNav = lazy(() => import("../component/submenu/OtherNav"));

function IndexPage() {
  const { faqUrl, faqInfo } = useContext(FaqDetail);

  useEffect(() => {}, [faqUrl]);

  return (
    <>
      <Container fixed>
        <Suspense fallback={<Loader />}>
          <Navbar />
          <OtherNav />
        </Suspense>
        <Grid
          container
          sx={{
            marginTop: "20px",
          }}
        >
          <Grid
            item
            xs
            sx={{
              overflow: "auto",
              height: "75vh",
            }}
          >
            <Suspense fallback={<Loader />}>
              {/* {alert(faqInfo.titleName, faqInfo.recordsCount)} */}
              <Faq
                faqUrlLink={faqUrl}
                lookup={faqInfo.titleName}
                filterRow={faqInfo.recordsCount}
              />
            </Suspense>
          </Grid>
        </Grid>
        <Myfooter />
      </Container>
    </>
  );
}

export default IndexPage;

// function PepoleYouTrack({ flowerData }) {
//   return (
//     <Box sx={postionFlowerBoxStyle}>
//       <PepoleYouFollow categoryData={flowerData} />
//     </Box>
//   );
// }
