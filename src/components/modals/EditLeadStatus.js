import { Box, Button, Modal, Typography } from '@mui/material';
import React, { useState } from 'react';
import Iconify from '../iconify/Iconify';
import EditLeadForm from './EditLeadForm';

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

function EditLeadStatus({ id }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" startIcon={<Iconify icon="eva:edit-2-outline" />}>
        Edit status
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h5" style={{ textAlign: 'center' }}>
            Edit lead status
          </Typography>
          <EditLeadForm id={id} />
          {/* <CreateOrderForm /> */}
        </Box>
      </Modal>
    </div>
  );
}

export default EditLeadStatus;
