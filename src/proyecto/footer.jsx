import React from "react";
import {Card, CardBody, CardHeader} from "react-bootstrap";

function Footer(){
    return(
        <Card bg="secondary" text="white">
            <CardHeader>Proyecto de programación web ll</CardHeader>
            <CardBody>
                <Card.Title>Integrantes del equipo:</Card.Title>
                <Card.Text>
                    Michelle Annahy Leal Flores
                    Dharma Nirvana Sandoval Sanchez
                    Raul Lopez Cavazos
                    Juan Jose Pierluisi Nagaya
                </Card.Text>
                <Card.Text>
                    Shopping list 2024
                </Card.Text>
            </CardBody>
        </Card>
    );
}

export default Footer;