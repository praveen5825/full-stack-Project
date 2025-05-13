// // frontend/src/pages/HomePage.jsx
// import React from 'react';
// import { Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// // Updated icons for service-based site
// import { FaBullhorn, FaLightbulb, FaChartLine, FaLaptopCode, FaSearchDollar, FaPaintBrush, FaUsers, FaQuoteLeft } from 'react-icons/fa';
// import HeroImage1 from "../assets/CodingImage.jpg"; // Keep these, they can be generic tech/service backgrounds
// import HeroImage2 from "../assets/DarkImage.jpg";
// import HeroImage3 from "../assets/FrontCode.jpg";
// import serviceImage2 from "../assets/SEO.jpg";
// import serviceImage3 from "../assets/SEM.jpg";
// import serviceImage4 from "../assets/FrontCode.jpg";


// // Updated data for a service-based website

// const carouselItems = [
//   {
//     image: HeroImage1, // Use your existing imported images
//     caption: 'Elevate Your Digital Presence',
//     description: 'Expert Web Design, SEO, and Digital Marketing solutions tailored for your success.',
//     linkText: 'Discover Our Services',
//     link: '/services'
//   },
//   {
//     image: HeroImage2,
//     caption: 'Drive Growth with Strategic SEO',
//     description: 'Rank higher, attract more customers, and achieve your business goals.',
//     linkText: 'Learn More About SEO',
//     link: '/services/seo'
//   },
//   {
//     image: HeroImage3,
//     caption: 'Innovative Web Design Solutions',
//     description: 'Beautiful, responsive, and user-friendly websites that convert.',
//     linkText: 'See Our Design Process',
//     link: '/services/web-design'
//   }
// ];

// const coreBenefitsData = [
//   { icon: <FaLightbulb size={50} className="text-primary mb-2" />, title: 'Innovative Solutions', text: 'Creative strategies tailored to your unique business needs.' },
//   { icon: <FaChartLine size={50} className="text-primary mb-2" />, title: 'Results-Driven', text: 'Focused on delivering measurable results and tangible ROI.' },
//   { icon: <FaUsers size={50} className="text-primary mb-2" />, title: 'Client-Centric Approach', text: 'Your success is our priority. We partner with you every step.' },
// ];

// const servicesData = [
//   { id: 1, name: 'Web Design & Development', image: HeroImage1, description: 'Crafting stunning, responsive websites that engage users and drive conversions.', slug: 'web-design' },
//   { id: 2, name: 'Search Engine Optimization (SEO)', image: serviceImage2, description: 'Boost your online visibility and rank higher on search engines with our expert SEO services.', slug: 'seo' },
//   { id: 3, name: 'Digital Marketing', image: serviceImage3, description: 'Comprehensive digital marketing strategies including PPC, SMM, and content marketing.', slug: 'digital-marketing' },
//   { id: 4, name: 'Graphic Design & Branding', image: serviceImage4, description: 'Create a memorable brand identity with professional logo design and branding services.', slug: 'branding' },
// ];

// const portfolioHighlightsData = [
//   { id: 1, clientName: 'Tech Startup X', service: 'Full Website Redesign', image: 'https://placehold.co/350x250/795548/FFFFFF.png?text=Portfolio+1', result: 'Increased user engagement by 40%.', slug: 'portfolio-tech-startup-x' },
//   { id: 2, clientName: 'Local Business Y', service: 'SEO Campaign', image: 'https://placehold.co/350x250/607D8B/FFFFFF.png?text=Portfolio+2', result: 'Achieved #1 ranking for key terms.', slug: 'portfolio-local-business-y' },
//   { id: 3, clientName: 'E-commerce Z', service: 'Digital Marketing Strategy', image: 'https://placehold.co/350x250/FF9800/000000.png?text=Portfolio+3', result: 'Grew online sales by 75% in 6 months.', slug: 'portfolio-ecommerce-z' },
// ];


// function HomePage() {
//   return (
//     <>
//       {/* Hero Section - Carousel */}
//       <Carousel fade interval={5000}> {/* Added interval for auto-slide */}
//         {carouselItems.map((item, index) => (
//           <Carousel.Item key={index} style={{ maxHeight: '550px', overflow: 'hidden' }}>
//             <img
//               className="d-block w-100"
//               src={item.image}
//               alt={item.caption}
//               style={{ objectFit: 'cover', maxHeight: '550px' }}
//             />
//             <Carousel.Caption className="bg-dark bg-opacity-75 p-4 rounded" style={{bottom: '10%'}}> {/* Adjusted opacity and padding */}
//               <h1 className="display-4 fw-bold">{item.caption}</h1> {/* Larger caption */}
//               <p className="lead fs-5">{item.description}</p> {/* Lead paragraph styling */}
//               <Button as={Link} to={item.link} variant="primary" size="lg" className="mt-2">
//                 {item.linkText || 'Learn More'}
//               </Button>
//             </Carousel.Caption>
//           </Carousel.Item>
//         ))}
//       </Carousel>

