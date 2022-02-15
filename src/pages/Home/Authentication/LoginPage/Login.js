import React from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../../../images/register.png'
import GoogleImg from '../../../../images/Google.png';
const Login = () => {

    return (
        <div className="user-pages m-2">
            <div className=" p-5 h-100">
                <div className="row d-flex align-items-center justify-content-center h-100">
                    <div className="col-md-8 col-lg-7 col-xl-6">
                        {/* loginpage img */}
                        <img src={loginImg} className="img-fluid w-75" alt="" />
                    </div>
                    <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1 login-page">
                        {/* login form start from here */}
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
                            <h5 className='text-center text-decoration-none font-weight-bold mt-2 mb-2' style={{ color: '#680C42 ' }}>OR,Login With Google</h5>
                            <div className="w-75 m-auto">
                                {/* google sign in */}
                                <img src={GoogleImg} alt="" className="w-25 p-2" />
                                {/* <img onClick={signInWithGoogle} src={Gp} alt="" className="w-25 p-2" /> */}

                            </div>
                            <div className="divider d-flex align-items-center p-2">
                                <p className="text-center fw-bold m-auto" style={{ color: '#680C42 ' }}>New Member ? Please register</p>
                            </div>
                            {/* link to Registration page for new users */}
                            <Link to="/register">
                                <input
                                    className="btn btn-allP mt-3"
                                    value="Register >>"
                                />
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;