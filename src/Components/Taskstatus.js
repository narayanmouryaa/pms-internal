import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { TextField, Container } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
// import Row from 'react-bootstrap/Row';
import { Grid, Box } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import Box from 'react-bootstrap';
import DefaultSetting from './Defaultsettings';







const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 750,
  bgcolor: 'background.paper',
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};




export default function TaskStatus() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const handleClose = (event, reason) => {
    if (reason !== undefined) {
      if (reason !== "backdropClick") {
        setOpen(false);
      }
    }
    else {
      setOpen(false);
    }
  };

  return (
    <div>
      <Button onClick={handleOpen}>NEXT</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{ zIndex: '3000' }}
      >

        <Container style={{ display: 'flex', justifyContent: 'center' }} >
          <Card sx={style} >
            <CardContent>
              <Box>
                <Typography sx={{ fontSize: 35, fontWeight: 600 }} >
                  <Button onClick={handleClose}> <ArrowBackIosIcon /></Button>
                  What task Statuses do you want ?
                </Typography>

                <Typography sx={{ marginTop: '20px', fontSize: '20px' }} gutterBottom>
                  Active Statuses
                </Typography>

                <Grid container spacing={2}>
                  <Grid item xs={7} style={{ label: 'text' }}>
                    <label style={{ marginBottom: '5px' }}>Status Name</label>
                    <TextField fullWidth />
                  </Grid>

                  <Grid item xs={4}>
                    <label style={{ marginBottom: '5px' }}>Status Color</label>
                    <TextField fullWidth />
                  </Grid>
                  <Grid item xs={1} style={{ fontSize: '50px' }}>
                    <AddIcon />
                  </Grid>

                </Grid>

                <Typography sx={{ marginTop: '20px', fontSize: '20px' }} gutterBottom>
                  Active Statuses
                </Typography>



                <Grid container spacing={2}>
                  <Grid item xs={7} style={{ label: 'text' }}>
                    <label style={{ marginBottom: '5px' }}>Status Name</label>
                    <TextField fullWidth />
                  </Grid>

                  <Grid item xs={4}>
                    <label style={{ marginBottom: '5px' }}>Status Color</label>
                    <TextField fullWidth />
                  </Grid>
                  <Grid item xs={1} style={{ fontSize: '50px' }}>
                    <AddIcon />
                  </Grid>

                </Grid>

                <Typography sx={{ marginTop: '20px', fontSize: '20px' }} gutterBottom>
                  Active Statuses
                </Typography>

                <Grid container spacing={2} sx={{ marginBottom: '40px' }}>
                  <Grid item xs={7} style={{ label: 'text' }}>
                    <label style={{ marginBottom: '5px' }}>Status Name</label>
                    <TextField fullWidth />
                  </Grid>

                  <Grid item xs={4}>
                    <label style={{ marginBottom: '5px' }}>Status Color</label>
                    <TextField fullWidth />
                  </Grid>
                  <Grid item xs={1} style={{ fontSize: '50px' }}>
                    <AddIcon />
                  </Grid>

                </Grid>
              </Box>


            </CardContent>
            {/* <Button variant='contained' style={{ width: '650px', textAlign: "center" }}> <DefaultSetting/>Next</Button> */}
          </Card>
        </Container>
      </Modal>
    </div>
  );
}
