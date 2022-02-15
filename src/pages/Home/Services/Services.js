import React, { useEffect, useState } from 'react';
import ServicesCart from './ServiceCart';


const Service = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/shakilkhanSAU/yam-yam-restaurent/development/public/data.json')
            .then(result => result.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="container my-5">
            <div className="row">
                {
                    services.map(data => <ServicesCart
                        key={data.id}
                        data={data}
                    ></ServicesCart>)
                }
            </div>
        </div>
    );
};

export default Service;