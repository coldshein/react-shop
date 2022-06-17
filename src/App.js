import React, { useEffect, useState } from 'react';
import Cart from './components/Cart';
import CartItem from './components/CartItem';
import Content from './components/Content';
import Header from './components/Header';


function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [items, setItems] = useState([]); 
  useEffect(() => {
    fetch("https://62aba119bd0e5d29af1357a7.mockapi.io/items")
    .then((res) => {
      return res.json();
    })
    .then((json)=>{
      setItems(json);
    })
  }, []) 
  
  return (
    <div className='wrapper'>
      {cartOpened && <Cart onCloseCart={() => setCartOpened(false)}/>}
      <Header onOpenCart={()=> setCartOpened(true)}/>
      <Content products={items}/>
    </div>

  );
}

export default App;

