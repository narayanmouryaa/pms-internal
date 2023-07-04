import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/Add';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import TaskStatus from './Taskstatus';
import { Avatar } from '@mui/material';
import { red } from '@mui/material/colors';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';






const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 40,
            top: 60,
            color: (theme) => theme.palette.black,
            display: 'inline-block'

          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [openModal, setOpenModal] = React.useState(false);
  const handleOpen = () => setOpenModal(true);
  // const handleClose = () => setOpen(false);

  const handleCloseModal = (event, reason) => {
    if (reason !== undefined) {
      if (reason !== "backdropClick") {
        setOpenModal(false);
      }
    }
    else {
      setOpenModal(false);
    }
  };




  return (
    <div>

      <Button onClick={handleOpen}><AddIcon style={{ color: "black" }} /></Button>

      <BootstrapDialog
        onClose={handleCloseModal}
        aria-labelledby="customized-dialog-title"
        open={openModal}
      >
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          style={{ zIndex: '3000' }}
        >

          <Container style={{ display: 'flex', justifyContent: 'center' }} >
            <Card sx={style} >
              <CardContent>
                {/* <Typography sx={{ fontSize: 40, fontWeight: 600 }} >
                  Create New Space
                </Typography> */}
                <BootstrapDialogTitle sx={{ fontSize: 40, fontWeight: 600 }} id="customized-dialog-title" onClose={handleCloseModal}>
                  Create New Space
                </BootstrapDialogTitle>
                <Typography sx={{ fontSize: 14 }} component="div">
                  Clarity gives you the blocks and components you need to create <br /> a truly professional website.
                </Typography>

                <Box style={{ display: 'flex', justifyContent: 'space-between' }} >
                  <Box>
                    <Box mt={4}>
                      <FormControl variant="standard" >
                        <InputLabel htmlFor="input-with-icon-adornment" style={{ fontWeight: "600", fontSize: '18px' }}>
                          Space Name
                        </InputLabel>
                        <Input
                          id="input-with-icon-adornment"
                          placeholder="Enter Space Name"
                          type='text'
                          style={{ width: '400px' }}
                          startAdornment={
                            <InputAdornment position="start" >
                            </InputAdornment>
                          }
                        />
                      </FormControl>
                    </Box>

                    <Box mt={3} >
                      <FormControl variant="standard" >
                        <InputLabel htmlFor="input-with-icon-adornment" style={{ fontWeight: "600", fontSize: '18px' }}>
                          Space Color
                        </InputLabel>
                        <Input
                          id="input-with-icon-adornment"
                          placeholder="Enter Space Color Code"
                          type='text'
                          style={{ width: '400px' }}
                          startAdornment={
                            <InputAdornment position="start" >
                            </InputAdornment>
                          }
                        />
                      </FormControl>
                    </Box>
                    <Box mt={3}>

                      <FormControl variant="standard" >
                        <InputLabel htmlFor="input-with-icon-adornment" style={{ fontWeight: "600", fontSize: '18px' }}>
                          Space Icon
                        </InputLabel>
                        <Input
                          id="input-with-icon-adornment"
                          placeholder="Upload Space icon"
                          type='file'
                          style={{ width: '400px', paddingBottom: '10px' }}
                          startAdornment={
                            <InputAdornment position="start" >


                            </InputAdornment>
                          }
                        />
                      </FormControl>
                    </Box>
                  </Box>
                  <Box>
                    <Avatar sx={{ height: 120, width: 120, bgcolor: red[800], fontSize: '70px', borderRadius: '20px', marginTop: '30px' }} variant="rounded">
                      A
                    </Avatar>
                  </Box>

                </Box>
                <FormControl>

                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    style={{ marginTop: '25px' }}
                  >
                    <Typography style={{ paddingTop: '7px', paddingRight: '25px' }}>Share Arvindtest</Typography>
                    <FormControlLabel value="Workspace" control={<Radio />} label="AKM Workspace" />
                    <FormControlLabel value="private" control={<Radio />} label="Private" />


                  </RadioGroup>
                </FormControl>


                <Box mt={3}>

                  <FormControl variant="standard" >
                    <InputLabel htmlFor="input-with-icon-adornment" style={{ fontWeight: "600", fontSize: '18px' }}>
                      Space Color
                    </InputLabel>
                    <Input
                      id="input-with-icon-adornment"
                      placeholder="Enter Space Color Code"
                      type='text'
                      style={{ width: '620px' }}
                      startAdornment={
                        <InputAdornment position="start" >

                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </Box>
              </CardContent>
              <Button variant='contained' style={{ width: '650px', textAlign: "center" }}><TaskStatus /> Next  </Button>
            </Card>
          </Container>
        </Modal>
      </BootstrapDialog>
    </div>
  );
}
























