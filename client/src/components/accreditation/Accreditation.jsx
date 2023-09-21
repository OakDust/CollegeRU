import React, { useState } from 'react';
import classes from './Accreditation.module.css'
import accreditationImage1 from '../../../public/images/accreditation/accreditationImage1.jpg'
import accreditationImage2 from '../../../public/images/accreditation/accreditationImage2.jpg'
import accreditationImage3 from '../../../public/images/accreditation/accreditationImage3.jpg'
import accreditationImage4 from '../../../public/images/accreditation/accreditationImage4.jpg'
import accreditationBackground from '../../../public/images/accreditation/accreditationBackground.png'
import { Col, Container, Row } from 'react-bootstrap';


const Accreditation = () => {   

    return( 
        <div className={classes.accreditationBlock} style={{backgroundImage: "url('" + accreditationBackground + "'", backgroundSize: "cover"}}>
                
            <Container className={classes.headers}>
                <h1>Лицензия и государственная аккредитация</h1>
                <Row>
                    <Col className={classes.licenseBlock} xs={6} lg={3}>
                        <a href="">
                            <img className={classes.licenseImage} src={accreditationImage1} alt=""/>
                        </a>
                        <p>Лицензия на осуществление образовательной деятельности №77080 от 24 мая 2017 г. Серия: 50Л01 №0008960</p>
                    </Col>
                    <Col className={classes.licenseBlock} xs={6} lg={3}>
                        <a href="#">
                            <img className={classes.licenseImage} src={accreditationImage2} alt=""/>
                        </a>
                        <p>Приложение №1 к лицензии на осуществление образовательной деятельности</p>
                    </Col>
                    <Col className={classes.licenseBlock} xs={6} lg={3}>
                        <a href="#">
                            <img className={classes.licenseImage} src={accreditationImage3} alt=""/>
                        </a>
                        <p>Свидетельство о государственной аккредитации от 23 июня 2017г. Серия: 50А01 №0000172</p>
                    </Col>
                    <Col className={classes.licenseBlock} xs={6} lg={3}>
                        <a href="#">
                            <img className={classes.licenseImage} src={accreditationImage4} alt=""/>
                        </a>
                        <p>Приложение №1 к свидетельству о государственной аккредитации от 23 июня 2017 г. №4201</p>
                    </Col>

                </Row>
            </Container>    
        </div>
    );
}
export default Accreditation;