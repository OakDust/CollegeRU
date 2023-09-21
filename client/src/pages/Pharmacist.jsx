import React from 'react';
import Navbar from "../components/nav/Navbar.jsx";
import Footer from "../components/footer/Footer.jsx";
import EduPharmacist from '../components/eduPharmacist/EduPharmacist.jsx';

const Pharmacist = (props) => {
    const title = props.title
    document.title = title;
    return( 

        <div>
        <Navbar/>
        <EduPharmacist/>
        <Footer/>
        </div>
    )
}
export default Pharmacist;