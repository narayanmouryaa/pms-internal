import { styled } from '@mui/material/styles';
// import IconButton from '@mui/material/IconButton';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import Typography from '@mui/material/Typography';
// import AddIcon from '@mui/icons-material/Add';
// import Nav from 'react-bootstrap/Nav';
// import SpaceCard from './SpaceCard';
import BasicModal from './Spacecard';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import { deepOrange } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';

// import CreateList from './Createlist';
import CustomizedDialogs from './Closecreatelist';
import BasicSelect from './Selectoption';
// import Folder from './Closefolder';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';




export default function SwipeableTemporaryDrawer() {

  const [state, setState] = React.useState({

    left: false,

  });

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),

    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));

  // const theme = useTheme();


  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <DrawerHeader>
          <Typography style={{ display: 'flex', marginRight: "100px" }}>Favouirte</Typography>
        </DrawerHeader>
        <Divider />
        {['Spaces'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
            <Button> <BasicModal /></Button>
          </ListItem>
        ))}

        {[' Space Test1'].map((text, index) => (
          <ListItem key={text} disablePadding>

            <Avatar sx={{ bgcolor: deepOrange[500] }} variant="rounded">
              N
            </Avatar>
            <ListItemText primary={text} />
            <Button><KeyboardArrowDownSharpIcon /></Button>
          </ListItem>


        ))}


        {[' Arvind Folder'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <FolderCopyIcon />
            <ListItemText primary={text} />
            <Button>< CustomizedDialogs /></Button>
          </ListItem>

        ))}

        {[' List1'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <FormatListBulletedIcon />
            <ListItemText primary={text} />
            <Button><BasicSelect /></Button>
          </ListItem>


        ))}

        {['Spaces', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      {/* <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}























// import * as React from 'react';
// import { styled, useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import CssBaseline from '@mui/material/CssBaseline';
// import MuiAppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

// const drawerWidth = 240;

// const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme, open }) => ({
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginLeft: `-${drawerWidth}px`,
//     ...(open && {
//       transition: theme.transitions.create('margin', {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       marginLeft: 0,
//     }),
//   }),
// );

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   transition: theme.transitions.create(['margin', 'width'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: `${drawerWidth}px`,
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
//   justifyContent: 'flex-end',
// }));

// export default function PersistentDrawerLeft() {
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Box sx={{ display: 'flex'}} >
//       <CssBaseline />
//       <AppBar position="absolute" open={open} style={{marginTop:'60px'}}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="start"
//             sx={{ mr: 2, ...(open && { display: 'none' }) }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap component="div">
//             Persistent drawer
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           '& .MuiDrawer-paper': {
//             width: drawerWidth,
//             boxSizing: 'border-box',
//           },
//         }}
//         variant="persistent"
//         anchor="left"
//         open={open}
//       >
//         <DrawerHeader>
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
//           </IconButton>
//         </DrawerHeader>
//         <Divider />
//         <List>
//           {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//             <ListItem key={text} disablePadding>
//               <ListItemButton>
//                 <ListItemIcon>
//                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                 </ListItemIcon>
//                 <ListItemText primary={text} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//         <Divider />
//         <List>
//           {['All mail', 'Trash', 'Spam'].map((text, index) => (
//             <ListItem key={text} disablePadding>
//               <ListItemButton>
//                 <ListItemIcon>
//                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                 </ListItemIcon>
//                 <ListItemText primary={text} />
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//       <Main open={open}>
//         <DrawerHeader />
//         <Typography paragraph>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//           tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
//           enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
//           imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
//           Convallis convallis tellus id interdum velit laoreet id donec ultrices.
//           Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
//           adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
//           nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
//           leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
//           feugiat vivamus at augue. At augue eget arcu dictum varius duis at
//           consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
//           sapien faucibus et molestie ac.
//         </Typography>
        
//       </Main>
//     </Box>
//   );
// }
