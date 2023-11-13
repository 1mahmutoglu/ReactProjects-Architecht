import './App.css';
import React, { useState } from 'react';
import Navi from './Navi.js';
import List from './List.js';
import Product from './Product.js';

function App() {

  const products =[
    { id: 1, name: 'Telefon', price: 3000, description: 'Akıllı telefon, son model' },
    { id: 2, name: 'Dizüstü Bilgisayar', price: 5000, description: 'Yüksek performanslı gaming laptop' },
    { id: 3, name: 'Tablet', price: 2000, description: 'Taşınabilir, hafif tablet' },
    { id: 4, name: 'Akıllı Saat', price: 1500, description: 'Spor ve sağlık takibi için akıllı saat' },
    { id: 5, name: 'Kitap', price: 50, description: 'Bilim kurgu romanı' },
    { id: 6, name: 'Kulaklık', price: 600, description: 'Gürültü önleyici, kablosuz kulaklık' }]
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
