import React from 'react';
import {Container} from 'react-bootstrap';
import classes from './employment.module.css'


const Employment = () => {
    return(
        <Container className='my-5'>
            <div className={classes.employmentBlock}>
                <h1>Трудоустройство</h1>
                <h4>Положение</h4>
                <div className = {classes.urlStyle}>
                    <a href={ process.env.REACT_APP_API_URL + 'pdf/employment/state/2021-10-22_001-745x1024.pdf' }>Положение о центре содействия трудоустройству выпускников</a>
                </div>
                <h4>Соглашение</h4>
                <div className={classes.urlStyle}>
                    <a href={ process.env.REACT_APP_API_URL + 'pdf/employment/agreement/2021-10-25_001-745x1024.pdf' } >Соглашение с ЦЗН</a>
                </div>
                
            </div>
        </Container>
    )
}
export default Employment;