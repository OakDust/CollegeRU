import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import classes from './ActivityPrinciples.module.css'


const ActivityPrinciples = () => {
    return(
        <Container>
            <div className={classes.textStyle}>
                <h1 className={classes.header}>Наши принципы</h1>
                <p>
                    Создавая колледж, мы хотели, чтобы он стал не просто еще одним учебным заведением, 
                    где ничем не связанные друг с другом люди будут обучать и учиться.
                </p>
                <p>Мы убеждены!</p>
                <Row>
                    <Col className={classes.textPrinciples}>
                        <h2>1</h2>
                        <p>Каждый человек талантлив</p>
                    </Col>
                    <Col className={classes.textPrinciples}>
                        <h2>2</h2>
                        <p>Сейчас время неординарных людей и неординарных идей</p>
                    </Col>
                </Row>
                <Row>
                    <Col className={classes.textPrinciples}>
                        <h2>3</h2>
                        <p>Только настоящее дело может быть по-настоящему интересным</p>
                    </Col>
                    <Col className={classes.textPrinciples}>
                        <h2>4</h2>
                        <p>Состоявшиеся люди — это счастливые люди!</p>
                    </Col>
                </Row>
                <ul className={classes.listStyle}>
                    <li>Прежде всего, в каждом человеке — будь то студент или преподаватель — мы ценим готовность к обучению и развитию.</li>
                    <li>Мы приветствуем и используем новые технологии образования, новые идеи, неординарные решения.</li>
                    <li>Мы готовим студентов не к вымышленной, а к реальной жизни, давая им полный спектр знаний по их профессии.</li>
                    <li>Мы делаем все, чтобы студенты и преподаватели могли реализовать себя как личности.</li>
                    <li>Мы — это коллектив единомышленников. Это не значит, что мы все думаем одинаково. Это значит, что мы не можем быть равнодушными к тому, что делаем.</li>
                </ul>
                <div className={classes.textPrinciples}>
                    <h2>Наша цель</h2>
                    <p>Вместе с нашими студентами развиваться, расти, приобретать новые знания!</p>
                </div>
            </div>
            
        </Container>
    )
}
export default ActivityPrinciples;