import './App.css';
import Home from './Components/Home';
import {Routes,Route, Navigate} from 'react-router-dom'
import Products from './Components/Products';
import Add_To_Cart from './Components/Add_to_cart';
import Technologies from './Components/Technologies';
import Html from './Components/Html';
import Css from './Components/Css';
import Javas from './Components/Javas';
import Reactss from './Components/Reactss';
import Interview from './Components/Interview';
import Loginform from './Components/Loginform';
import { createContext, useState } from 'react';

export const globaldata = createContext()


export const localdata = createContext()

function App() {
  const [status, setstatus] = useState(false)
 
  const data = {
    name:"manav",
    age:24
  }
  const data1 = {
    name:"rajat",
    age:24
  }
  return (
    <div className="App">
      <localdata.Provider value={data1}>
      <globaldata.Provider value={data}>
      <Routes>
        <Route path='/' element={status?<Navigate to="/home"/>:<Loginform setstatus={setstatus}/>}/>
        <Route path='/home' element={status?<Home/>:<Navigate to="/"/>}/>
        <Route path='/products' element={status?<Products/>:<Navigate to="/"/>}/>
        <Route path='/addtocart' element={status?<Add_To_Cart/>:<Navigate to="/"/>}/>
        <Route path='/technology' element={status?<Technologies/>:<Navigate to="/"/>}>
        <Route path='html' element={<Html/>}/>
        <Route path='css' element={<Css/>}/>
        <Route path='js' element={<Javas/>}/>
        <Route path='react' element={<Reactss/>}/>
        </Route>
      </Routes>
      </globaldata.Provider>
      </localdata.Provider>
     
     
    </div>
  );
}

export default App;


