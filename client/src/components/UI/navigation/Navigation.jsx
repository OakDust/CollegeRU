import React from 'react';
import classes from './Navigation.module.css'
import { Link } from 'react-router-dom';

const Navigation = (props) => {
    const isShowed = true;
    const navigationMenu = [
        {
            'id': 10,
            'name': 'Основные сведения',
            'route': '/about/common',
        },
        {
            'id': 11,
            'name': 'Структура и органы управления',
            'route': '/about/structure',
        },
        {
            'id': 12,
            'name': 'Документы',
            'route': '/about/documents',
        },
        {
            'id': 13,
            'name': 'Образование',
            'route': '/about/education',
        },
        {
            'id': 14,
            'name': 'Образовательные стандарты и требования',
            'route': '/about/standarts',
        },
        {
            'id': 15,
            'name': 'Руководство. Педагогический состав',
            'route': '/about/professors',
        },
        {
            'id': 16,
            'name': 'Материально-техническое обеспечение и оснащенность образовательного процесса',
            'route': '/about/techSupport',
        },
        {
            'id': 17,
            'name': 'Платные образовательные услуги',
            'route': '/about/paidService',
        },
        {
            'id': 18,
            'name': 'Финансово-хозяйственная деятельность',
            'route': '/about/finance',
        },
        {
            'id': 19,
            'name': 'Вакантные места для приема (перевода)',
            'route': '/about/vacancies',
        },
        {
            'id': 20,
            'name': 'Доступная среда',
            'route': '/about/environment',
        },
        {
            'id': 21,
            'name': 'Международное Сотрудничество',
            'route': '/about/international',
        },
        {
            'id': 22,
            'name': 'Устав, лицензия, аккредитация',
            'route': '/about/license',
        },
        {
            'id': 23,
            'name': 'Информационная открытость',
            'route': '/about/openness'
        },
        {
            'id': 24,
            'name': 'Партнеры',
            'route': '/about/partners'
        }
    ]

    return( 
        <div>
            {isShowed ? (
                <div className={classes.menuStyle}>
                    <h3>Разделы</h3>
                    <ul className={classes.navigationStyle}>
                        {navigationMenu.map((header) => (
                            <li key={header.id} className={classes.linkMenu}><Link to={header.route} onClick={window.scroll(0, 0)}>{header.name}</Link></li>
                        ))}
                    </ul>
                </div>) : null}
        </div>
        
    );
}
export default Navigation;