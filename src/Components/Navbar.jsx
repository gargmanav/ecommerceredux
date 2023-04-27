import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='mainbox'>
        <div className='firstdiv'></div>
        <div className='seconddiv'>
            <ul>
              <Link to="/"><li>Home</li></Link>
              <Link to="/products"><li>Products</li></Link>
              <Link to="/addtocart"><li>Add To Cart</li></Link>
              <Link to="/technology"><li>Technologies</li></Link>
              <button>Logout</button>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar