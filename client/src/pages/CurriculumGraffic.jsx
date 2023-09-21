import React from 'react';
import Footer from '../components/footer/Footer.jsx';
import Navbar from '../components/nav/Navbar.jsx'
import LinkBox from '../components/UI/link-box/LinkBox.jsx';


const CurriculumGraffic = (props) => {


    document.title = props.title
    return( 
        <div>
            <Navbar/>
                <LinkBox/>
            <Footer/>
        </div>
    );
}
export default CurriculumGraffic;