import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import "../Subscribe/Subscribe.css";

function Subscribe(){
    return (
        <div className="container subscribe py-5">
            <div className="container subscriber my-5">
        <Container>
          <Row className="justify-content-md-center">
        <Col className="px-5">
          <p className=" py-5 fonts-style">Brew More. Save More!</p>
          <p className="fw-bold">WHEN YOU GET A SUBSCRIPTION FROM US,YOU:</p>
          <p className="fw-bold">01 / Save <small className="fw-lighter">up to 20%</small></p>
          <p className="fw-bold">02 / Enjoy convenience <small className="fw-lighter">with doorstep deliveries</small></p>
          <p className="fw-bold">03 / Experiment more <small className="fw-lighter">with new and different coffees</small></p>
          <p className="fw-bold">03 / Customise <small className="fw-lighter">your plan completely</small></p>
          <p className="fw-bold">05 / Stay stocked <small className="fw-lighter">and never run out of coffee!</small></p>
          <Button className="px-5 my-5 button fs-6 fw-bold text-light">SUBSCRIBE NOW</Button>
        </Col>
        <Col>
          <img className="w-100 "src={require("../../../../assets/images/web5.webp")} alt=""/>
        </Col>
        
      </Row>
        </Container>
        </div>

        <div className="container subscribe my-5">
        <h1 className=" text-center font">Completely customise your subscription,<br/>
      in just a few clicks.</h1>
      <h1 className=" text-center py-3 font">You get to pick:</h1>
        <Container>
          <Row className="justify-content-md-center d-flex align-items-center text-center py-4">
        <Col>
          <img className="w-50" src={require("../../../../assets/images/icon1.avif")} alt=""/>
          <p className="text-uppercase fw-semibold font-varele">number</p>
        </Col>
        <Col>
          <img className="w-75" src={require("../../../../assets/images/icon2.avif")} alt=""/>
          <p className="text-uppercase fw-semibold font-varele">pack size</p>
        </Col>
        <Col>
          <img className="w-50" src={require("../../../../assets/images/icon3.avif")} alt=""/>
          <p className="text-uppercase fw-semibold font-varele">coffees</p>
        </Col>
        <Col>
          <img className="w-50" src={require("../../../../assets/images/icon4.avif")} alt=""/>
          <p className="text-uppercase fw-semibold font-varele">grind size</p>
        </Col>
        <Col>
          <img className="w-50" src={require("../../../../assets/images/icon5.avif")} alt=""/>
          <p className="text-uppercase fw-semibold font-varele">frequency</p>
        </Col>
        
      </Row>
      
        </Container>
        </div>
        </div>
      );
}
export default Subscribe;