import React from 'react';
import { useState } from 'react';
import CartItem from './CartItem';
import Empty from './EmptyCart';

const Cart = ({ onCloseCart, cartItems = [], onRemoveCart }) => {

    return (
        <div className='overlay'>
            <div className='drawer'>
                <div className='drawer-header'>
                    <h2 className='drawer-title'>Shopping cart</h2>
                    <button className="closeCart" onClick={onCloseCart}>
                        <img height={20} width={20} src="img/close.svg" alt="" />
                    </button>
                </div>

                {
                    cartItems.length > 0 ? 
                    <div className="cart-block">
                        <div className='cart-list'>
                        {
                            cartItems.map((obj) => 
                            <CartItem 
                            title={obj.title} 
                            price={obj.price} 
                            img={obj.imgUrl} 
                            id={obj.id} 
                            onRemoveCart={onRemoveCart} 
                            />)
                        }
                    </div> 
                    <div className='cart-info'>
                    <ul>
                        <li>
                            <span>Total:</span>
                            <div></div>
                            <span className="total-price"> ₴</span>
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
                    : <Empty onCloseCart={onCloseCart}/>
                }


                
            </div>
        </div>);
}

export default Cart;
