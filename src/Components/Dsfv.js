import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Container } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import Row from 'react-bootstrap/Row';
import { Grid } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Box from '@mui/material/Box';
// import Switch from '@mui/material/Switch';
// import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
// import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
// import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import {black,green,blue,pink,red} from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
// import RectangleIcon from '@mui/icons-material/Rectangle';
import SquareIcon from '@mui/icons-material/Square';
import Stack from '@mui/material/Stack';
// import { Row } from 'react-bootstrap';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 850,
  bgcolor: 'background.paper',
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function DefaultSettingForView() {
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
        style={{zIndex:'3002'}}
      >

        <Container style={{ display: 'flex', justifyContent: 'center' }} >
          <Card sx={style} >
            <CardContent>
              <Typography sx={{ fontSize: 35, fontWeight: 600 }} >
                <Button onClick={handleClose}><ArrowBackIosIcon /></Button>
                Default Settings for Views
              </Typography>



              <Grid container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '40px' }}>
                <Grid item xs={10} >
                  <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid black',borderBottomWidth:1, height: '60px', padding: '15px' }}>
                    <Typography style={{color:"grey"}} >
                      Space Name
                    </Typography>
                    <Typography >
                      Arvind textSpace
                    </Typography>
                  </Box>
                </Grid>
              </Grid>


              <Grid container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Grid item xs={10} >
                  <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid black',borderBottomWidth:1,borderTopWidth:0, height: '60px', padding: '15px' }}>
                    <Typography style={{color:"grey"}}>
                      Avatar
                    </Typography>
                   
                      <Avatar sx={{ bgcolor: red[800] }} variant="rounded">
                       A
                      </Avatar>
                    
                  </Box>

                </Grid>
              </Grid>

              <Grid container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Grid item xs={10} >
                  <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid black',borderBottomWidth:1, borderTopWidth:0, height: '60px', padding: '15px' }}>
                    <Typography style={{color:"grey"}}>
                      Shared with
                    </Typography>
                    <Avatar sx={{ bgcolor: red[800] }} >
                       A
                      </Avatar>
                  </Box>

                </Grid>
              </Grid>


              <Grid container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Grid item xs={10} >
                  <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid black',borderBottomWidth:1,borderTopWidth:0, height: '60px', padding: '15px' }}>
                    <Typography style={{color:"grey"}}>
                      Task statuses
                    </Typography>

                     <Stack flexDirection="row">
                      <SquareIcon style={{color:'black'}}/>
                     <SquareIcon style={{color:'green'}}/>
                     <SquareIcon style={{color:'blue'}}/>
                     <SquareIcon style={{color:'pink'}}/>
                     <SquareIcon style={{color:'red'}}/>
                     </Stack>                 
                  </Box>
                </Grid>                
              </Grid>

              
              <Grid container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '40px' }}>
                <Grid item xs={10} >
                  <Box style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid black',borderTopWidth:0, height: '60px', padding: '15px' }}>
                    <Typography style={{color:"grey"}}>
                      Default setting for views
                    </Typography>
                    <FormatListBulletedIcon/>
                  </Box>
                </Grid>
              </Grid>

            </CardContent>
            <Button variant='contained' style={{ display: 'flex', marginLeft: '70px', width: '640px', textAlign: "center" }}>Create Space</Button>
          </Card>
        </Container>
      </Modal>
    </div>
  );
}
