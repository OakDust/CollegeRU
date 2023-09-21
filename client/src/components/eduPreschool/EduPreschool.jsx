import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import classes from './EduPreschool.module.css'
import iconDone from '../../../public/icons/done.png'
import SpecialtiesNav from '../UI/specialtiesNav/specialtiesNav.jsx';

const EduPreschool = () => {

    return (
        <div>
            <Row className={classes.introBlock}>
                <Col xs={12} lg={6}>
                    <div className={classes.introText}>
                        <h1>Дошкольное образование</h1>
                        <p>
                            Воспитатель — это не просто человек, воспитывающий детей.
                            Если вы выбрали эту профессию, то помните — ваша задача из
                            непутевого неумехи малыша вырастить будушего первоклассника! 
                        </p>
                        <p>
                            Сложно? Еще как! Наши преподаватели дадут вам знания, необходимые
                            воспитателю. Если вы любите детей, хотите подарим им свое тепло
                            и показать дорогу в жизнь — добро пожаловать в наш колледж!
                        </p>
                    </div>
                </Col>
            </Row>
            <Container>
                <Row className={classes.infoDirection}>
                    <Col className={classes.parametersBlock} lg={2}>
                        <h5>Срок обучения</h5>
                        <p>
                            2 года 10 мес.<br/>
                            —<br/>
                            3 года 10 мес.
                        </p>
                    </Col>
                    <Col className={classes.parametersBlock} lg={2}>
                        <h5>Стоимость</h5>
                        <p>
                            От 52.000 руб<br/>
                            До 92.000 руб
                        </p>
                    </Col>
                    <Col className={classes.parametersBlock} lg={2}>
                        <h5>Форма</h5>
                        <p>
                            Очная<br/>
                            Заочная
                        </p>
                    </Col>
                    <Col className={classes.parametersBlock} lg={2}>
                        <h5>Итог</h5>
                        <p>Государственный диплом</p>
                    </Col>
                    <Col className={classes.parametersBlock} lg={2}>
                        <h5>Перспектива</h5>
                        <p>
                            Трудоустройство<br/>
                            Практика в детских садах Москвы и МО
                        </p>
                    </Col>
                </Row>
                
                <div className={classes.header}>
                    <h1>Чему вы научитесь?</h1>
                </div>

                <Row className={classes.infoBlock}>
                    <Col className={classes.learnBlock} lg={5}>
                        <img src={iconDone} className={classes.iconStyle}></img>
                        <p>Воспитание и обучение детей дошкольного возраста</p>
                    </Col>
                    <Col className={classes.learnBlock} lg={5}>
                        <img src={iconDone} className={classes.iconStyle}></img>
                        <p>Оценивать процесс и результаты обучения детей</p>
                    </Col>
                </Row>
                <Row className={classes.infoBlock}>
                    <Col className={classes.learnBlock} lg={5}>
                        <img src={iconDone} className={classes.iconStyle}></img>
                        <p>Организация различных видов деятельности</p>
                    </Col>
                    <Col className={classes.learnBlock} lg={5}>
                        <img src={iconDone} className={classes.iconStyle}></img>
                        <p>Организовывать и проводить праздники для детей</p>
                    </Col>
                </Row>

                <div className={classes.header}>
                    <h1>Хотите изучить больше?</h1>
                    <SpecialtiesNav/>
                </div>

                <div className={classes.header}>
                    <h1>Как к нам поступить?</h1>
                </div>

                <Row className={classes.connectionBlock}>
                    <Col className={classes.textStyle}>
                        <p>Приходите к нам на дни открытых дверей</p>
                    </Col>
                    <Col className={classes.textStyle}>
                        <p>По всем вопросам о поступлении:</p>
                        <a href="tel:+79263964520"> +7 (926)-396-45-20</a>
                    </Col>
                </Row>

            </Container>
        </div>
        
        
    );
}
export default EduPreschool;