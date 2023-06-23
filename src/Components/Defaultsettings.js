
import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {  Container } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import Row from 'react-bootstrap/Row';
import { Grid } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import DefaultSettingForView from './Dsfv';


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




export default function DefaultSetting() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

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
      <Button onClick={handleOpen}>+</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{zIndex:'3001'}}
      >

        <Container style={{ display: 'flex', justifyContent: 'center' }} >
          <Card sx={style} >
            <CardContent>
              <Typography sx={{display:'flex',fontSize: 35, fontWeight: 600 }} >
                <Button onClick={handleClose}><ArrowBackIosIcon /></Button>
                Default Settings for Views
              </Typography>

             
                <Grid container spacing={2}style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'60px'}}>
                  <Grid item xs={8} >
                  <Box style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center',border:'2px solid black',height:'60px' }}>
                    <Typography style={{paddingRight:'150px'}}>
                      <FormatListBulletedIcon/>
                      List View
                    </Typography>

                    <Switch
                      checked={checked}
                      onChange={handleChange}
                      inputProps={{ 'aria-label': 'controlled' }}
                    />

                  </Box>
                  </Grid>
                </Grid>


                <Grid container spacing={2}style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'25px'}}>
                  <Grid item xs={8} >
                  <Box style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center',border:'2px solid black',height:'60px' }}>
                    <Typography style={{paddingRight:'150px'}}>
                      <FormatListBulletedIcon/>
                      List View
                    </Typography>

                    <Switch
                      checked={checked}
                      onChange={handleChange}
                      inputProps={{ 'aria-label': 'controlled' }}
                    />

                  </Box>
                  </Grid>
                </Grid>



                <Grid container spacing={2}style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'25px',marginBottom:'60px'}}>
                  <Grid item xs={8} >
                  <Box style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center',border:'2px solid black',height:'60px' }}>
                    <Typography style={{paddingRight:'150px'}}>
                      <FormatListBulletedIcon/>
                      List View
                    </Typography>

                    <Switch
                      checked={checked}
                      onChange={handleChange}
                      inputProps={{ 'aria-label': 'controlled' }}
                    />

                  </Box>
                  </Grid>
                </Grid>
              






            </CardContent>
            <Button variant='contained' style={{ width: '650px', textAlign: "center" }}> <DefaultSettingForView/>Next</Button>
          </Card>
        </Container>
      </Modal>
    </div>
  );
}
