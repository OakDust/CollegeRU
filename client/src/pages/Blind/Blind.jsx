import React, { useState } from 'react';
import orgLogo from './../../../public/images/logoWithCapture.png'
import searchIcon from './../../../public/images/searchIcon.png'
import webCabinetIcon from './../../../public/images/webCabinetIcon.png'
import blindVersionIcon from './../../../public/images/handicapVersion.png'
import imagesVIVersion from './../../../public/icons/imagesVIVersion.png'
import classes from './Blind.module.css'
import Links from '../../components/UI/search/links/Links.json';

import { Navbar, Container, Nav, Card, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import AboutComponent from '../../components/aboutComponent/AboutComponent.jsx';
import AboutEducation from '../../components/aboutEducation/aboutEducation.jsx';
import News from '../../components/news/News.jsx';
import Search from '../../components/UI/search/Search.jsx';
import Contact from '../../components/contact/Contact.jsx';
import MyTable from '../../components/UI/table/Table.jsx'
const Blind = () => {
    let [dataDisplay, showData] = useState(0)
    let [imagesShown, changeImagesShown] = useState(false)
    const [query, setQuery] = useState("")

    let multiplicator = 1

    let [Model, setModel] = useState({
        fontSize: 20,
        color: 'black',
        backgroundColor: 'white',
        barColor: 'lightgray'
    })

    const searchFormStyles = {
        width: '660px',
        height: '45px',
        border: `3px solid ${Model.color}`,
    }

    function handleFont(multiplicator) {
        Model.fontSize = 20
        setModel({
            fontSize: Model.fontSize * multiplicator
        })

    }

    function handleBackground(backgroundColor, color, barColor) {
        let newModel = {
            backgroundColor: backgroundColor,
            color: color,
            barColor: barColor
        }
        setModel(Model => ({
            ...Model,
            ...newModel
        }))
        document.querySelectorAll('p').forEach(element => {
            element.style.color = Model.color
        })
        document.querySelectorAll('.education-links').forEach(element => {
            element.style.color = Model.color
        })
    }

    function changeVisibility(imagesShown) {
        changeImagesShown(!imagesShown)
        let images = document.querySelectorAll('img');

        for (let i = 2; i < images.length; i++) {
            let image = images[i]
            image.style.visibility = imagesShown ? 'visible' : 'hidden';
        }
    }

    return( 
        <div 
            className = {classes['blind']} 
            style = {{
                backgroundColor: `${Model.backgroundColor}`,
                color: `${Model.color}`
            }}
        >
            <div className = {classes['blind-bar']} style = {{backgroundColor: `${Model.barColor}`}} >
                    <Row className = {classes['bar-items']}>
                        <Col className = {classes['font-transformer']}>
                            <span style = {Model.fontSize == 20 ? ({borderBottom: 'solid 3px', paddingBottom: '6px'}) : null} onClick = {() => { handleFont(multiplicator = 1) }}>A</span>
                            <span style = {Model.fontSize == 30 ? ({borderBottom: 'solid 3px', paddingBottom: '6px'}) : null} onClick = {() => { handleFont(multiplicator = 1.5) }}>A</span>
                            <span style = {Model.fontSize == 40 ? ({borderBottom: 'solid 3px', paddingBottom: '6px'}) : null} onClick = {() => { handleFont(multiplicator = 2) }}>A</span>
                        </Col>
                        <Col className = {classes['bg-transformer']}>
                            <span onClick = {() => { handleBackground(Model.backgroundColor = 'white', Model.color = 'black', Model.barColor = 'lightgray');  }}>C</span>
                            <span onClick = {() => { handleBackground(Model.backgroundColor = 'black', Model.color = '#00c40a', Model.barColor = 'gray');  }}>C</span>
                            <span onClick = {() => { handleBackground(Model.backgroundColor = 'black', Model.color = 'white', Model.barColor = 'gray');  }}>C</span>
                        </Col>
                        <Col>
                            <NavLink style = {{cursor: 'pointer'}} onClick = {() => { changeVisibility(imagesShown) }}>
                                <img src = {imagesVIVersion} alt = "Выключить изображения" width = 'auto' height = {48}/>
                            </NavLink>
                        </Col>
                        <Col className = {classes['link-styles']}>
                            <NavLink to = "/" style = {{textDecoration: 'none', color: `${Model.color}`}}>Обычная версия</NavLink>
                        </Col>
                    </Row>
                   
            </div>
            <Container>
                <Navbar className = 'navbar-light' >
                    <Container flex>
                        <Navbar.Brand href = "/">
                            <img src = {orgLogo} alt = "" width = "160" height = "auto" />
                        </Navbar.Brand>

                        <div>
                            <input 
                                type = "text" 
                                placeholder = 'Поиск' 
                                style = {searchFormStyles}
                                onChange = {event => setQuery(event.target.value)}
                                value = {query}
                            />
                            {/* <img src={searchIcon} alt="" width={50} height={50}/> */}
                        </div>
                    </Container>
                </Navbar>
            
                <Container className = {classes['link-box']}>
                    <Row>
                        <Col>
                            <a style = {{cursor: 'pointer'}} onClick = { () => { showData(dataDisplay = 0) }}>Колледж</a>
                        </Col>
                        <Col>
                            <a style = {{cursor: 'pointer'}} onClick = { () => { showData(dataDisplay = 1) }}>Образование</a>
                        </Col>
                        <Col>
                            <a style = {{cursor: 'pointer'}} onClick = { () => { showData(dataDisplay = 2) }}>Структура</a>
                        </Col>
                        <Col>
                            <a style = {{cursor: 'pointer'}} onClick = { () => { showData(dataDisplay = 3) }}>Новости</a>
                        </Col>
                        <Col>
                            <a style = {{cursor: 'pointer'}} onClick = { () => { showData(dataDisplay = 4) }}>Контакты</a>
                        </Col>
                    </Row>
                </Container>
                <Container 
                    className = {classes['search-result']}
                >
                        {
                            Links.filter(link => {
                                if (query === "") {
                                    //if query is empty
                                    return "";
                                } else if (link.title.toLowerCase().includes(query.toLowerCase())) {
                                    //returns filtered array
                                    return link;
                                }
                            }).map((link) => (
                                <div key = {link.title} className = {classes['vi-search']} >
                                    <a 
                                        href = {link.link}
                                        className = {classes['link-styles']} 
                                        style = {{
                                            color: `${Model.color}`,
                                            fontSize: `${Model.fontSize}px`
                                        }}
                                    >
                                        {link.title}
                                    </a>
                                    {/* <p>{link.id}</p> */}
                                </div>
                            ))
                        }
                    </Container>

                <div
                    style = {{
                        fontSize: `${Model.fontSize}px`,
                        color: `${Model.color}`
                    }}
                >
                    {dataDisplay == 0 ? 
                        
                        <AboutComponent isShowed = {false} />
                    : null}

                    {dataDisplay == 1 ? 
                        <AboutEducation isShowed = {false} Model = {Model} />
                    : null}

                    {dataDisplay == 2 ? 
                        <MyTable />
                    : null}

                    {dataDisplay == 3 ? 
                        <News />
                    : null}

                    {dataDisplay == 4 ? 
                        <Contact />
                    : null}
                </div>
                
                
            </Container>

            <footer>
                <Container>
                    <hr className = {classes['underline']} size="8" /> 

                    <Navbar className = 'navbar-light' >
                        <Container className = {classes['link-box']}>

                            <Row className = {classes['bar-items']}>
                                <Col>
                                    <a 
                                        href = "#" 
                                        onClick = { () => { showData(dataDisplay = 0) }}
                                        style = {{
                                            color: `${Model.color}`,
                                            fontSize: `${Model.fontSize}px`
                                        }}>
                                            Колледж
                                    </a>
                                </Col>
                                <Col>
                                    <a 
                                        href = "#" 
                                        style = {{
                                            color: `${Model.color}`,
                                            fontSize: `${Model.fontSize}px`
                                        }}>
                                            Карта сайта
                                    </a>
                                </Col>
                                <Col>
                                    <a 
                                        href = "#" 
                                        onClick = { () => { showData(dataDisplay = 4) }}
                                        style = {{
                                            color: `${Model.color}`,
                                            fontSize: `${Model.fontSize}px`
                                        }}>
                                            Контакты
                                    </a>
                                </Col>
                            </Row>
                        </Container>
                    </Navbar>
                </Container>
            </footer>
        </div>
    );
}
export default Blind;