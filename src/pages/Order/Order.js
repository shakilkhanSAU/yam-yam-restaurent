import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import '../style/order.css';
import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header/Header';

const Order = () => {
    const [orderDetails, setOrderDetails] = useState([]);
    const {id} = useParams();
    const {user} = useAuth();
    useEffect(() => {
        fetch(`https://young-wildwood-21988.herokuapp.com/services/${id}`)
        .then(res => res.json())
        .then(data => setOrderDetails(data))
    }, [id]);
    console.log(orderDetails);

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        data.status = "Pending..."
        fetch('https://young-wildwood-21988.herokuapp.com/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    })
        .then()
        alert('Your order is Succenss.')
        
    
    };
    const {name} = orderDetails;
    return (
    <>
    <Header></Header>
        <div className="container mt-5 order-from bottom">
            <form onSubmit={handleSubmit(onSubmit)}>
                
                {(user.email || user.displayName) && <input defaultValue={user.displayName} {...register("name")} placeholder="Name" />} <br />

                {(user.email || user.displayName) && <input type="email" defaultValue={user.email} {...register("email")} placeholder="Email"  />} <br />


                {name && <input defaultValue={name} {...register("title")} placeholder="Service Name" />} <br />

                <input {...register("address")} placeholder="Your Address" /> <br />

                <input type="number" {...register("phone")}  placeholder="Phone" /> <br />

                <input style={{border:"none"}} className="submit-btn" type="submit" />
            </form>
        </div>
        <Footer></Footer>
    </>
    );
};

export default Order;