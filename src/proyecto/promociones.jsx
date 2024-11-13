import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Promo from '../CSS/images/promos.png';
import Switch from '../CSS/images/switcho.png';
import laptop from '../CSS/images/laptop2.png';

function promociones() {
    return (
    <Carousel>
        <Carousel.Item>
            <img src={Promo} alt="Promociones"/>
        <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img src={Switch} alt="Promoción celulares"/>
        <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={laptop} alt="Promoción computadores"/>
        <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
        </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    );
}

export default promociones;