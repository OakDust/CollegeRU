import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import classes from './AboutComponent.module.css'
import Navigation from "../UI/navigation/Navigation.jsx";

const AboutComponent = () => {
    return( 
        <Container className='my-5'>
                <Row>
                    <Col lg={8} className={classes.aboutBlock}>
                        <h1 className={classes.head1}>Основные сведения</h1>
                        <h2>Полное наименование образовательной организации</h2>
                        <p>
                            Автономная некоммерческая организация профессионального образования "Гуманитарно-технический колледж Знание"
                        </p>
                        <h2>Сокращенное наименование</h2>
                        <p>
                            АНО ПО ГТК "Знание"
                        </p>
                        <h2>Дата создания образовательной организации</h2>
                        <p>
                            22 марта 2004г.
                        </p>
                        <h2>Дата преобразования в АНО ПО "ГТК Знание"</h2>
                        <p>
                            22 марта 2017г.
                        </p>
                        <h2>Учредитель</h2>
                        <p>
                            Бахарев Ростислав Сергеевич
                        </p>
                        <h2>Сведения о каждом филиале образовательной организации (В том числе находящихся за пределами Российской федерации)</h2>
                        <p>Колледж не имеет представительств и филиалов по другим адресам</p>
                        <h2>Информация о месте нахождения образовательной организации</h2>
                        <p>
                            142100, Московская область г. Подольск, ул. Комсомольская, дом 1, помещение 1 (здание бизнес-центра "Зингер-Плаза"(2.3 этаж))
                        </p>
                        <h2>Информация о режиме работы и графике образовательной организации</h2>
                        <div className={classes.aboutBlock}>
                            <p>
                                Понедельник — суббота с 08:30 до 19:00 (воскресенье - выходной)
                            </p>
                            <p>
                                График расписания занятий студентов очной формы обучения:
                            </p>
                            <ul className={classes.list}>
                                <li>08:30 — 10:00</li>
                                <li>10:10 — 11:40</li>
                                <li>11:50 — 13:20</li>
                                <li>13:50 — 15:20</li>
                                <li>15:30 — 17:00</li>
                                <li>17:10 — 18:40</li>
                            </ul>
                        </div>
                        <h2>Информация о контактных данных телефонах образовательной организации</h2>
                        <p>
                            <ul className={classes.list}>
                                <li>Директор: +7 916 353-52-36</li>
                                <li>Секретарь +7 926 396-45-20</li>
                                <li>Бухгалтер +7 925 529-26-88</li>
                            </ul>
                        </p>
                        <h2>Инфрмация об адресах электронной почты образовательной организации</h2>
                        <p>
                            ir-znanie@mail.ru
                        </p>
                    </Col> 
                    <Col lg={4}>
                        <Navigation/>
                    </Col>
                </Row>
        </Container>
    );
}
export default AboutComponent ;