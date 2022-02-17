import React, { useEffect, useState } from 'react';
import AllOrderCart from './AllOrderCart';

const AllOrders = () => {
    const [allOrder, setAllOrder] = useState([]);
    useEffect(() => {
        fetch('https://young-wildwood-21988.herokuapp.com/allorder')
            .then(res => res.json())
            .then(data => setAllOrder(data))
    }, []);
    const handleAllDelete = id => {
        fetch(`https://young-wildwood-21988.herokuapp.com/deleteaddOrdre/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    alert('Are you Sure you want to cancel you order.')
                    const remainig = allOrder.filter(service => service._id !== id);
                    setAllOrder(remainig);
                }

            });
    }

    const handleUpdate = id => {
        const ship = "On the way...";
        const ojecetdata = { ship };
        fetch(`https://young-wildwood-21988.herokuapp.com/updateOrdre/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(ojecetdata)
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    alert('You update the product Successfully.')
                }

            });
    }
    return (
        <div className="container bottom">
            <h1 className="text-center my-3 all-title">Mannage all order.</h1>
            <div className="row">
                {
                    allOrder?.map(result => <AllOrderCart
                        key={result._id}
                        sentdata={result}
                        funck={handleAllDelete}
                        sfunck={handleUpdate}
                    ></AllOrderCart>)
                }
            </div>
        </div>
    );
};

export default AllOrders;