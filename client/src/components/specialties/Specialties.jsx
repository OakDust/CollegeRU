import React, {useState, useEffect} from 'react';
import classes from './Specialties.module.css'
const images = require.context('../../../public/images/specialities', false, /\.(png)$/);
import { Col, Container, Row, Card } from 'react-bootstrap';
import SpecialtiesPhones from '../UI/SpecialtiesPhones/SpecialtiesPhones.jsx';
import { NavLink, Link} from 'react-router-dom';

const specialties=[
    {
        'id': '1',
        'name': 'Юрист',
        'route': '/directions/advocate',
    },
    {
        'id': '2',
        'name': 'Бухгалтер',
        'route': '/directions/credit',
    },
    {
        'id': '3',
        'name': 'Учитель начальных классов',
        'route': '/directions/teacher',
    },
    {
        'id': '4',
        'name': 'Дошкольное образование',
        'route': '/directions/preschool',
    },
    {
        'id': '5',
        'name': 'Сестринское дело',
        'route': '/directions/doctor',
    },
    {
        'id': '6',
        'name': 'Дизайн',
        'route': '/directions/design',
    },
    {
        'id': '7',
        'name': 'Фармация',
        'route': '/directions/pharmacist',
    },
]

const Specialties = () => {

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
        <Container>
        {isDesktop ? (
            <div>
                <Row className={classes.specialtiesBlock}>
                    {specialties.map((speciality) => (
                        <Col>
                            <Link className ={classes.specialties} to={speciality.route}>
                                <img src={images(`./speciality${speciality.id}.png`)} alt={speciality.name}/>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </div>

        ):<SpecialtiesPhones/>}
        </Container>
            
    );
}
export default Specialties;