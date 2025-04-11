import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


function NavBar() {
    return(
        <Navbar bg="info" variant="dark" expand="lg" className="p-3 mb-4">
            <Navbar.Brand href="/">FakeStore API</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavLink to="/" className="nav-link">Home</NavLink>
                    <NavLink to="/products" className="nav-link">Product Listing</NavLink>
                    <NavLink to="/add-product" className="nav-link">Add Product</NavLink>
                    <NavLink to="/delete-product/1" className="nav-link">Delete Product</NavLink>
                    <NavLink to="/edit-product/1" className="nav-link">Edit Product</NavLink>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;