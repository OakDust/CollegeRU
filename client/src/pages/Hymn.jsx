import React from 'react';
import Navbar from "../components/nav/Navbar.jsx";
import Footer from "../components/footer/Footer.jsx";
import ActivityHymn from '../components/activityHymn/ActivityHymn.jsx';


const Hymn = (props) => {
    const title = props.title
    document.title = title;
    return( 

        <div>
        <Navbar/>
        <ActivityHymn/>
        <Footer/>
        </div>
    )
}
export default Hymn;