//       {/* Core Benefits Section / Why Choose Us */}
//       <Container className="text-center py-5 my-4">
//         <h2 className="mb-5">Why Partner With Us?</h2>
//         <Row>
//           {coreBenefitsData.map((benefit, index) => (
//             <Col md={4} key={index} className="mb-4 mb-md-0">
//               {benefit.icon}
//               <h4>{benefit.title}</h4>
//               <p className="text-muted">{benefit.text}</p>
//             </Col>
//           ))}
//         </Row>
//       </Container>

//       {/* Our Services Section */}
//       <Container className="my-5 py-5 bg-light rounded">
//         <h2 className="text-center mb-5">Our Services</h2>
//         <Row xs={1} sm={2} md={2} lg={4} className="g-4 justify-content-center"> {/* Adjusted column counts for potentially fewer services */}
//           {servicesData.map((service) => (
//             <Col key={service.id}>
//               <Card className="h-100 shadow-sm text-center service-card">
//                 <Card.Img variant="top" src={service.image} alt={service.name} style={{ height: '180px', objectFit: 'cover' }} />
//                 <Card.Body className="d-flex flex-column">
//                   <Card.Title as="h5" className="fw-bold">{service.name}</Card.Title>
//                   <Card.Text style={{fontSize: '0.9rem'}} className="text-muted flex-grow-1">{service.description}</Card.Text>
//                   <Button as={Link} to={`/services/${service.slug}`} variant="outline-primary" className="mt-3 align-self-center">
//                     Learn More
//                   </Button>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>

//       {/* Portfolio Highlights / Our Work Section */}
//       <Container className="my-5">
//         <h2 className="text-center mb-5">Our Recent Work</h2>
//         <Row xs={1} md={2} lg={3} className="g-4">
//           {portfolioHighlightsData.map((item) => (
//             <Col key={item.id}>
//               <Card className="h-100 shadow-sm portfolio-card">
//                 <Card.Img variant="top" src={item.image} alt={item.clientName} style={{ height: '220px', objectFit: 'cover' }} />
//                 <Card.Body>
//                   <Card.Subtitle className="mb-2 text-muted">{item.service}</Card.Subtitle>
//                   <Card.Title as="h5" className="fw-bold">{item.clientName}</Card.Title>
//                   <Card.Text className="fst-italic">"{item.result}"</Card.Text>
//                   <Link to={`/portfolio/${item.slug}`} className="btn btn-sm btn-outline-secondary mt-auto">
//                     View Case Study
//                   </Link>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//          <div className="text-center mt-5">
//             <Button as={Link} to="/portfolio" variant="dark" size="lg">View Our Full Portfolio</Button>
//         </div>
//       </Container>

//       {/* Call to Action Section */}
//       <Container fluid className="bg-primary text-white text-center py-5 my-5">
//         <FaQuoteLeft size={40} className="mb-3" />
//         <h2 className="display-5 fw-bold">Ready to Grow Your Business?</h2>
//         <p className="lead fs-4 my-3">Let's discuss how our expert services can help you achieve your goals.</p>
//         <Button as={Link} to="/contact" variant="light" size="lg" className="px-5 py-3 fw-bold text-primary mt-2">
//           Get a Free Consultation
//         </Button>
//       </Container>
//     </>
//   );
// }

// export default HomePage;

// frontend/src/pages/HomePage.jsx
// frontend/src/pages/HomePage.jsx
import React from 'react';
import { Container, Row, Col, Button, Card, Carousel } from 'react-bootstrap'; // Carousel is already imported
import { Link } from 'react-router-dom';
import { FaLightbulb, FaChartLine, FaUsers, FaLaptopCode, FaSearchDollar, FaPaintBrush, FaPhoneAlt } from 'react-icons/fa';

// Keep your existing image imports
import HeroImage1 from "../assets/CodingImage.jpg";
import HeroImage2 from "../assets/DarkImage.jpg";
import HeroImage3 from "../assets/FrontCode.jpg";
// ... (other service images if needed for other sections) ...

// Ensure this CSS file is imported and contains the necessary shared styles
// import './ContactPage.css'; // Or your shared styles file
// import './SharedStyles.css';

