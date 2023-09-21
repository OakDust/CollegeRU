import React, { useState } from 'react';
import { Button, Card, Container, Form, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import { ABOUT_ROUTE } from '../../../utils/consts';
import classes from './Auth.module.css'



const Auth = () => {
    return( 
        <div className={classes.authBlock}>

        <Container
            className={classes.containerStyles}
        >
        <Card style={{width: 700, height: 600, position: 'fixed'}} className="p-5">
            
            <h1 className='display-4 m-auto'>Авторизация</h1>
            <Form className='d-flex flex-column'>
                <Form.Control
                    className='mt-2'
                    placeholder='Введите ваш e-mail:'
                />
                    
                <Form.Control
                    className='mt-2'
                    placeholder='Введите ваш пароль:'
                />

                     <div className='d-flex mt-3 '>
                        <div className='row justify-content-between px-2'>
                            <div className='col'>
                                Нет аккаунта?
                            </div> 
                            <div className='col'>
                                <NavLink to={ABOUT_ROUTE}>Зарегистрироваться</NavLink>
                            </div>
                        </div>
                        
                    </div>

                   
                    <Button
                        className='mt-3 align-self-end'
                        variant={'outline-success'}
                    >
                        Войти
                    </Button>
            </Form>
            
        </Card>
        
        </Container>
        </div>
    );
}
export default Auth;