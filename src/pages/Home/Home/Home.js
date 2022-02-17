import React from 'react';
import FrequentlyAsked from '../../AboutUs/FrequentlyAskedQues/FrequentlyAsked';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';
import Banner from '../Banner/Banner';
import Service from '../Services/Service';
import Comments from './Comments';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Service></Service>
            <Comments></Comments>
            <FrequentlyAsked></FrequentlyAsked>
            <Footer></Footer>
        </div>
    );
};

export default Home;