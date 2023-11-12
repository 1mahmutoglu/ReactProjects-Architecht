import React from 'react'

function navi() {


  return (
    <div>
      
      <nav class="navbar navbar-expand-lg navbar-light bg-light nav-frame"  >
  <a class="navbar-brand" href="#">Sepetle.com</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Kategori <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#">Ürünler <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Sepet
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Ürün1</a>
          <a class="dropdown-item" href="#">Ürün2</a>
          <a class="dropdown-item" href="#">Ürün3</a>
          <a class="dropdown-item" href="#">Ürün4</a>
          <a class="dropdown-item" href="#">Ürün5</a>
          <a class="dropdown-item" href="#">Ürün6</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Ürün Ekle</a>
        </div>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#">Toplam <span class="sr-only">(current)</span></a>
      </li>
    </ul>
  </div>
</nav>


    </div>
  )
}

export default navi
