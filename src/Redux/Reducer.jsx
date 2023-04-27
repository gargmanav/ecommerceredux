const initialdata = {
   products:[],
   selected:[]
   
}

const Reducer = (storedata=initialdata,action) => {
  if (action.type === "ADD_PRODUCT") {
    return {...storedata,
     selected:action.payload
    }
  
}
else if(action.type === "APIDATA"){
  return{...storedata,
    products:action.payload
  }
}
return storedata;
}

export default Reducer