import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import classes from './EduTeacher.module.css'
import iconDone from '../../../public/icons/done.png'
import SpecialtiesNav from '../UI/specialtiesNav/specialtiesNav.jsx';

const EduTeacher = () => {

    return (
        <div>
            <Row className={classes.introBlock}>
                <Col xs={12} lg={6}>
                    <div className={classes.introText}>
                        <h1>Учитель начальных классов</h1>
                        <p>
                            Мы готовим профессиональных преподавателей
                            с дополнительной подготовкой в данной области
                        </p>
                        <p>
                            Студенты колледжа могут выбрать дополнительное
                            профессиональное образование по нескольким программам
                            Соответсвенно, кроме диплома о среднем профессиональном 
                            образовании, студенты получают еще свидетельство по 
                            дополнительному образованию
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
                            До 110.000 руб
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
                            Поступление в ВУЗ без экзаменов
                        </p>
                    </Col>
                </Row>
                
                <div className={classes.header}>
                    <h1>Чему вы научитесь?</h1>
                </div>

                <Row className={classes.infoBlock}>
                    <Col className={classes.learnBlock} lg={5}>
                        <img src={iconDone} className={classes.iconStyle}></img>
                        <p>Теория и методика преподавания</p>
                    </Col>
                    <Col className={classes.learnBlock} lg={5}>
                        <img src={iconDone} className={classes.iconStyle}></img>
                        <p>
                            Навыки общения<br/>
                            Ораторское искусство
                        </p>
                    </Col>
                </Row>
                <Row className={classes.infoBlock}>
                    <Col className={classes.learnBlock} lg={5}>
                        <img src={iconDone} className={classes.iconStyle}></img>
                        <p>Изучение основ общей психологии</p>
                    </Col>
                    <Col className={classes.learnBlock} lg={5}>
                        <img src={iconDone} className={classes.iconStyle}></img>
                        <p>
                            Актерское мастерство<br/>
                            Хореография
                        </p>
                    </Col>
                </Row>

                <div className={classes.header}>
                    <h1>Особенности поступления</h1>
                </div>

                <Row className={classes.infoBlock}>
                    <Col className={classes.specialsBlock} lg={4}>
                        <h5>Средний балл аттестата</h5>
                        <h4>4.0</h4>
                    </Col>
                    <Col className={classes.specialsBlock} lg={4}>
                        <h5>Балл по русскому языку</h5>
                        <h4>4.0</h4>
                        <p>Лица, имеющие "3", обязательно сдают экзамен при поступлении(устный)</p>
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
export default EduTeacher;