import React from 'react';
import {Container} from 'react-bootstrap';
import classes from './PracticeDocs.module.css'

const documents = [
    {
        name:'Договор о проведении практики',
        link:'#'
    },
    {
        name:'Направление для прохождения практики',
        link:'#'
    },
    {
        name:'Индивидуальное задание на практику',
        link:'#'
    },
    {
        name:'Дневник прохождения практики',
        link:'#'
    },
    {
        name:'Отчет о прохождении практики',
        link:'#'
    }
]

const PracAdvocate = () => {
    return(
        <Container className='my-5'>
            <div className={classes.headers}>
                <h1>Отчетные документы по практике</h1>
                <h4>Направление Юрист (40.02.01)</h4>
                <ul className={classes.listStyle}>
                    {documents.map((document) => (
                    <li className={classes.linkStyle}>
                        <a href={document.link}>{document.name}</a>
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
export default PracAdvocate;