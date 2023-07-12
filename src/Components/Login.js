import React, { useState } from 'react';
import { TextField, Button, Card, Box } from '@mui/material';
// import Checkbox from '@mui/material/Checkbox';
// import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';

import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-bootstrap';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };


  const style = {
    position: 'relative',
    top: '50%',
    left: '50%',
    width:'35vw',
    transform: 'translate(-50%, -50%)',
     bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 8,
    p: 4,
    mt: 4,
  };

  return (

    <div>

      <h2 style={{ textAlign: 'center', fontSize: '40px', marginTop: '60px' }} >Project Management System</h2>
      <h5 style={{ textAlign: 'center', fontWeight: '600', fontSize: '15px',marginTop:'40px' }} >Login To Continue  </h5>

   <Grid container spacing={2}>
    <Grid item lg={3} sm={4}></Grid>
    <Grid item xs={12} lg={6}>
      <Card sx={style}>

        <form onSubmit={handleSubmit}>

          <TextField
            label="Email Address"
            type="email"
            value={email}
            onChange={handleEmailChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
          />
          <Box style={{ display: 'flex', justifyContent: "flex-end" }}>
            
            {/* <Button style={{ color: 'black', textTransform: 'none' }}  >              
               Forgot Password?
            </Button> */}
            
                <Button  style={{  color: 'black',textTransform:'none' }}                       
                 ><Nav.Link href="ForgotPassword">                   
                   Forgot Password? 
                   </Nav.Link>
                </Button>
             

          </Box>
         
          <Button style={{ marginTop: '20px', height:'50px',TextTransform: 'none' }} type="submit" variant="contained" color="primary" fullWidth>
            <NavLink href="ListView">
            Sign In
             </NavLink>
          </Button>
         
        </form>
      </Card>
      </Grid>
      <Grid item lg={3} sm={4}></Grid>
      </Grid>

     
    </div>
    
    
  );
};

export default Login;