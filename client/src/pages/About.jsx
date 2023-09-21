import React from "react";
import Navbar from "../components/nav/Navbar.jsx";
import Footer from "../components/footer/Footer.jsx";
import AboutComponent from "../components/aboutComponent/AboutComponent.jsx";


const About = (props) => {
    const title = props.title
    document.title = title;

    return(
        <div>
            <Navbar/>
            <AboutComponent/>
            <Footer/>
        </div>
    )
}


export default About;