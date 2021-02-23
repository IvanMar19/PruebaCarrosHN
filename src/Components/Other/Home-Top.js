import React from "react";
import '../../App.css'
import { Col, Card, Button } from 'react-bootstrap';
// import {NavLink} from 'react-router-dom';

export default function HomeTop() {

    const goCar = () => {
        window.location.assign("/Vehiculos")
    }

    return (
        <div>
            <Col style={{paddingTop: '5%'}}>
                <Card style={{ width: '35%', height: '20%'}}>
                    <Card.Body>
                        <Card.Title style={{ fontWeight:'bold', fontSize: 40}}>Renta de autos en Panamá</Card.Title>
                        <Card.Text style={{ fontSize: 20}}>
                            Busca ofertas de autos de alquiler en Panamá
                        </Card.Text>
                        <Button onClick={goCar}>Ver autos</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    )
}