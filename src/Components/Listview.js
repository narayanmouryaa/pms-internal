import React, { useState } from 'react';
import NavbarFixed from './NavBar';
import ResponsiveDrawer from "./Fixedsidenav";
// import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import MiniDrawer from './Minidrawer';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { Button } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SquareIcon from '@mui/icons-material/Square';
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import { yellow } from '@mui/material/colors';
import TaskModal from './Taskmodal'
import { Nav } from 'react-bootstrap';
import SubtaskList from './Listviewtask';
import UserModal from './Usermodal';





// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));




const Listview = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const [open, setOpen] = useState(false);


  return (
    <>
      <NavbarFixed />
      <Divider component='li' style={{ paddingTop: '45px' }} />
      <ResponsiveDrawer />
      <Box sx={{ flexGrow: 1 }} style={{ padding: '5px' }}>
        <Grid container spacing={2}>
          <Grid item xs={3} >

            <MiniDrawer />
          </Grid>
          <Grid item xs={9}>
            <Box style={{ height: '100vh', width: '71vw' }}>

              <Typography >
                <span style={{ fontWeight: '600' }}
                >Hey mariana -</span>  heres a look of your store
              </Typography>

              <Typography style={{ marginTop: '30px' }} >  <FormatListBulletedIcon /> List 1</Typography>

              <Box style={{ display: 'flex', alignItems: "center" }}>
                <SquareIcon style={{ color: '' }}/>

                
                  
                  <Nav.Link href="#"onClick={()=>setOpen(true)} >
                    <Button >
                      <PersonAddIcon  style={{ marginLeft: '10px', color: 'white', backgroundColor: 'black', borderRadius: '50%' }} />
                    </Button>
                    
                  </Nav.Link>


                  <Nav.Link href="#" onClick={() => setOpenModal(true)}>
                    <Button style={{ color: 'black', display: 'inline' }} >
                      Task one
                    </Button>
                  </Nav.Link>

              </Box>
              <SubtaskList />
            </Box>

          </Grid>

        </Grid>


      </Box >
      <TaskModal open={openModal} setOpen={setOpenModal} />
      <UserModal open={open} setOpen={setOpen} />


    </>
  );
};


export default Listview;