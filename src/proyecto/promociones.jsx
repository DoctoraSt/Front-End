import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import promos from '../CSS/images/promos.png';
import switcho from '../CSS/images/switcho.png';
import laptop from '../CSS/images/laptop2.png';
import '../CSS/promociones.css';

function Promociones() {
    return (
        <Carousel>
            <Carousel.Item>
                <Image src={promos} alt="Promociones" fluid />
                <Carousel.Caption>
                    <h3>¡Mira nuestros descuentos!</h3>
                    <p class="promo">En este buen fin, no olvides revisar todas nuestras promociones disponibles</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src={switcho} alt="Promoción celulares" fluid />
                <Carousel.Caption>
                    <h3>Revisa nuestra sección de electrónica</h3>
                    <p class="promo">¡Todo lo que bucas para tu hogar!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Image src={laptop} alt="Promoción computadores" fluid />
                <Carousel.Caption>
                    <h3>Para una navidad espectacular</h3>
                    <p class="promo">Un regalo no se le niega a nadie, ¿Cierto?</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Promociones;
