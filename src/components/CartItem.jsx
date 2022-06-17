import React from 'react';

const CartItem = (props) => {
  return (
    <div className='cart-item'>
      <img height={70} width={70} src={props.img} alt="" />
      <div className='item-info'>
        <p>{props.title}</p>
        <span>{props.price} ₴</span>
      </div>
      <button className='remove-item'>
        <img height={11} width={11} src="img/product-card/remove-item.svg" alt="" />
      </button>
    </div>
  );
}

export default CartItem;