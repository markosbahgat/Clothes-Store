import React, { Component } from 'react';
import logo from './Images/slide.png';
import logo1 from './Images/slide1.png';
import logo2 from './Images/slide2.png';
import { Carousel , Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "animate.css";
import './App.css';


class Slide extends Component {
    state = {  }
    render() { 
        return ( 
          <div >
          <Carousel fade variant="dark">
          <Carousel.Item interval={5000}>
            <img style={{height:"46.5vw"}}
              className="d-block w-100"
              src={logo}
              alt="First slide"
            />
            <Carousel.Caption style={{color:"black", position:"absolute", top:"35%", left:"15%"}} className="w-50 text-start">
              <h3 style={{fontFamily: "Poppins", fontSize: "28px", lineHeight: "1.2857", color: "#333", fontWeight: "400"}} className="animate__animated animate__rollIn">Woman Collections 2021</h3>
              <p style={{fontFamily: "PlayfairDisplay", fontSize: "80px", fontWeight:"700", lineHeight: "1.2857", color: "#333", textTransform:"uppercase",}} className="animate__animated animate__lightSpeedInRight animate__delay-1s">New Season</p>
              <Button className="btn btn-primary rounded-pill ps-3 pe-3 fs-5 w-25 pt-2 pb-2 animate__animated animate__bounceInUp" style={{fontFamily: "Poppins"}}>Shop Now</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img style={{height:"46.5vw"}}
              className="d-block w-100"
              src={logo1}
              alt="Second slide"
            />
        
            <Carousel.Caption style={{color:"black", position:"absolute", top:"35%", left:"15%"}} className="w-50 text-start">
              <h3 style={{fontFamily: "Poppins", fontSize: "28px", lineHeight: "1.2857", color: "#333", fontWeight: "400"}} className="animate__animated animate__rollIn">Men New-Season</h3>
              <p style={{fontFamily: "PlayfairDisplay", fontSize: "60px", fontWeight:"700", lineHeight: "1.2857", color: "#333", textTransform:"uppercase",}} className="animate__animated animate__lightSpeedInRight animate__delay-1s">Jackets & Coats</p>
              <Button className="btn btn-primary rounded-pill ps-3 pe-3 fs-5 w-25 pt-2 pb-2 animate__animated animate__bounceInUp" style={{fontFamily: "Poppins"}}>Shop Now</Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item  interval={1000}>
            <img style={{height:"46.5vw"}}
              className="d-block w-100 me-5"
              src={logo2}
              alt="Third slide"
            />
        
            <Carousel.Caption style={{color:"black", position:"absolute", top:"35%", left:"15%"}} className="w-50 text-start">
              <h3 style={{fontFamily: "Poppins", fontSize: "28px", lineHeight: "1.2857", color: "#333", fontWeight: "400"}} className="animate__animated animate__rollIn">Men Collections 2021</h3>
              <p style={{fontFamily: "PlayfairDisplay", fontSize: "70px", fontWeight:"700", lineHeight: "1.2857", color: "#333", textTransform:"uppercase",}} className="animate__animated animate__lightSpeedInRight animate__delay-1s">New Arrivals</p>
              <Button className="btn btn-primary rounded-pill ps-3 pe-3 fs-5 w-25 pt-2 pb-2 animate__animated animate__bounceInUp" style={{fontFamily: "Poppins"}}>Shop Now</Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
         );
    }
}
 
export default Slide;