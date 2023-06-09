import { React, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import classes from './aboutEducation.module.css';

const aboutEducation = () => {
    let caption = useState('')

    const returnPath = (caption) => {
        return 'http://localhost:9000/education/' + caption
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
        'ПООП 34.02.01 Сестринское дело 2022-2025гг',
        'ОПОП 38.02.01 Экономика и бухгалтерский учет 2022-2025гг',
        'ОПОП 40.02.01 Право и организация социального обеспечения 2022-2025гг',
        'ОПОП 44.02.01 Дошкольное образование 2022-2025гг',
        'ОПОП 44.02.02 Преподавание в начальных классах 2022-2025гг',
        'ОПОП 54.02.01 Дизайн 2022-2025гг',
    ]
    let educational_programms_array2021 = [
        'ОПОП 34.02.01 Сестринское дело 2021-2025гг',
        'ОПОП 38.02.01 Экономика и бухгалтерский учет 2021-2024гг',
        'ОПОП 40.02.01 Право и организация социального обеспечения 2021-2024гг',
        'ОПОП 44.02.01 Дошкольное образование 2021-2025гг',
        'ОПОП 44.02.02 Преподавание в начальных классах 2021-2025гг',
        'ОПОП 54.02.01 Дизайн 2021-2025гг'
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
        div.innerHTML = `<h2>${headerNames[year]}<h2>`
        for (let i = 0; i < arrayYEAR.length; i++) {
            div.innerHTML += `
            <div class=${classes.urlStyle}>
                <a href=${ returnPath(caption = folder + '/' + headerNames[year].slice(-4) + '/' + arrayYEAR[i].split(' ').join('-') + '..pdf') }>${arrayYEAR[i]}</a>
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
        createLink(headerNames, 5, curriculum_graffic_array2020, 'curriculum_graffic')
    }, [])

    return (
        <Container className='my-5'>
            <div className={classes.header}>
                <h1>Образование</h1>
                <div className={classes.header} id='PDFArray'>

                </div>
            </div>
        </Container>
    );
}
export default aboutEducation;