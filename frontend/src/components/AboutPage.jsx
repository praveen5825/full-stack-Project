// // frontend/src/pages/AboutPage.jsx
// import React from 'react';
// import { Container, Row, Col, Image } from 'react-bootstrap';
// import { Link } from 'react-router-dom'; // If you need internal links like "Mr. Brij"

// // Placeholder image, replace with your actual image path
// import aboutImage from '../assets/aboutImage.jpg'; 

// // Custom CSS for GITS About Page style
// const GitsAboutStyles = () => (
//   <style type="text/css">{`
//     .about-header-banner-gits {
//       background-color: #4a773c; /* Main Green from GITS (adjust if needed) */
//       color: white;
//       padding: 4rem 1rem; /* Generous padding */
//       text-align: center;
//       margin-bottom: 3rem; /* Space below banner */
//     }

//     .about-header-banner-gits h1 {
//       font-size: clamp(2.2rem, 5vw, 3.5rem); /* Responsive title */
//       font-weight: bold;
//       margin-bottom: 0.75rem;
//     }

//     .about-header-banner-gits p {
//       font-size: clamp(1rem, 2.5vw, 1.15rem);
//       color: rgba(255, 255, 255, 0.9);
//       max-width: 800px;
//       margin-left: auto;
//       margin-right: auto;
//     }

//     .about-main-content-gits {
//       padding-bottom: 3rem; /* Space at the bottom of the page */
//     }

//     .about-content-image-gits {
//       border-radius: 8px; /* Optional: slight rounding for image */
//       box-shadow: 0 4px 15px rgba(0,0,0,0.1); /* Optional: subtle shadow */
//       max-width: 100%;
//       height: auto;
//     }

//     .about-content-text-gits h3 {
//       font-size: 1.6rem; /* Approx size from image */
//       font-weight: bold;
//       color: #333333; /* Dark text color */
//       margin-bottom: 1.5rem;
//       line-height: 1.4;
//     }

//     .about-content-text-gits p {
//       font-size: 0.95rem;
//       line-height: 1.7;
//       color: #555555; /* Standard paragraph text color */
//       margin-bottom: 1rem;
//     }

//     .about-content-text-gits p:last-child {
//       margin-bottom: 0;
//     }

//     .about-content-text-gits .highlight-link-gits {
//       color: #4a773c; /* GITS Green for links */
//       font-weight: bold;
//       text-decoration: none;
//     }
//     .about-content-text-gits .highlight-link-gits:hover {
//       text-decoration: underline;
//     }

//   `}</style>
// );

// function AboutPage() {
//   const companyName = "Global IT Sources"; // Or your actual company name

//   return (
//     <>
//       <GitsAboutStyles /> {/* Include the custom styles */}
      
//       {/* Header Banner Section */}
//       <Container fluid className="about-header-banner-gits">
//         <h1>About Company</h1>
//         <p>
//           {companyName} is a full-service Digital Marketing agency that has been helping brands strike online with its services since its
//           advent in 2013 with holistic solutions that help you generate quality leads.
//         </p>
//       </Container>

//       {/* Main Content Section */}
//       <Container className="about-main-content-gits">
//         <Row className="align-items-center">
//           <Col md={5} className="mb-4 mb-md-0 text-center text-md-start">
//             {/* Replace with your actual image */}
//             <Image 
//               src={aboutImage} // Using the image from their site for exact look
//               alt="Team discussing project" 
//               className="about-content-image-gits" 
//               fluid 
//             />
//             {/* Or if you have it locally:
//             <Image src={aboutImage} alt="Team discussing project" className="about-content-image-gits" fluid />
//             */}
//           </Col>
//           <Col md={7}>
//             <div className="about-content-text-gits">
//               <h3>STAND OUT OF THE CROWD. GENERATE MORE LEADS AND CLOSE MORE DEALS!</h3>
//               <p>
//                 Global IT Sources is a trusted and certified Digital Marketing agency
//                 comprising of experienced marketing professionals and maestros that are
//                 highly qualified and have helped generate incredible sales for their clients
//                 and customers.
//               </p>
//               <p>
//                 We understand that the ease of access to the internet has given your
//                 potential prospects access to more information and knowledge. Their
//                 patterns of choosing and buying products and services has changed.
//               </p>
//               <p>
//                 Hence, Global IT Sources has developed certain strategies and automation
//                 in place for Web Design, SEO, Content Writing, Social Media Marketing &
//                 even paid Google Ad SEnice (Google PPC Management) to empower your business. We understand how these five pillars work together to
//                 help to increase your sales and marketing efficiency and generate more ROI.
//                 We can’t emphasize enough on the importance of Digital Marketing, so we’ll
//                 let our number speak. Ever since we started in 2013, through our SEO
//                 services each of our customers has had an average 300% growth in leads.
//               </p>
//               <p>
//                 We are working on our new Venture for Luxury Real Estate, <Link to="/contact" className="highlight-link-gits">with Brij</Link>. {/* Example Link */}
//               </p>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// }

