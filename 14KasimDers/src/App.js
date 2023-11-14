import React from 'react';
import { Component } from 'react';
import Navi from './Navi.js'            //* Navi componentinin verilerini app.js içerisinde kullanabilmek için import ettik
import SideBar from './SideBar.js';      //* SideBar componentinin verilerini app.js içerisinde kullanabilmek için import ettik
import Product from './Product.js';     //* Product componentinin verilerini app.js içerisinde kullanabilmek için import ettik
import { Col, Container, Row } from "reactstrap";

export default class App extends Component {        //* Component özelliğini kullanabilmek için referans aldık

  state = {                                       //* State hook'unun kullanım yapısını değiştirdik.
    currentCategory:"",                          //* state hSook'una currentCategory adında değişken tanımlandı
    products: [],                               //*   ""   ""   products adında bir dizi değişkeni tanımlandı
    cart:[],                                   //*   ""   ""   cart adında bir dizi değişkeni tanımlandı       
  };

  changeCategory = (category) => {                                   //* ChangeCategory adında fonksiyon tanımlandı içerisine ise 
    this.setState({ currentCategory: category.CategoryName});       //* category adında bir parametre atandı bu fonksiyon ilgili sayfada
                                                                   //* setState fonksiyonunu çağırdı bu fonksiyon ise currentCategorynin içerisine category.CategoryName'i atamakta.
   this.getProducts(category.id);                                 //* Bu sayfada getproduct fonksiyonunu çalıştır ve kategorileri idlerine göre çağır                                                           
  };

  getProducts = (categoryId) => {                         //* getProducts fonkisyonuna categoryId parametresini ver
  let url = "http://localhost:3000/products";            //* url tanımla ve bu urlnin içerisine ekle eşittir ile categoryId ekle
    if(categoryId){
      url+= "?categoryId=" +categoryId;
    }
  

  fetch(url)                                                //* API den veri almak için url ile istek gönderme
  .then((response) => response.json())                     //* gelen ilk yanıt alınır ve jsona dönüştürülür  
  .then((data) => this.setState({products:data}));        //* api den gelen veri jsondan js nesnesine dönüştürülür ve setState ile düzenlenebilir hale gelir
};


componentDidMount(){                               //* Oluşturulan fonksiyon get productsı çalıştırır, componentDidMount sayfa açılır açılmaz çalışmasını sağlar
  this.getProducts();
}

addToCart = (product) => {
  let newCart =this.state.cart;                                     //* yeni bir cart değişkeni oluşturuldu
  var addedItem = newCart.find((c)=> c.product.id===product.id);     //* eğer yeni carttaki ürün seçilen ürün seçilen ürün ile aynıysa 
  if (addedItem) {                      
    addedItem.quantity += 1;                                        //* addedItem içerisinde sayısını arttır
  } else {
    newCart.push({product: product, quantity:1});                   //* aynı değilse yeni ürün olarak yeni carta pushla
  }
  this.setState({cart: newCart});                                    //* daha sonra setState fonksiyonu ile  cartın içerisine yeni kart değerini ekle

};


removeToCart = (product) => {                                                 //* bu cartı filtrele ve eğer seçilen ürün ile ürün eşleşmiyorsa yeni listeye eşleşenleri aktar

  let newCart = this.state.cart.filter((c) => c.product.id !== product.id);
  this.setState({cart: newCart});                                                           
};



render() {
  return (
    <Container>
      <Navi cart={this.state.cart} removeToCart={this.removeToCart} />           //* navi componentine cart ve removecart adında değişkenler oluşturulup app.js içerisinden naviye aktarıldı. Aşağoda aynı işlemler yapıldı.
      <Row>
        <Col xs="3">
          <SideBar
            chanceCategory={this.chanceCategory}
            currentCategory={this.state.currentCategory}
          />
        </Col>
        <Col xs="9">
          <Product
            addToCart={this.addToCart}
            products={this.state.products}
            currentCategory={this.state.currentCategory}
          />
        </Col>
      </Row>
    </Container>
  );
}
}