import React, { useEffect, useState } from 'react';
import {Container, Row, Col, Nav} from 'react-bootstrap';
import classes from './aboutStandarts.module.css'
import Navigation from '../UI/navigation/Navigation.jsx';

const AboutStandarts = () => {
    let caption = useState('')
    const returnPath = (caption) => {
        return process.env.REACT_APP_API_URL + 'pdf/' + caption
    }
    const documentList = [
        {
            name: 'ФГОС 54.02.01 Дизайн от 5 мая 2022 года. Приказ №308.pdf',
            link: 'Новый-ФГОС-по-ДИЗАЙНЕРАМ.pdf'
        },
        {
            name: 'ФГОС 44.02.02 Преподавание в начальных классах от 17 авгусат 2022 года. Приказ №742.pdf',
            link: 'Новый-ФГОС-по-ПРЕПОДАВАТЕЛЯМ.pdf'
        },
        {
            name: 'ФГОС 44.02.01 Дошкольное образование от 17 августа 2022 года. Приказ №743.pdf',
            link: 'Новый-ФГОС-по-ВОСПИТАТЕЛЯМ.pdf'
        },
        {
            name: 'ФГОС 33.02.01 Фармация от 13 июля 2021 года. Приказ №449.pdf',
            link: '33.02.01-Фармация.pdf'
        },
        {
            name: 'ФГОС 34.02.01 Сестринское дело от 4 июля 2022 года. Приказ №527.pdf',
            link: 'ФГОС-34.02.01-Сестринское-дело-2022-2025.pdf'
        },
        {
            name: 'ФГОС 34.02.01 Сестринское дело от 12 мая 2014 года. Приказ №502.pdf',
            link: 'ФГОС-34.02.01-Сестринское-дело.pdf'
        },
        {
            name: 'ФГОС 38.02.01 Экономика и бухгалтерский учет от 5 февраял 2018 года. Приказ №69.pdf',
            link: 'ФГОС-38.02.01-Экономика-и-бухгалтерский-учет.pdf'
        },
        {
            name: 'ФГОС 40.02.01 Право и организация социального обеспечения от 12 мая 2014 года. Приказ №508.pdf',
            link: 'ФГОС-40.02.01-Право-и-организация-социального-обеспечения.pdf'
        },
        {
            name: 'ФГОС 44.02.01 Дошкольное образование от 27 октября 2014 года. Приказ №1351.pdf',
            link: 'ФГОС-44.02.01-Дошкольное-образование.pdf'
        },
        {
            name: 'ФГОС 44.02.02 Преподавание в начальных классах от 27 октября 2014 года. Приказ №1353.pdf',
            link: 'ФГОС-44.02.02-Преподавание-в-начальных-классах.pdf'
        },
        {
            name: 'ФГОС 54.02.01 Дизайн от 23 ноября 2020 года. Приказ №658.pdf',
            link: 'ФГОС-54.02.01-Дизайн.pdf'
        }
    ]

    const documentFiller = () => {
        let li = document.createElement('li')
        li.setAttribute('class', classes.urlStyle)

        for (let i = 0; i < documentList.length; i++) {
            li.innerHTML += `
                <li class=${classes.linkStyle}>
                    <a href=${returnPath(caption = 'educational_requirements/' + documentList[i].link) }>${documentList[i].name}</a>
                </li>
            `
        }

        document.getElementById('documentList').appendChild(li)
    }

    useEffect(() => {
        documentFiller()
    })
    return(
        <Container className='my-5'>
            <Row>
                <Col lg={8}>
                    <div className={classes.header}>
                        <h1>Образовательные стандарты и требования</h1>

                        <h4>Федеральные государственные образовательные стандарты</h4>
                        <ul className={classes.listStyle} id='documentList'> 
                        </ul>

                    </div>
                </Col>
                <Col lg={4}>
                    <Navigation isShowed={true} />
                </Col>
            </Row>
    </Container>
    )
}

export default AboutStandarts;