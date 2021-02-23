import React from 'react';
// import Jumbrotron from 'react-bootstrap/Jumbotron';
// import Button from 'react-bootstrap/Button';
//import Image from 'react-bootstrap/Image';
import '../../App.css';
import HomeTop from './Home-Top';
// import { Col, Row } from 'react-bootstrap';
export default function Header() {
    return (
        <div>
            {/* <img src="car-header.jpg" width="100%" height="auto" alt="carro banner"/> */}
            <div className="Header-Image">
                <HomeTop />
            </div>
        </div>
    )
} 