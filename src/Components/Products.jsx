import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import "./products.css"
import { useDispatch, useSelector } from 'react-redux'
import { allapidata, allproduct } from '../Redux/ActionCreator'






const Products = () => {
  const {products} = useSelector((storedata)=>storedata)
  console.log(products);
  const dispatch = useDispatch()
   const [reso, setreso] = useState([])
    useEffect(() => {
      const dataopen =  async()=>{
        const res = await fetch("https://fakestoreapi.com/products")
        const data = await res.json()
        dispatch(allapidata(data))
    } 
    dataopen();
    }, [])
    
    
     
    const addfunc=(id)=>{
        const realdata = products.find((elem,index)=>{
            return id === index
          })
      setreso([...reso,realdata])

      dispatch(allproduct(reso))

  
    }

  return (
    <>
    <Navbar/>
    <h1 style={{textAlign:"center"}}>Products</h1>
    <div className='productcontainer'>
        {products.map((ele,id)=>{
       return <div className='cards'>
                <img src={ele.image}></img>
                <h3>{ele.category}</h3>
                <h2>Price:{ele.price}</h2>
                <div className='buttondiv'>
                    <button onClick={()=>addfunc(id)}>Add To Cart</button>
                </div>
            </div>
        })}
    </div>
    </>
  )
}

export default Products