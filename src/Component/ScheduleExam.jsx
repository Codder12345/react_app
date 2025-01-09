import react from 'react';
import ReactDom from 'react-dom';

let Schedule=()=>{

  // Current date and time
// const now = new Date();
// console.log(now);

// Specific date
// const specificDate = new Date(2025, 0, 3); // January 3, 2025 (month is 0-based)
// console.log(specificDate);

// From a timestamp
// const fromTimestamp = new Date(1672527600000); // Milliseconds since Jan 1, 1970
// console.log(fromTimestamp);

// From a date string
// const fromString = new Date("2025-01-03T10:30:00");
// console.log(fromString);


const handleDate = (e) => {
  
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0); // Reset time to 00:00 for accurate comparison

  // Get the selected date
  const selectedDateValue = e.target.value;

  if (selectedDateValue) {
    const selectedDate = new Date(selectedDateValue);

    // Compare dates
    if (selectedDate.getTime() === currentDate.getTime()) {
      
      console.log("The selected date is today!");
    } else if (selectedDate.getTime() > currentDate.getTime()) {
      console.log("The selected date is in the future.");
    } else {
      
      console.log('you caanot create schedule in past time ');

      console.error('you cannot create schedule in past time')
      
     
    }
  } else {
    
  }

}



     
  return (<>

    <div className="container mt-5"> <div className="row justify-content-center">
   <div className="col-md-6">
   <div className="card shadow-lg">
   <div className="card-header bg-primary text-white text-center">
  <h3> Quize Application </h3>
     </div>
   <div className="card-body">
     <form >
   {/* Input 1 */}
    <div className="mb-3">
    <label>Select Exam Time</label> 
     <input  type="date"  name="ExamTime" onChange={(e)=>handleDate(e)} className="form-control"  id="question"  />
    </div>

   {/* Input 2 */}
   <div className="mb-3">
    <label>Select Start Time</label>
   <input type="time"  name="startTime" className="form-control" id="opt1"    />
   </div>
{/* Input 3 */}
<div className="mb-3">
<label>Select End Time</label>
<input type="time"  name="EndTime" className="form-control" id="EndTime" />
</div> 

{/* Input 4 */}
<div className="mb-3">
<input  type="text"name="opt3" className="form-control" id="opt3" placeholder="Toatlmarks"
 />
</div>
{/* Input 5 */}
<div className="mb-3">
<input   type="text"  name="opt4" className="form-control" id="opt4" placeholder="passing marks"
/>
</div>


{/* Submit Button */}
<button type="submit" className="btn btn-primary w-100" >ScheduleExam</button>
</form>
</div>
</div>
</div>
</div>
</div>

</>);
}
export default Schedule;