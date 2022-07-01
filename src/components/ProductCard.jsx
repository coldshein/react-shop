import React from 'react';
import { useState } from 'react';
import AddToCart from './AddToCartBtn';
import InCartBtn from './InCartBtn';

const ProductCard = ({id, title, imgUrl, price, onPlus, onFavorite, favorited = false}) => {
    const [isAdded, setIsAdded] = useState(false);
    const [isFavorite, setIsFavorite] = useState(favorited);

    const addCart = () => {
        onPlus({id,title,imgUrl,price});
        setIsAdded(!isAdded);
        
    }
    const addFavorite = () =>{
        setIsFavorite(!isFavorite);
        onFavorite({id,title,imgUrl,price});
    }
    const removeCart = () => {
        setIsAdded(false);
    }

    return (
        <div className="product-card">
            <button className="like-btn" onClick={addFavorite}>
                <img src={isFavorite ? '/img/save.svg' : '/img/saved.svg'} alt="s" />
            </button>
            <img height={112} width={133} src={imgUrl} alt="" />
            <h3>{title}</h3>
            <div className="product-block">
                <div className="product-info">
                    <span>Price:</span>
                    <span>{price} ₴</span>
                </div>
                {isAdded ? <InCartBtn addCart={() => addCart()} /> : <AddToCart addCart={() => addCart()} />}
            </div>

        </div>
    );
}

export default ProductCard;