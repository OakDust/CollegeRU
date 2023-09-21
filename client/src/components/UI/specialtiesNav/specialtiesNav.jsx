import React from 'react';
import { Col, Row, Container} from 'react-bootstrap';
import classes from './specialtiesNav.module.css'
import { Link } from 'react-router-dom';
const icons = require.context('../../../../public/icons/practice', false, /\.(png)$/);


const SpecialtiesNav = () => {
    const directions = [
        {
            'name': 'Адвокат',
            'route': '/directions/advocate',
            'icon': 'advocateIcon.png',
        },
        {
            'name': 'Бухгалтер',
            'route': '/directions/credit',
            'icon': 'creditIcon.png',
        },
        {
            'name': 'Учитель начальных классов',
            'route': '/directions/teacher',
            'icon': 'teacherIcon.png',
        },
        {
            'name': 'Дошкольное образование',
            'route': '/directions/preschool',
            'icon': 'preschoolIcon.png',
        },
        {
            'name': 'Сестринское дело',
            'route': '/directions/doctor',
            'icon': 'doctorIcon.png',
        },
        {
            'name': 'Дизайн',
            'route': '/directions/design',
            'icon': 'designIcon.png',
        },
        {
            'name': 'Фармация',
            'route': '/directions/pharmacist',
            'icon': 'pharmacistIcon.png',
        },
    ]

    return( 
        <Container>
            <Row className={classes.navigationBlock}>
                {directions.map((direction) => (
                    <Col className={classes.directionBlock} xs={5} xl={2}>
                        <Link to={direction.route}>
                            <img src={icons('./' + direction.icon)} className={classes.iconStyle}/>
                            <h5>{direction.name}</h5>
                        </Link>
                    </Col>
                ))}
            </Row>
        </Container>   
    );
}
export default SpecialtiesNav;