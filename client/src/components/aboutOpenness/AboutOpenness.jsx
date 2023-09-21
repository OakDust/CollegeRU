import React from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import classes from './AboutOpenness.module.css';
import Navigation from '../UI/navigation/Navigation.jsx'
const images = require.context('../../../public/images/openness', false, /\.(jpg)$/);


const COUNT_DOCUMENTS = 4;
const documents = [];
for (let i = 1; i <= COUNT_DOCUMENTS; i++ ){
    documents.push(<img src={images(`./opennessPage${i}.jpg`)} className={classes.imageStyle} alt="Информационная открытость"></img>);
}


const AboutOpenness = () => {
    return (
        <Container className='my-5'>
            <Row>
                <Col lg={8} className={classes.headers}>
                    <h1>Информационная открытость</h1>
                    {documents}
                </Col>
                <Col lg={4}>
                    <Navigation isShowed={true} />
                </Col>
            </Row>

        </Container>
    );
}
export default AboutOpenness;