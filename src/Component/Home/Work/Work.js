import React from 'react';
import { Carousel } from 'react-bootstrap';
import carousel1 from '../../../images/carousel-1.png';
import carousel2 from '../../../images/carousel-2.png';
import carousel3 from '../../../images/carousel-4.png';
import carousel4 from '../../../images/carousel-5.png';




const Work = () => {
    return (
        <section className="mt-4 mb-4" style={{backgroundColor: "#111330", height: "600px"}}>
            <h2 className="pt-4" style={{color: "white", textAlign: "center"}}>Here Are Some of <span style={{color: "olivedrab"}}>Our Works</span></h2>
            <Carousel className="mx-auto mt-4" style={{height: "340px", width: "40%"}}>
                <Carousel.Item>
                    <img className="d-block w-100" style={{height: "340px", width: "40%"}} src={carousel1}alt="First slide"/>
                    
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" style={{height: "340px", width: "40%"}} src={carousel2} alt="second slide"/> 
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" style={{height: "340px", width: "40%"}} src={carousel3} alt="fourth slide"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" style={{height: "340px", width: "40%"}} src={carousel4} alt="Fifth slide"/>
                </Carousel.Item>
            </Carousel>

        </section>
        
    );
};

export default Work;