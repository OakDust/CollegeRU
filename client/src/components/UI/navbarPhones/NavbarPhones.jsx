import { React, useState } from 'react';
import classes from './NavbarPhones.module.css'
import {Row, Col, Modal, NavbarBrand, Container} from 'react-bootstrap';
import orgLogo from '../../../../public/images/logoWithCapture.png'
import Search from '../search/Search.jsx';
import learnIcon from '../../../../public/icons/learnIcon.png'
import MobileMenu from './mobileMenu/MobileMenu.jsx';
import { NavLink } from 'react-router-dom';
import phoneIcon from '../../../../public/icons/phone.png'

const NavbarPhones = () => {
    
    const [abiturientsListActive, setAbiturientsListActive] = useState(false);
    const [studentsListActive, setStudentsListActive] = useState(false);
    const [employeeListActive, setEmployeeListActive] = useState(false);
    const [directionsListActive, setDirectionsListActive] = useState(false);
    const [organizationListActive, setOrganizationListActive] = useState(false);
    const [activityListActive, setActivityListActive] = useState(false);
    const [mobileMenuActive, setMobileMenuActive] = useState(false);

    const abiturients_items = [
        {
            'title': 'Приемная комиссия 2023',
            'route': '/abiturients/reception',
        },
        {
            'title': 'Подготовительные курсы',
            'route': '/abiturients/courses',
        },
        {
            'title': 'Дни открытых дверей',
            'route': '/abiturients/opendoors',
        },
        {
            'title': 'Дополнительные материалы',
            'route': '/abiturients/materials',
        },
    ]

    const students_items = [
        {
            'title': 'Оплата обучения',
            'route': '/students/pay',
        },
        {
            'title': 'Кураторы групп',
            'route': '/students/curators',
        },
        {
            'title': 'Дополнительные материалы',
            'route': '/students/materials',
        },
    ]

    const employee_items = [
        {
            'title': 'Трудоустройство',
            'route': '/employees/employment',
        },
    ]

    const directions_items = [
        {
            'title': 'Юрист',
            'route': '/directions/advocate',
        },
        {
            'title': 'Бухгалтер специалист банковского дела',
            'route': '/directions/credit',
        },
        {
            'title': 'Учитель начальных классов',
            'route': '/directions/teacher',
        },
        {
            'title': 'Дошкольное образование',
            'route': '/directions/preschool',
        },
        {
            'title': 'Сестринское дело',
            'route': '/directions/doctor',
        },
        {
            'title': 'Дизайн',
            'route': '/directions/design',
        },
        {
            'title': 'Фармация',
            'route': '/directions/pharmacist',
        },
        {
            'title': 'Дополнительное образование',
            'route': '/directions/additional',
        },
    ]

    const organization_items = [
        {
            'title': 'Основные сведения',
            'route': '/about/common',
        },
        {
            'title': 'Структура и органы управления',
            'route': '/about/structure',
        },
        {
            'title': 'Документы',
            'route': '/about/documents',
        },
        {
            'title': 'Образование',
            'route': '/about/education',
        },
        {
            'title': 'Образовательные стандарты и требования',
            'route': '/about/standarts',
        },
        {
            'title': 'Руководство. Педагогический состав',
            'route': '/about/professors',
        },
        {
            'title': 'Материально-техническое обеспечение и оснащенность образовательного процесса',
            'route': '/about/techSupport',
        },
        {
            'title': 'Платные образовательные услуги',
            'route': '/about/paidService',
        },
        {
            'title': 'Финансово-хозяйственная деятельность',
            'route': '/about/finance',
        },
        {
            'title': 'Вакантные места для приема (перевода)',
            'route': '/about/vacancies',
        },
        {
            'title': 'Доступная среда',
            'route': '/about/environment',
        },
        {
            'title': 'Международное Сотрудничество',
            'route': '/about/international',
        },
        {
            'title': 'Устав, лицензия, аккредитация',
            'route': '/about/license',
        },
        {
            'title': 'Информационная открытость',
            'route': '/about/openness'
        },
        {
            'title': 'Партнеры',
            'route': '/about/partners'
        }
    ]

    const activity_items = [
        {
            'title': 'Наши достижения',
            'route': '/activity/achivements',
        },
        {
            'title': 'Наши принципы',
            'route': '/activity/principles',
        },
        {
            'title': 'Гимн колледжа',
            'route': '/activity/hymn',
        },
        {
            'title': 'Фотогалерея',
            'route': '/activity/galery',
        },
    ]


    const menu_items = [
        {
            'title': 'Абитуриентам',
            'icon': learnIcon,
            'subMenuActive': abiturientsListActive,
            'setSubMenuActive': setAbiturientsListActive,
            'subMenu': abiturients_items,
        },
        {
            'title': 'Студентам',
            'icon': learnIcon,
            'subMenuActive': studentsListActive,
            'setSubMenuActive': setStudentsListActive,
            'subMenu': students_items,
        },
        {
            'title': 'Сотрудникам',
            'icon': learnIcon,
            'subMenuActive': employeeListActive,
            'setSubMenuActive': setEmployeeListActive,
            'subMenu': employee_items,
        },
        {
            'title': 'Направления',
            'icon': learnIcon,
            'subMenuActive': directionsListActive,
            'setSubMenuActive': setDirectionsListActive,
            'subMenu': directions_items,
        },
        {
            'title': 'Сведения об организации',
            'icon': learnIcon,
            'subMenuActive': organizationListActive,
            'setSubMenuActive': setOrganizationListActive,
            'subMenu': organization_items,
        },
        {
            'title': 'Учебная деятельность',
            'icon': learnIcon,
            'subMenuActive': activityListActive,
            'setSubMenuActive': setActivityListActive,
            'subMenu': activity_items,
        },
    ]

    const menu_links = [
        {
            'title': 'Контакты',
            'icon': learnIcon,
            'link': '/contact',
        },
        {
            'title': 'Новости',
            'icon': learnIcon,
            'link': '/news',
        }
    ]

    return( 
        <div className={classes.alternativeNav}>
            <MobileMenu active={mobileMenuActive} setActive={setMobileMenuActive} menuLinks={menu_links} menuItems={menu_items}/>
            <Container>
                <Row className={classes.mobileNavbar}>
                    <Col xs={8} sm={9}  className={classes.navbarLogo}>
                        <NavLink to="/" >
                            <img src={orgLogo} alt="Колледж 'ЗНАНИЕ'" className={classes.logoStyle} />
                        </NavLink>
                    </Col>
                    <Col xs={4} sm={3} className={classes.navIcons}>
                        <NavLink to="/contact">
                                <img src={phoneIcon} alt="" width="25" height="25" />
                        </NavLink>
                        <div>
                            <Search icon_width={28} icon_height={28}/> 
                        </div>
                        <div className={mobileMenuActive?(classes['burgerButton'] + " " + classes.active):(classes['burgerButton'])} onClick={() => setMobileMenuActive(!mobileMenuActive)}>
                            <span/>
                        </div>
                    </Col>  
                </Row>
            </Container>
        </div>
    );
}
export default NavbarPhones;