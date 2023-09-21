import React from 'react';
import {Container} from 'react-bootstrap';
import classes from './abiCourses.module.css';
import TableCourses from '../UI/tableCourses/tableCourses.jsx';


const AbiCourses = () => {
    return(
        <Container className='my-5'>
            <div className={classes.coursesBlock}>
                <h1>Подготовительные курсы</h1>
                <p>Колледж "ЗНАНИЕ" приглашает учеников на краткосрочные курсы для подготовки к поступлению, а также для улучшения своих навыков</p>
                <TableCourses/>
            </div>
        </Container>
    )
}
export default AbiCourses;