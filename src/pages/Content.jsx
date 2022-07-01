import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Main from '../components/Main';
import { Link, Route, Routes } from 'react-router-dom';
import Favorites from './Favorites';




const Content = (
    { products,
        setCartItems,
        setFavorites,
        cartItems,
        setItems,
        favorites
    }) => {

    const onAddToCart = (obj) => {
        console.log(obj)
        if (cartItems.find(item => item.id == obj.id)) {
            setCartItems(prev => prev.filter(item => item.id !== obj.id))
        } else {
            axios.post('https://62aba119bd0e5d29af1357a7.mockapi.io/cart', obj);
            setCartItems(prev => [...prev, obj]);
        }
    }

    
    const onAddToFavorite = async (obj) => {
        try {
            if (favorites.find(favObj => favObj.id == obj.id)) {
                axios.delete(`https://62aba119bd0e5d29af1357a7.mockapi.io/favorites/${obj.id}`)

            } else {
                const { data } = await axios.post("https://62aba119bd0e5d29af1357a7.mockapi.io/favorites", obj);
                setFavorites(prev => [...prev, data]);
            }
        } catch (error) {
            alert('Failed to add in favorite')
        }
    }

    const [searchValue, setSearchValue] = useState('');
    const onChangeSearchValue = (event) => {
        setSearchValue(event.target.value)
    }


    return (
        <Routes>
            <Route path="/" exact element={
                <Main
                    searchValue={searchValue}
                    onChangeSearchValue={onChangeSearchValue}
                    onAddToFavorite={onAddToFavorite}
                    onAddToCart={onAddToCart}
                    setFavorites={setFavorites}
                    products={products}
                    setItems={setItems}
                />} />
            <Route path="/favorites" exact element={
                <Favorites
                    items={favorites} onAddToFavorite={onAddToFavorite}
                />} />
        </Routes>

    );
}

export default Content;