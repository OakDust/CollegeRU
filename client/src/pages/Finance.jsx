import React from 'react';
import Navbar from "../components/nav/Navbar.jsx";
import Footer from "../components/footer/Footer.jsx";
import AboutFinance from '../components/aboutFinance/AboutFinance.jsx';


const Finance = (props) => {
    const title = props.title
    document.title = title;
    return( 

        <div>
        <Navbar/>
        <AboutFinance/>
        <Footer/>
        </div>
    )
}
export default Finance;