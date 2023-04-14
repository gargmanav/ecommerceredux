import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'

const Navbar = ({setlogdata}) => {
  return (
    <>
    <div className='mainbox'>
        <div className='firstdiv'></div>
        <div className='seconddiv'>
            <ul>
              <Link to="/home"><li>Home</li></Link>
              <Link to="/products"><li>Products</li></Link>
              <Link to="/addtocart"><li>Add To Cart</li></Link>
              <Link to="/technologies"><li>Technologies</li></Link>
              <button onClick={setlogdata(false)}>Logout</button>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar