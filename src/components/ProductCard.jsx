import React from 'react';

const ProductCard = () => {
    return (
        <div className="product-card">
            <img height={112} width={133} src="img/product-card/nike-blazer.jpg" alt="" />
            <h3>Sneakers for man <br /> Nike Blazer Mid Suede</h3>
            <div className="product-block">
                <div className="product-info">
                    <span>Price:</span>
                    <span>3 200 ₴</span>
                </div>
                <button className="add-to-cart">
                    <img width={11} height={11} src="/img/product-card/add-to-cart.svg" alt="" />
                </button>
            </div>

        </div>
    );
}

export default ProductCard;