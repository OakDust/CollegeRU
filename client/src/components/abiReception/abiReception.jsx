import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import classes from './abiReception.module.css'
import Specialties from '../specialties/Specialties.jsx';
const images = require.context('../../../public/icons/reception', false, /\.(png)$/);


const AbiReception = () => {
    return(
        <div>
            <div className={classes.intro}>
                <Container className={classes.introText}>
                    <h2>Приемная комиссия 2023</h2>
                    <h1>
                        C 1 июня <br/>
                        До <br/>
                        20 августа
                    </h1>
                    <h2>Получайте новые навыки и меняйте жизнь!</h2>
                </Container>
            </div>

            <Container className={classes.header}>
                <h1>Преимущества</h1>
                <Row>
                    <Col className={classes.privilegesStyle}>
                        <img src={images('./privilegesIcon1.png')}></img>
                        <p>Индивидуальный подход</p>
                    </Col>
                    <Col className={classes.privilegesStyle}>
                        <img src={images('./privilegesIcon2.png')}></img>
                        <p>Постоянная обратная связь</p>
                    </Col>
                    <Col className={classes.privilegesStyle}>
                        <img src={images('./privilegesIcon3.png')}></img>
                        <p>Самые актуальные направления</p>
                    </Col>
                </Row>
                <Row>
                    <Col className={classes.privilegesStyle}>
                        <img src={images('./privilegesIcon4.png')}></img>
                        <p>Поддержка и развитие студенческих проектов</p>
                    </Col>
                    <Col className={classes.privilegesStyle}>
                        <img src={images('./privilegesIcon5.png')}></img>
                        <p>Практика в ведущих предприятиях</p>
                    </Col>
                    <Col className={classes.privilegesStyle}>
                        <img src={images('./privilegesIcon6.png')}></img>
                        <p>Льготные программы</p>
                    </Col>
                </Row>
            </Container>

            <div className={classes.educationInfo}>
                <Container className={classes.educationStyle}>
                    <h1>ЗНАНИЕ сегодня</h1>
                    <Row>
                        <Col className={classes.educationStyle}>
                            <img src={images('./educationIcon1.png')}></img>
                            <h2>7</h2>
                            <p>Востребованных образовательных программ</p>
                        </Col>
                        <Col className={classes.educationStyle}>
                            <img src={images('./educationIcon2.png')}></img>
                            <h2>1000+</h2>
                            <p>Студентов</p>
                        </Col>
                        <Col className={classes.educationStyle}>
                            <img src={images('./educationIcon3.png')}></img>
                            <h2>25+</h2>
                            <p>Высококвалифицированных преподавателей</p>
                        </Col>
                    </Row>
                    <h2>200+</h2>
                    <p>Мест для студентов в 2023</p>
                </Container>
            </div>

            <Container className={classes.header}><h1>Учебные направления</h1></Container>
            <Specialties/>

            <div className={classes.documentsBlock}>
                <Container className={classes.documentsText}>
                    <h2>Успейте подать свои документы</h2>
                    <Row>
                        <Col className={classes.documentsText}>
                            <h3>Необходимо подать документы в приемную комиссию</h3>
                            <h1>
                                С 1 июня<br/>
                                До<br/>
                                20 августа
                            </h1>
                        </Col>
                        <Col className={classes.documentsText}> 
                            <ul className={classes.listStyle}>
                                <li><b>Аттестат</b> (Оригинал + копия)</li>
                                <li><b>Копия паспорта</b></li>
                                <li><b>Фото 3х4</b> (4 шт.)</li>
                                <li><b>СНИЛС</b></li>
                                <li><b>Мед. справка 086-У</b></li>
                            </ul>
                            <p>
                                Для поступающих на педагогическое отделение:<br/>
                                Справка от нарколога и психолога
                            </p>
                            <p>
                                Для поступающих на сестринское дело:<br/>
                                Справка по форме <b>№030-ПО/у-17</b>, 
                                подтверждающую возможность работы на данной специальности
                            </p>
                        </Col>
                    </Row>
                    <div className={classes.button}>
                        <a href='/abiturients/materials'>Дополнительные материалы</a>
                    </div>
                    <h4>Заявление и договор можно распечатать дома</h4>
                </Container>
            </div>
            <Container className={classes.coursesText}>
                <h1>Подготовительные курсы</h1>
                <h2>Будьте уверены в своих результатах</h2>
                <Row>
                    <Col className={classes.coursesBlock}>
                        <img src={images('./coursesIcon1.png')}></img>
                        <p>Курсы русского языка</p>
                    </Col>
                    <Col className={classes.coursesBlock}>
                        <img src={images('./coursesIcon2.png')}></img>
                        <p>Подготовительные курсы по биологии</p>
                    </Col>
                    <Col className={classes.coursesBlock}>
                        <img src={images('./coursesIcon3.png')}></img>
                        <p>Подготовительные курсы по академическому рисунку</p>
                    </Col>
                </Row>
                <h3>Стоимость 12000 руб/мес.</h3>
                <p>Подробности можно узнать по телефону</p>
            </Container>

            <div className={classes.communicationBlock}>
                <Container className={classes.communicationText}>
                    <h1>
                        ЗНАНИЕ — сила<br/>
                        Сделайте свой выбор прямо сейчас!
                    </h1>
                    <h2>Приходите к нам в колледж или оставьте заявку:</h2>
                    <a href="tel:89175825109">+7-917-582-51-09</a><br/>
                    <a href="tel:89263964520">+7-926-396-45-20</a><br/>
                    <a href="tel:89014682675">+7-901-468-26-75</a>
                </Container>
            </div>
        </div>
    )
}
export default AbiReception;