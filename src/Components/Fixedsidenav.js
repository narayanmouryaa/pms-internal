import React from 'react';
import { styled } from '@mui/system';
import { Box } from '@mui/material';
import { Search, Home, Inbox, Settings } from '@mui/icons-material';
// import SearchIcon from '@mui/icons-material/Search';
import NotificationsNone from '@mui/icons-material/NotificationsNone';
// import Divider from '@mui/material/Divider';
// import LogoutIcon from '@mui/icons-material/Logout';
import LogoutIcon from '@mui/icons-material/Logout';
import Nav from 'react-bootstrap/Nav';

const SidenavContainer = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 64px;
  background-color: #f5f5f5;
`;

const SidenavIcon = styled(Box)
  `
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  cursor: pointer;
  color: #777;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ddd;
  }

  &.active {
    background-color: #ccc;
    color: #333;
  }
`;

const FixedSidenav = () => {
  const [activeIcon, setActiveIcon] = React.useState('home');

  const handleIconClick = (iconName) => {
    setActiveIcon(iconName);
  };

  return (
    <>
      <SidenavContainer style={{ zIndex: "2000" }}>
        <SidenavIcon
          className={activeIcon === 'home' ? 'active' : ''}
          onClick={() => handleIconClick('home')}
          style={{ marginTop: '100px' }}
        >
          <Home />
        </SidenavIcon>
        <SidenavIcon
          className={activeIcon === 'Search' ? 'active' : ''}
          onClick={() => handleIconClick('Search')}
        >
          <Search />
        </SidenavIcon>
        <SidenavIcon
          className={activeIcon === 'inbox' ? 'active' : ''}
          onClick={() => handleIconClick('inbox')}
        >
          <Inbox />
        </SidenavIcon>
        <SidenavIcon
          className={activeIcon === 'settings' ? 'active' : ''}
          onClick={() => handleIconClick('settings')}
        >
          <Settings />
        </SidenavIcon>

        <SidenavIcon
          className={activeIcon === 'Notification' ? 'active' : ''}
          onClick={() => handleIconClick('Notification')}
        >
          <NotificationsNone />
        </SidenavIcon>

        <Nav.Link href="/"> 
            <LogoutIcon style={{marginTop:'280px',marginLeft:'20px'}}/>
            </Nav.Link> 

        

      </SidenavContainer>
      
      

    </>
  );
};

export default FixedSidenav;
