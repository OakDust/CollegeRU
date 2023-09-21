import React from 'react';
import { Container } from 'react-bootstrap';
import logo from '../../../public/images/logoNoCapture.png'
import classes from './Loading.module.css'

const Loading = () => {
    return( 
        <div style={{position: "relative"}}>
            <div className={classes.loadingContainer} style={{height: window.innerHeight }}>
                <img className={classes.loadingAnimation} src={logo} alt="" width="auto" height="64px" />
            </div>
        </div>
        
    );
}
export default Loading;