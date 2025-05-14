// import React from 'react';
// import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap';
// import { FaWhatsapp } from 'react-icons/fa'; // For WhatsApp icon
// import logoImage from '../../assets/websitelogo.jpeg';
// import { useNavigate } from 'react-router-dom';

// function Header() {
//     const navigate = useNavigate();
//   return (
//     <Navbar bg="white" expand="lg" className="shadow-sm py-3" sticky="top">
//       <Container fluid className="px-md-5"> {/* fluid for full-width, px-md-5 for padding on medium+ screens */}
//         <Navbar.Brand href="/" className="d-flex align-items-center">
//           <img
//             src={logoImage}
//             width="80" // Adjust size as needed
//             height="80" // Adjust size as needed
//             className="d-inline-block align-top me-2"
//             alt="VMK International Logo"
//           />
//           <span style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#E10098' /* Similar to lotus color */ }}>
//             Awakening <span style={{ color: '#333'}}>Coins</span>
//           </span>
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           {/* mx-auto will try to center the Nav links if space allows, or use me-auto to push to left */}
//           <Nav className="mx-auto">
//             <Nav.Link href="/" className="fw-bold px-lg-3">Home</Nav.Link>
//             <Nav.Link href="about" className="fw-bold px-lg-3">About Us</Nav.Link>
//             <NavDropdown title="Products" id="products-dropdown" className="fw-bold px-lg-2">
//               <NavDropdown.Item href="product-action1">Product 1</NavDropdown.Item>
//               <NavDropdown.Item href="product-action2">Product 2</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="all-products">All Products</NavDropdown.Item>
//             </NavDropdown>
//             <NavDropdown title="Resources" id="resources-dropdown" className="fw-bold px-lg-2">
//               <NavDropdown.Item href="#resource-action1">Resource 1</NavDropdown.Item>
//               <NavDropdown.Item href="#resource-action2">Resource 2</NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link href="contact" className="fw-bold px-lg-3">Contact Us</Nav.Link>
//           </Nav>
//           <Nav className="align-items-center"> {/* This Nav group will be on the right */}
//             <div className="d-none d-lg-flex align-items-center me-3"> {/* Hide on small screens, show on lg+ */}
//               <FaWhatsapp size={28} style={{ color: '#25D366' }} className="me-2" />
//               <div>
//                 <div style={{ fontSize: '0.8rem', lineHeight: '1' }}>Need any help?</div>
//                 <strong style={{ fontSize: '1rem', lineHeight: '1.2' }}>8745866373</strong>
//               </div>
//             </div>
//             <Button
//                 variant="dark"
//                 className="rounded-pill px-4 py-2 fw-bold"
//                 onClick={() => navigate('/contact')}
//             >
//             Book Demo
//             </Button>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Header;





// import React from 'react';
// import { Navbar, Nav, Container, Button } from 'react-bootstrap';
// import {
//   FaPhoneAlt, FaEnvelope, FaTwitter, FaFacebookF,
//   FaLinkedinIn, FaPinterestP, FaYoutube
// } from 'react-icons/fa'; // For various icons
// import gitsLogo from '../../assets/websitelogo.jpeg'; // If you have the logo image
// import { useNavigate } from 'react-router-dom';

// function Header() {
//   const navigate = useNavigate();

//   // Custom styles to match the image more closely
//   const topBarStyle = {
//     backgroundColor: '#212529', // A dark gray, adjust if needed (image is almost black)
//     color: '#f8f9fa',         // Light text color
//     fontSize: '0.85rem',
//     paddingTop: '0.4rem',
//     paddingBottom: '0.4rem',
//   };

//   const mainNavStyle = {
//     backgroundColor: '#4a773c', // Dark green from the image (approximate)
//   };

//   const requestCallButtonStyle = {
//     backgroundColor: '#6db743', // Lighter green for the button (approximate)
//     borderColor: '#6db743',
//     color: 'white',
//     fontWeight: 'bold',
//   };

//   const navLinkStyle = {
//     color: 'white',
//     fontWeight: 'bold',
//     textTransform: 'uppercase',
//     paddingLeft: '1rem',
//     paddingRight: '1rem'
//   };

