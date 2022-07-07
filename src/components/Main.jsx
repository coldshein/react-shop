import React from 'react';
import ProductCard from './ProductCard';

const Main = (
    { products,
        searchValue,
        onChangeSearchValue,
        setSearchValue,
        onAddToCart,
        onAddToFavorite,
        setItems,
        cartItems,
    }) => {
    const productCart = [];
    return (
        <section className="content">
            <div className="section-header">
                <h1>{searchValue ? `Searching for "${searchValue}"` : `All collections`}</h1>
                <div className="search-block">
                    <input
                        type="text"
                        className="search-input"
                        id='search-input'
                        placeholder='Search...'
                        onChange={onChangeSearchValue}
                        value={searchValue}
                    />
                    <label htmlFor="search-input">
                        <img src="img/search.svg" alt="" className='search-icon' />
                    </label>
                    {searchValue ? <button onClick={() => setSearchValue('')} className='clear-search'><img src="img/product-card/remove-item.svg" alt="" /></button> : null}

                </div>

            </div>

            <div className="product-section">
                {products
                    .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                    .map((item, index) => <ProductCard
                        key={index}
                        {... item}
                        onFavorite={(obj) => onAddToFavorite(obj)}
                        onPlus={(obj) => onAddToCart(obj)}
                        added={cartItems.some((obj) => Number(obj.id) === Number(item.id))}
                    />
                    )}
            </div>
        </section>
    );
}

export default Main;