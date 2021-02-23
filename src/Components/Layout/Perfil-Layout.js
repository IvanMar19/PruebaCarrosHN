import React, { useEffect, useState } from 'react';
import Menu from '../Other/Menu';
import Footer from '../Other/Footer';
import Perfil from '../../Containers/Perfil-Container';
import { auth } from '../../firebaseconfig';
import axios from '../../Axios-Data';
import PerfilOrdenes from '../../Containers/Perfil-Ordenes';

export default function PerfilLayout(props) {

    const [usuario, setUsuario] = useState(null);
    let [userID, setUserID] = useState([]);

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setUsuario(user.email);

                axios.get("/IDS.json")
                .then(response=> {

                    if(response.data !==null){
                        const userData = Object.entries(response.data).filter(([key, value]) => value.correo === user.email)[0];
                        setUserID(userData); 
                    }
                })
            }
            else {
                props.history.push("/");
            }   
        })

    })

    return(
        <div>
            <Menu/>
            <h1>Perfil</h1>
            <Perfil usuario={usuario}/>
            <h2>Historial de Ordenes</h2>
            <PerfilOrdenes UserID={userID[0]} />
            <Footer/>
        </div>
    )
}