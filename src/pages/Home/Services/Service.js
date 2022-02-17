import React, { useEffect, useState } from 'react';
import ServicesCart from './ServiceCart';

const Service = () => {
    const [ services, setServices ] = useState([]);
    useEffect(() => {
        fetch('https://young-wildwood-21988.herokuapp.com/services')
        .then(result => result.json())
        .then(data => setServices(data))
    },[])
    return (
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
    );
};

export default Service;
