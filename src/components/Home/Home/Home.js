import React from 'react';
import Services from '../Services/Services';
import '../style/home.css'
import Banner from './Banner';

const home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
        </div>
    );
};

export default home;