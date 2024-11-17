import React from 'react';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Banorte from '../CSS/images/tarjetas/banorte.png';
import Afirme from '../CSS/images/tarjetas/afirme.png';
import Banamex from '../CSS/images/tarjetas/citibanamex.png';
import BBVA from '../CSS/images/tarjetas/BBVA.png';
import { ButtonGroup } from 'react-bootstrap';


function MisTarjetas() {
    return (
        <Carousel data-bs-theme="dark">
        <Carousel.Item>
            <Card bg='light'  text='black'>
                <Card.Img src={Banorte}/>
                <Card.Body>
                    <Card.Title>Tarjeta débito Banorte</Card.Title>
                    <Button className='coustome-link'>Usar</Button>
                </Card.Body>
            </Card>
        </Carousel.Item>
        <Carousel.Item>
            <Card bg='light'  text='black'>
                <Card.Img variant="top" src={BBVA} />
                <Card.Body>
                    <Card.Title>Tarjeta de débito BBVA</Card.Title>
                    <Button className='coustome-link'>Usar</Button>
                </Card.Body>
            </Card>
        </Carousel.Item>
        <Carousel.Item>
            <Card bg='light'  text='black'>
                <Card.Img variant="top" src={Afirme} />
                <Card.Body>
                    <Card.Title>Tarjeta débito Afirme</Card.Title>
                    <Button className='coustome-link'>Usar</Button>
                </Card.Body>
            </Card>
        </Carousel.Item>
        <Carousel.Item>
            <Card bg='light'  text='black'>
                <Card.Img variant="top" src={Banamex} />
                <Card.Body>
                    <Card.Title>Tarjeta débito CitiBanamex</Card.Title>
                    <Button className='coustome-link'>Usar</Button>
                </Card.Body>
            </Card>
        </Carousel.Item>
        </Carousel>
    );
}

export default MisTarjetas;