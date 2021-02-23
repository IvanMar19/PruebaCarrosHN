import React from 'react';
import { Accordion, Card, Button, Container, Form, Col, Row } from 'react-bootstrap';


export default function Anotacion(props) {

    return (
        <Container className="text-center text-md-left">
            <Accordion>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            {props.Carro} ({props.FechaOrden})  
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Form>
                                <Form.Group  as={Row}>
                                    <Form.Label column sm={2}>Nombre: </Form.Label>
                                    <Col sm={10}><Form.Control readOnly value={props.Nombre} /></Col>
                                </Form.Group>
                                <Form.Group  as={Row}>
                                    <Form.Label column sm={2}>Cedula: </Form.Label>
                                    <Col sm={10}><Form.Control readOnly value={props.Cedula} /></Col>
                                </Form.Group>
                                <Form.Group  as={Row}>
                                    <Form.Label column sm={2}>Telefono: </Form.Label>
                                    <Col sm={10}><Form.Control readOnly value={props.Telefono} /></Col>
                                </Form.Group>
                                <Form.Group  as={Row}>
                                    <Form.Label column sm={2}>Correo: </Form.Label>
                                    <Col sm={10}><Form.Control readOnly value={props.Correo} /></Col>
                                </Form.Group>
                                <Form.Group  as={Row}>
                                    <Form.Label column sm={2}>Fecha de entrega: </Form.Label>
                                    <Col sm={10}><Form.Control readOnly value={props.FechaEntrega} /></Col>
                                </Form.Group>
                                <Form.Group  as={Row}>
                                    <Form.Label column sm={2}>Fecha de devolucion: </Form.Label>
                                    <Col sm={10}><Form.Control readOnly value={props.FechaDevolucion} /></Col>
                                </Form.Group>
                                <Form.Group  as={Row}>
                                    <Form.Label column sm={2}>Lugar de Recogida: </Form.Label>
                                    <Col sm={10}><Form.Control readOnly value={props.LugarRecogida} /></Col>
                                </Form.Group>
                                <Form.Group  as={Row}>
                                    <Form.Label column sm={2}>Total:  </Form.Label>
                                    <Col sm={10}><Form.Control readOnly value={"$"+props.Total} /></Col>
                                </Form.Group>
                            </Form>
                        </Card.Body>

                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </Container>

    )
}