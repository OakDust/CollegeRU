import React from 'react';
import Navbar from "../components/nav/Navbar.jsx";
import Footer from "../components/footer/Footer.jsx";
import AboutLicense from '../components/aboutLicense/AboutLicense.jsx';


const License = (props) => {
    const title = props.title
    document.title = title;
    
    return( 

        <div>
            <Navbar/>
            <AboutLicense/>
            <Footer/>
        </div>
    );
}
export default License;