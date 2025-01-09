import React from "react";
import ReactDOM from 'react-dom';
import { useState } from "react";

let AddNewQuestion = (  {childData}  ) => {
      // questions array  we will add question object into this array


       
      

      // current question object
      const [currentQuestion, setCurrentquestion] = useState(
            {
                  question: '',
                  opt1: '',
                  opt2: '',
                  opt3: '',
                  ans: '',
                  opt4: '',
            }
      )


      //handling the input value
      //   const handleInput = (e) => {
      //      let name = e.target.name;
      //      let value = e.target.value;
      //      let obj = { name : "pooja"}



      //       setCurrentquestion((current) => (
      //         {
      //             [name]: value,
      //         }
      //       ));
      //       console.log(currentQuestion);
      //     };



      const handleInput = (e) => {
            let name = e.target.name;
            let value = e.target.value;


            setCurrentquestion((prev) => ({
                  ...prev,
                  [name]: value,
            }));

      };



      const handleSubmit = (e) => {
            e.preventDefault()

            // pusehd questions on the questions array
            // setQuestions((prev) => (
            //       // prev.push(currentQuestion)
            //       [...prev, currentQuestion]
            // ))

            childData(currentQuestion)

            // then current question object has been cleared
            setCurrentquestion({
                  question: '',
                  opt1: '',
                  opt2: '',
                  opt3: '',
                  ans: '',
                  opt4: '',
            })

            // console.log(questions);



      }




      return (<>

       <div className="container mt-5"> <div className="row justify-content-center">
      <div className="col-md-6">
      <div className="card shadow-lg">
      <div className="card-header bg-primary text-white text-center">
     <h3> Quize Application </h3>
        </div>
      <div className="card-body">
        <form onSubmit={(e) => handleSubmit(e)}>
      {/* Input 1 */}
       <div className="mb-3">

        <input  type="text"  value={currentQuestion.question}    onChange={(e) => handleInput(e)}name="question"  className="form-control"  id="question"  placeholder="Add a Question" />
       </div>

      {/* Input 2 */}
      <div className="mb-3">
      <input type="text"  name="opt1" className="form-control" id="opt1" placeholder="opt1" value={currentQuestion.opt1}  onChange={(e) => handleInput(e)}   />
      </div>
 {/* Input 3 */}
   <div className="mb-3">
 <input type="text"  name="opt2" className="form-control" id="opt2" placeholder="opt2"
 value={currentQuestion.opt2} onChange={(e) => handleInput(e)}/>
</div> 

{/* Input 4 */}
 <div className="mb-3">
 <input  type="text"name="opt3" className="form-control" id="opt3" placeholder="opt3"
 value={currentQuestion.opt3}  onChange={(e) => handleInput(e)} />
 </div>
 {/* Input 5 */}
 <div className="mb-3">
  <input   type="text"  name="opt4" className="form-control" id="opt4" placeholder="opt4"
value={currentQuestion.opt4} onChange={(e) => handleInput(e)}/>
 </div>
<div className="mb-3">
 <input type="text" className="form-control" id="ans" name="ans" placeholder="ans" 
 value={currentQuestion.ans} onChange={(e) => handleInput(e)}/>
</div>
 {/* Submit Button */}
 <button type="submit" className="btn btn-primary w-100">Submit</button>
 </form>
</div>
</div>
 </div>
</div>
 </div>

</>);
}
export default AddNewQuestion;