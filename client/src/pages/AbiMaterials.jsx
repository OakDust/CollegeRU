import React from 'react';
import Navbar from "../components/nav/Navbar.jsx";
import Footer from "../components/footer/Footer.jsx";
import AbiMaterials from '../components/abiMaterials/abiMaterials.jsx';

const abiMaterials = (props) => {
    const title = props.title
    document.title = title;
    return( 

        <div>
        <Navbar/>
        <AbiMaterials/>
        <Footer/>
        </div>
    );
}
export default abiMaterials;