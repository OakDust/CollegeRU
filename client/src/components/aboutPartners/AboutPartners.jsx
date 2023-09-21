import React from 'react';
import {Container, Row, Col } from 'react-bootstrap';
import classes from './AboutPartners.module.css';
import Navigation from '../UI/navigation/Navigation.jsx'
import partnerImage from '../../../public/images/partner_sasovskoe.jpg'

const AboutPartners = () => {
    return (
        <Container className='my-5'>
            <Row>
                <Col lg={8} className={classes.header}>
                    <h1>Партнеры</h1>

                    <div className={classes.partnerBlock}>
                        <img src={partnerImage} alt="Сасовское летное училище"></img>
                        <h4>Сасовское имени Героя Советского Союза Тарана Г.А. лётное училище гражданской авиации</h4>
                        <p>Адрес в сети интернет: <a href='https://www.sasovoavia.ru/' className={classes.linkStyle}>https://www.sasovoavia.ru</a></p>
                    </div>
                </Col>
                <Col lg={4}>
                    <Navigation isShowed={true} />
                </Col>
            </Row>

        </Container>
    );
}
export default AboutPartners;