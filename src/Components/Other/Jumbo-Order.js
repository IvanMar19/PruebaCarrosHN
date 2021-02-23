import React from 'react';
import Jumbrotron from 'react-bootstrap/Jumbotron';
import { Container } from 'react-bootstrap';
import '../../App.css';

export default function HeaderCarros() {
    return (
        <div>
            <Container>
                <Jumbrotron>
                    <h1>Orden de alquiler</h1>
                </Jumbrotron>
            </Container>
        </div>
    )
} 