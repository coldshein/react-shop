import React from 'react';
import { useState } from 'react';
import CartItem from './CartItem';

const Cart = ({onCloseCart, items = [], setCartItems, cartItems}) => {

    const [totals, setTotals] = useState(0);
    
    return (
        <div className='overlay' onClick={onCloseCart}>
            <div className='drawer'>
                <div className='drawer-header'>
                    <h2 className='drawer-title'>Shopping cart</h2>
                    <button className="closeCart" onClick={onCloseCart}>
                        <img height={20} width={20} src="img/product-card/remove-item.svg" alt="" />
                    </button>
                </div>

                <div className='cart-list'>
                    {
                        items.map((obj) => <CartItem title={obj.title} price={obj.price} img={obj.imgUrl}/>)
                    }
                </div>
                <div className='cart-info'>
                    <ul>
                        <li>
                            <span>Total:</span>
                            <div></div>
                            <span className="total-price">0 ₴</span>
                        </li>
                        <li>
                            <span>Taxes 5%:</span>
                            <div></div>
                            <span className="taxes">150 ₴</span>
                        </li>
                    </ul>
                    <button className='green-btn'>
                        Checkout
                    </button>
                </div>
            </div>
        </div>);
}

export default Cart;