import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cart from './components/Cart';
import Content from './pages/Content';
import Header from './components/Header';


function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const onRemoveItem = (id) => {
    try {
      axios.delete(`https://62aba119bd0e5d29af1357a7.mockapi.io/cart${id}`);
      setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
    } catch (error) {
      alert('Ошибка при удалении из корзины');
      console.error(error);
    }
  };

  useEffect(() => {
    async function fetchData() {
      const itemsResponse = await axios.get("https://62aba119bd0e5d29af1357a7.mockapi.io/items")
      const cartResponse = await axios.get("https://62aba119bd0e5d29af1357a7.mockapi.io/cart")
      const favoritesResponse = await axios.get("https://62aba119bd0e5d29af1357a7.mockapi.io/favorites")

      setCartItems(cartResponse.data)
      setFavorites(favoritesResponse.data)
      setItems(itemsResponse.data)      
    }
    fetchData();
  }, [])

  return (
    <div className='wrapper'>
      {
        cartOpened &&
        <Cart
          setCartItems={setCartItems}
          cartItems={cartItems}
          onCloseCart={() => setCartOpened(false)}
          onRemoveItem={onRemoveItem} />
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

