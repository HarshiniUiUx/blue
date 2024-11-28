import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../News/News.css"


// import required modules
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';

const News = () => {
  return (

    < div className='container news mt-5'>
      <p className='pt-5 px-3 fonts-style'>Us in the News!</p>
      <Swiper
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          
            <Container>
              <Row className="justify-content-md-center happy py-5">
                <Col>
                  <img src={require("../../../../assets/images/web7.webp")} alt=""/>
                </Col>
                <Col className='d-flex align-items-end happy'>
                
                <h1 className='text-start text-capitalize lh-base font'>Last-minute gifting<br/>struggles? Here's your go-to<br/>gift hamper guide</h1>
                     <button class="btn btn-primary text-uppercase" type="button">See More</button>
                
                </Col> 
              </Row>
            </Container>
          
        </SwiperSlide>
        <SwiperSlide>
        <Container>
              <Row className="justify-content-md-center happy py-5">
                <Col>
                  <img src={require("../../../../assets/images/news1.jpg")} alt=""/>
                </Col>
                <Col className='d-flex align-items-end happy'>
                <h1 className='text-start text-capitalize lh-base font'>how to repurpose used<br/>coffee grounds into a<br/>nourishing scrub</h1>
                     <button class="btn btn-primary text-uppercase" type="button">See More</button>
                
                </Col> 
              </Row>
            </Container>
        </SwiperSlide>
        <SwiperSlide>
        <Container>
              <Row className="justify-content-md-center happy py-5">
                <Col>
                  <img src={require("../../../../assets/images/news2.webp")} alt=""/>
                </Col>
                <Col className='d-flex align-items-end happy'>
                <h1 className='text-start text-capitalize lh-base font'>repurpose coffee grounds<br/>to nourish your garden</h1>
                     <button class="btn btn-primary text-uppercase" type="button">See More</button>
                
                </Col> 
              </Row>
            </Container>
        </SwiperSlide>
        
        <SwiperSlide>
        <Container>
              <Row className="justify-content-md-center happy py-5">
                <Col>
                  <img src={require("../../../../assets/images/news5.webp")} alt=""/>
                </Col>
                <Col className='d-flex align-items-end happy'>
                <h1 className='text-start text-capitalize lh-base font'>embracing eco-friendly<br/>practices:the shift to<br/>sustainable packaging</h1>
                     <button class="btn btn-primary text-uppercase" type="button">See More</button>
                
                </Col> 
              </Row>
            </Container>
        </SwiperSlide>
        <SwiperSlide>
        <Container>
              <Row className="justify-content-md-center happy py-5">
                <Col>
                  <img src={require("../../../../assets/images/news6.webp")} alt=""/>
                </Col>
                <Col className='d-flex align-items-end happy'>
                <h1 className='text-start text-capitalize lh-base font'>glossary of packaging terms</h1>
                     <button class="btn btn-primary text-uppercase" type="button">See More</button>
                
                </Col> 
              </Row>
            </Container>
        </SwiperSlide>
        <SwiperSlide>
        <Container>
              <Row className="justify-content-md-center happy py-5">

                <Col>
                  <img src={require("../../../../assets/images/news7.webp")} alt=""/>
                </Col>
                <Col className='d-flex align-items-end happy'>

                <h1 className='text-start text-capitalize lh-base font'>what we've learnt on our<br/>packaging journey</h1>
                     <button class="btn btn-primary text-uppercase" type="button">See More</button>
                
                </Col> 
              </Row>
            </Container>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
}
export default News;
