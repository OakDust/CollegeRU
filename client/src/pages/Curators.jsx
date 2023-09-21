import React from 'react';
import Navbar from "../components/nav/Navbar.jsx";
import Footer from "../components/footer/Footer.jsx";
import StuCurators from '../components/stuCurators/stuCurators.jsx';

const Curators = (props) => {
    const title = props.title
    document.title = title;
    return( 

        <div>
        <Navbar/>
        <StuCurators/>
        <Footer/>
        </div>
    );
}
export default Curators;