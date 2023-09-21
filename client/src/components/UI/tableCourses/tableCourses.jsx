import React from 'react';
import {Table, Container} from 'react-bootstrap';
import classes from './tableCourses.module.css'

const TableCourses = () => {
    return (
        <Container className='my-5'>
            <Table responsive="lg" bordered="true" className={classes.tableStyles}>
                <thead>
                    <tr>
                        <th>Наименование курса</th>
                        <th>Период занятий</th>
                        <th>Срок обучения/Кол-во часов</th>
                        <th>Стоимость обучения</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Русский язык</td>
                        <td>Март-Июнь (1-2 раза в неделю)</td>
                        <td>64 Часа</td>
                        <td>12.000 руб.</td>
                    </tr>
                    <tr>
                        <td>Академический рисунок</td>
                        <td>Март-Июнь (1-2 раза в неделю)</td>
                        <td>64 Часа</td>
                        <td>12.000 руб.</td>
                    </tr>
                    <tr>
                        <td>Биология</td>
                        <td>Март-Июнь (1-2 раза в неделю)</td>
                        <td>64 Часа</td>
                        <td>12.000 руб.</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
        
    )
}
export default TableCourses;