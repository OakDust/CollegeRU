import React from 'react';
import classes from './Table.module.css'
import { Col, Container, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Navigation from '../navigation/Navigation.jsx'


const MyTable = () => {
    return( 
        <Container className='my-5'>
            <Row>
                <Col lg={8} className={classes.header}>
                    <h1>Структура и органы управления образовательной организации</h1>
                    <h4>Список сотрудников АНО ПО "ГТК "Знание"</h4>
                    <Table responsive="lg" bordered="true" className={classes.tableStyles}>
                        <thead>
                        <tr className={classes.tableHeader}>
                            <th>Должность</th>
                            <th>ФИО</th>
                            <th>Телефон</th>
                            <th>Почта</th>
                        </tr>
                        </thead>
                        <tbody className={classes.tableStyles}>
                            <tr className={classes.tableHeader}>
                                <td colSpan={4}>Директор колледжа</td>
                            </tr>
                            <tr className={classes.tableCell}>
                                <td>1. Директор колледжа</td>
                                <td>Бахарева Ирина Ростиславовна</td>
                                <td>+7(916)-353-52-36</td>
                                <td>ir_znanie@mail.ru</td>
                            </tr>
                            <tr className={classes.tableHeader}>
                                <td colSpan={4}>Заместители директора колледжа</td>
                            </tr>
                            <tr className={classes.tableCell}>
                                <td>2. Заместитель директора по общим вопросам</td>
                                <td>Батова Наталья Викторовна</td>
                                <td>+7(980)-663-15-19</td>
                                <td>bnv-znanie@yandex.ru</td>
                            </tr>
                            <tr className={classes.tableCell}>
                                <td>3. Заместитель директора по научно-методологической и учебной работе</td>
                                <td>Грачев Виталий Сергеевич</td>
                                <td>+7(977)-904-39-03</td>
                                <td>k.070@bk.ru</td>
                            </tr>
                            <tr className={classes.tableCell}>
                                <td>4. Заместитель директора по безопасности</td>
                                <td>Бахарев Ростислав Сергеевич</td>
                                <td>+7(916)-153-72-64</td>
                                <td>r.bakharev@mail.ru</td>
                            </tr>
                            <tr className={classes.tableCell}>
                                <td>5. Заместитель директора по воспитательной работе</td>
                                <td>Лецкая Татьяна Сергеевна</td>
                                <td>+7(925)-075-30-09</td>
                                <td>tleckaya@yandex.ru</td>
                            </tr>
                            <tr className={classes.tableHeader}>
                                <td colSpan={4}>Отдел документационного обеспечения</td>
                            </tr>
                            <tr className={classes.tableCell}>
                                <td>6. Делопроизводитель</td>
                                <td>Бурданова Ольга Алексеевна</td>
                                <td>+7(917)-582-51-09</td>
                                <td>boa-znanie@mail.ru</td>
                            </tr>
                            <tr className={classes.tableCell}>
                                <td>7. Делопроизводитель</td>
                                <td>Потапова Вероника Анатольевна</td>
                                <td>+7(926)-396-45-20</td>
                                <td>vp-znanie@mail.ru</td>
                            </tr>
                            <tr className={classes.tableHeader}>
                                <td colSpan={4}>Бухгалтерия</td>
                            </tr>
                            <tr className={classes.tableCell}>
                                <td>8. Главный бухгалтер</td>
                                <td>Грибкова Ирина Валентиновна</td>
                                <td></td>
                                <td>gribkova-irina@mail.ru</td>
                            </tr>
                            <tr className={classes.tableCell}>
                                <td>9. Бухгалтер по кадрам</td>
                                <td>Гахова Маргарита Анатольевна</td>
                                <td>+7(925)-529-26-88</td>
                                <td>lev_margo@mail.ru</td>
                            </tr>
                            <tr className={classes.tableCell}>
                                <td>10. Бухгалтер</td>
                                <td>Федорова Лариса Владимировна</td>
                                <td></td>
                                <td>fedorovalvznanie@yandex.ru</td>
                            </tr>
                            <tr className={classes.tableHeader}>
                                <td colSpan={4}>Системный администратор</td>
                            </tr>
                            <tr className={classes.tableCell}>
                                <td>11. Системный администратор</td>
                                <td>Ядак Степан Денисович</td>
                                <td>+7(910)-464-81-57</td>
                                <td>step1313131098@yandex.ru</td>
                            </tr>
                            <tr className={classes.tableHeader} >
                                <td colSpan={4}>Администраторы</td>
                            </tr>
                            <tr className={classes.tableCell}>
                                <td>12. Администратор</td>
                                <td>Наспанова Юлия Валентиновна</td>
                                <td>+7(903)-163-16-98</td>
                                <td>—</td>
                            </tr>
                            <tr className={classes.tableCell}>
                                <td>13. Администратор</td>
                                <td>Ларина Галина Викторовна</td>
                                <td>+7(909)-647-51-71</td>
                                <td>—</td>
                            </tr>
                        </tbody>
                    </Table>
                    <h4>Органы управления образовательной организации</h4>
                    <ul>
                        <li>Общее собрание работников и студентов</li>
                        <li>Педагогический совет</li>
                    </ul>
                </Col>
                <Col lg={4}>
                    <Navigation/>
                </Col>
            </Row>
            
 

        </Container>
    );
}
export default MyTable;