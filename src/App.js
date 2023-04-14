import './App.css';
import Home from './Components/Home';
import {Routes,Route} from 'react-router-dom'
import Products from './Components/Products';
import Add_To_Cart from './Components/Add_to_cart';
import { useState } from 'react';

function App() {
  const [carddata, setcarddata] = useState([])
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products carddata={carddata} setcarddata={setcarddata}/>}/>
        <Route path='/addtocart' element={<Add_To_Cart carddata={carddata} setcarddata={setcarddata}/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
