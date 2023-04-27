import { apidata, product } from "./Actiontypes"

export const allproduct = (data)=>{
return{
    type:product,
    payload:data
}
}

export const allapidata = (reso)=>{
    return{
        type:apidata,
        payload:reso
    }
    }