import React from 'react';

const CartItem = ({img, title, price, onRemoveFromCart, id}) => {
  return (
    <div className='cart-item'>
      <img height={70} width={70} src={img} alt="" />
      <div className='item-info'>
        <p>{title}</p>
        <span>{price} ₴</span>
      </div>
      <button className='remove-item' onClick={() => onRemoveFromCart(id)}>
        <img height={11} width={11} src="img/product-card/remove-item.svg" alt="" />
      </button>
    </div>
  );
}

export default CartItem;