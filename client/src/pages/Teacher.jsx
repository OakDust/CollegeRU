import React from 'react';
import Navbar from "../components/nav/Navbar.jsx";
import Footer from "../components/footer/Footer.jsx";
import EduTeacher from '../components/eduTeacher/EduTeacher.jsx';
const Teacher = (props) => {
    const title = props.title
    document.title = title;
    return( 

        <div>
        <Navbar/>
        <EduTeacher/>
        <Footer/>
        </div>
    )
}
export default Teacher;