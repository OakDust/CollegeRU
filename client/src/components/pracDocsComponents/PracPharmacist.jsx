import React from 'react';
import {Container} from 'react-bootstrap';
import classes from './PracticeDocs.module.css'

const documents = [
    {
        name:'Договор о проведении практики',
        link:'pdf/pharmacist/1. Договор о проведении практики.pdf'
    },
    {
        name:'Направление для прохождения практики',
        link:'pdf/pharmacist/2. Направление для прохождения практики.pdf'
    },
    {
        name:'Индивидуальное задание на практику',
        link:'pdf/pharmacist/3. Индивидуальное задание на практику.pdf'
    },
    {
        name:'Дневник прохождения практики',
        link:'pdf/pharmacist/4. Дневник прохождения практики.pdf'
    },
    {
        name:'Отчет о прохождении практики',
        link:'pdf/pharmacist/5. Отчет о прохождении практики.pdf'
    }
]

const PracPharmacist = () => {
    return(
        <Container className='my-5'>
            <div className={classes.headers}>
                <h1>Отчетные документы по практике</h1>
                <h4>Направление Фармация (34.02.01)</h4>
                <ul className={classes.listStyle}>
                    {documents.map((document) => (
                    <li className={classes.linkStyle}>
                        <a href={process.env.REACT_APP_API_URL + document.link}>{document.name}</a>
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
export default PracPharmacist;