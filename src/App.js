import './App.css';
import Home from './Components/Home';
import {Routes,Route, Navigate} from 'react-router-dom'
import Products from './Components/Products';
import Add_To_Cart from './Components/Add_to_cart';
import { useState } from 'react';
import Technologies from './Components/Technologies';
import Html from './Components/Html';
import Css from './Components/Css';
import Javas from './Components/Javas';
import Reactss from './Components/Reactss';
import Login from './Components/Login';

function App() {
  const [carddata, setcarddata] = useState([])
  const [logdata,setlogdata] = useState(false)
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={logdata?<Navigate to="/home"/>:<Login setlogdata={setlogdata}/>}/>
        <Route path='/home' element={logdata?<Home/>:<Navigate to="/"/>}/>
        <Route path='/products' element={logdata?<Products carddata={carddata} setcarddata={setcarddata}/>:<Navigate to="/"/>}/>
        <Route path='/addtocart' element={logdata?<Add_To_Cart carddata={carddata} setcarddata={setcarddata}/>:<Navigate to="/"/>}/>
        <Route path='/technologies' element={logdata?<Technologies/>:<Navigate to="/"/>}>
        <Route path='' element={<Navigate to="html"/>}/>
        <Route path='html' element={<Html/>}/>
        <Route path='css' element={<Css/>}/>
        <Route path='js' element={<Javas/>}/>
        <Route path='react' element={<Reactss/>}/>
        </Route>
       
      </Routes>
     
    </div>
  );
}

export default App;


