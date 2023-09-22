import React from 'react';
import {Container} from 'react-bootstrap';
import classes from './PracticeDocs.module.css'

const documents = [
    {
        name:'Договор о проведении практики',
        link:'pdf/student/student_practice/credit/1. Договор о проведении практики.pdf'
    },
    {
        name:'Направление для прохождения практики',
        link:'pdf/student/student_practice/credit/2. Направление для прохождения практики.pdf'
    },
    {
        name:'Индивидуальное задание на практику',
        link:'pdf/student/student_practice/credit/3. Индивидуальное задание на практику.pdf'
    },
    {
        name:'Дневник прохождения практики',
        link:'pdf/student/student_practice/credit/4. Дневник прохождения практики.pdf'
    },
    {
        name:'Отчет о прохождении практики',
        link:'pdf/student/student_practice/credit/5. Отчет о прохождении практики.pdf'
    }
]

const PracCredit = () => {
    return(
        <Container className='my-5'>
            <div className={classes.headers}>
                <h1>Отчетные документы по практике</h1>
                <h4>Направление Экономика и бухгалтерский учет (38.02.01)</h4>
                <ul className={classes.listStyle}>
                    {documents.map((document) => (
                    <li className={classes.linkStyle}>
                        <a href={process.env.REACT_APP_API_URL + document.link}>{document.name}</a>
                    </li>
                ))}
                </ul>

                <a href={process.env.REACT_APP_API_URL + 'pdf/student/student_practice/38.02.01-Экономика-и-бухгалтерский-учет-по-отраслям (1).rar'} className={classes.buttonStyle}>
                    Скачать одним архивом
                </a>
            </div>
            
        </Container>
    )
}
export default PracCredit;