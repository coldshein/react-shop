import React, { useState } from 'react';
import Cart from './components/Cart';
import CartItem from './components/CartItem';
import Content from './components/Content';
import Header from './components/Header';


function App() {

  return (
    <div className='wrapper'>
      <Cart />
      <Header />
      <Content />
    </div>

  );
}

export default App;

