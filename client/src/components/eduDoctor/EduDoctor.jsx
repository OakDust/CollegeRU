import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import classes from './EduDoctor.module.css'
import iconDone from '../../../public/icons/done.png'
import SpecialtiesNav from '../UI/specialtiesNav/specialtiesNav.jsx';

const EduDoctor = () => {

    return (
        <div>
            <Row className={classes.introBlock}>
                <Col xs={12} lg={6}>
                    <div className={classes.introText}>
                        <h1>Сестринское дело</h1>
                        <p>
                            Быть медсестрой или медбратом, 
                            означает принимать на себя ответсвенность за жизнь и 
                            здоровье каждого, кто к тебе обращается, приходить 
                            на помощь каждому, кто в ней нуждается. 
                        </p>
                        <p>
                            Нельзя быть медсестрой только на работе.
                            Дома, в общественном транспорте, да и просто на улице
                            медики всегда остаются медиками. Выбирая профессию медсестры,
                            помните: это не профессия — это призвание!
                        </p>
                    </div>
                </Col>
            </Row>
            <Container>
                <Row className={classes.infoDirection}>
                    <Col className={classes.parametersBlock} lg={2}>
                        <h5>Срок обучения</h5>
                        <p>
                            1 год 10 мес.<br/>
                            —<br/>
                            2 года 10 мес.
                        </p>
                    </Col>
                    <Col className={classes.parametersBlock} lg={2}>
                        <h5>Стоимость</h5>
                        <p>
                            От 116.000 руб<br/>
                            До 150.000 руб
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
                            Практика в клиниках Москвы и МО
                        </p>
                    </Col>
                </Row>
                
                <div className={classes.header}>
                    <h1>Чему вы научитесь?</h1>
                </div>

                <Row className={classes.infoBlock}>
                    <Col className={classes.learnBlock} lg={5}>
                        <img src={iconDone} className={classes.iconStyle}></img>
                        <p>Оказание квалифицированной медицинской помощи</p>
                    </Col>
                    <Col className={classes.learnBlock} lg={5}>
                        <img src={iconDone} className={classes.iconStyle}></img>
                        <p>Участие в реабилитационных процессах</p>
                    </Col>
                </Row>
                <Row className={classes.infoBlock}>
                    <Col className={classes.learnBlock} lg={5}>
                        <img src={iconDone} className={classes.iconStyle}></img>
                        <p>Теоретические знания в медицине</p>
                    </Col>
                    <Col className={classes.learnBlock} lg={5}>
                        <img src={iconDone} className={classes.iconStyle}></img>
                        <p>Оказание доврачебной медицинской помощи</p>
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
export default EduDoctor;