//   const logoTextStyle = {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: '1.6rem',
//     marginRight: '0.5rem'
//   };

//   const logoSubTextStyle = {
//     color: '#c8e6c9', // Lighter green or white for subtext
//     fontSize: '0.9rem',
//     display: 'block',
//     lineHeight: '1',
//     color:'#d4a053'
//   };


//   return (
//     <>
//       {/* Top Bar - Hidden on small screens for simplicity, you can adjust this */}
//       {/* <div style={topBarStyle} className="d-none d-lg-block">
//         <Container fluid className="px-md-5 d-flex justify-content-between align-items-center">
//           <div className="d-flex align-items-center">
//             <FaPhoneAlt className="me-2" />
//             <span className="me-4">+91-9958 7328 14</span>
//             <FaEnvelope className="me-2" />
//             <span>info@globalitsources.com</span>
//           </div>
//           <Nav>
//             <Nav.Link href="#twitter" className="text-white px-2"><FaTwitter /></Nav.Link>
//             <Nav.Link href="#facebook" className="text-white px-2"><FaFacebookF /></Nav.Link>
//             <Nav.Link href="#linkedin" className="text-white px-2"><FaLinkedinIn /></Nav.Link>
//             <Nav.Link href="#pinterest" className="text-white px-2"><FaPinterestP /></Nav.Link>
//             <Nav.Link href="#youtube" className="text-white px-2"><FaYoutube /></Nav.Link>
//           </Nav>
//         </Container>
//       </div> */}

//       {/* Main Navigation */}
//       <Navbar style={mainNavStyle} expand="lg" sticky="top" className="py-0">
//         <Container fluid className="px-md-5">
//           <Navbar.Brand href="/" className="d-flex align-items-center py-2 justify-content-center">
//             <img
//               src={gitsLogo}
//               height="80" // Adjust size
//               className="d-inline-block align-top me-2"
//               alt="GITS Logo"
//             />
//             <div>
//               <span style={logoTextStyle}>AWAKENING COINS</span>
//               <span style={logoSubTextStyle}>Unlock Your Business Growth</span>
//             </div>
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="main-navbar-nav" style={{ borderColor: 'rgba(255,255,255,0.5)', color: 'white' }} />
//           <Navbar.Collapse id="main-navbar-nav">
//             {/* ms-auto pushes this Nav block to the right of the logo, 
//                 me-auto on this Nav block attempts to center it before the button */}
//             <Nav className="ms-auto me-auto">
//               <Nav.Link href="/" style={navLinkStyle}>Home</Nav.Link>
//               <Nav.Link href="/services" style={navLinkStyle}>Our Services</Nav.Link>
//               <Nav.Link href="/about" style={navLinkStyle}>About</Nav.Link>
//               <Nav.Link href="/how-we-help" style={navLinkStyle}>How We Help</Nav.Link>
//               <Nav.Link href="/contact" style={navLinkStyle}>Contact Us</Nav.Link>
//             </Nav>
//             {/* This Nav will be pushed to the far right by the me-auto on the previous Nav */}
//             <Nav>
//               <Button
//                 style={requestCallButtonStyle}
//                 className="px-4 py-2 rounded-0" // rounded-0 to match image button style
//                 onClick={() => navigate('contact')} // Adjust route as needed
//               >
//                 REQUEST A CALL
//               </Button>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default Header;



import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import awakeningCoinsLogo from '../../assets/websitelogo.jpeg';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  // Color Palette
  const darkBgColor = '#0A192F';         // Very dark navy/charcoal for the header background
  const goldenAccentColor = '#d4a053';   // Gold/yellow for text and accents
  const whiteTextColor = '#FFFFFF';       // For general navigation links on dark background
  const darkTextColorForButton = '#0A192F'; // Dark text on the golden button

  const mainNavStyle = {
    backgroundColor: darkBgColor, // <<< CHANGED: Use dark background for the header
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)', // Optional: Adds a subtle shadow below the header for more depth
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