import React, {useState, useEffect } from 'react';
import orgLogo from '../../../public/images/logoWithCapture.png'
import handicapVersionIcon from '../../../public/images/handicapVersion.png'
import classes from './Navbar.module.css'
import { Navbar, Container, Nav, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import NavbarPhones from '../UI/navbarPhones/NavbarPhones.jsx';
import Search from '../UI/search/Search.jsx';
import phoneIcon from '../../../public/icons/phone.png'


const NavBar = () => {
    
    let [studentItems, revealStudent] = useState(true);
    let [orgItems, revealOrg] = useState(true);
    let [abiturientItems, revealAbiturient] = useState(true);
    let [employeeItems, revealEmployee] = useState(true);
    let [educationItems, revealEducation] = useState(true);
    let [specItems, revealSpecialites] = useState(true);
    // let [contactItems, revealContact] = useState(true);
    const [elementVisible, setElementVisible] = useState(true);

    function closeItems() {
        revealAbiturient(abiturientItems=true)
        // revealContact(contactItems=true)
        revealOrg(orgItems=true)
        revealEducation(educationItems=true)
        revealSpecialites(specItems=true)
        revealEmployee(employeeItems=true)
        revealStudent(studentItems=true)
        
        return null
    }

    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1200 ? true : false);

    useEffect(() => {
        function handleResize() {
        if (window.innerWidth < 1200) {
            setIsDesktop(false);
        } else {
            setIsDesktop(true);
        }
        }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
    }, []);

    return( 
        <div>
        {isDesktop ? (
                <div className={classes.navComponent}>
                    <Navbar className='navbar-light'>
                        <Container>
                            <NavLink to="/">
                                <img src={orgLogo} alt="" width="110" height="auto" />
                            </NavLink>
                        <div className='row mx-5'>
                            <Nav className='col mx-4'>
        
                            <Card  className={classes.navDropdown}>
                            <div className={classes.navDropdown} onMouseEnter={() => {closeItems(); revealAbiturient(abiturientItems=false)}}>
                                <NavLink className={classes.navLink}>Абитуриентам</NavLink>
                            </div>
        
                            {!abiturientItems ? (
                                <ListGroup variant="flush" className={classes.itemLined} style={{width: "auto" + 50}} onMouseLeave={() => {closeItems(); revealAbiturient(abiturientItems=true)}}>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <NavLink className={classes.navLink} to="/abiturients/reception">Приемная комиссия 2023</NavLink>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <NavLink className={classes.navLink} to='/abiturients/courses'>Подготовительные курсы</NavLink>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <NavLink className={classes.navLink} to='/abiturients/opendoors'>Дни открытых дверей</NavLink>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <NavLink className={classes.navLink} to='/abiturients/materials'>Дополнительные материалы</NavLink>
                                    </ListGroup.Item>
                                </ListGroup>) : null
                            }
                            </Card>
        
                            <Card  className={classes.navDropdown}>
                            <div className={classes.navDropdown} onMouseEnter={() => {closeItems(); revealStudent(studentItems=false)}}>
                                <NavLink className={classes.navLink}>Студентам</NavLink>
                            </div>
        
                            {!studentItems ? (
                                <ListGroup variant="flush" className={classes.itemLined} style={{width: "auto" + 50}} onMouseLeave={() => {closeItems(); revealStudent(studentItems=true)}}>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <NavLink className={classes.navLink} to='/students/pay'>Оплата обучения</NavLink>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <NavLink className={classes.navLink} to='/students/curators'>Кураторы групп</NavLink>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <NavLink className={classes.navLink} to='/students/materials'>Дополнительные материалы</NavLink>
                                    </ListGroup.Item>
                                </ListGroup>) : null
                            }
                                
                            </Card>
        
                            <Card  className={classes.navDropdown}>
                            <div className={classes.navDropdown} onMouseEnter={() => {closeItems(); revealEmployee(employeeItems=false)}}>
                                <NavLink className={classes.navLink}>Сотрудникам</NavLink>
                            </div>
        
                            {!employeeItems ? (
                                <ListGroup variant='flush' className={classes.itemLined} style={{width: "auto" + 50}} onMouseLeave={() => {closeItems(); revealEmployee(employeeItems=true)}}>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <NavLink className={classes.navLink} to="/employees/employment">Трудоустройство</NavLink>
                                    </ListGroup.Item>
                                </ListGroup>) : null
                            }
                            </Card>
        
                            <Card  className={classes.navDropdown}>
                            <div className={classes.navDropdown} onMouseEnter={() => {closeItems(); revealSpecialites(specItems=false)}}>
                                <NavLink className={classes.navLink}>Направления</NavLink>
                            </div>
                            {!specItems ? (
                                <ListGroup variant="flush" className={classes.itemLined} style={{width: "auto" + 50}} onMouseLeave={() => {closeItems(); revealSpecialites(specItems=true)}}>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <NavLink className={classes.navLink} to="/directions/advocate">Юрист</NavLink>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <NavLink className={classes.navLink} to='/directions/credit'>Бухгалтер</NavLink>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <NavLink className={classes.navLink} to='/directions/teacher'>Учитель начальных классов</NavLink>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <NavLink className={classes.navLink} to='/directions/preschool'>Дошкольное образование</NavLink>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <NavLink className={classes.navLink} to='/directions/doctor'>Сестринское дело</NavLink>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <NavLink className={classes.navLink} to='/directions/design'>Дизайн</NavLink>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <NavLink className={classes.navLink} to='/directions/pharmacist'>Фармация</NavLink>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <NavLink className={classes.navLink} to='/directions/additional'>Дополнительное образование</NavLink>
                                    </ListGroup.Item>
                                </ListGroup>) : null
                            }

        
                            </Card>
                            </Nav>
        
                            <div className='w-100'></div>
        
                            <Nav className='col mx-4'>
        
                            <Card  className={classes.navDropdown}>
                            <div className={classes.navDropdown} onMouseEnter={() => {closeItems(); revealOrg(orgItems=false)}}>
                                <NavLink className={classes.navLink}>Сведения об организации</NavLink>
                            </div>
        
                            {!orgItems ? (
                                <ListGroup variant="flush" className={classes.itemLined} style={{width: "auto" + 50}} onMouseLeave={() => {closeItems(); revealOrg(orgItems=true)}}>
                                    <ListGroup.Item style={{border: "none"}}>
                                        <NavLink className={classes.navLink} to="/about/common">Основные сведения</NavLink>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <NavLink className={classes.navLink} to='/about/structure'>Структура и органы управления</NavLink>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <NavLink className={classes.navLink} to='/about/documents'>Документы</NavLink>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <NavLink className={classes.navLink} to='/about/education'>Образование</NavLink>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <NavLink className={classes.navLink} to='/about/standarts'>Образовательные стандарты и требования</NavLink>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <NavLink className={classes.navLink} to='/about/professors'>Руководство. Педагогический состав</NavLink>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <NavLink className={classes.navLink} to='/about/techSupport'>Материально-техническое обеспечение и оснащенность образовательного процесса</NavLink>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <NavLink className={classes.navLink} to='/about/paidService'>Платные образовательные услуги</NavLink>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <NavLink className={classes.navLink} to='/about/finance'>Финансово-хозяйственная деятельность</NavLink>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <NavLink className={classes.navLink} to='/about/vacanciens'>Вакантные места для приема (перевода) обучающихся</NavLink>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <NavLink className={classes.navLink} to='/about/environment'>Доступная среда</NavLink>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <NavLink className={classes.navLink} to='/about/international'>Международное сотрудничество</NavLink>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <NavLink className={classes.navLink} to='/about/license'>Устав, лицензия, аккредитация</NavLink>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <NavLink className={classes.navLink} to='/about/openness'>Информационная открытость</NavLink>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <NavLink className={classes.navLink} to='/about/partners'>Партнеры</NavLink>
                                    </ListGroup.Item>
                                </ListGroup>) : null
                            }
                            </Card>
        
                            <Card  className={classes.navDropdown}>
                            <div className={classes.navDropdown} onMouseEnter={() => {closeItems(); revealEducation(educationItems=false)}}>
                                <NavLink className={classes.navLink}>Учебная деятельность</NavLink>
                            </div>
        
                            {!educationItems ? (
                                <ListGroup variant="flush" className={classes.itemLined} style={{width: "auto" + 50}} onMouseLeave={() => {closeItems(); revealEducation(educationItems=true)}}>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <NavLink className={classes.navLink} to="/activity/achivements">Наши достижения</NavLink>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <NavLink className={classes.navLink} to='/activity/principles'>Наши принципы</NavLink>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <NavLink className={classes.navLink} to='/activity/hymn'>Гимн колледжа</NavLink>
                                    </ListGroup.Item>
                                    <ListGroup.Item style={{border: "none"}} className='py-0'>
                                        <NavLink className={classes.navLink} to='/activity/photogallery'>Фотогалерея</NavLink>
                                    </ListGroup.Item>
                                </ListGroup>) : null
                            }
                            </Card>
        
                            <Card  className={classes.navDropdown} >
                            <div className={classes.navDropdown}>
                                <NavLink className={classes.navLink} to="/news">Новости</NavLink>
                            </div>
                            </Card>
        
                            <Card  className={classes.navDropdown}>
                            <div className={classes.navDropdown}>
                                <NavLink className={classes.navLink} to="/contact">Контакты</NavLink>
                            </div>
                            </Card>
                            </Nav>
                        </div>
                        <div className='d-inline-flex mx-3 pb-5'>
                            <NavLink className='px-2' to="/contact">
                                <img src={phoneIcon} alt="" width="25" height="25" />
                            </NavLink>
                            <NavLink className='px-2' to="/blind">
                                <img src={handicapVersionIcon} alt="" width="25" height="25" />
                            </NavLink>
            
                            <Search icon_width={25} icon_height={25}/>

                        </div>
                        
        
                        </Container>
                </Navbar>
            </div>
    ): <NavbarPhones/>}
    </div>
                
        
            );
        }
        export default NavBar;











