import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import '../CSS/avanzada.css';
import Row from 'react-bootstrap/Row';

function BusquedaAvan() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
    }

    setValidated(true);
    };

    return (
    <div className='contenedor-avan'>
        <h2>Búsqueda avanzada</h2>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label id='producto'>Nombre producto</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="Nombre de producto"
                    defaultValue="Fabuloso"
                />
                <Form.Control.Feedback>Completo</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label id='precio'>Precio</Form.Label>
                <Form.Control
                    required
                    type="number"
                    placeholder="Precio"
                    defaultValue="20"
                />
                <Form.Control.Feedback>Completo</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label id='categoria'>Categoría</Form.Label>
                <Form.Control
                    required
                    type="text"
                    placeholder="Categoría"
                    defaultValue="Limpieza"
                />
                <Form.Control.Feedback>Completo</Form.Control.Feedback>
            </Form.Group>
            <div className='boton'>
            <Button type="submit" className='coustome-link'>Buscar</Button>
            </div>
            </Row>
        </Form>
        <div>
            <h2>Resultados:</h2>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>Nombre producto</Form.Label>
                <Form.Control
                    placeholder="Nombre de producto"
                    readOnly
                />
                <Form.Control.Feedback>Completo</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Precio</Form.Label>
                <Form.Control
                    placeholder='Precio'
                    readOnly
                />
                <Form.Control.Feedback>Completo</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>Categoría</Form.Label>
                <Form.Control
                    placeholder="Categoría"
                    readOnly
                />
                <Form.Control.Feedback>Completo</Form.Control.Feedback>
            </Form.Group>
            <div className='boton'>
            <Button type="submit" className='coustome-link'>Aceptar</Button>
            </div>
            </Row>
        </Form>
        </div>
    </div>
    );
}

export default BusquedaAvan;