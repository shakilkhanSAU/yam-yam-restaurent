import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../../../images/notfound.gif';
import './NotFound.css'
const NotFound = () => {
    return (
        <div>
            <div className='notfound-img d-flex justify-content-center p-5'>
                <img style={{ width: '75%' }} src={notfound} alt="" />
            </div>
            <div className="d-flex justify-content-center">
                <Link to="/"><button className="back-btn">Back To Home</button>
                </Link>
            </div>
        </div >

    );
};

export default NotFound;