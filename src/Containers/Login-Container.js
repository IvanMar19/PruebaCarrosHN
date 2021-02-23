import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { auth } from '../firebaseconfig';
import { NavLink } from 'react-router-dom';

export default function LoginContainer(props) {

    let [user, setUser] = useState("");
    let [pass, setPass] = useState("");

    const login = () => {
        auth.signInWithEmailAndPassword(user, pass)
            .then((r) =>{ 
                console.log(r);
                window.location.assign("/")
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const handleChangeUser = (e) => {
        setUser(e.target.value);
    }

    const handleChangePass = (e) => {
        setPass(e.target.value);
    }

    return (
        <Container>
            <Row>
                <Col />
                <Col>
                    <Form>
                        <Form.Group controlId="formUser">
                            <Form.Control type="email" placeholder="Introduzca correo" value={user} onChange={handleChangeUser} />
                        </Form.Group>

                        <Form.Group controlId="formPass">
                            <Form.Control type="password" placeholder="Contraseña" value={pass} onChange={handleChangePass} />
                        </Form.Group>
                        <Button block variant="success" onClick={login}>
                            Iniciar Sesión
                    </Button>
                    </Form>
                    <Button block variant="dark" as={NavLink} to="/SignIn" style={{marginTop: 10}}>
                        Registrarse
                    </Button>
                </Col>
                <Col />

            </Row>

        </Container>

    )
}