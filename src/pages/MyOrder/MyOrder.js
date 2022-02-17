import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import MyOrderCart from './MyOrderCart';

const MyOrder = () => {
    const [myOrder, setMyOrder] = useState([]);
    const { user } = useAuth();
    const email = user?.email;
    useEffect(() => {
        const url = `https://young-wildwood-21988.herokuapp.com/myorder/${email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMyOrder(data));
    }, [email]);

    const handleDeleteOrder = id => {
        fetch(`https://young-wildwood-21988.herokuapp.com/deleteOrde/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    alert('Are you Sure you want to cancel you order.')
                    const remainig = myOrder.filter(service => service._id !== id);
                    setMyOrder(remainig);
                }

            });
    }
    return (
        <div>
            <div className="container bottom">
                <h1 className="text-center order-text my-3">Your Orders</h1>
                <div className="row my-5">
                    {
                        myOrder.map(data => <MyOrderCart
                            key={data._id}
                            send={data}
                            func={handleDeleteOrder}
                        ></MyOrderCart>)
                    }
                </div>
            </div>

        </div>
    );
};

export default MyOrder;