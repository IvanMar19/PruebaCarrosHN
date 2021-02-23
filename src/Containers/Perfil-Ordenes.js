import React, { useState, useEffect } from 'react';
import axios from '../Axios-Data';
// import {auth} from '../firebaseconfig';
import OrdenesCard from './Ordenes';

export default function PerfilOrdenes(props) {
    let [ordenes, setOrdenes] = useState([]);

    useEffect(() => {
        axios.get("Ordenes.json").then((response)=>{
            let FilteredOrders = [];

            if(response.data != null) {
                Object.entries(response.data).filter(([key,value])=>value.UserID === props.UserID).forEach(([key,value]) => {
                    FilteredOrders.push({
                        id:key,
                        FechaOrden: value.FechaOrden,
                        Carro: value.Carro,
                        CarroCapacidad: value.CarroCapacidad,
                        Nombre: value.Nombre + " " + value.Apellido,
                        Cedula: value.Cedula,
                        Telefono: value.Telefono,
                        Correo: value.Correo,
                        FechaEntrega: value.FechaEntrega,
                        FechaDevolucion: value.FechaDevolucion,
                        LugarRecogida: value.LugarRecogida,
                        Total: value.Total,


                    });
                });
            }setOrdenes(FilteredOrders);
        }
        )
    })



    let Ord = ordenes.map((ord) => (
        <OrdenesCard 
        FechaOrden={ord.FechaOrden}
        Carro = {ord.Carro}
        CarroCapacidad={ord.CarroCapacidad}
        Nombre={ord.Nombre}
        Cedula={ord.Cedula}
        Telefono={ord.Telefono}
        Correo={ord.Correo}
        FechaEntrega={ord.FechaEntrega}
        FechaDevolucion={ord.FechaDevolucion}
        LugarRecogida = {ord.LugarRecogida}
        Total = {ord.Total}
        />

    ));

    return(
        <div>
            {Ord}
        </div>
    )
}