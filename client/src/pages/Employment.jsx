import React from 'react';
import Navbar from "../components/nav/Navbar.jsx";
import Footer from "../components/footer/Footer.jsx";
import Employment from '../components/employment/employment.jsx';

const employment = (props) => {
    const title = props.title
    document.title = title;
    return( 

        <div>
        <Navbar/>
        <Employment/>
        <Footer/>
        </div>
    );
}
export default employment;