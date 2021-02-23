import React from 'react';
import { Card} from 'react-bootstrap';

export default function CarrosCard(props) {

    return (
            <Card style={{width: '100%', height: 'auto', }}>
                <img src={props.url} width="100%" height="auto" alt="carro banner" />
                <Card.Body>
                    <Card.Title>
                        {props.Carro}
                    </Card.Title>
                    <Card.Text>
                        Precio: ${props.Precio}/dia
                    </Card.Text>
                    <Card.Text>
                        Adultos: {props.Adultos}
                    </Card.Text>
                    <Card.Text>
                        Punto de recogida: {props.Recogida}
                    </Card.Text>
                </Card.Body>
            </Card>

            
    )
}