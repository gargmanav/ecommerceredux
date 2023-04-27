// import React, { useState } from 'react'

// const Interview = () => {
//     const [data, setdata] = useState("")
//     const [result, setresult] = useState([])
//     const [answer,setanswer]  = useState([])
//     const addfunc = ()=>{
//         setresult([...result,data])
//         setanswer([...answer,false])
//     }
//     const deletefunc = (id)=>{
//         const newresult = result.filter((ele,index)=>{
//             return index != id
//         })
//         setresult(newresult)
//     }
//     const check = (id)=>{
//         const newAnswer = [...answer];
//     newAnswer[id] = true;
//     setanswer(newAnswer);
//     }
//   return (
//     <>
//     <input type="text" onChange={(e)=>setdata(e.target.value)}/>
//     <button onClick={addfunc}>add</button>
//     {
//         result.map((ele,id)=>{
//             <div key={id}>
//             <label>
//               <input
//                 type="checkbox"
//                 checked={isChecked}
//                 onChange={(e) => setIsChecked(e.target.checked)}
//               />
//               Checkbox
//             </label>
//             <p>{ele}</p>
//             {isChecked && <button onClick={() => deleteFunc(id)}>Delete</button>}
//           </div>
//         })
//     }
//     </>
//   )
// }

// export default Interview





