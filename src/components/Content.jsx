import React from 'react';
import ProductCard from './ProductCard';

const productCart = [
    {title: 'Sneakers for man Nike Blazer Mid Suede', price: '3 000'}, 
    {title: 'Sneakers for woman Nike Blazer Mid Suede', price: '3 000'},
    {title: 'Sneakers for manwo Nike Blazer Mid Suede', price: '3 000'},
];


const Content = () => {
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
            {productCart.map((item) => <ProductCard title={item.title} price={item.price}/>)}
            </div>
        </section>
    );
}

export default Content;