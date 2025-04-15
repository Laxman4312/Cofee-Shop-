import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import Image from './Images';

const Header = ({ imageSrc, imageAlt, imageWidth, imageHeight, title }) => {
  return (
    <Card sx={{ maxWidth: 300, margin: '20px auto', borderRadius: 2, boxShadow: 3 ,height:80}}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
       
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
          />
        
          <Typography variant="h3" component="div" sx={{ marginLeft: 2 }}>
            {title}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Header;
