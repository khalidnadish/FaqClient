import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

import Typography from "@mui/material/Typography";
import { Container, Paper } from "@mui/material";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const options = {
  settings: {
    overlayColor: "rgb(25, 136, 124)",
    autoplaySpeed: 1500,
    transitionSpeed: 900,
    slideAnimationType: "slide",
  },
  buttons: {
    backgroundColor: "#1b5245",
    iconColor: "rgba(126, 172, 139, 0.8)",
    showDownloadButton: false,
  },
  caption: {
    captionColor: "#a6cfa5",
    captionFontFamily: "Raleway, sans-serif",
    captionFontWeight: "300",
    captionTextTransform: "uppercase",
  },
};

export default function Showimage({ itemData }) {
  return (
    <>
      {/* <ResponsiveAppBar /> */}
      <Container
        elevation={5}
        component={Paper}
        sx={{ paddingTop: "30px", paddingBottom: "30px" }}
      >
        <SimpleReactLightbox>
          <SRLWrapper options={options}>
            <ImageList variant="quilted" cols={4} rowHeight={200}>
              {itemData.map((item, index) => (
                <ImageListItem
                  key={item.img}
                  cols={
                    pattern[
                      index -
                        Math.floor(index / pattern.length) * pattern.length
                    ].cols
                  }
                  rows={
                    pattern[
                      index -
                        Math.floor(index / pattern.length) * pattern.length
                    ].rows
                  }
                  sx={{
                    opacity: ".7",
                    transition: "opacity .3s linear",
                    cursor: "pointer",
                    "&:hover": { opacity: 1 },
                  }}
                >
                  {/* <Options /> */}
                  <img
                    {...srcset(
                      item.img,
                      200,
                      pattern[
                        index -
                          Math.floor(index / pattern.length) * pattern.length
                      ].rows,
                      pattern[
                        index -
                          Math.floor(index / pattern.length) * pattern.length
                      ].cols
                    )}
                    alt={item.title}
                    loading="lazy"
                  />
                  <Typography
                    variant="body2"
                    // component="span"
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      color: "white",
                      background: "rgba(0,0,0, .3)",
                      p: "5px",
                      borderTopRightRadius: 8,
                    }}
                  >
                    {/* {moment(new Date() - 500 * 60 * 60).fromNow()} */}
                  </Typography>
                  {/* <Tooltip
                title="User Name"
                sx={{
                  position: "absolute",
                  bottom: "3px",
                  right: "3px",
                }}
              >
                <Avatar src={profileImg} imgProps={{ "aria-hidden": true }} />
              </Tooltip> */}
                </ImageListItem>
              ))}
            </ImageList>
          </SRLWrapper>
        </SimpleReactLightbox>
      </Container>
    </>
  );
}

const pattern = [
  {
    rows: 2,
    cols: 2,
  },
  {
    rows: 1,
    cols: 1,
  },
  {
    rows: 1,
    cols: 1,
  },
  {
    rows: 1,
    cols: 2,
  },
  {
    rows: 1,
    cols: 2,
  },
  {
    rows: 2,
    cols: 2,
  },
  {
    rows: 1,
    cols: 1,
  },
  {
    rows: 1,
    cols: 1,
  },
];
