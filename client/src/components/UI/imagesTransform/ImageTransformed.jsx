import React from 'react';
import { Card, Container } from 'react-bootstrap';
import accreditationImage1 from '../../../../public/images/accreditation/accreditationImage1.jpg'
import classes from './ImageTransformed.module.css'

const ImageTransformed = (props) => {
    let imageSource = props.imageSource
    
    const containerStyles = {
        width: "700px",
        height: "100%",
        top: "50%", 
        left: "50%", 
        transform: "translate(-50%, -50%)",
        zIndex: 5,
        position: "absolute",
        margin: "auto"
    }

    

    return( 

        <Container 
            className='d-flex justify-content-center align-items-center'
            style={containerStyles}>

            <Card
                
                className="p-5" 
            >
                <img src={imageSource} />
            </Card>



        </Container>
    );
}
export default ImageTransformed;