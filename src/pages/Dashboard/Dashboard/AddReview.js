import React from 'react';
import { useForm } from "react-hook-form";

const AddReview = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
<<<<<<< HEAD
        fetch('http://localhost:5000/addreview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
=======
        fetch('https://young-wildwood-21988.herokuapp.com/addreview', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
            alert('Your order is Succenss.')
            }
>>>>>>> 9b9b4cb60d68659da779d6f435bb0234726b49e2
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Your order is Succenss.')
                }
            })



    };
    return (
        <div className="container mt-5 order-from bottom">
            <h2 className="text-center fw-bold">Give a Review</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input {...register("img")} placeholder="img link" /> <br />

                <textarea style={{ width: "100%", border: "2px solid black", padding: "10px", marginBottom: "10px", resize: "none" }} className="text-area" type="text" {...register("description")} placeholder="Comment" /> <br />


                <input type="number"  {...register("rating")} placeholder="Rating 1-5 Only" /> <br />

                <input style={{ border: "none" }} className="submit-btn" type="submit" />
            </form>
        </div>
    );
};

export default AddReview;