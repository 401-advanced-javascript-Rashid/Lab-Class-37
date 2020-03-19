/* eslint-disable no-unused-vars */
import React from 'react';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Categories from './components/main/categories.js';
import Products from './components/main/products.js';
import Cart from './components/main/cart.js';
import './app.scss';

const App = ()=>{
  return(
    <>
      <Header />
      <Categories />
      <Products />
      <Cart />
      <Footer />
    </>
  );
};
export default App ;
