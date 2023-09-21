import React from 'react';
import {Container} from 'react-bootstrap';
import classes from './PracticeDocs.module.css'

const documents = [
    'Договор о проведении практики',
    'Направление для прохождения практики',
    'Индивидуальное задание на практику',
    'Дневник прохождения практики',
    'Отчет о прохождении практики',
]

const PracPreschool = () => {
    return(
        <Container className='my-5'>
            <div className={classes.headers}>
                <h1>Отчетные документы по практике</h1>
                <h4>Направление Дошкольное образование (44.02.01)</h4>
                <ul className={classes.listStyle}>
                    {documents.map((document) => (
                    <li className={classes.linkStyle}>
                        <a href=''>{document}</a>
                    </li>
                ))}
                </ul>

                <a href="" className={classes.buttonStyle}>
                    Скачать одним архивом
                </a>
            </div>
            
        </Container>
    )
}
export default PracPreschool;