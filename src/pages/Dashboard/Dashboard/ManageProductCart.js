import React from 'react';

const ManageProductCart = (props) => {
    const {name, price, info, img, _id} = props.cartData;
    return (
        <div className="col-lg-2 col-md-3 col-sm-4 co-4 small">
            <div className='item'>
                <img src={img} alt='food' />
                <div className='item-head_desc'>
                    <p className='head_desc-name'>{name}</p>
                    <p className='head_desc-info'>
                        <small>{info}</small>
                    </p>
                </div>
                <div className='item-foot_desc'>
                    <span className='foot_desc-price'>${price}</span>
                    <button onClick={() => props.funcd(_id)} className="order-btn">Delete Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ManageProductCart;