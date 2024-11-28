import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import "../Speciality/Speciality.css"

function Speciality(){
    return(
        <>
        <Container>
      <Row className="justify-content-md-center py-5">
        <Col className="py-5">
          <h1 className=" fonts-style">New to Specialty Coffee?</h1>
          <p className="fs-4 fw-light py-3 font-varele">Let's start brewing! Check beginner-friendly products to get started.</p>
          <Button className="px-4 py-2 button fs-6 fw-bold text-light btn-none font-varele">LEARN MORE</Button>
        </Col>
        
        <Col>
          <img class="w-100" src={require("../../../../assets/images/web4.webp")} alt=""/>
        </Col>
      </Row>
      
    </Container>
        </>
    );
}
export default Speciality;