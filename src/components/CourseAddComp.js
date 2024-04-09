import React,{ useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
 
const CourseAddComp = () => {
    const nav =useNavigate();
    const[course,setCourse]=useState({
        course_name:"",
        course_fees:"",
        course_duration:"",
        course_information:"",
        course_review:"",
        certification:"",
        instructor_information:""
    });
   
    const inputChangeHandler=(event)=>{
        const{type,name,value}=event.target;
        setCourse({...course,[name]:value});
    }
    const submitData = (event) => {
        event.preventDefault();
        if (!course.course_name.trim()) {
            document.getElementById('nameError').innerHTML = "Course Name can't be empty";  
          return false;
        }
        else{
          document.getElementById('nameError').innerHTML = "";
        }
        if (!course.course_name.match("[a-zA-Z]{3,15}")) {
            document.getElementById('nameError').innerHTML = "Course Name must contain only character min-3 and max-15";
            return false;
     
        }
        else{
          document.getElementById('nameError').innerHTML = "";
        }
        if (!course.course_fees.trim()) {
            document.getElementById('feesError').innerHTML ="Course Fees is required";
          return false;
        }
        else{
          document.getElementById('feesError').innerHTML = "";
        }
        if (!course.course_duration.trim()) {
            document.getElementById('durationError').innerHTML ="Duration invalid";
            return false;
        }
        else{
          document.getElementById('durationError').innerHTML = "";
        }
        if (!course.course_information.trim()) {
            document.getElementById('infoError').innerHTML ="Course Information is required";
          return false;
        }
        else{
          document.getElementById('infoError').innerHTML = "";
        }
        if (!course.course_information.match("[a-zA-Z]{4,100}")) {
            document.getElementById('infoError').innerHTML ="Course Information must contain minimum-6 and maximum-15 words";
          return false;
        }
        else{
          document.getElementById('infoError').innerHTML = "";
        }
        if (!course.certification.trim()) {
            document.getElementById('certifiedError').innerHTML ="Certification is required";
          return false;
        }
        else{
          document.getElementById('certifiedError').innerHTML = "";
        }
        if (!course.certification.match("[a-zA-Z]{4,6}")) {
            document.getElementById('certifiedError').innerHTML ="Certification canot be number or special character";
          return false;
        }
        else{
          document.getElementById('certifiedError').innerHTML = "";
        }
        if (!course.instructor_information.trim()) {
            document.getElementById('instructError').innerHTML ="Instructor Information is required";
          return false;
        }
        else{
          document.getElementById('instructError').innerHTML = "";
        }
        if (!course.instructor_information.match("[a-zA-Z]{4,100}")) {
            document.getElementById('instructError').innerHTML ="Instructor Information must contain minimum-6 and maximum-15 words";
          return false;
        }
        else{
          document.getElementById('instructError').innerHTML = "";
        }
        if (!course.course_review.trim()) {
            document.getElementById('reviewError').innerHTML ="Course Review is required";
            return false;
          }
          else{
            document.getElementById('reviewError').innerHTML = "";
          }
        if (!course.course_review.match("[a-zA-Z]{4,100}")) {
            document.getElementById('reviewError').innerHTML ="Course Review must contain minimum-6 and maximum-15 words";
          return false;
        }
        else{
          document.getElementById('reviewError').innerHTML = "";
        }
        event.preventDefault();
        console.log(course)
        axios.post(`http://localhost:8888/courses`,course).then(()=>{
            window.alert("Course Added Successfully");
            nav(`/main/courses`);
        }).catch((error)=>{})
      }
    
   
    return (
        <div>
        <div className='row'>
            <div className='col-sm-3'></div>
            <div className='col-sm-6'>
            <form onSubmit={(e)=>submitData(e)} >
            <div>
                        <label className='form-label'>Enter Course Name</label>
                        <input type='text' name="course_name" onChange={(e)=>inputChangeHandler(e)} value={course.course_name} className='form-control' />&nbsp;&nbsp;&nbsp;&nbsp;
                        </div>
                        <p id='nameError' style={{color:'red', fontSize:'10px'}}></p>
                        <div>
                        <label className='form-label'>Enter Course Fees</label>
                        <input type='text' name="course_fees" onChange={(e)=>inputChangeHandler(e)} value={course.course_fees} className='form-control' />&nbsp;&nbsp;&nbsp;&nbsp;
                        </div>
                        <p id='feesError' style={{color:'red', fontSize:'10px'}}></p>
                        <div>
                        <label className='form-label'>Enter Course Duration</label>
                        <input type='text' name="course_duration" onChange={(e)=>inputChangeHandler(e)} value={course.course_duration} className='form-control' />&nbsp;&nbsp;&nbsp;&nbsp;
                        </div>
                        <p id='durationError' style={{color:'red', fontSize:'10px'}}></p>
                        <div>
                        <label className='form-label' value='certification'>Certification :</label>
                        <input type='radio'  id='certification'name='certification' value="true" checked={course.certification === "true"} onChange={(e) => inputChangeHandler(e)} /> True {" "}&nbsp;
                        <input type='radio'  id='certification'name='certification' value="false" checked={course.certification === "false"} onChange={(e) => inputChangeHandler(e)} /> False<br /><br />
                        </div>
                        <p id='certifiedError' style={{color:'red', fontSize:'10px'}}></p>
                        <div>
                        <label className='form-label'>Enter Course Information</label>
                        <input type='text' name="course_information" onChange={(e)=>inputChangeHandler(e)} value={course.course_information} className='form-control' />&nbsp;&nbsp;&nbsp;&nbsp;
                        </div>
                        <p id='infoError' style={{color:'red', fontSize:'10px'}}></p>
                        <div>
                        <label className='form-label'>Enter Course Review</label>
                        <input type='text' name="course_review" onChange={(e)=>inputChangeHandler(e)} value={course.course_review} className='form-control' />&nbsp;&nbsp;&nbsp;&nbsp;
                        </div>
                        <p id='reviewError' style={{color:'red', fontSize:'10px'}}></p>
                        <div>
                        <label className='form-label'>Enter Instructor Information</label>
                        <input type='text' name="instructor_information" onChange={(e)=>inputChangeHandler(e)} value={course.instructor_information} className='form-control' />&nbsp;&nbsp;&nbsp;&nbsp;
                        </div>
                        <p id='instructError' style={{color:'red', fontSize:'10px'}}></p>
                        <button type='submit' className='btn btn-primary mt-2'>Submit</button>
                 </form>
            </div>
            <div className='col-sm-3'></div>
        </div>
        </div>
    )
}
 
export default CourseAddComp