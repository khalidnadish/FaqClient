 
import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack'
import Container from '@mui/material/Container';
// import css3 from '/src/static/image/css3.svg';
// import img_css3 from '../../static/image/css3.svg'


export default function TitlebarBelowMasonryImageList() {
  // console.log(img_css3)
  return (
    <Container fixed>

    <Stack direction="row" spacing={1}>    
            <Chip label="Tools Iam Useing ...." color="warning" />
     </Stack>
    <Box sx={{ width: 350, height: 250 }}>
      <ImageList variant="masonry" cols={4} gap={15}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              // src={`${item.img}?w=45&fit=crop&auto=format`}
              src={`${item.img}`}
              
              srcSet={`${item.img}`}
              // srcSet={`${item.img}?w=45&fit=crop&auto=format&dpr=2 1x`}
              alt={item.title}
              loading="lazy"
            />
            {/* <ImageListItemBar position="below" title={item.author} /> */}
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
    </Container >
  );
}

const itemData = [
  {
    img:'./images/1x/HTML.png',
    author: '',
    
  },
  {
    img: './images/1x/CSS.png',
    author: '',
    
  },
  {
    img: './images/1x/js.png',
    title: '',
    author: '',
  },
  {
    img: './images/1x/ps.png',
    author: '',
    
  },
  {
    img: './images/1x/ai.png',
    author: '',
    
  },
  {
    img: './images/1x/ae.png',
    author: '',
    
  },
  {
    img: './images/1x/pr.png',
    author: '',
   
  },
  {
    img: './images/1x/xd.png',
    author: '',
    
  },
  {
    img: './images/1x/figma.png',
    author: '',
     
  },
  {
    img: './images/1x/flask.png',
    author: '.',
  },
  {
    img: './images/1x/react.png',
    author: '',
  },
  
 
];

