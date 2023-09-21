import React from 'react';
import Navbar from "../components/nav/Navbar.jsx";
import Footer from "../components/footer/Footer.jsx";
import AbiReception from '../components/abiReception/abiReception.jsx';

const Reception = (props) => {
    const title = props.title
    document.title = title;
    return( 

        <div>
        <Navbar/>
        <AbiReception/>
        <Footer/>
        </div>
    )
}
export default Reception;