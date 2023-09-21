import React from 'react';
import backIcon from '../../../../../public/icons/backIcon.png'
import classes from './subMenu.module.css'
import {BrowserRouter as Router, Link} from 'react-router-dom';
const SubMenu = ({header, items, active, setActive}) => {
    return( 
        <div className={active? classes['subMenu'] + ' ' + classes.active: classes['subMenu']}>
            <div className={classes.headerSubMenu}>
                <img src={backIcon} alt="Назад" onClick={() => setActive(false)}/>
                <h5>
                    {header}
                </h5>
            </div>
            <div className={classes.contentSubMenu}>
                <ul className={classes.listStyle}>
                {items.map((item) => (
                    <li className={classes.linkStyle}>
                        <Link to={item.route}>{item.title}</Link>
                        <span>—</span>
                    </li>
                ))}
                </ul>
            </div>
        </div>
    );
}
export default SubMenu;