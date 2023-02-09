import * as React from 'react';
import {Box} from '@mui/material'

const BoxSx=()=> {
  return (
    <Box
      sx={{
        backgroundColor: '#f9f9f9',
        '&:hover': {
          backgroundColor: '#e9e9e9 ',
          opacity: [0.9, 0.8, 0.7],
        },
      }} />
)}

export default BoxSx