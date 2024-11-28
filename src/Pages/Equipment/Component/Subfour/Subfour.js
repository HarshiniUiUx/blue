import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../Subfour/Subfour.css"

function Subfour() {
    return (
        <>

        <Container className="equipment">
      <Row className="justify-content-md-center py-5">
        <Col lg="2">
          <img className="rounded-circle w-75" src={require("../../../../assets/images/equi-automated.webp")} alt="" />
          <p className="fw-bold px-4">AUTOMATED</p>
        </Col>
        <Col lg="2">
        <img className="rounded-circle w-75" src={require("../../../../assets/images/equi-manual.webp")} alt="" />
        <p className="fw-bold px-5">MANUAL</p>
        </Col>
        <Col lg="2">
        <img className="rounded-circle w-75" src={require("../../../../assets/images/equi-accessories.webp")} alt="" />
        <p className="fw-bold px-4">ACCESSORIES</p>
        </Col>
        <Col lg="2">
        <img className="rounded-circle w-75" src={require("../../../../assets/images/equi-combos.webp")} alt="" />
        <p className="fw-bold px-5">COMBOS</p>
        </Col>
      </Row>
      <Row>
        <Col>
        <img src={require("../../../../assets/images/equipment1.webp")} alt=""/>
        </Col>
        <Col className="text-end">
        <img src={require("../../../../assets/images/equipment2.avif")} alt=""/>
        </Col>
        
      </Row>
    </Container>
    </>
    
    );
}
export default Subfour;