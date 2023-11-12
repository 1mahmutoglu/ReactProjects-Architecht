import './App.css';
import Navi from './Navi.js';
import List from './List.js';
import Product from './Product.js';

function App() {

  const products = [
    { id: 1, name: 'Telefon', price: 5000 },
    { id: 2, name: 'Jean', price: 100 },
    { id: 3, name: 'Suç ve Ceza', price: 50 },
    { id: 4, name: 'Kanepe', price: 2000 },
    { id: 5, name: 'Basket Topu', price: 100 },
    { id: 6, name: 'Üzüm', price: 15 },
  ];

  const categories = [
    { id: 1, name: 'Elektronik' },
    { id: 2, name: 'Giyim' },
    { id: 3, name: 'Kitaplar' },
    { id: 4, name: 'Ev ve Yaşam' },
    { id: 5, name: 'Spor' },
    { id: 6, name: 'Gıda' },
  ];


  // const [cardCount, setcardCount] = useState();
  // const [showCardLink, setshowCardLink] = useState();
  // const [cardItem, setcardItem] = useState([]);

  // const addToCard = (product) => {
  //   setcardCount(cardCount+1);
  //   setshowCardLink(true);
  //   setcardItem[{...cardItem, products}];
  // };

  // const clearCard =() => {
  //   setcardCount(0);
  //   setshowCardLink(false);
  //   setcardItem([]);
  // };



  return (
  <div>

  <div className="container">
    <div className="row">
      <div className="col-12">

      <Navi/>
  
      </div>
    </div>

    <div className="row">

    <div className="col-4">
      <List></List>
    </div>
    <div className="col-8">
      <Product></Product>
    </div>
  

    </div>
  </div>

  </div>
  );
}

export default App;
