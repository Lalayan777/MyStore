import { useEffect, useState } from 'react';
import './App.css';
import Card from './Components/Card';
import Header from './Components/Header';
import { useDispatch, useSelector } from 'react-redux';
import Futer from './Components/Futer';

function App() {
  const counter = useSelector((state) => state.counter)
    const dispatch = useDispatch()
    const increment = ()=>{
        dispatch({type:"Increment", payload:1})
    }
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((results) => results.json())
      .then((data) => setData(data.products));
  }, [data]);

  return (
    <div className="App">
      <Header counter={counter}/>
      <div className="contein">
      {
          data.map((product) => {
            return <Card product={product} key={product.id} />
          })
      }
      </div>
      <Futer/>
    </div>
  );
}

export default App;
