import React from 'react';
import Navbar from "../components/nav/Navbar.jsx";
import Footer from "../components/footer/Footer.jsx";


const Students = (props) => {
    const title = props.title
    document.title = title;
    
    return( 

        <div>
            <Navbar/>
        students page
            <Footer/>
        </div>
    );
}
export default Students;