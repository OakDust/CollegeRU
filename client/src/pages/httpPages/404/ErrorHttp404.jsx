import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../../../components/footer/Footer.jsx';
import NavBar from '../../../components/nav/Navbar.jsx';
import classes from './ErrorHttp404.module.css'
import robot404 from '../../../../public/icons/robot404.png'


const ErrorHttp404 = () => {
    return( 
        <div>
            <NavBar />
                <Container className='mt-5'>
                    <h1 className='display-4' style={{textAlign: "center"}}>В колледже такого пока нет...</h1>
                </Container>
            <div className={classes.page404Styles}>
                <Container>
                    <div>
                    <img src={robot404} alt="" className={classes.imageRobot404} />
                    </div>
                </Container>

            </div>

            <Footer />                                                                                          
        </div>
    );
}
export default ErrorHttp404;