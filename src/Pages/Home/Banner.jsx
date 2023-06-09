import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../assets/imgs/banner1.jpg'
import img2 from '../../assets/imgs/banner2.jpg'
import img3 from '../../assets/imgs/banner3.jpg'
import img4 from '../../assets/imgs/banner4.jpg'
import img5 from '../../assets/imgs/banner5.jpg'

const Banner = () => {
    return (
        <Carousel autoPlay={true} interval={2000} infiniteLoop={true}>
            <div>
                <img src={img1} />
            </div>
            <div>
                <img src={img2} />
            </div>
            <div>
                <img src={img3} />
            </div>
            <div>
                <img src={img4} />
            </div>
            <div>
                <img src={img5} />
            </div>
        </Carousel>
    );
};

export default Banner;