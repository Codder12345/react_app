import react, { useState } from 'react';
import { useParams , useNavigate} from 'react-router-dom';


let UpdateQuestion=({questions,updateHnalder})=>{

  

  let index = useParams('id')
  index = parseInt(index.id)
 
  // console.log(index);

  //  console.log(questions[index]);

  //  const  { question, opt1,opt2,opt3,opt4,ans}= questions[index]

  let [currentQuestion,setCurrentQuestion]=useState(questions[index])



let handleValues = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setCurrentQuestion((cur)=> (
     { ...cur, [name]:value}
    ))


    
}


const navigate = useNavigate()

const hanldeUpdate = (e) => {
  e.preventDefault()
  updateHnalder(index,currentQuestion)
  navigate('/ViewAllQ')
}



return(<>

<div className="container mt-5"> <div className="row justify-content-center">
      <div className="col-md-6">
      <div className="card shadow-lg">
      <div className="card-header bg-primary text-white text-center">
     <h3> Quize Application </h3>
        </div>
      <div className="card-body">
        <form  onSubmit={(e)=>hanldeUpdate(e)}>
      {/* Input 1 */}
       <div className="mb-3">

        <input  type="text" name='question'  value={currentQuestion.question}  className="form-control"  id="question"  onChange={(e)=>handleValues(e)} placeholder="Add a Question" />

        
       </div>

      {/* Input 2 */}
      <div className="mb-3">
      <input type="text"  value={currentQuestion.opt1}  name="opt1" className="form-control" id="opt1"  onChange={(e)=>handleValues(e)} placeholder="opt1"  />
      </div>
 {/* Input 3 */}
   <div className="mb-3">
 <input type="text"   value={currentQuestion.opt2} name="opt2" className="form-control" id="opt2"  onChange={(e)=>handleValues(e)} placeholder="opt2"
 />
</div> 

{/* Input 4 */}
 <div className="mb-3">
 <input  type="text"  value={currentQuestion.opt3} name="opt3" className="form-control" id="opt3" onChange={(e)=>handleValues(e)} placeholder="opt3"
  />
 </div>
 {/* Input 5 */}
 <div className="mb-3">
  <input   type="text"   value={currentQuestion.opt4} name="opt4" className="form-control" id="opt4" placeholder="opt4" onChange={(e)=>handleValues(e)}
/>
 </div>
<div className="mb-3">
 <input type="text"  value={currentQuestion.ans}  className="form-control" id="ans" name="ans" placeholder="ans"  onChange={(e)=>handleValues(e)}
 />
</div>
 {/* Submit Button */}
 <button type="submit"  className="btn btn-primary w-100">Submit</button>
 </form>
</div>
</div>
 </div>
</div>
 </div>


</>)

}
export  default UpdateQuestion;