import React, {useState} from 'react';
import { Row, Col, Container} from 'react-bootstrap';
import classes from './MobileMenu.module.css'
import SubMenu from '../subMenu/subMenu.jsx'
import { Link } from 'react-router-dom';


const MobileMenu = ({active, setActive, menuLinks, menuItems}) => {
    //In the menu, you need to disable the scrolling of the main page
    const body = document.body;

    function disableScroll() {
        body.classList.add(classes.disableScroll);
    }
    function enableScroll() {
        body.classList.remove(classes.disableScroll);
    }
    {active ? disableScroll() : enableScroll()}


    return( 
        <div className={active?(classes['mobileMenu'] + ' ' + classes.active):(classes['mobileMenu'])}>
            {menuItems.map((item) => (
                <SubMenu active={item.subMenuActive} setActive={item.setSubMenuActive} items={item.subMenu} header={item.title}/>
            ))}
            <div className={classes.headerMenu}>
                <h5>ГЛАВНАЯ</h5>
            </div>
            <div className={classes.contentMenu}>
                <Container>
                    <Row className={classes.itemsBlock}>
                        {menuItems.map((item) => (
                            <Col xs={5} onClick={() => item.setSubMenuActive(!item.subMenuActive)} className={classes.items}>
                                <img src={item.icon} alt={item.title}/>
                                <h5>{item.title}</h5>
                            </Col>
                        ))}
                        {menuLinks.map((item) => (
                            <Col xs={5} className={classes.items}>
                                <Link to={item.link} className={classes.links}>
                                    <img src={item.icon} alt={item.title}/>
                                    <h5>{item.title}</h5>
                                </Link>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </div>
    );
}
export default MobileMenu;