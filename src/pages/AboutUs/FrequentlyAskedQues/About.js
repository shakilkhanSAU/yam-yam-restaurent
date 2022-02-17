import React from 'react';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';
import AboutUs from '../AboutUs/AboutUs';
import FrequentlyAsked from './FrequentlyAsked';

const About = () => {
    return (
        <>
            <Header></Header>
            <AboutUs></AboutUs>
            <FrequentlyAsked></FrequentlyAsked>
            <Footer></Footer>
        </>
    );
};

export default About;