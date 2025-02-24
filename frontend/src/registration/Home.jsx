import React from "react";
import { Container, Row, Col, Card, Button, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  const pricingPlans = [
    {
      title: "Basic",
      price: "$10/month",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      buttonText: "Get Started",
    },
    {
      title: "Pro",
      price: "$30/month",
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
      buttonText: "Buy Now",
    },
    {
      title: "Enterprise",
      price: "Contact Us",
      features: ["Custom Feature 1", "Custom Feature 2"],
      buttonText: "Contact Sales",
    },
  ];

  return (
    <>
      <Navbar bg="light" expand="lg" className="navbar navbar-dark bg-dark">
        <Container>
          <Navbar.Collapse id="navbar-nav">
            <div className="ms-auto d-flex ">
              <Link to="/login">
                <Button variant="danger">Login</Button>
              </Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-5">
        <h2 className="text-center mb-4">Pricing Plans</h2>
        <Row>
          {pricingPlans.map((plan, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title className="text-center">{plan.title}</Card.Title>
                  <h3 className="text-center">{plan.price}</h3>
                  <ul className="list-unstyled mt-3 mb-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx}>✔️ {feature}</li>
                    ))}
                  </ul>
                  <div className="d-grid">
                    <Button variant="primary">{plan.buttonText}</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Home;
