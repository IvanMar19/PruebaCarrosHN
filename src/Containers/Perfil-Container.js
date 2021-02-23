import React from 'react';
import { Container, Form, Row, Col } from 'react-bootstrap';
// import { auth } from '../firebaseconfig';
// import axios from '../Axios-Data';
// import MultiCard from './Multi-Card';

export default function Perfil(props) {

    return (
        <Container>
                <Form>
                    <Form.Group as={Row}>
                        <Form.Label column sm={2}>Correo </Form.Label>
                        <Col sm={10}><Form.Control readOnly value={props.usuario} /></Col>
                    </Form.Group>
                </Form>
        </Container>
    )
}