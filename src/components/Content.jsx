import React from 'react';
import ProductCard from './ProductCard';

const Content = () => {
    return (
        <section className="content">
            <div className="content-header">
                <h1>Вся коллекция рома хуй</h1>
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
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </section>
    );
}

export default Content;