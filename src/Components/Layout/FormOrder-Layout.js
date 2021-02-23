import React from 'react';
import Menu from '../Other/Menu';
import Footer from '../Other/Footer';
import FormOrden from '../../Containers/FormOrder-container';
import JumboOrder from '../Other/Jumbo-Order';

export default function HomeLayout(props) {
    return (
        <div>
            <Menu />

            <JumboOrder />
            <div className="Order">
                <FormOrden id={props.match.params.id} />
            </div>
            <Footer />
        </div>
    )
}