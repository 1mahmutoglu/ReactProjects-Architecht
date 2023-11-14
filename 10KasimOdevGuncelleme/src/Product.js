import React from 'react';

function Product({ products, toggleProductInCart, cart }) {
  const isProductInCart = (productId) => {
    return cart.some(item => item.id === productId);
  };

  return (
    <div >
      <div className="container mt-5 mr-5 ">
        <div className="row">
          <div className="col-12 ">
          <div className="" style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
            
               {products.map(product => (
        <div key={product.id} className='backgr mb-3 mt-5' >
          <h3>Ürünler</h3>
          <div>Ürün Adı: {product.name} <br />
          Fiyat: {product.price} TL
          
          </div>
          <button 
            onClick={() => toggleProductInCart(product)}
            className={isProductInCart(product.id) ? 'btn btn-danger form-control' : 'btn btn-primary form-control'}
          >
            {isProductInCart(product.id) ? 'Sil' : 'Ekle'}
          </button>
        </div>
      ))}
     
      </div>
          </div>
          
        </div>
      </div>

    </div>
  )
}

export default Product



