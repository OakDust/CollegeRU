import React from 'react';
import Navbar from "../../components/nav/Navbar.jsx";
import Footer from "../../components/footer/Footer.jsx";
import PracCredit from '../../components/pracDocsComponents/PracCredit.jsx';

const PracticeCredit = (props) => {
    const title = props.title
    document.title = title;
    return( 

        <div>
        <Navbar/> 
        <PracCredit/>
        <Footer/>
        </div>
    );
}
export default PracticeCredit;