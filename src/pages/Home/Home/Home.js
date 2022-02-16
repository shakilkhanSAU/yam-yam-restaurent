import React from 'react';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';
import Banner from '../Banner/Banner';
import Service from '../Services/Service';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Service></Service>
            <Footer></Footer>
        </div>
    );
};

export default Home;