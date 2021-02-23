import React from 'react';
import Menu from '../Other/Menu';
import Footer from '../Other/Footer';
import SignIn from '../../Containers/SignIn-Container';

export default function SignInLayout(props) {
    return(
        <div>
            <Menu/>
            <h1>Crear cuenta</h1>
            <SignIn history={props.history} />
            <Footer/>
        </div>
    )
}