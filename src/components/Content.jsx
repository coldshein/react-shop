import React from 'react';
import ProductCard from './ProductCard';

const productCart = [];


const Content = ({products, setCartItems, cartItems}) => {

    const onAddToCart = (obj) =>{
        setCartItems(prev => [...prev, obj])
    }

    return (
        <section className="content">
            <div className="content-header">
                <h1>All collections</h1>
                <div className="search-block">
                    <input
                        type="text"
                        className="search-input"
                        id='search-input'
                        placeholder='Search...'
                    />
                    <label htmlFor="search-input">
                    <img src="img/search.svg" alt="" className='search-icon'/>
                    </label>
                    
                </div>

            </div>

            <div className="product-section">
            {products.map((item) => <ProductCard 
            title={item.title} 
            price={item.price}
            image={item.imgUrl}
            addToFavorite={() => alert('Added to favorite!')}
            onPlus={()=> onAddToCart(item)}
            />
            )}
            </div>
        </section>
    );
}

export default Content;