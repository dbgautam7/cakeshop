import * as React from 'react';
import {Box,Grid,Typography,Button} from '@mui/material'
import img from '../images/bakery3.jpg'
import Products from '../containers/addToCart/products';


const BoxSx=({name,img,price})=> {
  console.log(name,"afgager")
  return (
    // <Box p={2} m={1} bgcolor="primary.main" color="secondary.main">
    //     <Grid container>
    //         <Grid item xs={12} sm={6}>
    //             <Typography variant="h4">This is a heading</Typography>
    //         </Grid>
    //         <Grid item xs={12} sm={6}>
    //             <Button variant="contained" color="primary">Button</Button>
    //         </Grid>
    //     </Grid>
    // </Box>
    <Box
      sx={{
        width: 300,
        height: 300,
        backgroundColor: '#f9f9f9',
        '&:hover': {
          backgroundColor: '#e9e9e9 ',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
         <Typography variant="body1">{name}</Typography>
         <img src={img} alt={name} height={100} width={100} /> 
        </Box>
  );
}

export default BoxSx