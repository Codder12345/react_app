import react, { useState } from 'react';
import ReactDom from 'react-dom';
import UpdateQuestion from './UpdateQuestion';
import { NavLink  } from 'react-router-dom';

let ViewAllQ=({questions,removeQestion})=>{

      const removeHandler = (e,index) =>{
      e.preventDefault()
      removeQestion(index)
   }  



   const handleUpdate = () => {
      // e.preventDefault()

      // const input =  window.prompt('')
      // const opt1 = window.prompt()
      // console.log(input);
      // console.log(opt1);




   }


    return (<>
 <div className='container  bg-primary'>
    <table className='table  bg-secondary'>
        <thead>

           <tr>
           <th>Question</th>
            <th>opt1</th>
            <th>opt2</th>
            <th>opt3</th>
            <th>opt4</th>
            <th>ans</th>
            <th >DELETE</th>
            <th>UPDATE</th>
           </tr>
        </thead>
        <tbody>
            {
              questions ? questions.map((currentObect,index)=>(
                  
                  <tr key={index} >
               <td> {currentObect.question} </td>
            <td> {currentObect.opt1} </td>
            <td> {currentObect.opt2} </td>
            <td> {currentObect.opt3} </td>
            <td> {currentObect.opt4} </td>
            <td> {currentObect.ans} </td>
            <td> <button onClick={(e)=>removeHandler(e,index)} > DELETE </button> </td>
            <td> <button ><NavLink to={`/update/question/${index}`}> UPDATE </NavLink></button> </td>
            </tr>
                 
                  
               )):<></>
            } 
        </tbody>
    </table>
 </div>
      
    </>)
      
}
export default ViewAllQ;