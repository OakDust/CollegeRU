import React from 'react';
import telephone from '../../../public/icons/telephoneIcon.png'
import distance from '../../../public/icons/learnIcon.png'
import gallery from '../../../public/icons/galleryIcon.png'
import classes from './AboutOrg.module.css'
import { Col, Container, Row } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Specialties from '../specialties/Specialties.jsx';

const AboutOrg = () => {
    return( 
        <Container className={classes.aboutBlock}>
            <Row>
                <Col className={classes.infoBlock} lg = {6}>
                    <h1>Знание — сила!</h1>
                    <p>
                        Создавая колледж, мы хотели, чтобы он стал не просто
                        еще одним учебным заведением, где ничем не
                        связанные друг с другом люди будут обучать и учиться.
                    </p>
                    <p>
                        Наша цель была в другом: мы убеждены — каждый 
                        человек талантлив; мы убеждены — сейчас время
                        неординарных людей и неординарных идей; мы
                        убеждены — только настоящее дело может быть
                        по-настоящему интересным; мы убеждены —
                        состоявшиеся люди — это счастливые люди; 
                        мы убеждены — только в атмосфере понимания и 
                        позитива человек может развиваться!
                    </p>
                </Col>
                <Col className = {classes.infoBlock} lg={6}>
                    <h1>Онлайн-ресурсы</h1>
                    <Row>
                        <Col className={classes.blockStyle}>
                            <Link to="/contact">
                                <img src = {telephone} className={classes.iconStyle}></img>
                                <p>
                                Контакты<br/>
                                Схема проезда
                                </p>  
                            </Link>
                        </Col>                
                        <Col className={classes.blockStyle}>
                            <a href="http://znanie-courses.ru/python/" target='_blank'>
                                <img src = {distance} className={classes.iconStyle}></img>
                                <p>Электронная образовательная среда</p>
                            </a>
                            
                        </Col>
                        <Col className={classes.blockStyle}>
                            <a href="/activity/photogallery">
                                <img src = {gallery} className={classes.iconStyle}></img>
                                <p>Фотогалерея</p>
                            </a>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <div className={classes.infoBlock}>
                <h1>Учебные направления</h1>
            </div>
        </Container>
        
    );
}
export default AboutOrg;
