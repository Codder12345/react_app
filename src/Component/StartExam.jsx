import react, { useState } from 'react';
import reactDom from 'react-dom';
import '../App.css';
 
let StartEx=({questions})=>{

        const [ currentQuesIndex, setCurrentQuesIndex] = useState(0)


        const [ isExamStated , setIsExmaStated ] = useState(false) 



        // const jsObject = {
        //         name : 'pooja',
        //         dobj : ''
        // }

        // const qarray = [ {}, {}, { }]

// console.log(questions);

//    let handelbondary=()=>{
          
         
//    }

   let nextQuestion = () => {
           if (currentQuesIndex>=questions.length-1){
                   setCurrentQuesIndex(0)
                   return
                }
        setCurrentQuesIndex((previndex)=> previndex+1)
   }

   let prevsiouQuestion = () => {
           if(currentQuesIndex <= 0 ){
                   setCurrentQuesIndex(questions.length - 1)
                   return
                }
        setCurrentQuesIndex((previndex)=> previndex-1)
   }
       
   let[score,setscore]=useState(0);
     
  let handelscore=()=>{
          setscore()
  } 

  let questionsubmit = (e) => {
        e.preventDefault()
        
  }

        return (
                <>
                 {
                        !isExamStated && <div> <input  type="button" onClick={()=>setIsExmaStated(true)}  id="sb1" value='StartExam' className='btn-btn bg-success  p-2'  />
      </div>
                 }
           
        {
                isExamStated &&    
                 <form onsubmit={(e)=>questionsubmit(e)}>

                 <div className='container'>
                 <ul className='question'> 
                         {/* <li><h4>Question No :{questions.id}</h4></li> */}
                         <li><h3>{questions[currentQuesIndex].question}</h3></li>
                         <li><h3><input type="radio" id='1' checked={1} name='ans' value='opt1'/><label   htmlFor='opt1'>{questions[currentQuesIndex].opt1}</label></h3></li>
                         <li><h3><input type="radio" id='2' checked={2} name='ans' value='opt2'/><label htmlFor="opt2">{questions[currentQuesIndex].opt2}</label></h3></li>
                         <li><h3><input type="radio" checked={3}  id='3'  name='ans' value='opt3'/><label htmlFor="opt3">{questions[currentQuesIndex].opt3}</label></h3></li>
                         <li><h3><input type="radio"  name='ans' id='4' checked={4} value='opt4'/><label htmlFor="opt4">{questions[currentQuesIndex].opt4}</label></h3></li>
                         {/* <li><h3>{questions[currentQuesIndex].ans}</h3></li> */}
                    </ul>
                 
                   <div className='btn'>
                   <input  type="button"   value='>> '  onClick={nextQuestion} className='btn-btn bg-success' />
                    <input  type="button"  value='<<' onClick={prevsiouQuestion} className='btn-btn bg-success'  />
                   
                   </div>
         
                </div>
                   <input type="submit" value='submit test' className='bg-success' />
                 </form>
        }
                </>
        )


}
export default StartEx;