// export default AboutPage;


// frontend/src/pages/AboutPage.jsx
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// Placeholder image, replace with your actual image path
import aboutImage from '../assets/aboutImage.jpg';

// Updated Custom CSS for the About Page with the new theme
const ThemedAboutStyles = () => (
  <style type="text/css">{`
    /* Header Banner Section - Updated Theme */
    .about-header-banner-themed {
      background-color: #0A192F; /* Dark Blue/Charcoal Background */
      color: #E0E0E0;           /* Light Gray/Off-White for default text in banner */
      padding: 4rem 1rem;
      text-align: center;
      margin-bottom: 3rem;
    }

    .about-header-banner-themed h1 {
      font-size: clamp(2.2rem, 5vw, 3.5rem);
      font-weight: bold;
      margin-bottom: 0.75rem;
      color: #d4a053;           /* Golden Color for the Main Title */
    }

    .about-header-banner-themed p {
      font-size: clamp(1rem, 2.5vw, 1.15rem);
      /* color: rgba(255, 255, 255, 0.9); // This is good too */
      color: #E0E0E0;           /* Light Gray/Off-White for description */
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
    }

    /* Main Content Section - Styles remain largely the same as it's on a white background */
    .about-main-content-themed {
      padding-bottom: 3rem;
    }

    .about-content-image-themed {
      border-radius: 8px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
      max-width: 100%;
      height: auto;
    }

    .about-content-text-themed h3 {
      font-size: 1.6rem;
      font-weight: bold;
      color: #333333; /* Dark text for headings on white background */
      margin-bottom: 1.5rem;
      line-height: 1.4;
    }

    .about-content-text-themed p {
      font-size: 0.95rem;
      line-height: 1.7;
      color: #555555; /* Standard paragraph text color on white background */
      margin-bottom: 1rem;
    }

    .about-content-text-themed p:last-child {
      margin-bottom: 0;
    }

    /* Updated Link Color to match the theme */
    .about-content-text-themed .highlight-link-themed {
      color: #d4a053; /* Golden Color for links */
      font-weight: bold;
      text-decoration: none;
    }
    .about-content-text-themed .highlight-link-themed:hover {
      /* You could use a slightly darker gold or underline on hover */
      text-decoration: underline;
      color: #b8860b; /* Example: Darker gold on hover */
    }

  `}</style>
);

function AboutPage() {
  const companyName = "Global IT Sources"; // Or your actual company name

  return (
    <>
      <ThemedAboutStyles /> {/* Include the updated custom styles */}
      
      {/* Header Banner Section - Apply new class */}
      <Container fluid className="about-header-banner-themed">
        <h1>About Company</h1>
        <p>
          {companyName} is a full-service Digital Marketing agency that has been helping brands strike online with its services since its
          advent in 2013 with holistic solutions that help you generate quality leads.
        </p>
      </Container>

      {/* Main Content Section - Apply new class prefix for consistency */}
      <Container className="about-main-content-themed">
        <Row className="align-items-center">
          <Col md={5} className="mb-4 mb-md-0 text-center text-md-start">
            <Image 
              src={aboutImage} 
              alt="Team discussing project" 
              className="about-content-image-themed" 
              fluid 
            />
          </Col>
          <Col md={7}>
            <div className="about-content-text-themed">
              <h3>STAND OUT OF THE CROWD. GENERATE MORE LEADS AND CLOSE MORE DEALS!</h3>
              <p>
                Global IT Sources is a trusted and certified Digital Marketing agency
                comprising of experienced marketing professionals and maestros that are
                highly qualified and have helped generate incredible sales for their clients
                and customers.
              </p>
              <p>
                We understand that the ease of access to the internet has given your
                potential prospects access to more information and knowledge. Their
                patterns of choosing and buying products and services has changed.
              </p>
              <p>
                Hence, Global IT Sources has developed certain strategies and automation
                in place for Web Design, SEO, Content Writing, Social Media Marketing &
                even paid Google Ad SEnice (Google PPC Management) to empower your business. We understand how these five pillars work together to
                help to increase your sales and marketing efficiency and generate more ROI.
                We can’t emphasize enough on the importance of Digital Marketing, so we’ll
                let our number speak. Ever since we started in 2013, through our SEO
                services each of our customers has had an average 300% growth in leads.
              </p>
              <p>
                We are working on our new Venture for Luxury Real Estate, <Link to="/contact" className="highlight-link-themed">with Brij</Link>.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AboutPage;