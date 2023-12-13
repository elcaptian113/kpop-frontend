import './NavigationBar.css';
import logo from './logo.JPG';
import React from 'react';
import {Navbar, Container, Nav, Offcanvas, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function NavigationBar() {
    return(
        <div className='navigation-bar'>
            
            <img src={logo} className="App-logo" alt="logo" />
            <>
            {[false].map((expand) => (
                <Navbar key={expand} expand={expand} className="mb-3">
                 <Container className='navigation-bar' fluid>
                 <Navbar.Brand className='navigation-bar' as={Link} to="/">Ultimate KPOP Database</Navbar.Brand>
                 <Navbar.Toggle className='navigation-bar' aria-controls={`offcanvasNavbar-expand-${expand}`} />
                 <Navbar.Offcanvas
                      id={`offcanvasNavbar-expand-${expand}`}
                      aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                      placement="end"
                 >
                <Offcanvas.Header className='navigation-bar' closeButton>
                <Offcanvas.Title className='navigation-bar' id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Ultimate KPOP Database
                </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className='navigation-bar'>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/groups">Groups</Nav.Link>
                    <Nav.Link as={Link} to="/idols">Idols</Nav.Link>
                    <Nav.Link as={Link} to="/videos">Videos</Nav.Link>
                    <NavDropdown title="Admin" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/">Groups</NavDropdown.Item>
                        <NavDropdown.Item href="/">Idols</NavDropdown.Item>
                        <NavDropdown.Item href="/">Videos</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/">
                         Separated link
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Offcanvas.Body>
                </Navbar.Offcanvas>
                </Container>
            </Navbar>
        ))}
        </>
        </div>
    )
}

export default NavigationBar;