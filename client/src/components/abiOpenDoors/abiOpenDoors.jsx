import React from 'react';
import {Container} from 'react-bootstrap';
import classes from './abiOpenDoors.module.css'
import TableOpenDoors from '../UI/tableOpenDoors/tableOpenDoors.jsx';


const AbiOpenDoors = () => {
    return(
        <Container className='my-5'>
            <div className={classes.openDoorsBlock}>
                <h1>Дни открытых дверей</h1>
                <h4>Расписание дней открытых дверей</h4>
                <TableOpenDoors/>
            </div>
        </Container>
    )
}
export default AbiOpenDoors;