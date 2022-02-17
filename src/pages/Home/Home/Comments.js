import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import CommentCart from './CommentCart';

const Comments = () => {
    const [review, setReview] = useState([]);
    const {user} = useAuth();
    useEffect(() => {
        fetch('https://young-wildwood-21988.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setReview(data));
        console.log(review)

    }, []);
    return (
        <div className="container">
            <h1 className="fw-bold text-center">Our Happy Customers.</h1>
            <div className="row py-5">
            {
                review.map(data => <CommentCart
                key={data._id}
                data={data}
                name={user.displayName}
                ></CommentCart>)
            }
            </div>
        </div>
    );
};

export default Comments;