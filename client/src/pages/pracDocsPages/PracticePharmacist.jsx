import React from 'react';
import Navbar from "../../components/nav/Navbar.jsx";
import Footer from "../../components/footer/Footer.jsx";
import PracPharmacist from '../../components/pracDocsComponents/PracPharmacist.jsx';

const PracticePharmacist = (props) => {
    const title = props.title
    document.title = title;
    return( 

        <div>
        <Navbar/> 
        <PracPharmacist/>
        <Footer/>
        </div>
    );
}
export default PracticePharmacist;