import React from 'react';
import Menu from '../Other/Menu';
import Footer from '../Other/Footer';
import Header from '../Other/Header';
import MultiCard from '../../Containers/Multi-Card';
import JumboHome from '../Other/Jumbo-Home';

export default function HomeLayout(props) {
    return(
        <div>
            <Menu/>
            <Header/>
            <JumboHome />
            <MultiCard />
            <Footer/>
        </div>
    )
}