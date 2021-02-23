import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { auth } from '../firebaseconfig';
import axios from '../Axios-Data';

export default function SigInContainer(props) {

    let [user, setUser] = useState("");
    let [pass, setPass] = useState("");
    let [pass2, setPass2] = useState("");

    const signIn = (e) => {

        const data = {
            correo: user,
        }

        e.preventDefault()

        if (pass === pass2) {

            try {
                auth.createUserWithEmailAndPassword(user, pass).then(() => {

                    axios.post('/IDS.json', data)
                        .then(response => {
                            alert("Usuario registrado");
                            window.location.assign("/")
                        })
                        .catch((err)=>{
                            console.log(err);
                        });
                }

                );

            } catch (e) {
                console.log(e);
            }

        }
        if (pass !== pass2) {
            alert("Contraseñas no concuerdan");
        }
    }

    const handleChangeUser = (e) => {
        setUser(e.target.value);
    }

    const handleChangePass = (e) => {
        setPass(e.target.value);
    }


    const handleChangePass2 = (e) => {
        setPass2(e.target.value);
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

                        <Form.Group controlId="formPass2">
                            <Form.Control type="password" placeholder="Confirme contraseña" value={pass2} onChange={handleChangePass2} />
                        </Form.Group>

                        <Button block variant="primary" onClick={signIn}>
                            Registrarse
                        </Button>
                    </Form>
                </Col>
                <Col />
            </Row>

        </Container>

    )
}