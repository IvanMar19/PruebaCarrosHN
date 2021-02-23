import React from 'react';
import Menu from '../Other/Menu';
import Footer from '../Other/Footer';
import Login from '../../Containers/Login-Container';

export default function LoginLayout(props) {
    return(
        <div>
            <Menu/>
            <h1>Login</h1>
            <Login history={props.history}/>
            <Footer/>
        </div>
    )
}