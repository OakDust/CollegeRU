import { React, useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import classes from './aboutEducation.module.css';
import Navigation from '../UI/navigation/Navigation.jsx';

const aboutEducation = (props) => {
    let caption = useState('')


    const fontSize= 20
    const color= "#ff4d11"

    const isShowed = props.isShowed

    const returnPath = (caption) => {
        return process.env.REACT_APP_API_URL + 'education/' + caption
    }
    let headerNames = [
        'Образовательные программы 2022',
        'Образовательные программы 2021',
        'График учебного процесса 2022-2023',
        'Учебные планы 2022',
        'Учебные планы 2021',
        'Учебные планы 2020'
    ]

    let educational_programms_array2022 = [
        'ПООП 34.02.01 Сестринское дело 2022-2025',
        'ОПОП 38.02.01 Экономика и бухгалтерский учет 2022-2025',
        'ОПОП 40.02.01 Право и организация социального обеспечения 2022-2025',
        'ОПОП 44.02.01 Дошкольное образование 2022-2025',
        'ОПОП 44.02.02 Преподавание в начальных классах 2022-2025',
        'ОПОП 54.02.01 Дизайн 2022-2025',
    ]
    let educational_programms_array2021 = [
        'ОПОП 34.02.01 Сестринское дело 2021-2025',
        'ОПОП 38.02.01 Экономика и бухгалтерский учет 2021-2024',
        'ОПОП 40.02.01 Право и организация социального обеспечения 2021-2024',
        'ОПОП 44.02.01 Дошкольное образование 2021-2025',
        'ОПОП 44.02.02 Преподавание в начальных классах 2021-2025',
        'ОПОП 54.02.01 Дизайн 2021-2025'
    ]

    let educational_process_graffic_array2022_2023 = [
        'Календарный учебный график 34.02.01 Сестринское дело 2022-2025',
        'Календарный учебный график 34.02.01 Сестринское дело 2021-2025',
        'Календарный учебный график 38.02.01 Экономика и бухгалтерский учет 2021-2024',
        'Календарный учебный график 40.02.01 Право и организация социального обеспечения 2021-2024',
        'Календарный учебный график 44.02.01 Дошкольное образование 2021-2025',
        'Календарный учебный график 44.02.02 Преподавание в начальных классах 2021-2025',
        'Календарный учебный график 54.02.01 Дизайн 2021-2025'
    ]

    let curriculum_graffic_array2022 = [
        'Учебный план 34.02.01 Сестринское дело 2022-2025',
        'Учебный план 38.02.01 Экономика и бухгалтерский учет 2022-2025',
        'Учебный план 40.02.01 Право и огранизация социального обеспечения 2022-2025',
        'Учебный план 44.02.01 Дошкольное образование 2022-2026',
        'Учебный план 44.02.02 Преподавание в начальных классах 2022-2026',
        'Учебный план 54.02.01 Дизайн 2022-2026'
    ]

    let curriculum_graffic_array2021 = [
        'Учебный план 34.02.01 Сестринское дело 2021-2025',
        'Учебный план 38.02.01 Экономика и бухгалтерский учет 2021-2024',
        'Учебный план 40.02.01 Право и огранизация социального обеспечения 2021-2024',
        'Учебный план 44.02.01 Дошкольное образование 2021-2025',
        'Учебный план 44.02.02 Преподавание в начальных классах 2021-2025',
        'Учебный план 54.02.01 Дизайн 2021-2025'
    ]

    let curriculum_graffic_array2020 = [
        '38.02.01 Экономика и бухучёт. Учебный план и пояснительная записка',
        '40.02.01 Право и ОСО. Учебный план и пояснительная записка',
        '44.02.02 Преподавание в начальных классах. Учебный план и пояснительная записка',
        '54.02.01 Дизайн. Учебный план и пояснительная записка',
        '42.02.01 Дошкольное образование. Учебный план и пояснительная записка',
        '34.02.01 Сестринское дело. Учебный план и пояснительная записка'
    ]

    const createLink = (headerNames, year, arrayYEAR, folder) => {
        let div = document.createElement('div')
        div.setAttribute('class', classes.header)
        div.innerHTML = `<h4>${headerNames[year]}<h4>`
        for (let i = 0; i < arrayYEAR.length; i++) {
            div.innerHTML += `
            <div class=${classes.urlStyle} >
                <a 
                    class='education-links'
                    href=${ returnPath(caption = folder + '/' + headerNames[year].slice(-4) + '/' + arrayYEAR[i].split(' ').join('-') + '.pdf') }
                    style="font-size: ${props.Model ? props.Model.fontSize : fontSize}; color: ${props.Model ? props.Model.color: color}"
                    >${arrayYEAR[i]}</a>
            </div>
        `
        }

        document.getElementById('PDFArray').appendChild(div)
    }

    useEffect(() => {
        // 2022
        createLink(headerNames, 0, educational_programms_array2022, 'educational_programms')
        // 2021
        createLink(headerNames, 1, educational_programms_array2021, 'educational_programms')
        // 2022-2023
        createLink(headerNames, 2, educational_process_graffic_array2022_2023, 'educational_process_graffic')
        // 2022
        createLink(headerNames, 3, curriculum_graffic_array2022, 'curriculum_graffic')
        // 2021
        createLink(headerNames, 4, curriculum_graffic_array2021, 'curriculum_graffic')
        // 2020
        let div = document.createElement('div')
        div.setAttribute('class', classes.header)
        div.innerHTML = `<h4>${headerNames[5]}<h4>`
        for (let i = 0; i < curriculum_graffic_array2020.length; i++) {
            div.innerHTML += `
            <div class=${classes.urlStyle} >
                <a 
                    class='education-links'
                    href=${ returnPath(caption = 'curriculum_graffic/' + headerNames[5].slice(-4) + '/' + curriculum_graffic_array2020[i].split(' ').join('-') + '.xlsx') }
                    style="font-size: ${props.Model ? props.Model.fontSize : fontSize}; color: ${props.Model ? props.Model.color: color}"
                    >${curriculum_graffic_array2020[i]}</a>
            </div>
        `
        }

        document.getElementById('PDFArray').appendChild(div)
    }, [])

    return (
        <Container className='my-5'>
            <Row>
                <Col lg={8}>
                    <div className={classes.header}>
                        <h1>Образование</h1>
                        <div className = {classes.header} id='PDFArray'>

                        </div>
                    </div>
                    <div className={classes.header}>
                        <h4>Сведения о языке, на котором осуществляется обучение</h4>
                        <p>Обучение осуществляется на русском языке</p>
                    </div>
                </Col>
                <Col lg={4}>
                    <Navigation isShowed = {isShowed} />
                </Col>
            </Row>
        </Container>
    );
}
export default aboutEducation;