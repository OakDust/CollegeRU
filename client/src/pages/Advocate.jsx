import React from 'react';
import Navbar from "../components/nav/Navbar.jsx";
import Footer from "../components/footer/Footer.jsx";
import EduAdvocate from '../components/eduAdvocate/EduAdvocate.jsx';

const Advocate = (props) => {
    const title = props.title
    document.title = title;
    return( 

        <div>
        <Navbar/>
        <EduAdvocate/>
        <Footer/>
        </div>
    )
}
export default Advocate;