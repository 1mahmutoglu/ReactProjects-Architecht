
import React, { useState } from 'react';

function Navi({ cartItems, clearCart }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light nav-frame m-1">
        <a className="navbar-brand" href="#">Sepetle.com</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Kategori</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">Ürünler ({cartItems.length})</a>
            </li>
            <li className="nav-item dropdown">
            <button className="btn  dropdown-toggle" type="button" onClick={toggleDropdown}>
          Sepetim 
        </button>
{isDropdownOpen &&
        <div className={`dropdown-menu `}>
          {cartItems.map((item, index) => (
            <a key={index} className="dropdown-item" href="#">
              {item.name} - {item.price} TL
            </a>
          ))}
          <div className="dropdown-divider"></div>
          <button onClick={clearCart} className="dropdown-item">
            Sepeti Temizle
          </button>
          
        </div>}
            </li>
            <li className="nav-item active">
              <span className="nav-link">Toplam: {totalPrice} TL</span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navi
