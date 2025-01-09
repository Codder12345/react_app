import react, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import AddNewQuestion from './Component/AddNewQuestion';
import ViewAllQ from './Component/ViewAllQ';
import Schedule from './Component/ScheduleExam';
import StartEx  from './Component/StartExam';
import Result from './Component/Result';

import  './App.css';
import {BrowserRouter,Routes,Route,Link ,Navigate, useNavigate } from "react-router-dom";
import UpdateQuestion from './Component/UpdateQuestion';

let App=()=>{
 const [questions, setQuestions] = useState([ ]);

  const updateQuestion = (index,obj) => {
    setQuestions((current)=>{
      current[index] = obj
      return current
  })

  
  }
      const removeQestion = (index) => {
        console.log(index);
        setQuestions((current)=>(
          current.filter((_,idx)=>(
            idx !== index
          ))
          
        ))
      }
 

  const setQuestionsArra = (currentQuestion) =>{
    setQuestions((prev)=> (
      [...prev,currentQuestion]
    ))
  }


 

  const updateHnalder = (index,objectValue) => {
    // e.preventDefault()

    setQuestions((prevQuetionsArray)=>(

      prevQuetionsArray.with(index,objectValue)
    ) )

 

  }

  console.log(questions);
  



     
return (<>
     <BrowserRouter>
        <nav>
        <ul>
          <li><Link to="/" style={{textDecoration:"none",color:"white"}}>AddNewQuestions</Link></li>
          <li><Link to="/ViewAllQ" style={{textDecoration:"none",color:"white"}}>ViewAllQuestions</Link></li>
          <li><Link to="/ScheduleExam" style={{textDecoration:"none",color:"white"}}>ScheduleExam</Link></li>
          <li><Link to="/StartExam" style={{textDecoration:"none",color:"white"}}>StartExam</Link></li>
          <li><Link to="/Result" style={{textDecoration:"none",color:"white"}}>Result</Link></li>
        </ul>

        </nav>

     <Routes>
      <Route  path="/"  element={<AddNewQuestion childData={setQuestionsArra} />} />
      <Route  path="/ViewAllQ"  element={ <ViewAllQ  questions={questions} removeQestion={removeQestion} />} />
          <Route path='/update/question/:id' element={<UpdateQuestion questions={questions} updateHnalder={updateHnalder} />}  />
    
      <Route  path="/ScheduleExam"  element={<Schedule/>} />
      <Route  path="/StartExam"  element={<StartEx questions={questions} />} />
      <Route  path="/Result"  element={ <Result />} />
   </Routes>
     
     </BrowserRouter>
   
</>)

}
export default App;