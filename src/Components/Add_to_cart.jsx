import React, { useState } from 'react'
import Navbar from './Navbar'
import "./addcard.css"
import { useSelector } from 'react-redux'


const Add_To_Cart = () => {
    
    
    
    const {products,selected} = useSelector((himanshu)=>himanshu)
    console.log(selected);
    const [mydata, setmydata] = useState(selected)

    const removefunc = (id)=>{
       const newversersion = mydata.filter((ele,index)=>{
           return id !== index
       })
       setmydata(newversersion)
    }
  return (
    <>
    <Navbar/>

    {mydata.length > 0 ? <div className='mainboxcard'>
        {
            mydata.map((ele,id)=>{
                return <div className='addcards'>
                    <div className='pehla'><img src={ele.image}></img></div>
                    <div className='dusra'>
                    <h2>{ele.title}</h2>
                    <p>Price:{ele.price}</p>
                    </div>
                    <div className='teesra'><button onClick={()=>removefunc(id)}>Remove</button></div>
                </div>
            })
        }
    </div> : <h1 style={{color:"red" , textAlign:"center"}}>Your Cart is empty</h1>}
    
    </>
  )
}

export default Add_To_Cart