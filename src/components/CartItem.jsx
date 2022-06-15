import React from 'react';

const CartItem = () => {
    return ( 
        <div className='cart-item'>
            <img height = {70} width={70} src="img/product-card/nike-blazer.jpg" alt="" />
            <div className='item-info'>
              <p>Sneakers for man Nike Blazer Mid Suede</p>
              <span>3 000 ₴</span>
            </div>
            <button className='remove-item'>
              <img height={11} width={11} src="img/product-card/remove-item.svg" alt="" />
            </button>
          </div>
     );
}
 
export default CartItem;