import React from 'react';
import Navbar from "../components/nav/Navbar.jsx";
import Footer from "../components/footer/Footer.jsx";
import Contact from '../components/contact/Contact.jsx';


const contact = (props) => {
    const title = props.title
    document.title = title;
    return( 

        <div>
        <Navbar/>
        <Contact/>
        <Footer/>
        </div>
    );
}
export default contact;