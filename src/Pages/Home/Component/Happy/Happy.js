import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IoStar } from "react-icons/io5";
import "../Happy/Happy.css";
function Happy() {
    return (
        <>
            <Container>
                <Row className="text-center d-flex align-items-center py-5">
                    <Col lg="1">
                        <img src={require("../../../../assets/images/happy1.avif")} alt=""/>
                    </Col>
                    <Col lg="4">
                        <img class="float-end" src={require("../../../../assets/images/happy.webp")} alt="" />
                    </Col>
                    <Col lg="4">
                        <h1 className="fonts-style">Happy Customers</h1>
                    </Col>
                    <Col lg="1">
                        <img src={require("../../../../assets/images/happy2.webp")} alt=""/>
                    </Col>

                </Row>
            </Container>

            <Container>
                <Row className="justify-content-md-center">
                    <Col className="happy rounded mx-4">
                        <p className="text-center fw-light py-3 lh-lg fs-6 font-varele">I've been drinking coffee for a year now but never tried Blue Tokai. I heard about Attikan a lot and it was worth the hype! I am not a fan of darker roasts but it was one of the smoothest coffees.</p>
                        <div className="text-center py-3">
                        <span className="text-center py-5 "><IoStar className="text-warning text-center fs-4"/><IoStar className="text-warning fs-4" /><IoStar className="text-warning fs-4" /><IoStar className="text-warning fs-4" /><IoStar className="text-warning fs-4" /></span>
                        </div>
                        <p className="text-uppercase fw-bold text-center font-varele">keerthi hardasani</p>
                    </Col>
                    <Col className="happy rounded mx-4">
                        <p className="text-center fw-light font-varele py-3 lh-lg fs-6">Love the packaging, the coffee selection, the community events you do. The general love for coffee you want to share with the world is amazing to see. Keep shining! :)</p>
                        <div className="text-center py-3">
                        <span className="text-center py-5"><IoStar className="text-warning text-center fs-4"/><IoStar className="text-warning fs-4" /><IoStar className="text-warning fs-4" /><IoStar className="text-warning fs-4" /><IoStar className="text-warning fs-4" /></span>
                        </div>
                        <p className="text-uppercase fw-bold font-varele text-center">sahil madan</p>
                    </Col>
                    <Col className="happy rounded mx-4">
                        <p className="text-center fw-light font-varele py-3 fs-6 lh-lg">Blue Tokai is hands down the best coffee brand out there! I’ve enjoyed each cup at their cafes and whenever I brew at home. I can't get enough of their coffee and I recommend it!</p>
                        <div className="text-center py-3">
                        <span className="text-center py-5"><IoStar className="text-warning text-center fs-4"/><IoStar className="text-warning fs-4" /><IoStar className="text-warning fs-4" /><IoStar className="text-warning fs-4" /><IoStar className="text-warning fs-4" /></span>
                        </div>
                        <p className="text-uppercase fw-bold text-center">krishna sarbadhikary</p>
                    </Col>
                </Row>
                
            </Container>
        </>
    );
}
export default Happy;