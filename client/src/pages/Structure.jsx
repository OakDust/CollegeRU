import React from 'react';
import MyTable from '../components/UI/table/Table.jsx'
import Footer from '../components/footer/Footer.jsx';
import Navbar from '../components/nav/Navbar.jsx';



const Structure = () => {
    return( 
        <div>
        <Navbar/>
        <MyTable/>
        <Footer/>
        </div>

    );
}
export default Structure;