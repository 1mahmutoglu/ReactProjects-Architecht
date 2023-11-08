import logo from './logo.svg';
import './App.css';
import Count from './components/count/Count'
import Todo from './components/todo/Todo'

function App() {
  return (
<div className="">
<div className="container">
  <div className="row">
    <div className="col-4">
      <Count/>
    </div>
    <div className="col-4">
     <Todo/>
    </div>
    <div className="col-4">
      CCCC
    </div>
  </div>
</div>
</div>
  );
}

export default App;
