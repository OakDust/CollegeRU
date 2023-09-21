import React from 'react';
import Navbar from "../components/nav/Navbar.jsx";
import Footer from "../components/footer/Footer.jsx";
import AboutPaidService from "../components/aboutPaidService/aboutPaidService.jsx";


const aboutPaidService = (props) => {
    const title = props.title
    document.title = title;
    return( 

        <div>
        <Navbar/>
        <AboutPaidService/>
        <Footer/>
        </div>
    );
}
export default aboutPaidService;