const HomePageGitsInspiredStyles = () => (
  <style type="text/css">{`
    /* Styles for Carousel Hero Section */
    .hero-carousel .carousel-item {
      position: relative;
      color: white;
      text-align: center;
      padding: 2rem 1rem; /* Padding for content within item */
      min-height: 70vh;
      max-height: 550px; /* Max height like original carousel */
      display: flex;
      align-items: center;
      justify-content: center;
      background-size: cover;
      background-position: center center;
      overflow: hidden; /* Ensure image doesn't overflow item boundaries */
    }

    .hero-carousel .carousel-item::before { /* Overlay for text readability */
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.55); /* Dark overlay, slightly increased */
    }

    .hero-carousel .carousel-caption-custom { /* Custom class for caption styling */
      position: relative; /* To be above the overlay */
      z-index: 1;
      max-width: 800px;
      padding: 1.5rem; /* Add some padding inside the caption */
      /* background: rgba(0, 0, 0, 0.2); /* Optional: slight background for caption box */
      /* border-radius: 8px; */
    }

    .hero-carousel .carousel-caption-custom h1 {
      font-size: clamp(2.2rem, 5vw, 3.8rem); /* Adjusted for potentially longer titles */
      font-weight: 700;
      text-shadow: 0px 2px 5px rgba(0,0,0,0.5);
      margin-bottom: 0.75rem;
    }

    .hero-carousel .carousel-caption-custom .subtitle {
      font-size: clamp(1rem, 2.5vw, 1.4rem); /* Adjusted for potentially longer subtitles */
      font-weight: 400; /* Slightly less bold subtitle */
      color: #ddeeff; /* Lighter blue, ensure good contrast */
      margin-bottom: 1.5rem;
      line-height: 1.5;
    }

    .hero-carousel .hero-button-gits-inspired {
      padding: 0.8rem 2rem !important;
      font-size: 1.1rem !important;
      font-weight: 600 !important;
      border-radius: 30px !important; /* Pill shape */
      display: inline-flex;
      align-items: center;
      /* Gradient button style should be applied by .btn-submit-gradient */
    }
    .hero-carousel .hero-button-gits-inspired svg {
      margin-right: 0.5em;
    }
    
    /* Styling for Carousel Controls - making them more visible */
    .hero-carousel .carousel-control-prev-icon,
    .hero-carousel .carousel-control-next-icon {
      background-color: rgba(0, 0, 0, 0.3); /* Semi-transparent background */
      border-radius: 50%;
      padding: 10px; /* Make hit area larger */
      background-size: 60%, 60%; /* Make arrow smaller within the circle */
    }
    .hero-carousel .carousel-indicators [data-bs-target] {
        background-color: rgba(255, 255, 255, 0.7); /* Brighter indicators */
    }
    .hero-carousel .carousel-indicators .active {
        background-color: #0d6efd; /* Active indicator with your primary color */
    }


    /* Styles for other sections remain the same */
    .intro-section-gits-inspired {
      text-align: center;
      padding: 3rem 1rem;
      background-color: #f8f9fa;
    }
    .intro-section-gits-inspired h2 {
      color: #0056b3;
      font-weight: 600;
      margin-bottom: 0.75rem;
    }
    .intro-section-gits-inspired p {
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
      color: #495057;
      font-size: 1.05rem;
      line-height: 1.7;
    }
    .intro-section-gits-inspired .highlight-text {
      color: #0d6efd;
      font-weight: 500;
    }

    .services-section-gits-inspired .card {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .services-section-gits-inspired .card:hover {
      transform: translateY(-8px);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    }
    .services-section-gits-inspired .card-title {
        color: #0056b3;
    }
  `}</style>
);


// Data for the Hero Carousel
const heroCarouselData = [
  {
    image: HeroImage1,
    title: 'INNOVATIVE WEB SOLUTIONS',
    subtitle: 'Crafting Digital Experiences That Convert & Inspire Action!',
    buttonText: 'Explore Our Work',
    buttonLink: '/portfolio', // Example internal link
    buttonIcon: <FaLaptopCode />
  },
  {
    image: HeroImage2,
    title: 'DRIVE GROWTH WITH SEO',
    subtitle: 'Rank Higher, Attract More Customers, and Dominate Your Niche.',
    buttonText: 'Boost Your SEO',
    buttonLink: '/services/seo',
    buttonIcon: <FaSearchDollar />
  },
  {
    image: HeroImage3,
    title: 'STRATEGIC DIGITAL MARKETING',
    subtitle: 'Maximize Your Reach & ROI with Data-Driven Strategies.',
    buttonText: 'Get a Free Quote',
    buttonLink: '/contact',
    buttonIcon: <FaChartLine />
  }
];

