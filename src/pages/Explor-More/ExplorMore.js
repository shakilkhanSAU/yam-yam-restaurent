import React, { useEffect, useState } from 'react';
import ServicesCart from '../Home/Services/ServiceCart';
import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header/Header';

const ExplorMore = () => {
    const [ services, setServices ] = useState([]);
    useEffect(() => {
        fetch('https://young-wildwood-21988.herokuapp.com/services')
        .then(result => result.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <Header></Header>
            <div className="container my-5">
        <div className="row">
            {
                services.map(data => <ServicesCart 
                    key={data._id}
                    data={data}
                    ></ServicesCart> )
            }
            </div>
        </div>
            <Footer></Footer>
        </div>
    );
};

export default ExplorMore;