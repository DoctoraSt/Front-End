import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

// Importa las imágenes directamente
import promos from '../CSS/images/promos.png';
import switcho from '../CSS/images/switcho.png';
import laptop from '../CSS/images/laptop2.png';

function Promociones() {
    return (
        <Carousel>
            <Carousel.Item>
                <Image src={promos} alt="Promociones" fluid />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src={switcho} alt="Promoción celulares" fluid />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src={laptop} alt="Promoción computadores" fluid />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Promociones;
