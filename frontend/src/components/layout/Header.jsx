import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
import { FaWhatsapp } from 'react-icons/fa'; // For WhatsApp icon
import logoImage from '../../assets/websitelogo.jpeg';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
  return (
    <Navbar bg="white" expand="lg" className="shadow-sm py-3" sticky="top">
      <Container fluid className="px-md-5"> {/* fluid for full-width, px-md-5 for padding on medium+ screens */}
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img
            src={logoImage}
            width="80" // Adjust size as needed
            height="80" // Adjust size as needed
            className="d-inline-block align-top me-2"
            alt="VMK International Logo"
          />
          <span style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#E10098' /* Similar to lotus color */ }}>
            Awakening <span style={{ color: '#333'}}>Coins</span>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* mx-auto will try to center the Nav links if space allows, or use me-auto to push to left */}
          <Nav className="mx-auto">
            <Nav.Link href="/" className="fw-bold px-lg-3">Home</Nav.Link>
            <Nav.Link href="about" className="fw-bold px-lg-3">About Us</Nav.Link>
            <NavDropdown title="Products" id="products-dropdown" className="fw-bold px-lg-2">
              <NavDropdown.Item href="product-action1">Product 1</NavDropdown.Item>
              <NavDropdown.Item href="product-action2">Product 2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="all-products">All Products</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Resources" id="resources-dropdown" className="fw-bold px-lg-2">
              <NavDropdown.Item href="#resource-action1">Resource 1</NavDropdown.Item>
              <NavDropdown.Item href="#resource-action2">Resource 2</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="contact" className="fw-bold px-lg-3">Contact Us</Nav.Link>
          </Nav>
          <Nav className="align-items-center"> {/* This Nav group will be on the right */}
            <div className="d-none d-lg-flex align-items-center me-3"> {/* Hide on small screens, show on lg+ */}
              <FaWhatsapp size={28} style={{ color: '#25D366' }} className="me-2" />
              <div>
                <div style={{ fontSize: '0.8rem', lineHeight: '1' }}>Need any help?</div>
                <strong style={{ fontSize: '1rem', lineHeight: '1.2' }}>8745866373</strong>
              </div>
            </div>
            <Button
                variant="dark"
                className="rounded-pill px-4 py-2 fw-bold"
                onClick={() => navigate('/contact')}
            >
            Book Demo
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;