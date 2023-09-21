import React from 'react';
import {Container} from 'react-bootstrap';
import classes from './stuCurators.module.css'

const StuCurators = () => {
    return(
        <Container className='my-5'>
            <div className={classes.curatorsBlock}>
                <h1>Кураторы групп</h1>
                <h4>Загрузить приказ о назначении кураторов</h4>
                <div className={classes.urlStyle}>
                    <a href={ process.env.REACT_APP_API_URL + 'pdf/student/student_curators/№1-Б-О-назначении-кураторов-2022-2023-2.pdf' }>Приказ о назначении кураторов групп.pdf</a>
                </div>
            </div>
        </Container>
    )
}
export default StuCurators;