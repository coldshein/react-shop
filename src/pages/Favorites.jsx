import React from 'react';
import ProductCard from '../components/ProductCard';

const Favorites = ({onAddToCart, onAddToFavorite, items}) => {
    return ( 
        <section className="favorites">
            <div className="section-header">
                <h1>Favorites</h1>
            </div>
            <div className="product-section">
            {items.map((item, index) => <ProductCard
                    key={index}
                    {...item}
                    favorited={true}
                    onFavorite={(obj) => onAddToFavorite(obj)}
                />
                )}
            
            </div>
        </section>
    );
}
 
export default Favorites;