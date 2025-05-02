import React from 'react';
import { Grid, Card, CardContent, Typography, CardMedia, Box } from '@mui/material';

const Menucard = () => {
  const menuItems = [
    {
      name: 'Espresso',
      description: 'A concentrated coffee brewed by forcing hot water under pressure through finely ground coffee beans. It offers a rich, bold flavor with a slightly thicker consistency than regular coffee.',
      price: '$3.00',
      image: '/assets/Espresso_cup.png',
    },
    {
      name: 'Cappuccino',
      description: 'A classic Italian coffee drink made with equal parts espresso, steamed milk, and a thick layer of milk foam on top. It has a rich, creamy taste with a frothy texture and a slightly bitter espresso flavor.',
      price: '$4.50',
      image: '/assets/Latte.png',
    },
    {
      name: 'Latte',
      description: 'A smooth, creamy coffee beverage made with espresso and steamed milk, topped with a small amount of frothy milk foam. Its mild flavor makes it a favorite for those who enjoy a less intense coffee taste.',
      price: '$4.00',
      image: '/assets/Latte.png',
    },
    {
      name: 'Americano',
      description: 'A simple, strong coffee made by diluting espresso with hot water. This results in a coffee that is rich in flavor but less intense than straight espresso, providing a smooth and satisfying taste.',
      price: '$3.50',
      image: '/assets/images.jpg',
    },
    {
      name: 'Mocha',
      description: 'A deliciously sweet coffee drink made with espresso, steamed milk, and chocolate syrup, often topped with whipped cream. It combines the richness of coffee with the sweetness of chocolate a favorite for those with a sweet tooth.',
      price: '$5.00',
      image: 'assets/mocha.jpg',
    },
    {
      name: 'Iced Coffee',
      description: 'A chilled coffee beverage typically brewed strong and served over ice, with the option to add milk, sweeteners, or flavorings. Perfect for hot days, it offers a refreshing and bold coffee experience.',
      price: '$3.00',
      image: 'assets/iced.png',
    },
  ];
  

  return (
  
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Our Coffee Menu
      </Typography>
      <Grid container spacing={8} justifyContent="center">
        {menuItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                alt={item.name}
                height="300px "
                width="100%"
                image={item.image}
                title={item.name}
              />
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom>
                  {item.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {item.description}
                </Typography>
                <Typography variant="h6" color="primary" mt={2}>
                  <strong>{item.price}</strong>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
   
  );
};

export default Menucard;
