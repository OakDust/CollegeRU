import React from 'react';
import Navbar from "../components/nav/Navbar.jsx";
import Footer from "../components/footer/Footer.jsx";
import EduCredit from '../components/eduCredit/EduCredit.jsx';

const Credit = (props) => {
    const title = props.title
    document.title = title;
    return( 

        <div>
        <Navbar/>
        <EduCredit/>
        <Footer/>
        </div>
    )
}
export default Credit;