import {React, useState, useEffect} from 'react';
import classes from './SpecialtiesPhones.module.css'
const images = require.context('../../../../public/images/specialities', false, /\.(png)$/);
// import Swiper core and required components
import SwiperCore, {A11y, Navigation, Pagination, Scrollbar} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Link} from 'react-router-dom';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const specialties=[
    {
        'id': '1',
        'name': 'Юрист',
        'route': '/directions/advocate',
    },
    {
        'id': '2',
        'name': 'Бухгалтер',
        'route': '/directions/credit',
    },
    {
        'id': '3',
        'name': 'Учитель начальных классов',
        'route': '/directions/teacher',
    },
    {
        'id': '4',
        'name': 'Дошкольное образование',
        'route': '/directions/preschool',
    },
    {
        'id': '5',
        'name': 'Сестринское дело',
        'route': '/directions/doctor',
    },
    {
        'id': '6',
        'name': 'Дизайн',
        'route': '/directions/design',
    },
    {
        'id': '7',
        'name': 'Фармация',
        'route': '/directions/pharmacist',
    },
]

let width = window.innerWidth

const SpecialtiesPhones = () => {

    let startCountSlides = 6;

    if (window.innerWidth < 350){
        startCountSlides = 2;
    }
    else if (window.innerWidth < 460) {
        startCountSlides = 3;
    }
    else if (window.innerWidth < 768){
        startCountSlides = 4;
    }
    else if (window.innerWidth <= 991){
        startCountSlides = 5;
    }
    else if (window.innerWidth <= 1199){
        startCountSlides = 6;
    }
    
    const [slidesPerView, setSlidesPerView] = useState(startCountSlides);

    useEffect(() => {
        if (window.screen.width < 350){
            setSlidesPerView(2);
        }
        else if (window.screen.width < 460) {
            setSlidesPerView(3);
        }
        else if (window.screen.width < 768){
            setSlidesPerView(4);
        }
        else if (window.screen.width <= 991){
            setSlidesPerView(5);
        }
        else if (window.screen.width <= 1199){
            setSlidesPerView(6);
        }
    }, [window.screen.width])

    function countSlidesPerView() {
        if (window.innerWidth < 350){
            setSlidesPerView(2);
        }
        else if (window.innerWidth < 460) {
            setSlidesPerView(3);
        }
        else if (window.innerWidth < 768){
            setSlidesPerView(4);
        }
        else if (window.innerWidth <= 991){
            setSlidesPerView(5);
        }
        else if (window.innerWidth <= 1199){
            setSlidesPerView(6);
        }
    }

    window.onresize = countSlidesPerView;
    
    return( 
        <div className={classes.swiperContainer}>
            <Swiper
                slidesPerView={slidesPerView}
                navigation
                pagination={{clickable: true}}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {specialties.map((specialty) => (
                    <SwiperSlide>
                        <Link to={specialty.route}>
                            <img className={classes.speciality} src={images(`./speciality${specialty.id}.png`)} alt={specialty.name}/>
                        </Link>
                    </SwiperSlide>
                ))}
                
            </Swiper>
        </div>
    );
}
export default SpecialtiesPhones;