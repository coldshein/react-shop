import React from 'react';
import { useState } from 'react';
import AddToCart from './AddToCartBtn';
import InCartBtn from './InCartBtn';

const ProductCard = (props) => {
    const [isAdded, setIsAdded] = useState(false);

    const addCart = () =>{
        setIsAdded(true);
        alert('Added in your shopping cart!');
    }
    
    return (
        <div className="product-card">
            <button className="like-btn" onClick={props.addToFavorite}>
                <img src="img/product-card/unliked.svg" alt="" />
            </button>
            <img height={112} width={133} src={props.image} alt="" />
            <h3>{props.title}</h3>
            <div className="product-block">
                <div className="product-info">
                    <span>Price:</span>
                    <span>{props.price} ₴</span>
                </div>
                {isAdded ? <InCartBtn/> : <AddToCart addToCart={() => addCart()}/>}
            </div>

        </div>
    );
}

export default ProductCard;