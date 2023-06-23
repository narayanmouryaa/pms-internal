// import * as React from 'react';
// import NavbarFixed from "./NavBar";
// import { Container, Row, Col } from "react-bootstrap";
// import FixedSidenav from './Fixedsidenav';
// import Box from '@mui/material/Box';
// import Divider from '@mui/material/Divider';
// import MiniDrawer from './Minidrawer';
// // import Typography from '@mui/material/Typography';
// import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';


// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// function Listview() {
//   return (
//     <>
//       {/* <Container fluid style={{ padding: '0px' }}>
//         <Row>
//           <Col md={12}>
//             <NavbarFixed />
//             <Divider component="li" style={{ paddingTop: '45px' }} />
//           </Col>
//         </Row>

//         <Row style={{ position: 'relative' }}>
//           <Col md={4}>
//             <FixedSidenav />
//           </Col>

//         </Row>

//         <Box sx={{ flexGrow: 1, p: 3, position: 'relative' }}>
//           <MiniDrawer />
//         </Box>
//       </Container> */}

//     </>
//   )
// }

// export default Listview;







import React from 'react';
import NavbarFixed from './NavBar';
import ResponsiveDrawer from "./Fixedsidenav";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import GridviewCard from './GridviewCard';
import Divider from '@mui/material/Divider';
import Griddrawer from './Griddrawer';
import Form from 'react-bootstrap/Form';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
// import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SearchIcon from '@mui/icons-material/Search';





const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const Listview = () => {

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <NavbarFixed />
      <Divider component='li' style={{ paddingTop: '45px' }} />
      <ResponsiveDrawer />


      <Box sx={{ flexGrow: 1 }} style={{ padding: '5px' }}>
        <Grid container spacing={2}>
          <Grid item xs={3} >
            <Griddrawer />
          </Grid>

          <Grid item xs={3}>
            {/* <Box style={{ display: 'flex' }}>
              
              <Form.Control              
                style={{ padding: '5px', height: '30px', width: '180px', marginBottom: '10px' }}
                type="search"  
                             
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <SearchIcon/> 
              <AvatarGroup max={5} sx={{ marginLeft: '30px' }} >
                <Avatar alt="Remy Sharp" sx={{ width: '30px', height: '30px' }} src="/Images/man1.jpg" />
                <Avatar alt="Travis Howard" sx={{ width: '30px', height: '30px' }} src="/Images/man1.jpg" />
                <Avatar alt="Cindy Baker" sx={{ width: '30px', height: '30px' }} src="/Images/man1.jpg" />
                <Avatar alt="Agnes Walker" sx={{ width: '30px', height: '30px' }} src="/Images/man1.jpg" />
                <Avatar alt="Trevor Henderson" sx={{ width: '30px', height: '30px' }} src="/static/images/avatar/5.jpg" />
              </AvatarGroup>

            </Box> */}

            <Item style={{ backgroundColor: 'lightGray', height: '100vh' }}>
              <Typography style={{ display: 'flex', justifyContent: 'start', fontWeight: '600', padding: '8px' }} >TO DO</Typography>
              <GridviewCard />
              <GridviewCard />
            </Item>
          </Grid>
          <Grid item xs={3}>
            {/* <Box style={{ display: 'flex', padding: '8px' }}>
              <Typography style={{ color: 'grey' }}>
                only My issues
              </Typography>
              <Typography style={{ color: 'grey', marginLeft: '15px' }}>
                Recently Updated
              </Typography>

            </Box> */}
            <Item style={{ backgroundColor: 'lightGray', height: '100vh' }}>
              <Typography style={{ display: 'flex', justifyContent: 'start', fontWeight: '600', padding: '8px' }} >IN PROGRESS</Typography>
              <GridviewCard />
              </Item>
          </Grid>


          <Grid item xs={3}>
            {/* <Box style={{ display: 'flex', color: 'grey',padding:'6px' }}> */}
              {/* <FormControl sx={{minWidth: 120 }}>
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  style={{height:'30px',borderColor:'light'}}
                >
                  <MenuItem value="">
                    <em>All sprints</em>
                  </MenuItem>
                  <MenuItem value={10}>something </MenuItem>
                  <MenuItem value={20}>anything </MenuItem>
                  <MenuItem value={30}>few more</MenuItem>
                </Select>

              </FormControl> */}
            {/* </Box> */}

            <Item style={{ backgroundColor: 'lightGray', height: '100vh' }}>
              <Typography style={{ display: 'flex', justifyContent: 'start', fontWeight: '600', padding: '8px' }} >DONE</Typography>
              <Card sx={{ minWidth: 275, borderRadius: '10px' }}  >
                <CardContent>
                  <Typography sx={{ fontSize: 16, textAlign: 'start' }} gutterBottom>
                    As a translator,I want integrate Crowdin webhook to notify translators about changed strings
                  </Typography>
                </CardContent>
              </Card>

             
              <GridviewCard />

              <Card sx={{ minWidth: 275, borderRadius: '10px', marginTop: '10px' }}  >
                <CardContent>
                  <Typography sx={{ fontSize: 16, textAlign: 'start' }} gutterBottom>
                    As a translator,I want integrate Crowdin webhook to notify.
                  </Typography>
                </CardContent>
              </Card>
            </Item>
          </Grid>


        </Grid>

      </Box >
    </>
  );
};

export default Listview;
