import React from 'react';
import { useState } from 'react';
import AddToCart from './AddToCartBtn';
import InCartBtn from './InCartBtn';

const ProductCard = ({title, image, price, onPlus, addToFavorite}) => {
    const [isAdded, setIsAdded] = useState(false);

    const addCart = () =>{
        setIsAdded(true);
        onPlus({title,image,price})
        
    }
    const removeCart = () =>{
        setIsAdded(false);
    }
    
    return (
        <div className="product-card">
            <button className="like-btn" onClick={addToFavorite}>
                <img src="img/product-card/unliked.svg" alt="" />
            </button>
            <img height={112} width={133} src={image} alt="" />
            <h3>{title}</h3>
            <div className="product-block">
                <div className="product-info">
                    <span>Price:</span>
                    <span>{price} ₴</span>
                </div>
                {isAdded ? <InCartBtn removeFromCart={() => removeCart()}/> : <AddToCart addToCart={() => addCart()}/>}
            </div>

        </div>
    );
}

export default ProductCard;