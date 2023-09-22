import React from 'react';
import {Container} from 'react-bootstrap';
import classes from './PracticeDocs.module.css'

const documents = [
    {
        name:'Договор о проведении практики',
        link:'pdf/student/student_practice/design/1. Договор о проведении практики.pdf'
    },
    {
        name:'Направление для прохождения практики',
        link:'pdf/student/student_practice/design/2. Направление для прохождения практики.pdf'
    },
    {
        name:'Индивидуальное задание на практику',
        link:'pdf/student/student_practice/design/3. Индивидуальное задание на практику.pdf'
    },
    {
        name:'Дневник прохождения практики',
        link:'pdf/student/student_practice/design/4. Дневник прохождения практики.pdf'
    },
    {
        name:'Отчет о прохождении практики',
        link:'pdf/student/student_practice/design/5. Отчет о прохождении практики.pdf'
    }
]

const PracDesign = () => {
    return(
        <Container className='my-5'>
            <div className={classes.headers}>
                <h1>Отчетные документы по практике</h1>
                <h4>Направление Дизайн (54.02.01)</h4>
                <ul className={classes.listStyle}>
                    {documents.map((document) => (
                    <li className={classes.linkStyle}>
                        <a href={process.env.REACT_APP_API_URL + document.link}>{document.name}</a>
                    </li>
                ))}
                </ul>

                <a href={process.env.REACT_APP_API_URL + 'pdf/student/student_practice/54.02.01-Дизайн-по-отраслям.rar'} className={classes.buttonStyle}>
                    Скачать одним архивом
                </a>
            </div>
            
        </Container>
    )
}
export default PracDesign;