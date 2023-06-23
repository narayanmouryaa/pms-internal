import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';


const drawerWidth = 60;

function Fifthpage() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >    
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >       
         <Typography  style={{fontWeight:'600'}}>Hey Mariana - </Typography>
         <Typography>here's what's happening with your store today. </Typography>

      </Box>
    </Box>

  );
}

export default Fifthpage;