// Data for services section (can be the same as before or adjusted)
const servicesDataHomePage = [
  { id: 1, name: 'Web Design & Development', icon: <FaLaptopCode size={40} className="text-primary mb-3"/>, description: 'Crafting stunning, responsive websites that engage users and drive conversions.', slug: 'web-design' },
  { id: 2, name: 'Search Engine Optimization (SEO)', icon: <FaSearchDollar size={40} className="text-primary mb-3"/>, description: 'Boost your online visibility and rank higher on search engines with our expert SEO services.', slug: 'seo' },
  { id: 3, name: 'Digital Marketing Strategy', icon: <FaPaintBrush size={40} className="text-primary mb-3"/>, description: 'Comprehensive digital marketing strategies including PPC, SMM, and content.', slug: 'digital-marketing' },
];


function HomePage() {
  return (
    <>
      <HomePageGitsInspiredStyles />

      {/* Hero Section - Carousel */}
      <Carousel fade interval={5000} className="hero-carousel">
        {heroCarouselData.map((item, index) => (
          <Carousel.Item 
            key={index} 
            style={{ backgroundImage: `url(${item.image})` }}
          >
            {/* Removed img tag, background is set on Carousel.Item directly */}
            <div className="carousel-caption-custom"> {/* Using div for custom caption layout */}
              <h1>{item.title}</h1>
              <p className="subtitle">{item.subtitle}</p>
              <Button 
                as={Link} 
                to={item.buttonLink}
                variant="primary" // Base variant, actual style from classes
                className="hero-button-gits-inspired btn-submit-gradient" // Shared gradient button style
              >
                {item.buttonIcon} {item.buttonText}
              </Button>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Introduction Section - Below Hero */}
      <Container className="intro-section-gits-inspired">
        <h2>Digital Marketing Agency in Your City</h2>
        <p>
          Your Company Name is a full-service Digital Marketing Agency that has been helping brands thrive online since [Year] with
          holistic solutions that help you generate quality leads.
        </p>
        <p className="mt-3 highlight-text">
          Starting right from generating a good volume of quality leads, we accelerate processes and
          the efficiency of lead conversion through our experienced and proficient digital marketing.
        </p>
      </Container>

      {/* Our Core Services Section */}
      <Container className="my-5 py-4 services-section-gits-inspired">
        <h2 className="text-center mb-5 display-6 fw-bold" style={{color: "#0056b3"}}>Our Core Services</h2>
        <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
          {servicesDataHomePage.map((service) => (
            <Col key={service.id}>
              <Card className="h-100 text-center contact-card p-3">
                <Card.Body>
                  {service.icon}
                  <Card.Title as="h4" className="fw-semibold my-3">{service.name}</Card.Title>
                  <Card.Text className="text-muted px-2">{service.description}</Card.Text>
                  <Button as={Link} to={`/services/${service.slug}`} variant="outline-primary" className="mt-4">
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      
      {/* Why Partner With Us Section */}
      <Container className="text-center py-5 my-4 bg-light rounded">
        <h2 className="mb-5 display-6 fw-bold" style={{color: "#0056b3"}}>Why Partner With Us?</h2>
        <Row>
          {[
            { icon: <FaLightbulb size={50} className="text-primary mb-3" />, title: 'Innovative Solutions', text: 'Creative strategies tailored to your unique business needs.' },
            { icon: <FaChartLine size={50} className="text-primary mb-3" />, title: 'Results-Driven', text: 'Focused on delivering measurable results and tangible ROI.' },
            { icon: <FaUsers size={50} className="text-primary mb-3" />, title: 'Client-Centric Approach', text: 'Your success is our priority. We partner with you every step.' },
          ].map((benefit, index) => (
            <Col md={4} key={index} className="mb-4 mb-md-0 px-lg-4">
              {benefit.icon}
              <h4 className="fw-semibold my-2" style={{color: "#0056b3"}}>{benefit.title}</h4>
              <p className="text-muted">{benefit.text}</p>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Call to Action Section */}
      <Container fluid className="page-title-section-contact text-center py-5 my-5">
        <h2 className="display-5 fw-bold text-white">Ready to Grow Your Business?</h2>
        <p className="lead fs-4 my-3 text-white-75">Let's discuss how our expert services can help you achieve your goals.</p>
        <Button as={Link} to="/contact" variant="light" size="lg" className="px-5 py-3 fw-bold mt-2" style={{color: '#0d6efd'}}>
          Get a Free Consultation
        </Button>
      </Container>
    </>
  );
}

export default HomePage;