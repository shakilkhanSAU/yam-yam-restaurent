import React from 'react';
import { Link } from 'react-router-dom';
import regImg from '../../../../images/register.png';
import './Registration.css'
const Registration = () => {
    return (
        <div className="user-pages m-2">
            <div className="p-5 h-100">
                <div className="row d-flex align-items-center justify-content-center h-100">
                    <div className="col-md-8 col-lg-7 col-xl-6">
                        <img src={regImg} className="img-fluid w-75" alt="" />
                    </div>
                    <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1 login-page">

                        <form className="form-container">
                            <h3 className="text-center title mb-2" style={{ color: '#680C42 ' }}> Registration </h3>
                            <label className='labelText'>Name</label>
                            <input
                                className="form-control mb-3 p-2"
                                type="name"
                                name="name"
                                placeholder="Enter your Name"
                            />

                            <label className='labelText'>Email Address</label>
                            <input
                                className="form-control mb-3 p-2"
                                type="email"
                                name="email"
                                placeholder="Enter your Email"
                            />
                            <label className='labelText'>Password</label>
                            <input
                                className="form-control mb-3 p-2"
                                type="password"
                                name="password"
                                placeholder="Enter at least 6 digits"
                            />
                            <input
                                className="btn btn-allP mt-3"
                                type="submit"
                                value="Register"
                            />
                            <div className="form-footer p-2 mb-3">
                                <h4 style={{ color: '#680C42 ' }}>Already have an account?</h4>
                                <Link to="/login">
                                    <h5 className="text-decoration-none" style={{ color: '#680C42 ' }}>Please,Login</h5>
                                </Link>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Registration;