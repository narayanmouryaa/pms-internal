import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Divider} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import Avatar from '@mui/material/Avatar';
// import AvatarGroup from '@mui/material/AvatarGroup';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
// import PersonAddIcon from '@mui/icons-material/PersonAdd';
// import SquareIcon from '@mui/icons-material/Square';
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TextEditor from './TextEditor';
import FlagIconDropdown from './Drop';
import IconDropdown from './PendingDrop';
import MessageBox from './Commentbox';
import CalendarIcon from './Calendaricon';
import Stopwatch from './TimeTracker';
import CalendarDueIcon from './Calendarduedate';
import PersonIcon from './UserIcon';
import SubtaskList from './subtask';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1500,
  height: 650,
  bgcolor: 'background.paper',
  borderRadius: "10px",
  boxShadow: 24,
  // p: 4,
};

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],

            // display: 'inline-block'

          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};




export default function TaskModal({ open, setOpen }) {

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

      <BootstrapDialog
        onClose={handleClose}

        aria-labelledby="customized-dialog-title"
        open={open}
      >

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          style={{ zIndex: '4000' }}
        >

          <Container style={{ display: 'flex', justifyContent: 'center' }} >

            <Card sx={style} >
              <Box>
                <BootstrapDialogTitle sx={{ fontSize: 40, fontWeight: 600 }} id="customized-dialog-title" onClose={handleClose}>
                  <Typography>Space name <ArrowForwardIosIcon style={{ fontSize: '15px' }} />  Folder Name <ArrowForwardIosIcon style={{ fontSize: '15px' }} /> Task Name</Typography>
                </BootstrapDialogTitle>
              </Box>

              <Divider component="ul" clearing />
              <Box style={{ display: 'flex' }} >

                <Box style={{ width: '800px', height: '500px' }} >
                  <Box style={{ display: 'flex' }}>

                    <Box>
                      <IconDropdown />
                    </Box>
                    <Box style={{ marginTop: '30px', marginLeft: '10px' }}>
                      
                      <PersonIcon/>
                    </Box>
                    <Box style={{ marginTop: '35px', marginLeft: '30px' }}>
                      <FlagIconDropdown />
                    </Box>

                  </Box>
                  <Divider component='ul' clearing style={{ marginTop: '15px' }} />



                  <Box className='box-container' style={{ width: '800px', height: '500px' }}>

                    <Box mt={4} ml={4}>

                      <FormControl variant="standard" >
                        <InputLabel htmlFor="input-with-icon-adornment" style={{ fontWeight: "500", fontSize: '22px', color: 'black' }}>
                          Task Name
                        </InputLabel>
                        <Input
                          style={{ width: '700px', marginTop: '30px' }}
                          id="input-with-icon-adornment"
                          placeholder="Enter Task Name"
                          type='text'
                          startAdornment={
                            <InputAdornment position="start" >

                            </InputAdornment>
                          }
                        />
                      </FormControl>
                    </Box>


                    <Typography style={{ marginTop: '20px', marginLeft: '30px', fontweight: '500' }}> Task Description </Typography>

                    <Box >
                      <TextEditor />
                    </Box>


                     <Box mt={4} ml={4}>

                      <FormControl variant="standard" >
                        <InputLabel htmlFor="input-with-icon-adornment" style={{ fontWeight: "500", fontSize: '20px', color: 'black' }}>
                          Attachments
                        </InputLabel>
                        <Input
                          style={{ width: '700px' }}
                          id="input-with-icon-adornment"
                          placeholder="Upload your attachments"
                          type='file'
                          startAdornment={
                            <InputAdornment position="start">

                            </InputAdornment>
                          }
                        />
                      </FormControl>
                    </Box>




{/* 
                    <Box mt={4} ml={4}>
                      <Typography style={{ fontSize: '15px' }}>
                        SUBTASKS
                      </Typography>
                      <Box style={{ display: 'flex', alignItems: "center" }} >
                        <SquareIcon style={{ color: '#f0f4c3' }} />
                        < PersonAddIcon style={{ marginLeft: '10px', color: 'white', backgroundColor: 'black', borderRadius: '50%' }} />

                        <Button style={{ color: 'black', display: 'inline', textTransform: 'none' }} >
                          Sub Task 1
                        </Button>
                      </Box>
                      <Box style={{ display: 'flex', alignItems: "center" }} >
                        <SquareIcon style={{ color: '#f0f4c3' }} />
                        < PersonAddIcon style={{ marginLeft: '10px', color: 'white', backgroundColor: 'black', borderRadius: '50%' }} />

                        <Button style={{ color: 'black', display: 'inline', textTransform: 'none' }} >
                          Sub Task 2
                        </Button>
                      </Box>

                      <Box style={{ display: 'flex', justifyContent: "space-between", alignItems: 'center', border: '1px solid blue', float: 'left', width: '650px', height: '6vh'}}>
                        <Box>
                          <SquareIcon style={{ marginLeft: '10px', color: '#f0f4c3' }} />
                          <input type="text" placeholder='Enter Task' />
                        </Box>

                        <Box >
                          <CalendarMonthIcon />
                          <CalendarMonthIcon />
                          < PersonAddIcon style={{ marginLeft: '10px', marginRight: '10px', color: 'white', backgroundColor: 'black', borderRadius: '50%' }} />


                          <Button variant='contained' style={{ marginRight: '5px', borderRadius: '0px' }}  > <TaskModal />
                            SAVE
                          </Button>
                        </Box> */}

                      {/* </Box> */}
                    {/* </Box>  */}

                    <Box mt={4} ml={4}>
                   <SubtaskList/>
                    </Box>
                  </Box>

                </Box>


                <Box style={{ height: '585px', width: '700px' }}>
                  <Box style={{ display: 'flex', marginTop: '10px', marginLeft: '20px',height:'60px'}} >
                    <Typography style={{ fontSize: '11px', color: 'grey' }}>
                      CREATED  <br /> <span style={{ color: 'blue' }}>june 28,00:38 PM</span>
                    </Typography>

                    <Divider orientation="vertical" clearing flexItem style={{ marginLeft: '20px', marginRight: '20px' }} />

                    <Box >
                      <Stopwatch />
                    </Box>

                    <Divider orientation="vertical" clearing flexItem style={{ marginLeft: '20px' }} />
                    <Box style={{ marginLeft: '15px' }}>
                      <CalendarIcon />
                    </Box>
                    <Divider orientation="vertical" clearing flexItem style={{ marginLeft: '20px' }} />

                    <Box style={{ marginLeft: '15px' }}>
                      <CalendarDueIcon />
                    </Box>

                  </Box>
                  <Divider component='ul' clearing style={{ marginTop: '22px' }} />


                  <Box style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '20px', marginRight: '20px', marginTop: '70px' }}>
                    <Box style={{ fontSize: '14px' }} >
                      <span style={{ color: 'blue', marginRight: "5px" }}>You</span>
                      Created this task
                    </Box>
                    <Box style={{ color: 'grey', fontSize: '14px' }}>
                      1 hour ago
                    </Box>
                  </Box>

                  <Box style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '20px', margiRight: '20px' }}>
                    <Box style={{ fontSize: '14px' }} >
                      <span style={{ color: 'blue', marginRight: "5px" }}>You</span>
                      Created this task
                    </Box>
                    <Box style={{ color: 'grey', fontSize: '14px', marginRight: '20px' }}>
                      1 hour ago
                    </Box>
                  </Box>

                  <Box style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '20px', margiRight: '20px' }}>
                    <Box style={{ fontSize: '14px' }} >
                      <span style={{ color: 'blue', marginRight: "5px" }}>You</span>
                      Created this task
                    </Box>
                    <Box style={{ color: 'grey', fontSize: '14px', marginRight: '20px' }}>
                      1 hour ago
                    </Box>
                  </Box>

                  <Box style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '20px', margiRight: '20px' }}>
                    <Box style={{ fontSize: '14px' }} >
                      <span style={{ color: 'blue', marginRight: "5px" }}>You</span>
                      Created this task
                    </Box>
                    <Box style={{ color: 'grey', fontSize: '14px', marginRight: '20px' }}>
                      1 hour ago
                    </Box>
                  </Box>

                  <Box style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '20px', margiRight: '20px' }}>
                    <Box style={{ fontSize: '14px' }} >
                      <span style={{ color: 'blue', marginRight: "5px" }}>You</span>
                      Created this task
                    </Box>
                    <Box style={{ color: 'grey', fontSize: '14px', marginRight: '20px' }}>
                      1 hour ago
                    </Box>
                  </Box>

                  <Box style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '20px', margiRight: '20px' }}>
                    <Box style={{ fontSize: '14px' }} >
                      <span style={{ color: 'blue', marginRight: "5px" }}>You</span>
                      Created this task
                    </Box>
                    <Box style={{ color: 'grey', fontSize: '14px', marginRight: '20px' }}>
                      1 hour ago
                    </Box>
                  </Box>
                  <Box style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '20px', margiRight: '20px' }}>
                    <Box style={{ fontSize: '14px' }} >
                      <span style={{ color: 'blue', marginRight: "5px" }}>You</span>
                      Created this task
                    </Box>
                    <Box style={{ color: 'grey', fontSize: '14px', marginRight: '20px' }}>
                      1 hour ago
                    </Box>
                  </Box>

                  <Box style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '20px', margiRight: '20px' }}>
                    <Box style={{ fontSize: '14px' }} >
                      <span style={{ color: 'blue', marginRight: "5px" }}>You</span>
                      Created this task
                    </Box>
                    <Box style={{ color: 'grey', fontSize: '14px', marginRight: '20px' }}>
                      1 hour ago
                    </Box>
                  </Box>
                  <Box style={{
                    marginTop: '180px', boxShadow: " 8px 0 0 0 2px rgba(0, 0, 0, 0.6)",
                  }} >
                    <MessageBox />
                  </Box>

                </Box>


              </Box>

            </Card>
          </Container>
        </Modal>
      </BootstrapDialog>
    </div>
  );
}
