import React from 'react';
import Navbar from "../../components/nav/Navbar.jsx";
import Footer from "../../components/footer/Footer.jsx";
import PracTeacher from '../../components/pracDocsComponents/PracTeacher.jsx';

const PracticeTeacher = (props) => {
    const title = props.title
    document.title = title;
    return( 

        <div>
        <Navbar/>
        <PracTeacher/>
        <Footer/>
        </div>
    );
}
export default PracticeTeacher;