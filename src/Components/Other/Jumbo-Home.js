import React from 'react';
import Jumbrotron from 'react-bootstrap/Jumbotron';
import { Container } from 'react-bootstrap';
import '../../App.css';

export default function HeaderCarros() {
    return (
        <div>
            <Container>
                <Jumbrotron>
                    <h1>Vehiculos Disponibles</h1>
                    <p>
                        Busca ofertas de autos de alquiler en Ciudad de Panamá.
                    </p>
                </Jumbrotron>
            </Container>
        </div>
    )
} 