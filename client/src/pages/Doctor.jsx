import React from 'react';
import Navbar from "../components/nav/Navbar.jsx";
import Footer from "../components/footer/Footer.jsx";
import EduDoctor from '../components/eduDoctor/EduDoctor.jsx';

const Doctor = (props) => {
    const title = props.title
    document.title = title;
    return( 

        <div>
        <Navbar/>
        <EduDoctor/>
        <Footer/>
        </div>
    )
}
export default Doctor;