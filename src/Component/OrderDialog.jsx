import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField, Grid } from '@mui/material';

const OrderDialog = ({ open, setOpen }) => {
  const [name, setName] = useState('');
  const [coffeeName, setCoffeeName]=useState('');
  const [tableName ,setTableName]=useState('');
  const [quantity, setQuantity] = useState(1);

  const handleClose = () => {
    setOpen(false); 
  };

  const handleOrderClick = () => {
    console.log('Order Placed:', { name, coffeeName, quantity });
    setOpen(false); 
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Order Details</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              autoFocus
              margin="dense"
              label="Customer Name"
              type="text"
              fullWidth
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              autoFocus
              margin="dense"
              label="Coffee Name"
              type="text"
              fullWidth
              variant="outlined"
              value={coffeeName}
              onChange={(e) => setCoffeeName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              autoFocus
              margin="dense"
              label="Table Name"
              type="text"
              fullWidth
              variant="outlined"
              value={tableName}
              onChange={(e) => setTableName(e.target.value)}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              margin="dense"
              label="Quantity"
              type="number"
              fullWidth
              variant="outlined"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              InputProps={{
                inputProps: { min: 1 },
              }}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleOrderClick} color="primary">
         Order
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default OrderDialog;
