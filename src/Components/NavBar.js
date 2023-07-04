import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AppsIcon from '@mui/icons-material/Apps';
import ListIcon from '@mui/icons-material/List';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';


const ColorButton = () => {
    const [backgroundColor, setBackgroundColor] = useState('light');

    const handleClick = () => {
        setBackgroundColor('white')

    };
    return (
        <>
            <Nav.Link href="Listview" style={{ marginLeft: '40px' }}>
                <Button
                    onClick={handleClick}
                    style={{ backgroundColor, color: 'black',marginLeft:'160px' }}
                    
                >
                    <ListIcon />List view
                </Button>
            </Nav.Link>

            <Nav.Link href="Gridview" >
                <Button
                onClick={handleClick}
                style={{backgroundColor,color:'black'}} >
                    <ViewQuiltIcon /> Grid view
                </Button>
            </Nav.Link>
        </>
    );
};

export default function NavbarFixed() {

    return (
        <>
            <Navbar bg='light' expand="lg" style={{ position: "fixed", width: "100vw", "z-index": "2200" }} >
                <Container fluid style={{ padding: '0px 36px 0px 8px' }}>
                    <AppsIcon />
                    <Navbar.Brand href="#" style={{ fontWeight: "600" }}> P M S</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >

                            {/* <Button style={{ border: '1px solid black' }} >
                            <Nav.Link href="/" style={{ marginLeft: '40px' }}><ListIcon />List view </Nav.Link>
                        </Button> */}

                            <ColorButton />

                            {/* <Button >
                            <Nav.Link href="Gridview" ><ViewQuiltIcon /> Grid view </Nav.Link>
                        </Button> */}


                        </Nav>
                        <Form className="d-flex" >
                            <Form.Control
                                style={{ padding: '5px', height: '40px' }}
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"

                            />

                            <Nav.Link href="#" style={{ margin: "5px" }}><NotificationsIcon /></Nav.Link>
                            <Nav.Link href="settings" style={{ margin: "5px" }}><SettingsIcon /> </Nav.Link>
                            <Avatar style={{ margin: "5px" }} src='/Images/man1.jpg'></Avatar>

                        </Form>
                    </Navbar.Collapse>

                </Container>

            </Navbar>
        </>

    );
}