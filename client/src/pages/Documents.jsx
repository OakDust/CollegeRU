import React from 'react';
import Navbar from "../components/nav/Navbar.jsx";
import Footer from "../components/footer/Footer.jsx";
import AboutDocuments from '../components/aboutDocuments/aboutDocuments.jsx';


const Documents = (props) => {
    const title = props.title
    document.title = title;
    return( 

        <div>
        <Navbar/>
        <AboutDocuments/>
        <Footer/>
        </div>
    )
}
export default Documents;