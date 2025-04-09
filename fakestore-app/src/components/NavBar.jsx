import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";


function NavBar() {
    return(
        <Navbar bg="info" variant="dark" expand="lg" className="p-3 mb-4">
            <Navbar.Brand href="/">My Website</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavLink to="/" className="nav-link">Home</NavLink>
                    <NavLink to="/about" className="nav-link">About</NavLink>
                    <NavDropdown title="Services" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Service 1</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Service 2</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Service 3</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;