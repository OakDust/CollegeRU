import React from 'react';
import AboutOrg from "../components/aboutOrg/AboutOrg.jsx";
import Accreditation from "../components/accreditation/Accreditation.jsx";
import Carousel from "../components/carousel/Carousel.jsx";
import Footer from "../components/footer/Footer.jsx";
import Navbar from "../components/nav/Navbar.jsx";
import Specialties from '../components/specialties/Specialties.jsx';
import SpecialtiesPhones from '../components/UI/SpecialtiesPhones/SpecialtiesPhones.jsx';
import { Container } from 'react-bootstrap';


// All the changes connected with subpartitials are stored in about... components
// notice that <Navigation /> component has props >>>>
// Look at the AboutComponent props isShowed!

const Index = (props) => {
    const title = props.title
    document.title = title;
 

    return( 
        <div>
            <Navbar/>
            <Carousel/>
            <AboutOrg/>
            <Specialties/>
            <Accreditation/>
            <Footer/>
        </div>
    );
}
export default Index;