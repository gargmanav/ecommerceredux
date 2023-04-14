import React from 'react'
import Navbar from './Navbar'
import "./addcard.css"

const Add_To_Cart = ({carddata, setcarddata}) => {
    const removefunc = (id)=>{
       const newversersion = carddata.filter((ele,index)=>{
           return id !== index
       })
       setcarddata(newversersion)
    }
  return (
    <>
    <Navbar/>

    {carddata.length > 0 ? <div className='mainboxcard'>
        {
            carddata.map((ele,id)=>{
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