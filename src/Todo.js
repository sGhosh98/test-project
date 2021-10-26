
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
let tempArr=[];
const Todo=()=>{
const [txt,setTxt]=useState('');
const [listarr,setListarr]=useState([]);
const [disp,setDisp]=useState(false);
const [counter,setCounter]=useState(0);
    
const addData=(e)=>{
       e.preventDefault();
       setDisp(true);
      if(txt.length>0){
          console.log(txt);
    
       setTimeout(()=>{
        setDisp(false);
        tempArr.push(txt); 
        setCounter(1);
      },2000);
      }
      setTxt(''); 
   }
   useEffect(()=>{
     
    setListarr(tempArr);
    setCounter(0);
   },[counter]);

   const deleteElem=(ind)=>{
       setTimeout(()=>{
        tempArr.splice(ind,1);
        setCounter(1);
       },2000)
   }

    return(
        <div>
            <form onSubmit={addData}>
         <input type="text" placeholder="enter to add" onChange={(e)=>setTxt(e.target.value)}/>
         
         <button type="submit" value="submit">Submit</button>
         {disp &&<div>Loading...</div>}
         { listarr.map((data,index)=>{
             return(
                 <li key={index}>
                    {data}
                   <button type="button" onClick={()=>deleteElem(index)}>Delete</button>
                 </li>
             )
         })}
         </form>
         </div>
    )
}
  export default Todo;


