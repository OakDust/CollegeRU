import React from 'react';
import Navbar from "../components/nav/Navbar.jsx";
import Footer from "../components/footer/Footer.jsx";
import AboutOpenness from '../components/aboutOpenness/AboutOpenness.jsx';


const Openness = (props) => {
    const title = props.title
    document.title = title;
    
    return( 

        <div>
            <Navbar/>
            <AboutOpenness/>
            <Footer/>
        </div>
    );
}
export default Openness;