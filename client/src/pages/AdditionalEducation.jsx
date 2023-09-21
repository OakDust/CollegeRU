import React from "react";
import Navbar from "../components/nav/Navbar.jsx";
import Footer from "../components/footer/Footer.jsx";
import EduAdditional from "../components/eduAdditional/eduAdditional.jsx";

const AdditionalEducation = (props) => {
    const title = props.title
    document.title = title;

    return(
        <div>
            <Navbar/>
            <EduAdditional/>
            <Footer/>
        </div>
    )
}


export default AdditionalEducation;