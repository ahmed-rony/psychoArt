import React from 'react';
import './Brands.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import brand01 from '../../Images/brands/Binance_logo logo.svg';
import brand02 from '../../Images/brands/Ethereum logo.svg';
import brand03 from '../../Images/brands/Logo_of_Blockchain.io logo.svg';

const Brands = () => {
    const settings = {
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1800,
        slidesToShow: 3,
        slidesToScroll: 1,
      };

    return (
        <div className='brands'>
            <div className="container">
            <Slider {...settings} className="brand-slider">
                <div className="item">
                    <img src={brand01} alt="" />
                </div>
                <div className="item">
                    <img src={brand02} alt="" />
                </div>
                <div className="item">
                    <img src={brand03} alt="" />
                </div>
                <div className="item">
                    <img src={brand02} alt="" />
                </div>
            </Slider>
            </div>
        </div>
    );
};

export default Brands;