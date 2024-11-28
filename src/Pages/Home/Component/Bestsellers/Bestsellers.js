import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from "react";
import "../Bestsellers/Bestsellers.css";
import {Link} from "react-router-dom";

function Bestsellers(){
    return(
        <>
        
         <Container>
         <h1 className='fonts-style'>Bestseller Coffees</h1>
      <Row className="justify-content-md-center">
      
        <Col>
        <Link to="/bestsellerscoffee" className="nav-link">
          <img className="w-100"src={require("../../../../assets/images/best2.webp")} alt=""/>
          <h6 className='font-varele fs-5 mt-3'>ATTICAN ESTATE <small className='text-danger'>RS.490</small></h6>
          <small className='font-varele fs-6 fw-lighter'>Dark chocolate,Figs</small>
          <p className='font-varele buy-button text-center py-2 text-light my-3'>BUY KNOW</p>
          </Link>
        </Col>
      
        <Col>
          <img className="w-100"src={require("../../../../assets/images/best3.webp")} alt=""/>
          <h6 className='font-varele fs-5 mt-3'>VIENNA ROAST<small className='text-danger'>RS.470</small></h6>
          <small className='font-varele fs-6 fw-lighter'>Cocoa,Oaky,Bitter Sweet</small>
          <p className='font-varele buy-button text-center py-2 text-light my-3'>BUY KNOW</p>
        </Col>
        <Col>
          <img className="w-100"src={require("../../../../assets/images/best4.webp")} alt=""/>
          <h6 className='font-varele fs-5 mt-3'>SILVER OAK CAFE<small className='text-danger'>RS.470</small></h6>
          <small className='font-varele fs-6 fw-lighter'>HazelNuts,Honey,Grapes</small>
          <p className='font-varele buy-button text-center py-2 text-light my-3'>BUY KNOW</p>
        </Col>
        <Col>
          <img className="w-100"src={require("../../../../assets/images/best3.webp")} alt=""/>
          <h6 className='font-varele fs-5 mt-3'>FRENCH ROAST<small className='text-danger'>RS.490</small></h6>
          <small className='font-varele fs-6 fw-lighter'>Strong,Cocoa,Bitter Sweet</small>
          <p className='font-varele buy-button text-center py-2 text-light my-3'>BUY KNOW</p>
        </Col>
      </Row>
      
    </Container>
        </>
    );
}
export default Bestsellers;