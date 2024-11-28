import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../Buy/Buy.css";

function Buy(){
    return(
        <>
        
          <Container>
      <Row className="d-flex text-center py-5 buy">
        <Col xs >
          <img className="w-75" src={require("../../../../assets/images/cpic1.webp")} alt=""/>
          <p className="fw-bold py-4 px-3 font-varele">ROASTED & GROUND COFFEE</p>
        </Col>
        <Col xs>
          <img className="w-75" src={require("../../../../assets/images/cpic2.webp")} alt=""/>
          <p className="fw-bold px-4 py-4 font-varele">READY TO DRINK</p>
        </Col>
        <Col xs>
           <img className="w-75" src={require("../../../../assets/images/cpic3.webp")} alt=""/>
           <p className="fw-bold py-4 font-varele">NO EQUIPMENT BREWING</p>
        </Col>
        <Col xs>
           <img className="w-75" src={require("../../../../assets/images/cpic4.webp")} alt=""/>
           <p className="fw-bold px-2 py-4 font-varele">BREWING EQUIPMENT</p>
        </Col>
        <Col xs>
           <img className="w-75"src={require("../../../../assets/images/cpic5.webp")} alt=""/>
           <p className="fw-bold px-4 py-4 font-varele">ROASTED COFFEE RECOMMENDATION</p>
        </Col>
      </Row>
    </Container>
        </>
    );
}
export default Buy;