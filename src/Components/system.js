import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';




export default function BasicCard() {
    return (

        <>
            <Card sx={{ minWidth: 275 }} style={{ textAlign: "center" ,marginTop:'100px' }}>
                <CardContent>
                    <Typography sx={{ fontSize: 55, fontWeight: "600" }}  >
                        Project Management System
                    </Typography>
                    <Typography sx={{ fontSize: 20 }} color="text.secondary" >
                        Clarity gives you the blocks and components you need
                    </Typography>
                    <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                        to create a truly professional website.
                    </Typography>

                </CardContent>
            </Card>


            <Card sx={{ minWidth: 275 }}>
                <CardContent>

                    <Box component="form" style={{ textAlign: "center" }} autoComplete="off">
                        <FormControl sx={{ width: '50ch' }} style={{ textAlign: "center", paddingBottom: '10px' }} >
                            <OutlinedInput placeholder="Email Address" />
                        </FormControl>
                    </Box>


                    <Box component="form" style={{ textAlign: "center" }} autoComplete="off">
                        <FormControl sx={{ width: '50ch' }} style={{ textAlign: "center", paddingBottom: "10px" }} >
                            <OutlinedInput type='password' placeholder="Password" />
                        </FormControl>
                    </Box>

                    <Box component="form" style={{display:'flex',justifyContent:'center',alignItems:'center'  }} autoComplete="off">
                        <FormControlLabel required control={<Checkbox />} label="Remember Me" />
                        <Typography style={{marginLeft:'135px',fontWeight:'600',fontSize:'15px'}}>Forgot Password?</Typography>


                    </Box>


                    <CardActions style={{ justifyContent: "center" }}>
                        <Button variant='contained' sx={{ width: "55ch" }} style={{ padding: "10px" }}>Sign-in</Button>
                    </CardActions>

                </CardContent>

            </Card >

        </>

    );
}