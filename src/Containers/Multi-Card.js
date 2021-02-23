import React, { useState, useEffect } from 'react';
import axios from '../Axios-Data';
import CarrosCard from './Carros-Card';

export default function MetaCard(props) {
    let [card, setCard] = useState([]);

    useEffect(() => {
        axios.get("Vehiculos.json")
            .then(response => {
                let dataCarros = [];
                if (response.data !== null) {
                    Object.entries(response.data).forEach(([key, value]) => {
                        dataCarros.push({
                            id: key,
                            Carro: value.Carro,
                            Adultos: value.Adultos,
                            Recogida: value.Recogida,
                            Precio: value.Precio,
                            url: value.url,
                        });
                    });
                    setCard(dataCarros);
                }
            })
    }, []);

    let Meta = card.map((meta) => (
        <div class="col">
            <CarrosCard Carro={meta.Carro}
                Precio={meta.Precio}
                Adultos={meta.Adultos}
                id={meta.id}
                Recogida={meta.Recogida}
                url={meta.url}
            />
        </div>

    ));

    return (
        <div class="container">
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {Meta}
            </div>
        </div>
    )
}