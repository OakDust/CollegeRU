import React, {useEffect, useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import classes from './aboutPaidService.module.css';
import Navigation from '../UI/navigation/Navigation.jsx';

const AboutPaidService = () => {
    let caption = useState('')

    const returnPath = (caption) => {
        return process.env.REACT_APP_API_URL + 'pdf/paid_service/' + caption
    }

    const pdfList = [
        {
            name: 'Стоимость обучения в 2017-2018',
            link:'стоимость-обучения-2017-18.pdf'
        },
        {
            name: 'Стоимость обучения в 2018-2019',
            link:'стоимость-обучения-2018-19.pdf'
        },
        {
            name: 'Стоимость обучения в 2019-2020',
            link:'стоимость-обучения-2019-20.pdf'
        },
        {
            name: 'Стоимость обучения в 2020-2021',
            link:'стоимость-обучения-2020-21.pdf'
        },
        {
            name: 'Стоимость обучения в 2021-2022',
            link:'стоимость-обучения-2021-22-2.pdf'
        },
        {
            name: 'Стоимость обучения в 2022-2023',
            link:'№9-Б-от-01.02.2022-о-стоимости-обучения-в-2022-2022-учебном-году.pdf'
        },
        {
            name: 'Стоимость обучения в 2023-2024',
            link:'№10-Б-от-18.01.2023-о-стоимости-обучения.pdf'
        }
    ]

    const documentFiller = () => {
        let div = document.createElement('div')
        for (let i = 0; i < pdfList.length; i++) {
            div.innerHTML += `
                <div class=${classes.urlStyle}>
                    <a href = ${ returnPath(caption = pdfList[i].link) }>${pdfList[i].name}</a>
                </div>
            `
        }

        document.getElementById('pdfList').appendChild(div)
    }

    useEffect(() => {
        documentFiller()
    })

    return (
        <Container className="my-5">
            <Row>
                <Col lg={8}>
                    <div className={classes.header}>
                        <h1>Платные образовательные услуги</h1>
                        
                        <h4>Стоимость обучения 2017-2024</h4>

                        <div className={classes.header} id='pdfList'></div>   

                        <h4>Образец договора об указании платных образовательных услуг</h4>

                            <div className={classes.urlStyle}>
                                <a href={ process.env.REACT_APP_API_URL + 'pdf/paid_service/dogovor_dpo.docx' }>Договор об указании платных образовательных услуг</a>
                            </div>
                    </div>
                </Col>
                <Col lg={4}>
                    <Navigation isShowed={true} />
                </Col>
            </Row>
        </Container>
    );
}
export default AboutPaidService;