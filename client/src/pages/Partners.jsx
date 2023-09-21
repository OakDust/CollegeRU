import React from 'react';
import Navbar from "../components/nav/Navbar.jsx";
import Footer from "../components/footer/Footer.jsx";
import AboutPartners from '../components/aboutPartners/AboutPartners.jsx';


const Partners = (props) => {
    const title = props.title
    document.title = title;
    
    return( 

        <div>
            <Navbar/>
            <AboutPartners/>
            <Footer/>
        </div>
    );
}
export default Partners;