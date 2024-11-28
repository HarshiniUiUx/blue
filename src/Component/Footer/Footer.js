import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../Footer/Footer.css";
import { FaXTwitter,FaFacebookF,FaInstagram } from "react-icons/fa6";
function Footer(){
    return(
        <>
         <Container className="footer py-5">
      <Row className="justify-content-md-center">
        <Col lg="2">
          <img className="w-100"src={require("../../assets/images/logo-footer.webp")} alt=""/>
          <small className="fw-bold footer-font">BLUE TOKAI COFFEE ROASTERS</small><br/>
          <small className="fw-lighter footer-font ">PRIVACY POLICY<br/>
          COPYRIGHT © 2022</small>
          <p className="fw-bold pt-4 font-varele">FOLLOW US</p>
          <FaXTwitter /> <FaFacebookF /> <FaInstagram />
        </Col>
        <Col lg="4" className="px-5">
        <Form>
        <div className="text-center py-5">
        
        <Form.Control type="email" className="text-center" placeholder="Sign up for our newsletter!" />
        
        
        </div>
        <div className="text-center pb-5">
        <Button variant="dark text-light py-2 px-5 fs-6 text-uppercase">
          Subscribe Now
        </Button>
        </div>
        </Form>
        <small className="fw-bold text-uppercase footer-font text-justify">Special offers, brewing tips & recipes!
Get an insider access to new launches, events & more - straight to your inbox!
(We promise not to spam!)</small>
        </Col>

        <Col lg="2">
          <ul className="fw-bold list-unstyled lh-lg font-varele">
          Shop Online
          <li className="fw-light">Coffee</li>
         <li className="fw-light">Equipment</li>
         <li className="fw-light">Merchandise</li>
         <li className="fw-light">Track Order</li>
         <li className="fw-light">Wholesale</li>
         <li className="fw-light">Terms and Conditions</li>
         <li className="fw-light">Offers T&C</li>
          </ul>
        </Col>
        <Col lg="2">
        <ul className="fw-bold list-unstyled lh-lg font-varele">
        About Us
          <li className="fw-light">Our Roasteries</li>
         <li className="fw-light">Our Beliefs</li>                                               
         <li className="fw-light">Our Farms</li>
         <li className="fw-light">Play Bar Project</li>
         <li className="fw-light">Press</li>
         <li className="fw-light">Careers</li>
         <li className="fw-light">Packaging</li>
         <li className="fw-light">Contact Us</li>
          </ul>
        </Col>
        <Col lg="2">
     <ul className="fw-bold list-unstyled lh-lg font-varele">
     Visit Us
          <li className="">Our Farms</li>
         <li className="">Learn</li>                                               
         <li className="">Blog</li>
         <li> <img  className="w-100 pt-5 floatend"src={require("../../assets/images/equipment2.avif")} alt=""/></li>
    </ul>
        </Col>
        
      </Row>
      </Container>
        </>
    );
}
export default Footer;