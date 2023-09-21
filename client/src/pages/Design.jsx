import React from 'react';
import Navbar from "../components/nav/Navbar.jsx";
import Footer from "../components/footer/Footer.jsx";
import EduDesign from '../components/eduDesign/EduDesign.jsx';

const Design = (props) => {
    const title = props.title
    document.title = title;
    return( 

        <div>
        <Navbar/>
        <EduDesign/>
        <Footer/>
        </div>
    )
}
export default Design;