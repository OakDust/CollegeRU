import React from 'react';
import Navbar from "../../components/nav/Navbar.jsx";
import Footer from "../../components/footer/Footer.jsx";
import PracDoctor from '../../components/pracDocsComponents/PracDoctor.jsx';

const PracticeDoctor = (props) => {
    const title = props.title
    document.title = title;
    return( 

        <div>
        <Navbar/>
        <PracDoctor/>
        <Footer/>
        </div>
    );
}
export default PracticeDoctor;