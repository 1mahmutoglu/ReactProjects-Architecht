import logo from './logo.svg';
import './App.css';
import Count from './components/count/Count'
import Todo from './components/todo/Todo'
import Todo2 from './components/todo2/Todo2'

function App() {
  return (
<div className="">
<div className="container">
  <div className="row">
    <div className="col-4">
      <Count/>
    </div>
    <div className="col-4">
     <Todo2/>
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
