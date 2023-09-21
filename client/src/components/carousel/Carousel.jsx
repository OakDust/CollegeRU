import React, { useEffect, useState } from 'react';
import carousel1 from '../../../public/images/carouselImages/slide1.png'
import carousel2 from '../../../public/images/carouselImages/slide2.png'
import carousel3 from '../../../public/images/carouselImages/slide3.png'
import Carousel from 'react-bootstrap/Carousel';


function CarouselComponent() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    }

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} interval="3000" pause={false}>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={carousel1}
            alt="First slide"
            />

        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={carousel2}
            alt="Second slide"
            />

        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={carousel3}
            alt="Third slide"
            />
        </Carousel.Item>
        </Carousel>
    );
}


export default CarouselComponent;
