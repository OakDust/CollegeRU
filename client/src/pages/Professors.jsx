import React from 'react';
import Navbar from "../components/nav/Navbar.jsx";
import Footer from "../components/footer/Footer.jsx";
import AboutProfessors from '../components/aboutProfessors/aboutProfessors.jsx';

const aboutProfessors = (props) => {
    const title = props.title
    document.title = title;
    return( 

        <div>
        <Navbar/>
        <AboutProfessors/>
        <Footer/>
        </div>
    );
}
export default aboutProfessors;