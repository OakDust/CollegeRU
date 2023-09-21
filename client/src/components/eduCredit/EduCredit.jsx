import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import classes from './EduCredit.module.css'
import iconDone from '../../../public/icons/done.png'
import SpecialtiesNav from '../UI/specialtiesNav/specialtiesNav.jsx';

const EduCredit = () => {

    return (
        <div>
            <Row className={classes.introBlock}>
                <Col xs={12} lg={6}>
                    <div className={classes.introText}>
                        <h1>Бухгалтер</h1>
                        <p>
                            Мы готовим профессиональных
                            бухгалтеров с дополнительной
                            подготовкой в области
                            банковского дела
                        </p>
                        <p>
                            Наши выпускники легко
                            ориентируются в сложных вопросах бухгалтерского учета,
                            изучают систему налогообложения, начисления заработной платы,
                            ведения дел в бюджетных и коммерческих организациях
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
                            От 52.000 руб<br/>
                            До 98.000 руб
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
                        <p>Технология составления бухгалтерской отчетности</p>
                    </Col>
                    <Col className={classes.learnBlock} lg={5}>
                        <img src={iconDone} className={classes.iconStyle}></img>
                        <p>Экономическая деятельность организаций</p>
                    </Col>
                </Row>
                <Row className={classes.infoBlock}>
                    <Col className={classes.learnBlock} lg={5}>
                        <img src={iconDone} className={classes.iconStyle}></img>
                        <p>Основы налогового законодательства</p>
                    </Col>
                    <Col className={classes.learnBlock} lg={5}>
                        <img src={iconDone} className={classes.iconStyle}></img>
                        <p>Финансы государства и организаций</p>
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
export default EduCredit;