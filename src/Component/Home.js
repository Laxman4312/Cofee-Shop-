import React, { useState } from 'react';
import { Button, Box, Typography } from '@mui/material';
import groupImage from '../assets/coffee.jpg';

function Home() {

  const [scrollDirection, setScrollDirection] = useState('none');  

  const homeStyle = {
    backgroundImage: `url(${groupImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    color: 'White',
    padding: '20px',
  };

  const headingStyle = {
    marginBottom: '20px',
    padding: '10px',
    whiteSpace: 'nowrap',
    animation: `${scrollDirection === 'left' ? 'scrollLeft' : scrollDirection === 'right' ? 'scrollRight' : 'none'} 10s linear infinite`,
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '60%',
    gap: '10px',
    marginTop: '20px',
  };

  const handleButtonClick = (direction) => {
    setScrollDirection(direction); 
  };

  return (
    <Box sx={homeStyle}>
      <Typography variant="h4" sx={headingStyle}>
        Welcome to Home Page in Our Lukey Coffee Shop Website 
      </Typography>
      <Typography variant="h6" sx={headingStyle}>
        You can see the coffe menu and cards  and order it .
      </Typography>

      <Box sx={buttonContainerStyle}>
        <Button variant="contained" color="error" sx={{ flex: 1 }} onClick={() => handleButtonClick('left')}>
          Left
        </Button>
        <Button variant="contained" color="warning" sx={{ flex: 1 }} onClick={() => handleButtonClick('none')}>
          Middle
        </Button>
        <Button variant="contained" color="success" sx={{ flex: 1 }} onClick={() => handleButtonClick('right')}>
          Right
        </Button>
      </Box>

      <style>
        {`
          @keyframes scrollLeft {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }

          @keyframes scrollRight {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }
        `}
      </style>
    </Box>
  );
}
  
export default Home;
