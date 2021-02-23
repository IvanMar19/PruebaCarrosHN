import React from 'react';
import { Card, Button} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

export default function CarrosCard(props) {

    return (
            <Card style={{ width: '18rem', marginBottom: 30 }}>
                <img src={props.url} width="100%" height="auto" alt="carro banner" />
                {/* <Card.Img variant="top" src={CarImage} /> */}
                <Card.Body>
                    <Card.Title>
                        {props.Carro}
                    </Card.Title>
                    <Card.Text>
                        Precio: ${props.Precio}/dia
                    </Card.Text>
                    <Card.Text>
                        Adultos: {props.Adultos}
                    </Card.Text>
                    <Card.Text>
                        Punto de recogida: {props.Recogida}
                    </Card.Text>
                    <Button variant="primary" as={NavLink} to={ "/Orden/"+props.id} >Ver Oferta</Button>
                </Card.Body>
            </Card>

            
    )
}