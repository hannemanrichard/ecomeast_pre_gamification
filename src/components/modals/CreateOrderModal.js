import { Box, Modal, Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import Iconify from '../iconify/Iconify';
import CreateLeadForm from './CreateLeadForm';
import CreateOrderForm from './CreateOrderForm';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  borderRadius: '20px',
  boxShadow: 24,
  p: 4,
};

function CreateOrderModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" startIcon={<Iconify icon="eva:plus-fill" />}>
        New Order
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h3" component="h2" style={{ textAlign: 'center' }}>
            Add new order
          </Typography>
          <CreateOrderForm />
        </Box>
      </Modal>
    </div>
  );
}

export default CreateOrderModal;
