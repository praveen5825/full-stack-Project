import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import awakeningCoinsLogo from '../../assets/websitelogo.jpeg';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  // Color Palette
  const darkBgColor = '#0A192F'; 
  const goldenAccentColor = '#d4a053';  
  const whiteTextColor = '#FFFFFF';      
  const darkTextColorForButton = '#0A192F'; 

  const mainNavStyle = {
    backgroundColor: darkBgColor, 
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  };

  const requestCallButtonStyle = {
    backgroundColor: goldenAccentColor,
    borderColor: goldenAccentColor,
    color: darkTextColorForButton,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  };

  const navLinkStyle = {
    color: whiteTextColor, // <<< CHANGED: White text for nav links on dark background
    fontWeight: '500',
    textTransform: 'uppercase',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    fontSize: '0.9rem',
  };

  const logoMainTextStyle = {
    color: whiteTextColor, // <<< CHANGED: Golden text for "AWAKENING COINS" on dark background
    fontWeight: 'bold',
    fontSize: '1.5rem',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  };

  const logoSubTextStyle = {
    color: goldenAccentColor, // Golden text for sub-text, looks good on dark background
    fontSize: '0.85rem',
    display: 'block',
    lineHeight: '1.2',
    fontWeight: 'bold', // Kept bold as per your code
    letterSpacing: '0.5px',
  };

  return (
    <>
      <Navbar style={mainNavStyle} expand="lg" sticky="top" variant="dark"> {/* variant="dark" is correct for dark background */}
        <Container fluid className="px-md-4 px-lg-5">
          <Navbar.Brand href="/" className="d-flex align-items-center">
            <img
              src={awakeningCoinsLogo}
              height="60" // Adjusted for better balance, 90 might be too large for a nav bar
              className="d-inline-block align-middle me-3" // Added me-3 for spacing between logo and text
              alt="Awakening Coins Logo"
            />
            <div>
              <span style={logoMainTextStyle}>AWAKENING COINS</span>
              <span style={logoSubTextStyle}>Unlock Your Business Growth</span>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar-nav" />
          <Navbar.Collapse id="main-navbar-nav" className="justify-content-end">
            <Nav className="mx-auto">
              <Nav.Link href="/" style={navLinkStyle}>Home</Nav.Link>
              <Nav.Link href="/services" style={navLinkStyle}>Services</Nav.Link>
              <Nav.Link href="/about" style={navLinkStyle}>About</Nav.Link>
              <Nav.Link href="/contact" style={navLinkStyle}>Contact Us</Nav.Link>
            </Nav>
            <Nav>
              <Button
                style={requestCallButtonStyle}
                className="px-4 py-2 rounded-pill"
                onClick={() => navigate('/contact')}
              >
                Request a Call
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;