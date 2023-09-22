import { React, useState } from 'react';
import Links from './links/Links.json';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { NavLink, Link } from 'react-router-dom';
import classes from './Search.module.css'
import searchIcon from '../../../../public/images/searchIcon.png'


const Search = (props) => {
    const [query, setQuery] = useState("")
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
        
    return( 

        <div style={{position: "relative"}}>
            <NavLink className='px-2' href='#'>
                <img  src={searchIcon} alt="" width={props.icon_width} height={props.icon_height} onClick={handleShow}/>  
            </NavLink>
            <Modal show={show} onHide={handleClose}  className={classes.modalStyles}>
                <Modal.Header closeButton>
                    <Modal.Title>Поиск по сайту</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Control
                            size="lg" 
                            type="text"
                            placeholder="Поиск по сайту"
                            autoFocus
                            className={classes.searchInput}
                            onChange={event => setQuery(event.target.value)}
                            value={query}
                        >

                        </Form.Control>
                    </Form>
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
                            <div key={link.title} className={classes.searchResults}>
                                <Link to={link.link} className={classes.linkStyle}>{link.title}</Link>
                                {/* <p>{link.id}</p> */}
                            </div>
                        ))
                    }
                </Modal.Body>
            </Modal>

            {/* <input 
                type="text"
                placeholder="Search here"
                onChange={event => setQuery(event.target.value)}
                value={query}
            /> */}


        </div>
    );
}
export default Search;