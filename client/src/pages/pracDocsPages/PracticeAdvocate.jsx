import React from 'react';
import Navbar from "../../components/nav/Navbar.jsx";
import Footer from "../../components/footer/Footer.jsx";
import PracAdvocate from '../../components/pracDocsComponents/PracAdvocate.jsx';

const PracticeAdvocate = (props) => {
    const title = props.title
    document.title = title;
    return( 

        <div>
        <Navbar/> 
        <PracAdvocate/>
        <Footer/>
        </div>
    );
}
export default PracticeAdvocate;