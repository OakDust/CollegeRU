import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import classes from './aboutDocuments.module.css';
import Navigation from '../UI/navigation/Navigation.jsx'

const AboutDocuments = () => {

    const states = [
        {
            name: 'Положение о внутреннем контроле качества подготовки специалиста в АНО ПО ГТК Знание',
            link:'states/001-5.pdf'
        },
        {
            name: 'Положение о ГИА',
            link:'states/001-6.pdf'
        },
        {
            name: 'Положение о зачислении в качестве экстернов',
            link:'states/001-7.pdf'
        },
        {
            name: 'Положение о педагогическом совете',
            link:'states/001-8.pdf'
        },
        {
            name: 'Положение о подготовительных курсах для поступающих',
            link:'states/001-9.pdf'
        },
        {
            name: 'Положение о порядке обучения по индивидуальному плану',
            link:'states/001-10.pdf'
        },
        {
            name: 'Положение о порядке осуществления индивидуального учета результатов освоения обущающимся образовательных программ',
            link:'states/001-11.pdf'
        },
        {
            name: 'Положение о порядке перевода, отчисления и восстановления обучающихся',
            link:'states/001-12.pdf'
        },
        {
            name: 'Положение о предметно-цикловой комиссии',
            link:'states/001-13.pdf'
        },
        {
            name: 'Положение о приемной комиссии',
            link:'states/001-14.pdf'
        },
        {
            name: 'Положение о проведении экзаменов, зачетов, пересдач, перевода обучающихся на следующий курс',
            link:'states/001-15.pdf'
        },
        {
            name: 'Положение о текущем контроле знаний и промежуточной аттестации',
            link:'states/001-16.pdf'
        },
        {
            name: 'Положение о формах обучения',
            link:'states/001-17.pdf'
        },
        {
            name: 'Положение об интернет-сайте',
            link:'states/001-18.pdf'
        },
        {
            name: 'Положение об обучении студентов-инвалидов',
            link:'states/001-19.pdf'
        },
        {
            name: 'Положение об организации выполнения и защиты курсовой работы',
            link:'states/001-20.pdf'
        },
        {
            name: 'Положение об электронной билиотеке',
            link:'states/001-21.pdf'
        },
        {
            name: 'Положение об электронном журнале',
            link:'states/001-22.pdf'
        },
        {
            name: 'Положение об учебной и производственной практике студентов',
            link:'states/001-23.pdf'
        },
        {
            name: 'Положение об общем собрании работников и студентов (совет колледжа)',
            link:'states/Положение-об-общем-собрании-работников-и-студентов-совет-колледжа.pdf'
        }
    ]

    let caption = useState('')
    const returnPath = (caption) => {
        return process.env.REACT_APP_API_URL + 'pdf/' + caption
    }

    const statesFiller = () => {
      let div = document.createElement('div')
      for (let i = 0; i < states.length; i++) {
        div.innerHTML += `
            <div class=${classes.urlStyle}>
                <a href=${ returnPath(caption = 'documents/' + states[i].link) }>${states[i].name}</a>
            </div>
        `
      }

      document.getElementById('states').appendChild(div)
    }

    useEffect(() => {
      statesFiller()
    })

    return (
        <Container className='my-5'>
            <Row>
                <Col lg={8}>
                    <div className={classes.header}>
                    <h1>Документы</h1>
                    <div className={classes.header}>
                        <h4>Устав образовательной организации</h4>
                            <div className={classes.urlStyle}>

                                <a href={ process.env.REACT_APP_API_URL + "pdf/founding_documents/Устав.pdf" }>Устав образовательной организации</a>

                            </div>
                            <h4>Лицензия на осуществление образовательной деятельности (с приложениями)</h4>
                            <div className={classes.urlStyle}>
                                <a href="#">Серия 50Л01 №0008960 №77080 от 24.05.2017г. Лицензия действительна бессрочно</a>
                            </div>
                            <div className={classes.urlStyle}>
                                <a href="#">Выписка из реестра лицензий от 04.05.2023г</a>
                            </div>
                            <h4>Свидетельство о государственной аккредитации (с приложениями)</h4>
                            <div className={classes.urlStyle}>
                                <a href="#">Серия 50А01 №0000271 №4573 от 03.11.2020г. Свидетельство действует бессрочно</a>
                            </div>
                            <h4>Учредительные документы</h4>
                            <div className={classes.urlStyle}>
                                <a href={ process.env.REACT_APP_API_URL + "pdf/founding_documents/Лист_Записи_Единого_Государственного_Реестра_Юридических_Лиц.pdf"}>Лист записи единого государственного реестра юридических лиц</a>
                            </div>
                            <div className={classes.urlStyle}>
                                <a href={ process.env.REACT_APP_API_URL + "pdf/founding_documents/Свидетельство_О_Постановке_На_Учет_ФНО.pdf"}>Свидетельство о постановке на учет в налоговом органе</a>
                            </div>
                            <div className={classes.urlStyle}>
                                <a href={ process.env.REACT_APP_API_URL + "pdf/founding_documents/Свидетельство_О_Регистрации.pdf"}>Свидетельство о государственной регистрации</a>
                            </div>

                            <h4>Локальные нормативные акты</h4>
                            <div id="states">

                            </div>
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
export default AboutDocuments ;
