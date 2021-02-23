import React from "react";
import '../../App.css'
import { Card, Button, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function HomeTop() {


    return (
        <Container>

            <div style={{ paddingTop: '10%',}}>
                <Card style={{ width: '100%', height: 'auto', }}>
                    <Card.Body>
                        <Card.Title style={{ fontWeight: 'bold', fontSize: 40 }}>Renta de autos en Panamá</Card.Title>
                        <Card.Text style={{ fontSize: 20 }}>
                            Busca ofertas de autos de alquiler en Panamá
                    </Card.Text>
                        <Button as={NavLink} to={"/Vehiculos"}>Ver autos</Button>
                    </Card.Body>
                </Card>
            </div>
        </Container>

    )
}