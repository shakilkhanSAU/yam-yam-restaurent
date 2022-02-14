import React, { useEffect, useState } from 'react';
import ServicesCart from './ServicesCart';

const Service = () => {
    const [ services, setServices ] = useState([]);
    useEffect(() => {
        fetch('./data.json')
        .then(result => result.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="row">
            {
                services.map(data => <ServicesCart 
                    key={data.id}
                    data={data}
                    ></ServicesCart> )
            }
            </div>
    );
};

export default Service;