import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { Component } from "react";
class Attikan extends Component{
  state={
    image:"https://bluetokaicoffee.com/cdn/shop/files/1Attikan_Front.jpg?v=1705993721&width=1800"
  }
   render(){
    const ChangePic = () => {
      this.setState({
        image: "https://bluetokaicoffee.com/cdn/shop/files/1Attikan_Front.jpg?v=1705993721&width=120",
      });
    };

    const ChangePic1 = () => {
      this.setState({
        image: "https://bluetokaicoffee.com/cdn/shop/files/2Attikan_Web.jpg?v=1705993735&width=1800",
      });
    };

    const ChangePic2 = () => {
      this.setState({
        image: "https://bluetokaicoffee.com/cdn/shop/files/3Attikan_Back.jpg?v=1705993748&width=1800",
      });
    };
        return(
            <>
            <Container>
      <Row className="justify-content-md-center">
        <Col xs lg="2">
          <Row className='py-3'><img className="w-50"src={require("../../../../assets/images/best2.webp")} alt="" onClick={ChangePic}/></Row>
          <Row  className='py-3'><img className="w-50"src={require("../../../../assets/images/attikan2.avif")} alt="" onClick={ChangePic1}/></Row>
          <Row><img className="w-50"src={require("../../../../assets/images/attikan3.avif")} alt="" onClick={ChangePic2}/></Row>
        </Col >
         
        <Col lg="4">
        <img src={this.state.image} alt="" className="w-100 img-fluid"/>
        </Col>

        <Col lg="5">
          <p className='text-UpperCase'>Medium Dark Roast</p>
        </Col>
        
      </Row>
    </Container>
 
            </>
        )
    }
}

export default Attikan;