import React from 'react';
import NavbarFixed from './NavBar';
import ResponsiveDrawer from "./Fixedsidenav";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import MiniDrawer from './Minidrawer';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { Button } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SquareIcon from '@mui/icons-material/Square';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { yellow } from '@mui/material/colors';
import TaskModal from './Taskmodal'
import { Nav } from 'react-bootstrap';
// import LogoutIcon from '@mui/icons-material/Logout';




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));




const Listview = () => {
  const [openModal, setOpenModal] = React.useState(false);

  return (
    <>
      <NavbarFixed />
      <Divider component='li' style={{ paddingTop: '45px' }} />
      <ResponsiveDrawer />
      <Box sx={{ flexGrow: 1 }} style={{ padding: '5px' }}>
        <Grid container spacing={2}>
          <Grid item xs={3} >
            {/* <Griddrawer /> */}
            <MiniDrawer />
          </Grid>
          <Grid item xs={9}>
            <Box style={{ height: '100vh', width: '71vw' }}>

              <Typography >
                <span style={{ fontWeight: '600' }}
                >Hey mariana -</span>  heres a look of your store
              </Typography>

              <Typography style={{ marginTop: '30px' }} >  <FormatListBulletedIcon /> List 1</Typography>

              <Box style={{ display: 'flex', alignItems: "center" }} >
                <SquareIcon style={{ color: 'yellow' }} />
                < PersonAddIcon style={{ marginLeft: '10px', color: 'white', backgroundColor: 'black', borderRadius: '50%' }} />
                <Nav.Link href="#" onClick={() => setOpenModal(true)}>
                  <Button style={{ color: 'black', display: 'inline' }} >
                    Task one
                  </Button>
                </Nav.Link>

              </Box>
              <Box style={{ display: 'flex', alignItems: "center" }} >
                <SquareIcon style={{ color: 'yellow' }} />
                < PersonAddIcon style={{ marginLeft: '10px', color: 'white', backgroundColor: 'black', borderRadius: '50%' }} />
                <Nav.Link href="#" onClick={() => setOpenModal(true)}>
                  <Button style={{ color: 'black', display: 'inline' }} >
                    Task Two
                  </Button>
                </Nav.Link>

              </Box>


              {/* <Box>
                <SquareIcon style={{ color: 'yellow' }} />
                < PersonAddIcon style={{ marginLeft: '10px', color: 'white', backgroundColor: 'black', borderRadius: '50%' }} />
                <Button style={{ color: 'black' }}>
                  Task two
                </Button>
              </Box> */}

              <Box style={{ display: 'flex', justifyContent: "space-between", alignItems: 'center', border: '1px solid blue', float: 'left', width: '70vw', height: '6vh' }}>
                <Box style={{}}>
                  <SquareIcon style={{ marginLeft: '10px', color: 'yellow' }} />
                  <input type="text" placeholder='Enter Task' />
                </Box>

                <Box>
                  <CalendarMonthIcon />
                  <CalendarMonthIcon />
                  < PersonAddIcon style={{ marginLeft: '10px', marginRight: '10px', color: 'white', backgroundColor: 'black', borderRadius: '50%' }} />


                  <Button variant='contained' style={{ marginRight: '5px', borderRadius: '0px' }}  > <TaskModal />
                    SAVE
                  </Button>
                </Box>

              </Box>
            </Box>
          </Grid>

        </Grid>
        {/* <LogoutIcon/> */}

      </Box >
      <TaskModal open={openModal} setOpen={setOpenModal} />
    </>
  );
};

export default Listview;
