import React from 'react';
import Navbar from "../../components/nav/Navbar.jsx";
import Footer from "../../components/footer/Footer.jsx";
import PracDesign from '../../components/pracDocsComponents/PracDesign.jsx';

const PracticeDesign = (props) => {
    const title = props.title
    document.title = title;
    return( 

        <div>
        <Navbar/> 
        <PracDesign/>
        <Footer/>
        </div>
    );
}
export default PracticeDesign;