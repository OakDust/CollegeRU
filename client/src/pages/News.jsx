import React from 'react';
import Navbar from "../components/nav/Navbar.jsx";
import Footer from "../components/footer/Footer.jsx";
import News from '../components/news/News.jsx';


const news = (props) => {
    const title = props.title
    document.title = title;
    
    return( 

        <div>
            <Navbar/>
            <News/>
            <Footer/>
        </div>
    );
}
export default news;