import {React, useEffect } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import classes from './aboutProfessors.module.css';
import Navigation from '../UI/navigation/Navigation.jsx';
const images = require.context('../../../public/images/professors', false, /\.(png)$/);

const aboutProfessors = () => {

    const deputies = [
        {
            'login': 'batova_nv',
            'name': 'Батова Наталья Викторовна',
            'position': 'Заместитель директора по развитию',
            'info': '',
            'phone_number': '+7 980 663-15-19',
            'phone_number_link': 'tel:+79806631519',
            'mail': 'bnv-znanie@yandex.ru',
        },
        {
            'login': 'bakharev_rs',
            'name': 'Бахарев Ростислав Сергеевич',
            'position': 'Заместитель директора по безопасности. Преподаватель юридических дисциплин',
            'info': '',
            'phone_number': '+7 916 153-72-64',
            'phone_number_link': 'tel:+79161537264',
            'mail': 'r.bakharev@mail.ru',
        },
        {
            'login': 'zuchenko_mv',
            'name': 'Жученко Михаил Вячеславович',
            'position': 'Заместитель директора по воспитательной работе. Преподаватель истории и обществознания',
            'info': 'Депутат фракции ВПП «Единая Россия» Совета депутатов Г.о Подольск',
            'phone_number': '',
            'phone_number_link': '',
            'mail': '',
        },
        {
            'login': 'sinodkina_em',
            'name': 'Синодкина Екатерина Михайловна',
            'position': 'Заместитель директора по учебно-методической работе. Преподаватель юридических дисциплин',
            'info': '',
            'phone_number': '',
            'phone_number_link': '',
            'mail': '',
        },
    ]


    const professors = [
        {
            'login': 'diakova_lp',
            'name': 'Дьякова Лариса Петровна',
            'position': 'Кандидат юридических наук. Преподаватель юридических дисциплин.',
            'info': 'Награждена Почетной грамотой от Министерства внутренних дел Российской Федерации «За высокие показатели в оперативно-служебной деятельности и проявленное профессиональное мастерство» 29 марта 2013 года, имеет Благодарность от Главы города Подольска «За образцовое исполнение служебных обязанностей и высокий профессионализм» от 10 ноября 2014 г.',
        },
        {
            'login': 'leckaya_ts',
            'name': 'Лецкая Татьяна Сергеевна',
            'position': 'Преподаватель юридических дисциплин',
            'info': '',
        },
        {
            'login': 'troickaya_nb',
            'name': 'Троицкая Наталья Борисовна',
            'position': 'Кандидат педагогических наук. Преподаватель педагогики и социальных дисциплин',
            'info': 'Старший референт муниципальной службы. Награждена знаком отличия «За заслуги перед городом Подольском 2 степени», медалью «В Память 850 летия Москвы»',
        },
        {
            'login': 'zubrickii_rn',
            'name': 'Зубрицкий Роман Николаевич',
            'position': 'Преподаватель юридических дисциплин',
            'info': '',
        },
        {
            'login': 'sherbina_ta',
            'name': 'Щербина Татьяна Анатольевна',
            'position': 'Преподаватель математики',
            'info': '',
        },
        {
            'login': 'bojek_ev',
            'name': 'Божек Елена Владимировна',
            'position': 'Преподаватель академического рисунка и дизайн-проектирования',
            'info': '',
        },
        {
            'login': 'rotar_ma',
            'name': 'Ротарь Марина Александровна',
            'position': 'Преподаватель социальных дисциплин',
            'info': '',
        },
        {
            'login': 'fedorova_lv',
            'name': 'Федорова Лариса Владимировна',
            'position': 'Бухгалтер. Преподаватель экономических дисциплин',
            'info': '',
        },
        {
            'login': 'bogolepova_gn',
            'name': 'Боголепова Галина Николаевна',
            'position': 'Преподаватель ораторского искусства',
            'info': '',
        },
        {
            'login': 'saveleva_mv',
            'name': 'Савельева Марина Владимировна',
            'position': 'Преподаватель физической культуры',
            'info': '',
        },
        {
            'login': 'samodurova_ta',
            'name': 'Самодурова Татьяна Анатольевна',
            'position': 'Преподаватель отделения «Сестринское дело».',
            'info': 'Награждена Медалью «За заслуги» 2 степени, учрежденную постановлением Президиума МОК профсоюза работников здравоохранения, Медалью «За борьбу с COVID-19»от 09 июля 2020 года',
        },
        {
            'login': 'umyarova_us',
            'name': 'Умярова Юлия Саидовна',
            'position': 'Преподаватель компьютерной графики',
            'info': '',
        },
        {
            'login': 'chadaeva_tn',
            'name': 'Чадаева Таисия Николаевна',
            'position': 'Преподаватель ДОУ.',
            'info': 'Почетная Грамота Министерства образования Московской области за многолетний и плодотворный труд. 2005 г. Благодарность Главы города Подольска Пестова Николая Игоревича за многолетний и плодотворный труд в системе образования г. Подольска. 2015 г.',
        },
        {
            'login': 'gorelov_es',
            'name': 'Горелов Эдуард Сергеевич',
            'position': 'Преподаватель естественнонаучных дисциплин.',
            'info': 'Награждён почётной грамотой совета депутатов города Климовска, 2013 год. Награждён почётной грамотой управления образования администрации города Климовска, 2014 год. Награждён почётной грамотой комитета по образованию Администрации Городского округа Подольск 2019 год.',
        },
        {
            'login': 'polyakova_us',
            'name': 'Полякова Ульяна Сергеевна',
            'position': 'Преподаватель русского языка и литературы.',
            'info': 'Финалист «Педагог года Подмосковья-2019» в номинации «Учитель года», победитель муниципального этапа Московского областного конкурса «Любимый учитель»',
        },
        {
            'login': 'burdanova_oa',
            'name': 'Бурданова Ольга Алексеевна',
            'position': 'Специалист учебной части',
            'info': '',
        },
        {
            'login': 'elchaninova_iv',
            'name': 'Ельчанинова Ирина Вячеславовна',
            'position': 'Учитель начальных классов. Учитель русского языка и литературы. Преподаватель педагогических дисциплин',
            'info': 'Квалификационная категория: первая. Общий педагогический стаж: 17 лет. Образование: высшее',
        },
        {
            'login': 'larina_gv',
            'name': 'Ларина Галина Викторовна',
            'position': 'Заведующая по хозяйственной части',
            'info': '',
        },
        {
            'login': 'kalikova_oi',
            'name': 'Калика Ольга Ивановна',
            'position': 'Преподаватель фармакологии, латинского языка',
            'info': 'Заслуженный работник здравоохранения Московской области',
        },
        {
            'login': 'kramareva_ov',
            'name': 'Крамарева Ольга Владимировна',
            'position': 'Преподаватель отделения «Дошкольное образование», ИЗО, ДПИ',
            'info': '',
        },
        {
            'login': 'tresheva_oa',
            'name': 'Трещева Ольга Александровна',
            'position': 'Преподаватель отделения “Дошкольное образование»',
            'info': 'Награждена медалью « За безупречную службу» 1-й степени Постановлением Главы города Подольска от 29.09.2014',
        },
        {
            'login': 'suhareva_ev',
            'name': 'Сухарева Елена Валерьевна',
            'position': 'Преподаватель методики муз. воспитания, истории ИЗО, истории дизайна и МХК',
            'info': '',
        },
        {
            'login': 'gahova_ma',
            'name': 'Гахова Маргарита Анатольевна',
            'position': 'Преподаватель экономических дисциплин',
            'info': '',
        },
        {
            'login': 'fokina_sk',
            'name': 'Фокина Сания Камбаровна',
            'position': 'Преподаватель гуманитарных дисциплин',
            'info': '',
        },
        {
            'login': 'lubikov_ks',
            'name': 'Любиков Кирилл Сергеевич',
            'position': 'Преподаватель отделения «Дизайн»',
            'info': '',
        },
        {
            'login': 'anosova_sv',
            'name': 'Аносова Софья Владимировна',
            'position': 'Бухгалтер',
            'info': '',
        },
        {
            'login': 'potapova_va',
            'name': 'Потапова Вероника Анатольевна',
            'position': 'Специалист учебной части',
            'info': '',
        }
    ]
 
    return (
        <Container className='my-5'>
            <Row>
                <Col lg={8}>
                    <div className={classes.headers}>

                        <h1>Руководство. Педагогический состав</h1>
                        <h2>Руководитель образовательной организации</h2>
                        <Row className={classes.professorBlock}>
                            <Col lg={5} className={classes.imageStyle}><img src={images('./bakhareva_ir.png')}></img></Col>
                            <Col lg={6} className={classes.infoStyle}>
                                <h3>Бахарева Ирина Ростиславовна</h3>
                                <p>Директор. Кандидат психологических наук.</p>
                                <p>08 декабря 2014 года награждена Орденом «За вклад в просвещение»</p>
                                <p>Телефон: <a href="tel:+79163535236" className={classes.linkStyle}>+7 916 353-52-36</a></p>
                                <p>Почта: <a href="mailto:ir-znanie@mail.ru" className={classes.linkStyle}>ir-znanie@mail.ru</a></p>
                            </Col>
                        </Row>

                        <h2>Заместители руководителя образовательной организации</h2>
                        {deputies.map((deputy, index) => (
                            <Row data-index={index} className={classes.professorBlock}>
                                <Col lg={5} className={classes.imageStyle}><img src={images('./' + deputy.login + '.png')}></img></Col>
                                <Col lg={6} className={classes.infoStyle}>
                                    <h3>{deputy.name}</h3>
                                    <p>{deputy.position}</p>
                                    <p>{deputy.info}</p>
                                    <p>Телефон: <a href={deputy.phone_number_link} className={classes.linkStyle}>{deputy.phone_number}</a></p>
                                    <p>Почта: <a href={('mailto:' + deputy.mail)} className={classes.linkStyle}>{deputy.mail}</a></p>
                                </Col>
                            </Row>
                        ))}

                        <h2>Педагогический состав</h2>
                        {professors.map((professor, index) => (
                            <Row data-index={index} className={classes.professorBlock}>
                                <Col lg={5} className={classes.imageStyle}><img src={images('./' + professor.login + '.png')}></img></Col>
                                <Col lg={6} className={classes.infoStyle}>
                                    <h3>{professor.name}</h3>
                                    <p>{professor.position}</p>
                                    <p>{professor.info}</p>
                                </Col>
                            </Row>
                        ))}
                    </div>
                </Col>
                <Col lg={4}>
                    <Navigation isShowed={true} />
                </Col>
            </Row>
        </Container>
    )
}

export default aboutProfessors;