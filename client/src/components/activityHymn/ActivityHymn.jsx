import React from 'react';
import {Container} from 'react-bootstrap';
import classes from './ActivityHymn.module.css'


const ActivityHymn = () => {
    return(
        <Container className='my-5'>
            <h1 className={classes.header}>Гимн колледжа</h1>
            <div className={classes.video}>
                <iframe 
                    src="https://www.youtube.com/embed/M1rv16V21dw" 
                    title="Гимн Колледжа" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowfullscreen>
                </iframe>
            </div>
            
            <div className={classes.textStyle}>
                <p>
                    Композитор — Федорков Александр.
                    член союза Московских композиторов, заслуженный артист России. 
                </p>
                <p>
                    Поэт — Белкин Григорий. Продюсер, сценарист. 
                    Лауреат международного кинофестиваля «Окно в Европу» за X. фильм «37 роман». 
                    Автор текстов к более чем двум сотням песен из репертуара 
                    И. Кобзона, А. Пугачевой, Л. Лещенко, Ф. Киркорова, И. Аллегровой и других звёзд российской эстрады. 
                    Автор двух поэтических сборников. 
                    Лауреат нескольких фестивалей «Песня года».
                </p>
                <p>Исполнитель — Ирина Бахарева</p>
            </div>
            
        </Container>
    )
}
export default ActivityHymn;