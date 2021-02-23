import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import CarrosCardLite from './Carros-Card-Lite';
import axios from '../Axios-Data';
import { auth } from '../firebaseconfig';


export default function FormOrder(props) {

    const carID = props.id;
    let [userID, setUserID] = useState([]);

    let [nombre, setNombre] = useState("");
    let [apellido, setApellido] = useState("");
    let [cedula, setCedula] = useState("");
    let [correo, setCorreo] = useState("");
    let [telefono, setTelefono] = useState("");
    let [fechaEntrega, setFechaEntrega] = useState(new Date());
    let [fechaDevolucion, setFechaDevolucion] = useState(new Date());
    let [total, setTotal] = useState(0);
    let [cardCarro, setCardCarro] = useState("");
    let [cardPrecio, setCardPrecio] = useState(0);
    let [cardAdultos, setCardAdultos] = useState("");
    let [cardRecogida, setCardRecogida] = useState("");
    let [url, setURL] = useState("");

    const addDays = (date, days) => {
        var result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }

    useEffect(() => {
        setFechaDevolucion(addDays(fechaEntrega, 1))
    }, [])


    useEffect(() => {
        axios.get("Vehiculos/" + carID + ".json")
            .then(response => {
                if (response.data !== null) {
                    setCardCarro(response.data.Carro);
                    setCardPrecio(response.data.Precio);
                    setCardAdultos(response.data.Adultos);
                    setCardRecogida(response.data.Recogida);
                    setTotal(response.data.Precio);
                    setURL(response.data.url);
                }
            })
    }, [carID]);


    useEffect(() => {

        // let dataID = [];

        auth.onAuthStateChanged((user) => {
            if (user) {
                axios.get("/IDS.json")
                    .then(response => {
                        if (response.data !== null) {

                            const userData = Object.entries(response.data).filter(([key, value]) => value.correo === user.email)[0];
                            //console.log(userData);
                            setUserID(userData);
                        }
                    })
            }
        })

    }, [])

    const alquilar = () => {
        var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        var f = new Date();

        const dataOrden = {
            UserID: userID[0],
            Nombre: nombre,
            Apellido: apellido,
            Cedula: cedula,
            Correo: correo,
            Telefono: telefono,
            FechaEntrega: fechaEntrega.getDate() + " de " + meses[fechaEntrega.getMonth()] + " de " + fechaEntrega.getFullYear(),
            FechaDevolucion: fechaDevolucion.getDate() + " de " + meses[fechaDevolucion.getMonth()] + " de " + fechaDevolucion.getFullYear(),
            Total: total,
            Carro: cardCarro,
            CarroID: carID,
            CarroCapacidad: cardAdultos,
            LugarRecogida: cardRecogida,
            FechaOrden: f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear(),
        }

        auth.onAuthStateChanged((user) => {
            if (user) {
                axios.post("/Ordenes.json", dataOrden)
                    .then(response => {
                        alert("Orden realizada");
                        window.location.assign("/")

                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
            else {
                alert("Debe iniciar sesión para realizar una orden.")
            }
        })


    }

    const handleChangeNombre = (e) => {
        setNombre(e.target.value);
    }
    const handleChangeApellido = (e) => {
        setApellido(e.target.value);
    }
    const handleChangeCedula = (e) => {
        setCedula(e.target.value);
    }
    const handleChangeCorreo = (e) => {
        setCorreo(e.target.value);
    }
    const handleChangeTelefono = (e) => {
        setTelefono(e.target.value);
    }

    const handleChangeFechaEntrega = (date) => {

        setFechaEntrega(date);

        const dif1 = fechaDevolucion.getTime() - date.getTime();
        const dif2 = Math.ceil(dif1 / (1000 * 3600 * 24));
        if (dif2 >= 0) {
            setTotal(dif2 * cardPrecio)
        }

    }

    const handleChangeFechaDevolucion = (date) => {
        setFechaDevolucion(date);

        const dif1 = date.getTime() - fechaEntrega.getTime();
        const dif2 = Math.ceil(dif1 / (1000 * 3600 * 24));
        if (dif2 >= 0) {
            setTotal(dif2 * cardPrecio)
        }

    }

    return (
        <Container>
            <Row>
                <Col>
                    <CarrosCardLite Carro={cardCarro} Precio={cardPrecio} Adultos={cardAdultos} Recogida={cardRecogida} url={url} />
                </Col>
                <Col sm={8}>
                    <Form>
                        <Form.Group as={Row} controlId="formHorizontalNombre">
                            <Form.Label column sm={2}>Nombre(s)</Form.Label>
                            <Col sm={10}><Form.Control value={nombre} onChange={handleChangeNombre} /></Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formHorizontalApellido">
                            <Form.Label column sm={2}>Apellido(s)</Form.Label>
                            <Col sm={10}><Form.Control value={apellido} onChange={handleChangeApellido} /></Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formHorizontalCedula">
                            <Form.Label column sm={2}>Cedula</Form.Label>
                            <Col sm={10}><Form.Control value={cedula} onChange={handleChangeCedula} /></Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formHorizontalCorreo">
                            <Form.Label column sm={2}>Correo</Form.Label>
                            <Col sm={10}><Form.Control value={correo} onChange={handleChangeCorreo} /></Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formHorizontalTelefono">
                            <Form.Label column sm={2}>Telefono</Form.Label>
                            <Col sm={10}><Form.Control value={telefono} onChange={handleChangeTelefono} /></Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formHorizontalFechaRecogida">
                            <Form.Label column sm={2}>Fecha (Recogida)</Form.Label>
                            <Col>
                                <Form.Control as={DatePicker} minDate={new Date()} selected={fechaEntrega}
                                    onChange={date => handleChangeFechaEntrega(date)} />
                            </Col>
                            <Form.Label column sm={2}>Fecha (Devolución)</Form.Label>
                            <Col>
                                <Form.Control as={DatePicker} minDate={addDays(fechaEntrega, 1)} selected={fechaDevolucion}
                                    onChange={date => { handleChangeFechaDevolucion(date) }} />
                            </Col>

                        </Form.Group>

                        <Form.Group as={Row}>
                            <Form.Label column sm={2}>Precio Total: </Form.Label>
                            <Col sm={5}>
                                <Form.Control value={"$"+total} readOnly />
                            </Col>
                        </Form.Group>
                            <Button block onClick={alquilar}>
                                Aceptar
                            </Button>
                    </Form>
                </Col>
            </Row>


        </Container>
    )
}