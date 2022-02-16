import React, { useEffect, useState } from 'react';
import ServicesCart from './ServiceCart';

const Service = () => {
    const [ services, setServices ] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
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
