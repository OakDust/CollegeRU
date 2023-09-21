import React from 'react';
import Navbar from "../components/nav/Navbar.jsx";
import Footer from "../components/footer/Footer.jsx";
import StuPay from '../components/stuPay/stuPay.jsx';

const Pay = (props) => {
    const title = props.title
    document.title = title;
    return( 

        <div>
        <Navbar/>
        <StuPay/>
        <Footer/>
        </div>
    );
}
export default Pay;