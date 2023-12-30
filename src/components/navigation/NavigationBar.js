import './NavigationBar.css';
import logo from './logo.JPG';
import brandLogo from './brandLogo.jpg';
import React from 'react';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function NavigationBar() {
    return(
        <div className='navigation-bar'>
            
            <img src={logo} className="App-logo" alt="logo" />
            <>
            {[false].map((expand) => (
                <Navbar collapseOnSelect expand="lg" className="mb-3">
                 <Container className='navigation-bar' fluid>
                 <Navbar.Brand className='navigation-bar' as={Link} to="/"><img src={brandLogo} alt="Brand Logo"/></Navbar.Brand>
                 <Navbar.Toggle className='navigation-bar' aria-controls={`offcanvasNavbar-expand-${expand}`} />
                 <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="justify-content-start flex-grow-1 pe-3">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/groups">Groups</Nav.Link>
                    <Nav.Link as={Link} to="/idols">Idols</Nav.Link>
                    <NavDropdown title="Admin" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/groupsAdmin">Groups</NavDropdown.Item>
                        <NavDropdown.Item href="/idolsAdmin">Idols</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        ))}
        </>
        </div>
    )
}

export default NavigationBar;