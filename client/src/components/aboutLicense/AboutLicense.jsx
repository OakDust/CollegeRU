import React from 'react';
import {Container, Row, Col, Table} from 'react-bootstrap';
import classes from './AboutLicense.module.css';
import Navigation from '../UI/navigation/Navigation.jsx';
const images = require.context('../../../public/images/license', false, /\.(png)$/);

const documents = [
    {
        'route': './rules.png',
        'name': 'Устав',
        'info': '',
        'valid': '',
        'PDFurl': process.env.REACT_APP_API_URL + 'pdf/founding_documents/Устав.pdf',
    },
    {
        'route': './license.png',
        'name': 'Лицензия на осуществление образовательной деятельности (с приложениями)',
        'info': 'Серия 50Л01 №0008960, №77080 от 24.05.2017г.',
        'valid': 'Лицензия действительна бессрочно',
        'PDFurl': process.env.REACT_APP_API_URL + 'pdf/founding_documents/Свидетельство_О_Регистрации.pdf',
    },
    {
        'route': './registry.png',
        'name': 'Выписка из реестра лицензий',
        'info': 'Выписка из реестра лицензий на 04.05.2023г.',
        'valid': '',
        'PDFurl': process.env.REACT_APP_API_URL + 'pdf/founding_documents/Лист_Записи_Единого_Государственного_Реестра_Юридических_Лиц.pdf',
    },
    {
        'route': './accreditation.png',
        'name': 'Свидетельство о государственной аккредитации',
        'info': 'Серия 50А01 №0000271, №4573 ОТ 03.11.2020г.',
        'valid': 'Свидетельство дейсвительно бессрочно',
        'PDFurl': process.env.REACT_APP_API_URL + 'pdf/founding_documents/Свидетельство_О_Постановке_На_Учет_ФНО.pdf',
    }
]

const AboutLicense = () => {
    return (
        <Container className='my-5'>
            <Row>
                <Col lg={8} className={classes.headers}>
                    <h1>Устав, лицензия, аккредитация</h1>
                    <Table>
                        {documents.map((document) => (
                            <tbody>
                                <td>
                                    <a href={document.PDFurl}>
                                        <img src={images(document.route)} className={classes.imageStyle}></img>
                                    </a>
                                </td>
                                <td className={classes.infoStyle}>
                                    <a href={document.PDFurl} className={classes.linkStyle}><h5>{document.name}</h5></a>
                                    <p>{document.info}</p>
                                    <p>{document.valid}</p>
                                </td>
                            </tbody>
                        ))}
                    </Table>
                </Col>
                <Col lg={4}>
                    <Navigation isShowed={true} />
                </Col>
            </Row>

        </Container>
    );
}
export default AboutLicense;