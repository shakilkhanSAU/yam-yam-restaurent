import React from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../../../images/login.png'
const Login = () => {
    return (
        <div className="user-pages m-2">
            <div className=" p-5 h-100">
                <div className="row d-flex align-items-center justify-content-center h-100">
                    <div className="col-md-8 col-lg-7 col-xl-6">
                        <img src={loginImg} className="img-fluid w-100" alt="" />
                    </div>
                    <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1 login-page">
                        <form className="form-container">
                            <h3 className="text-center font-weight-bold mb-4" style={{ color: '#680C42 ' }}> Login </h3>
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
                                value="Login"
                            />

                            <div className="divider d-flex align-items-center m-4">
                                <p className="text-center fw-bold m-auto" style={{ color: '#680C42 ' }}>New Member ? Please register</p>
                            </div>
                            <Link to="/register">
                                <h5 className="text-center text-decoration-none font-weight-bold" style={{ color: '#680C42 ' }}> Please register</h5>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;