import React from "react";
import '../../App.css'
import { Col, Card, Button } from 'react-bootstrap';

export default function HomeTop() {
    return (
        <div>
            <Col style={{paddingTop: '5%'}}>
                <Card style={{ width: '35%', height: '20%'}}>
                    <Card.Body>
                        <Card.Title style={{ fontWeight:'bold', fontSize: 40}}>Renta de autos en Panamá</Card.Title>
                        <Card.Text style={{ fontSize: 20}}>
                            Busca ofertas de autos de alquiler en Panamá
                        </Card.Text>
                        <Button as={Card.Link} href="/Vehiculos">Ver autos</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    )
}