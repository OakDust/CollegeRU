import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import classes from './EduPharmacist.module.css'
import iconDone from '../../../public/icons/done.png'
import SpecialtiesNav from '../UI/specialtiesNav/specialtiesNav.jsx';

const EduPharmacist = () => {

    return (
        <div>
            <Row className={classes.introBlock}>
                <Col xs={12} lg={6}>
                    <div className={classes.introText}>
                        <h1>Фармация</h1>
                        <p>
                            Фармация — комплекс
                            научно-практических дисциплин, изучающих
                            проблемы создания безопасных лекарственных
                            средств, их хранение, производство и изготовление, 
                            а также механизмы продаж, оценки состояния
                            фармацевтического рынка.
                        </p>
                        <p>
                            В современных условиях профессия остается одной
                            из самых востребованных на рынке труда!
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
                            Практика в аптеках и организациях Москвы и МО
                        </p>
                    </Col>
                </Row>
                
                <div className={classes.header}>
                    <h1>Чему вы научитесь?</h1>
                </div>

                <Row className={classes.infoBlock}>
                    <Col className={classes.learnBlock} lg={5}>
                        <img src={iconDone} className={classes.iconStyle}></img>
                        <p>Изготавливать лекарственные формы препаратов</p>
                    </Col>
                    <Col className={classes.learnBlock} lg={5}>
                        <img src={iconDone} className={classes.iconStyle}></img>
                        <p>Проводить контроль качества лекарственных средств</p>
                    </Col>
                </Row>
                <Row className={classes.infoBlock}>
                    <Col className={classes.learnBlock} lg={5}>
                        <img src={iconDone} className={classes.iconStyle}></img>
                        <p>Реализации товаров аптечного ассортимента</p>
                    </Col>
                    <Col className={classes.learnBlock} lg={5}>
                        <img src={iconDone} className={classes.iconStyle}></img>
                        <p>Оказывать информционно-консультативную помощь населению</p>
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
export default EduPharmacist;