import React from 'react';
import banner_img from '../../images/banner.png';
import '../style/banner.css'

const Banner = () => {
    return (
        <div>
            <div className="row view d-flex justify-content-center align-items-center flex-lg-row flex-column-reverse">
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <h1 className='main-header'>Delicious food for <br />your cravings</h1>
                    <p className='details'>We made fresh and healty meals with different recipes</p>
                    <button className='custom-btn'>View Menu</button>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <img className='img-fluid' src={banner_img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;