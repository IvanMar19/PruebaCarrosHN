import React from 'react';
import Menu from '../Other/Menu';
import Footer from '../Other/Footer';
import CarrosMeta from '../../Containers/Multi-Card';
import HeaderCarros from '../Other/Header-Carros';

export default function CarrosLayout(props) {
    return (
        <div>

            <Menu />
            <HeaderCarros/>
            <CarrosMeta />
            <Footer />
        </div>
    )
}