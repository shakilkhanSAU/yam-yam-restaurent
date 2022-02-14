import React from 'react';
import '../../style/serviceCart.css';

const ServicesCart = (props) => {
    const { name, price, info, img} = props.data
    return (
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
      </div>
    </div>
    );
};

export default ServicesCart;