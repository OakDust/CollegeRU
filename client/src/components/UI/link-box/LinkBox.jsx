import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import classes from './LinkBox.module.css'
import { redirect } from 'react-router-dom'


const LinkBox = () => {
    let caption = useState('')

    const returnPath = (caption) => {
        return process.env.REACT_APP_API_URL + 'curriculum/' + caption
    }
    
    
    return( 
        <Container className='my-5'>
                    <Row>
                        <h1 className='display-5'>График учебного процесса</h1>
                        <Col>
                            <div className={classes.colClass}>
                                <a href={returnPath(caption = 'Календарный_Учебный_График_34.02.01_Сестринское_Дело_2022_2025.pdf')}>Календарный учебный график 34.02.01 Сестринское дело 2022-2025.pdf</a>
                            </div>
                            <div className={classes.colClass}>
                                <a href={returnPath(caption = 'Календарный_Учебный_График_38.02.01_Экономика_И_Бухгалтерский_Учет_2021_2024.pdf')}>Календарный учебный график 38.02.01 Экономика и бухгалтерский учет 2021-2024.pdf</a>
                            </div>
                            <div className={classes.colClass}>
                                <a href={returnPath(caption = 'Календарный_Учебный_График_40.02.01_Право_И_Организация_Социального_Обеспечения_2021_2024.pdf')}>Календарный учебный график 40.02.01 Право и организация социального обеспечения 2021-2024.pdf</a>
                            </div>
                            <div className={classes.colClass}>
                                <a href={returnPath(caption = 'Календарный_Учебный_График_44.02.01_Дошкольное_Образование_2021_2025.pdf')}>Календарный учебный график 44.02.01 Дошкольное образование 2021-2025.pdf</a>
                            </div>
                            <div className={classes.colClass}>
                                <a href={returnPath(caption = 'Календарный_Учебный_График_44.02.02_Преподавание_В_Начальных_Классах_2021_2025.pdf')}>Календарный учебный график 44.02.02 Преподавание в начальных классах 2021-2025.pdf</a>
                            </div>
                            <div className={classes.colClass}>
                                <a href={returnPath(caption = 'Календарный_Учебный_График_54.02.01_Дизайн_2021_2025.pdf')}>Календарный учебный график 54.02.01 Дизайн 2021-2025.pdf</a>
                            </div>
                        </Col>
                     
                    </Row>
                </Container>
    );
}
export default LinkBox;