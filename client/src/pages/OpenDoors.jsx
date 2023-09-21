import React from 'react';
import Navbar from "../components/nav/Navbar.jsx";
import Footer from "../components/footer/Footer.jsx";
import AbiOpenDoors from '../components/abiOpenDoors/abiOpenDoors.jsx';

const OpenDoors = (props) => {
    const title = props.title
    document.title = title;
    return( 

        <div>
        <Navbar/>
        <AbiOpenDoors/>
        <Footer/>
        </div>
    );
}
export default OpenDoors;