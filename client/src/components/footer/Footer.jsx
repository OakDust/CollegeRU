import React from 'react';
import logoFooter from '../../../public/images/LogoFooter.png'
import classes from './Footer.module.css'
import { Container, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom';
const icons = require.context('../../../public/icons', false, /\.(png)$/);


const about_college_list=[
    {
        'id': 0,
        'content': 'Основные сведения',
        'route': '/about/common',
    },
    {
        'id': 1,
        'content': 'Документы',
        'route': '/about/documents',
    },
    {
        'id': 2,
        'content': 'Структура и органы управления',
        'route': '/about/structure',
    },
    {
        'id': 3,
        'content': 'Педагогический состав',
        'route': '/about/professors',
    },
    {
        'id': 4,
        'content': 'Лицензия, аккредитация',
        'route': '/about/license',
    },
]

const about_activity_list=[
    {
        'id' : 5,
        'content': 'Наши достижения',
        'route': '/activity/achivments',
    },
    {
        'id' : 6,
        'content': 'Наши принципы',
        'route': '/activity/principles',
    },
    {
        'id' : 7,
        'content': 'Гимн колледжа',
        'route': '/activity/hymn',
    },
    {
        'id' : 8,
        'content': 'Фотогалерея',
        'route': '/activity/photogalery',
    },
]

const about_contact_list=[
    {
        'id' : 9,
        'content': 'Контакты, схема проезда',
        'route': '/contact',
    }
]


const Footer = () => {
    return( 
        <div className={classes.footerStyles}>
        <Container>
            <Row className={classes.infoBlock}>
                <Col xs={12} lg={3}>
                    <a href="/">
                        <img src={logoFooter} alt="Колледж ЗНАНИЕ" className={classes.footerLogo}/>
                    </a>
                </Col>
                <Col xs={6} lg={3}>
                    <h5 className={classes.h5Capture}>ЗНАНИЕ</h5>
                    <ul className={classes.listStyle}>
                        {about_college_list.map((element) => (
                            <li key={element.id}><Link className={classes.footerLink} to={element.route} onClick={window.scroll(0, 0)}>{element.content}</Link></li>
                        ))}
                    </ul>
                </Col>
                <Col xs={6} lg={3}>
                    <h5 className={classes.h5Capture}>ЖИЗНЬ КОЛЛЕДЖА</h5>
                    <ul className={classes.listStyle}>
                        {about_activity_list.map((element) => (
                            <li key={element.id}><Link className={classes.footerLink} to={element.route}>{element.content}</Link></li>
                        ))}
                    </ul>
                </Col>
                <Col xs={6} lg={3}>
                    <h5 className={classes.h5Capture}>КОНТАКТЫ</h5>
                    <ul className={classes.listStyle}>
                        {about_contact_list.map((element) => (
                            <li key={element.id}><Link className={classes.footerLink} to={element.route}>{element.content}</Link></li>
                        ))}
                    </ul>
                </Col>
            </Row>
        </Container>
        <div className={classes.copyright}> 
            <Row>
                <Col className={classes.safetyText} md={6} lg={8}>
                    Памятка личной безопасности / Противодействие терроризму / Противодействие коррупции
                </Col>
                <Col className={classes.socials} md={6} lg={4}>
                    <a href="#" target='_blank'><img src={icons('./telegram.png')}/></a>
                    <a href="https://vk.com/gtk.znanie" target='_blank'><img src={icons('./vk.png')}/></a>
                    <a href="#" target='_blank'><img src={icons('./whatsapp.png')}/></a>
                </Col>
            </Row>
            <p>© 2023 Колледж "ЗНАНИЕ"</p>
        </div>
    </div>
    );
}
export default Footer;