
import React, { useEffect, useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import {NavLink} from 'react-router-dom';
import { auth } from '../../firebaseconfig';

export default function Menu(props) {

    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setUsuario(user.email)
            }
        })


    }, [])

    const LogOut = () => {
        auth.signOut();
        setUsuario(null);

    }


    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand as={NavLink} to="/">
                    <img
                        src="/Logo.png"
                        width="auto"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />{' '}
                    HyperNova Cars
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/Vehiculos">Carros</Nav.Link>
                    </Nav>
                    <Form inline>
                        {usuario !== null ?
                            (
                                <NavDropdown title={usuario} id="basic-nav-dropdown">
                                    <NavDropdown.Item as={NavLink} to="/Perfil">Perfil</NavDropdown.Item>
                                    <NavDropdown.Item onClick={LogOut}>Cerrar Sesion</NavDropdown.Item>
                                </NavDropdown>
                            )
                            :
                            (<Nav.Link as={NavLink} to="/Login">Login</Nav.Link>)
                        }
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>

    )

}