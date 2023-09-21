import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import classes from './AboutEnvironment.module.css'
import Navigation from "../UI/navigation/Navigation.jsx";
import tutorSchoolImage from '../../../public/images/tutorSchool.jpg'

const AboutEnvironment = () => {
    return( 
        <Container className='my-5'>
            <Row>
                <Col lg={8} className={classes.header}>
                    <h1>Доступная среда</h1>
                    <h4>
                        Ссылки на перечень электронных образовательных ресурсов, 
                        приспособленных для использования инвалидами и лицами 
                        с ограниченными возможностями здоровья
                    </h4>
                    <div className={classes.resourcesBlock}>
                        <img src={tutorSchoolImage} className={classes.imageStyle} alt="Школа тьютора" ></img>
                        <h5>ГБПОУ МО "Дмитровский техникум"</h5>
                        <a className={classes.linkStyle} href="https://dmitrovt.ru/regionalnaya-shkola-tyutora-v-sisteme-professionalnogo-obrazovaniya-moskovskoj-oblasti/">
                            Региональная Школа тьютора в системе профессионального образования Московской области
                        </a>
                    </div>
                </Col>
                <Col lg={4}>
                    <Navigation isShowed={true} />
                </Col>
            </Row>
                
        </Container>
    );
}
export default AboutEnvironment;