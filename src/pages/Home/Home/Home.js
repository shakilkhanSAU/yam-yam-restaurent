import React from 'react';
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
            <Footer></Footer>
        </div>
    );
};

export default Home;