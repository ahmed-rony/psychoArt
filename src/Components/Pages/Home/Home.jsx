import React from 'react';
import About from '../../Component/About/About';
import Banner from '../../Component/Banner/Banner';
import Brands from '../../Component/Brands/Brands';
import Nav from '../../Component/Nav/Nav';
import './Home.scss';

const Home = () => {
    return (
        <div className='home'>
            <Nav/>
            <Banner/>
            <Brands/>
            <About/>
        </div>
    );
};

export default Home;