import './NavigationBar.css';
import logo from './../../images/logo.JPG';
import brandLogo from './../../images/brandLogo.jpg';
import IconSearchHeart from '../icons/HeartSearchIcon'
import React from 'react';
import {Navbar, Container, Nav, NavDropdown, Form, Button} from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';


function NavigationBar() {
    const [name, setName] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const nav = useNavigate();

    const submitData = async(group) => {
        try{
            nav('/ViewSearch/' + group.name);
            //console.log('/ViewSearch/' + group.name)
            //console.log(group.name);
        }
        catch (e){
            setError(e.message);
        }  
    }

    const submitGroup= (e) => {
        e.preventDefault();

        setSuccess(false);
        setError('');

        if (name){
            let group = {
                name: name,
            };

            submitData(group);
        }
        else{
            setError('Must contain a value!')
        }
    }
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
                <Form className="d-flex" onSubmit={submitGroup}>
                    <Form.Control
                        type="search"
                        placeholder="Search Groups"
                        className="me-2"
                        aria-label="Search"
                        onChange={e => setName(e.target.value)}
                    />
                    <Button variant="light" style={{ color: 'pink'}} type='submit'><IconSearchHeart /></Button>
                </Form>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        ))}
        </>
        </div>
    )
}

export default NavigationBar;