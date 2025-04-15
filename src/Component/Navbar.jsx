import React from 'react';
import { AppBar, Toolbar, Typography, Button, Link } from '@mui/material';

const Navbar = ({ activeTab }) => {
  return (
    <>
    <AppBar
      position="fixed"
      sx={{
        background: 'rgba(0, 0, 0, 0.7)', 
        opacity: 1,
        transition: 'background 0.3s, opacity 0.3s',
        zIndex: 1000,
      }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Coffee Shop
        </Typography>
        {['Home', 'About', 'Menu', 'Card', 'Contact'].map((page, index) => (
          <Button
            key={page}
            color={activeTab === page ? 'secondary' : 'inherit'}
            component={Link}
            href={`/#${page.toLowerCase()}`} 
            sx={{ marginLeft: '10px' }}
          >
            {page}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
    <div style={{ marginTop: '80px' }}></div>
    </>
  );
};

export default Navbar;





// import React from 'react';
// import { AppBar, Toolbar, Typography, Button } from '@mui/material';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <AppBar position="static" sx={{background:'GrayText ',opacity:'0.5'}}>
//       <Toolbar>
//         <Typography variant="h6" sx={{ flexGrow: 1 }}>
//           Coffee Shop
//         </Typography>
//         <Button color="inherit" component={Link} to="/">Home</Button>
//         <Button color="inherit" component={Link} to="/about">About</Button>
//          <Button color="inherit" component={Link} to="/card">Card</Button>
//         <Button color="inherit" component={Link} to="/menu">Menu</Button>
//         <Button color="inherit" component={Link} to="/Contact">Contact</Button>
//       </Toolbar>
//     </AppBar>
//   );
// };

//  export default Navbar;

