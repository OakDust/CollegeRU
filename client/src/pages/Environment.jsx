import React from 'react';
import Navbar from "../components/nav/Navbar.jsx";
import Footer from "../components/footer/Footer.jsx";
import AboutEnvironment from '../components/aboutEnvironment/AboutEnvironment.jsx';

const Environment = (props) => {
    const title = props.title
    document.title = title;
    return( 

        <div>
        <Navbar/>
        <AboutEnvironment/>
        <Footer/>
        </div>
    );
}
export default Environment;