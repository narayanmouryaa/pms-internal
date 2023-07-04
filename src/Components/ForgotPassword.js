import React, { useState } from 'react';
import { TextField, Button, Card, Box } from '@mui/material';
// import Checkbox from '@mui/material/Checkbox';
// import FormControlLabel from '@mui/material/FormControlLabel';

// import Nav from 'react-bootstrap/Nav';

const ForgotPassword = () => {
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
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 8,
    p: 4,
    mt: 2,
  };

  return (
    <div>

      <h2 style={{ textAlign: 'center', fontSize: '40px', marginTop: '60px' }} >Project Management System</h2>
      <h5 style={{ textAlign: 'center', fontWeight: '600', fontSize: '15px',marginTop:'40px' }} >Forgot Password  </h5>


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
          {/* <TextField
            label="Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
          /> */}
          {/* <Box style={{ display: 'flex', justifyContent: "flex-end" }}>
            
            <Button style={{ color: 'black', textTransform: 'none' }}  >              
               Forgot Password?
            </Button> 
                           

          </Box> */}
          <Button style={{ marginTop: '20px', height: '50px', textTransform: 'none' }} type="submit" variant="contained" color="primary" fullWidth>
            Reset Password
          </Button>
        </form>
      </Card>
     
    </div>
    
    
  );
};

export default ForgotPassword;
