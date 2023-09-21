import React from 'react';
import Navbar from "../../components/nav/Navbar.jsx";
import Footer from "../../components/footer/Footer.jsx";
import PracPreschool from '../../components/pracDocsComponents/PracPreschool.jsx';

const PracticePreschool = (props) => {
    const title = props.title
    document.title = title;
    return( 

        <div>
        <Navbar/> 
        <PracPreschool/>
        <Footer/>
        </div>
    );
}
export default PracticePreschool;