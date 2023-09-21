import React from 'react';
import Navbar from "../components/nav/Navbar.jsx";
import Footer from "../components/footer/Footer.jsx";
import ActivityPrinciples from '../components/activityPrinciples/ActivityPrinciples.jsx';

const Principles = (props) => {
    const title = props.title
    document.title = title;
    return( 

        <div>
        <Navbar/>
        <ActivityPrinciples/>
        <Footer/>
        </div>
    )
}
export default Principles;