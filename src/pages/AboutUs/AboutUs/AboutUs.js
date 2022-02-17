import React from 'react';
import { Link } from 'react-router-dom';
import about_img from './aboutus.jpg'

const AboutUs = () => {
    return (
        <div className='container'>
            <div className="row view d-flex justify-content-center align-items-center flex-lg-row flex-column-reverse">
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <h2 className='main-header'>Who We Are?</h2>
                    <p className='details'>From 1997, we started our Journey with 2 employ in Dhaka, Bangladesh. Now we have 100 branch in 45 different country. As a restaurant operator, you have to wear many different hats, even if the responsibilities you take on are not within your expertise. Writing is one of those tasks</p>
                    <Link to={`/`}>
                        <button className='custom-btn'>Get in Touch</button>
                    </Link>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <img className='img-fluid' src={about_img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;