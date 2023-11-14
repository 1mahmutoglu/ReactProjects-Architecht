import './App.css';
import React, { useState } from 'react';
import Navi from './Navi.js';
import List from './List.js';
import Product from './Product.js';

function App() {

  const products =[
    { id: 1, name: 'Telefon', price: 3000, categoryId : 1},
    { id: 2, name: 'Dizüstü Bilgisayar', price: 5000, categoryId : 2},
    { id: 3, name: 'Tablet', price: 2000, categoryId : 3},
    { id: 4, name: 'Akıllı Saat', price: 1500,  categoryId : 4 },
    { id: 5, name: 'Kitap', price: 50,  categoryId : 5 },
    { id: 6, name: 'Kulaklık', price: 600, categoryId : 6}]
  ;

  const categories = [
    { id: 1, name: 'Elektronik' },
    { id: 2, name: 'Bilgisayarlar' },
    { id: 3, name: 'Tabletler' },
    { id: 4, name: 'Saatler' },
    { id: 5, name: 'Kitaplar' },
    { id: 6, name: 'Aksesuarlar' }
  ];


  const [cart, setCart] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState(null);

  const toggleProductInCart = (product) => {
    const isProductInCart = cart.some(item => item.id === product.id);
    if (isProductInCart) {
      setCart(cart.filter(item => item.id !== product.id));
    } else {
      setCart([...cart, product]);
    }
  };

  const clearCart = () => {
    setCart([]);
  }

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const filteredProducts = selectedCategory 
 ? products.filter(product => product.categoryId === selectedCategory)
  : products

  return (
  <div>

  <div className="container">
    <div className="row">
      <div className="col-12">

      <Navi cartItems={cart} clearCart={clearCart} />
  
      </div>
    </div>

    <div className="row">

    <div className="col-4">
      <List categories={categories} onCategorySelect={handleCategorySelect}/>
    </div>
    <div className="col-8">
    <Product products={filteredProducts} toggleProductInCart={toggleProductInCart} cart={cart} />
    </div>

    </div>
  </div>

  </div>
  );
}

export default App;
