import React from 'react';
import {Container, Row, Col, Table} from 'react-bootstrap';
import classes from './Contact.module.css'
import navigationIcon from '../../../public/icons/navigation.png'
import busIcon from '../../../public/icons/bus.png'
import routeToCollege1 from '../../../public/images/contacts/routeToCollege1.jpg'
import routeToCollege2 from '../../../public/images/contacts/routeToCollege2.jpeg'


const Contact = () => {
    return(
        <Container className='my-5'>
            <h1 className={classes.header}>Контакты, схема проезда</h1>
            <Row >
                <Col lg={3} className={classes.infoStyle}>
                    <h3>Почтовый адрес</h3>
                </Col>
                <Col className={classes.infoStyle}>
                    <p>г.Подольск, ул. Комсомольская, 1, пом. 1, 142100</p>
                </Col>
            </Row>
            <Row>
                <Col lg={3} className={classes.infoStyle}>
                    <h3>Электронная почта</h3>
                </Col>
                <Col>
                    <a href="mailto:ir-znanie@mail.ru" className={classes.urlStyle}>ir-znanie@mail.ru</a>
                </Col>
            </Row>
            <Row>
                <Col lg={3} className={classes.infoStyle}>
                    <h3>Адрес в сети интернет</h3>
                </Col>
                <Col>
                    <a href="https://xn----8sbkdddijlka3abe.xn--p1ai/" className={classes.urlStyle}>колледж-знание.рф</a>
                </Col>
            </Row>

            <Table className={classes.tableStyle}>
                <thead className={classes.textTable}>
                    <th>Подразделения</th>
                </thead>
                <tbody className={classes.textTable}>
                    <tr>
                        <td>Секретарь</td>
                        <td><a href="tel:+79154888888" className={classes.urlStyle}>+7 915 488-88-88</a></td>
                    </tr>
                    <tr>
                        <td>Учебная часть</td>
                        <td><a href="tel:+79263964520" className={classes.urlStyle}>+7 926 396-45-20</a></td>
                    </tr>
                    <tr>
                        <td>Учебно-методический отдел</td>
                        <td><a href="tel:+79175825109" className={classes.urlStyle}>+7 917 582-51-09</a></td>
                    </tr>
                    <tr>
                        <td>Бухгалтерия</td>
                        <td><a href="tel:+79255292688" className={classes.urlStyle}>+7 925 529-26-88</a></td>
                    </tr>
                    <tr>
                        <td>Администратор</td>
                        <td><a href="tel:+79161537264" className={classes.urlStyle}>+7 916 153-72-64</a></td>
                    </tr>
                </tbody>
            </Table>
            
            <h2>Схема проезда</h2>
            <img src={busIcon} className={classes.iconStyle}></img>
            <p className={classes.textStyle}>
                Остановка Рынок <br/>
                Левая сторона здания БЦ «Зингер Плаза»
            </p>
            <img src={navigationIcon} className={classes.iconStyle}></img>
            <a href="https://yandex.ru/maps/org/kolledzh_znaniye/1145664545/?ll=37.550109%2C55.427883&z=16" className={classes.urlStyle}>
                Подольск, ул. Комсомольская, 1, пом. 1
            </a>
            <Row className={classes.mapStyle}>
                <Col xs={12} sm={6} lg={8} xl={7}>
                    <iframe 
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac13395645263bb2a2d0f87a4fac94cbc2e98fde2aa605fa00a04ba5c47aee961&amp;source=constructor" className={classes.mapSize}
                    frameborder="0"
                    >
                    </iframe>
                </Col>
                <Col>
                    <img src={routeToCollege2} className={classes.imageStyle}></img>
                    <img src={routeToCollege1} className={classes.imageStyle}></img>
                </Col>
            </Row>
            <h4 className={classes.important}>ПРИМЕЧАНИЕ!</h4>
            <p className={classes.textStyle}>Колледж "ЗНАНИЕ" не имеет филиалов и представительств по другим адресам</p>
        </Container>
    )
}
export default Contact;