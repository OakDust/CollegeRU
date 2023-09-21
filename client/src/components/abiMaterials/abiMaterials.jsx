import React, { useEffect, useState } from 'react';
import {Container} from 'react-bootstrap';
import classes from './abiMaterials.module.css'

const agreements = [
    {
        name: 'Бухгалтер 9 классов очная форма обучения',
        link: 'Договор-23-САЙТ-БУХГАЛТЕР.pdf'
    },
    {
        name:'Воспитатель 9 классов очная форма обучения',
        link: 'Договор-23-САЙТ-ВОСПИТАТЕЛЬ.pdf'
    },
    {
        name:'Дизайнер 9 классов очная форма обучения',
        link:'Договор-23-САЙТ-ДИЗАЙНЕР.pdf'
    },
    {
        name:'Медсестра 9 классов очная форма обучения',
        link:'Договор-23-САЙТ-МЕДСЕСТРА.pdf'
    },
    {
        name:'Юрист 9 классов очная форма обучения',
        link:  'Договор-23-САЙТ-ЮРИСТ.pdf'
    },
    {
        name:'Фармацевт 9 классов очная форма обучения',
        link:'Договор-23-ФАРМАЦЕВТ-9.docx'
    },
    {
        name:'Педагог 9 классов очная форма обучения',
        link:'Договор-Преподавание-в-начальных-классах.pdf'
    },
    {
        name:'Фармацевт 11 классов очная форма обучения',
        link:'Договор-23-ФАРМАЦИЯ-11.docx'
    },
]


const applications = [
    {
        name:'Заявление о приеме',
        link:'Заявление-о-приеме.docx'
    },
    {
        name:'Заявление по физкультуре для самообразования',
        link:'Заявление-по-физкультуре-для-самообразования.pdf'
    }
]

const downloads = [
    {
        name:'Билеты по русскому языку',
        link:'БИЛЕТЫ-рус.яз.-для-сайта.docx'
    },
    {
        name:'Правила приема',
        link:'Правила-приёма-2023.pdf'
    },
    {
        name:'Извещение',
        link:'Извещение.docx'
    },
    {
        name:'Согласие на обработку персональных данных',
        link:'Согласие-на-обработку-персональных-данных.pdf'
    },
    {
        name:'Медицинская справка для поступающих на сестринское дело',
        link:'Мед.справка-для-поступающих-на-Сестринское-дело.pdf'
    },
    {
        name:'Справка 030-ПО-у-17 для поступающих на сестринское дело',
        link:'Справка-030-ПО-у-17-для-Сестринского-дела.pdf'
    }
]

const AbiMaterials = () => {
    let caption = useState('')
    const returnPath = (caption) => {
        return process.env.REACT_APP_API_URL + 'pdf/abiMaterials/' + caption
    }

const agreementFiller = () => {
    let div = document.createElement('div')
    div.setAttribute('class', classes.listStyle)
    for (let i = 0; i < agreements.length; i++) {
        div.innerHTML += `
        <li class=${classes.linkStyle}>
            <a href=${ returnPath(caption = 'agreement/' + agreements[i].link) }>${agreements[i].name}</a>
        </li>
    `
    }
    document.getElementById('agreementList').appendChild(div)
}

const applicationsFiller = () => {
    let div = document.createElement('div')
    div.setAttribute('class', classes.listStyle)
    for (let i = 0; i < applications.length; i++) {
        div.innerHTML += `
        <li class=${classes.linkStyle}>
            <a href=${ returnPath(caption = 'applications/' + applications[i].link) }>${applications[i].name}</a>
        </li>
    `
    }
    document.getElementById('applicationsList').appendChild(div)
}
const downloadFiller = () => {
    let div = document.createElement('div')
    div.setAttribute('class', classes.listStyle)
    for (let i = 0; i < downloads.length; i++) {
        div.innerHTML += `
        <li class=${classes.linkStyle}>
            <a href=${ returnPath(caption = 'download/' + downloads[i].link) }>${downloads[i].name}</a>
        </li>
    `
    }
    document.getElementById('downloadList').appendChild(div)
}
useEffect(() => {
    agreementFiller()
    applicationsFiller()
    downloadFiller()
})


    return(
        <Container className='my-5'>
            <div className={classes.textStyle}>
                <h1>Дополнительные материалы</h1>


                <h4>Договоры</h4>
                <ul className={classes.listStyle} id='agreementList'>
             
                </ul>
                

                <h4>Заявления</h4>
                <ul className={classes.listStyle} id='applicationsList'>


                </ul>

                <h4>Материалы для скачивания</h4>
                <ul className={classes.listStyle} id='downloadList'>
                </ul>
            </div>
        </Container>
    )
}
export default AbiMaterials;