import React from 'react';
import {Container, Row, Col, Nav} from 'react-bootstrap';
import classes from './AboutFinance.module.css';
import Navigation from '../UI/navigation/Navigation.jsx'

const AboutFinance = () => {
    return (
        <Container className='my-5'>
            <Row>
                <Col lg={8} className={classes.header}>
                    <h1>Финансово-хозяйственная деятельность</h1>
                    <h2>План финансово-хозяйственной деятельности</h2>
                    <a href="#" className={classes.linkStyle}>План финансово-хозяйственной деятельности на 2020 год</a>
                </Col>
                <Col lg={4}>
                    <Navigation/>
                </Col>
            </Row>

        </Container>
    );
}
export default AboutFinance;