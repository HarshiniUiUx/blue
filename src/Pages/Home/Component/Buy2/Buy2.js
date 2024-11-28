import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Buy2(){
    return(
        <>
        <Container>
      <Row className="justify-content-md-center py-5">
        <Col>
          <img className="w-100 img-fluid" src={require("../../../../assets/images/buy1.webp")} alt=""/>
        </Col>
        <Col>
          <img className="w-100 img-fluid" src={require("../../../../assets/images/buy2.webp")} alt=""/>
        </Col>
      </Row>
      
    </Container>
        </>
    );
}
export default Buy2;