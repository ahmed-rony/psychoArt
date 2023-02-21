import React from 'react';
import About from '../../Component/About/About';
import Banner from '../../Component/Banner/Banner';
import Brands from '../../Component/Brands/Brands';
import Collection from '../../Component/Collection/Collection';
import Creator from '../../Component/Creator/Creator';
import FAQ from '../../Component/FAQ/FAQ';
import Featured from '../../Component/Featured/Featured';
import Footer from '../../Component/Footer/Footer';
import GetStarted from '../../Component/GetStarted/GetStarted';
import Nav from '../../Component/Nav/Nav';
import './Home.scss';

const Home = () => {
    return (
        <div className='home'>
            <Nav/>
            <Banner/>
            <Brands/>
            <About/>
            <Collection/>
            <Featured/>
            <Creator/>
            <FAQ/>
            <GetStarted/>
            <Footer/>
        </div>
    );
};

export default Home;