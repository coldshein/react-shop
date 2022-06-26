import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cart from './components/Cart';
import CartItem from './components/CartItem';
import Content from './pages/Content';
import Header from './components/Header';


function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const onRemoveFromCart = (id) => {
    setCartItems(prev => prev.filter((item) => item.id !== id))
    axios.delete(`https://62aba119bd0e5d29af1357a7.mockapi.io/cart/${id}`);
  }

  useEffect(() => {
    axios.get("https://62aba119bd0e5d29af1357a7.mockapi.io/items")
      .then(res => setItems(res.data))
    axios.get("https://62aba119bd0e5d29af1357a7.mockapi.io/cart")
      .then(res => setCartItems(res.data))
    axios.get("https://62aba119bd0e5d29af1357a7.mockapi.io/favorites")
      .then(res => setFavorites(res.data))
  }, [])

  return (
      <div className='wrapper'>
        {
          cartOpened &&
          <Cart
            setCartItems={setCartItems}
            cartItems={cartItems}
            onCloseCart={() => setCartOpened(false)}
            onRemoveCart={onRemoveFromCart} />
        } 
        <Header
          onOpenCart={() => setCartOpened(true)}
        />
        <Content
          favorites={favorites}
          setFavorites={setFavorites}
          setItems={setItems}
          setCartItems={setCartItems}
          cartItems={cartItems}
          products={items}
        />
      </div>
  );
}

export default App;

