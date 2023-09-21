import React from 'react';
import Navbar from "../components/nav/Navbar.jsx";
import Footer from "../components/footer/Footer.jsx";
import StuMaterials from '../components/stuMaterials/stuMaterials.jsx';

const stuMaterials = (props) => {
    const title = props.title
    document.title = title;
    return( 

        <div>
        <Navbar/>
        <StuMaterials/>
        <Footer/>
        </div>
    );
}
export default stuMaterials;