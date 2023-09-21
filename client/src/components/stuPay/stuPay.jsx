import React from 'react';
import {Container} from 'react-bootstrap';
import classes from './stuPay.module.css'
import payEducation from '../../../public/images/payEducation.jpg'


const StuPay = () => {
    return(
        <Container className='my-5'>
            <div className={classes.header}>
                <h1>Оплата обучения</h1>
                <div className={classes.header}>
                    <h4>Загрузить квитанцию</h4>
                    <div className={classes.urlStyle}>
                        <a href={ process.env.REACT_APP_API_URL + 'pdf/student/student_pay/Извещение.pdf' }>Квитация об оплате обучения.pdf</a>
                    </div>
                    <div className={classes.urlStyle}>
                        <a href={ process.env.REACT_APP_API_URL + 'pdf/student/student_pay/Извещение.docx' }>Квитация об оплате обучения.docx</a>
                    </div>
                    <div className={classes.urlStyle}>
                        <a href={ process.env.REACT_APP_API_URL + 'pdf/student/student_pay/Извещение.jpg' }>Квитация об оплате обучения.jpg</a>
                    </div>
                </div>
                <div className={classes.imageStyle}>
                    <img src={payEducation} alt="Оплата обучения"/>
                </div>
            </div>
        </Container>
    )
}
export default StuPay;