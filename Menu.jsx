import React from 'react';
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Menu = () => {
    return (
        <Navbar id="menu" bg="light" expand="md" collapseOnSelect>
            <Navbar.Brand>
                XD
            </Navbar.Brand>
            <Navbar.Toggle/>
            <Navbar.Collapse>
                <Nav>
                    <LinkContainer as={Button}  variant="outline-dark" to="/stanowiska" className="ml-2">
                        <NavItem>Stanowiska</NavItem>
                    </LinkContainer>
                    <LinkContainer as={Button}  variant="outline-dark" to="/wanny" className="ml-2">
                        <NavItem>Wanny</NavItem>
                    </LinkContainer>
                    <LinkContainer as={Button}  variant="outline-dark" to="/archiwum" className="ml-2">
                        <NavItem>Archiwum</NavItem>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Menu;
