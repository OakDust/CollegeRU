import React from 'react';
import Navbar from "../components/nav/Navbar.jsx";
import Footer from "../components/footer/Footer.jsx";
import AboutTechSupport from "../components/aboutTechSupport/aboutTechSupport.jsx";


const aboutTechSupport = (props) => {
    const title = props.title
    document.title = title;
    return( 

        <div>
        <Navbar/>
        <AboutTechSupport/>
        <Footer/>
        </div>
    );
}
export default aboutTechSupport;