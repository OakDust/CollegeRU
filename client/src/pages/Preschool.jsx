import React from 'react';
import Navbar from "../components/nav/Navbar.jsx";
import Footer from "../components/footer/Footer.jsx";
import EduPreschool from '../components/eduPreschool/EduPreschool.jsx';

const Preschool = (props) => {
    const title = props.title
    document.title = title;
    return( 

        <div>
        <Navbar/>
        <EduPreschool/>
        <Footer/>
        </div>
    )
}
export default Preschool;