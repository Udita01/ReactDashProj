import React, { useState,useEffect } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios';
 
const CourseEditComp = () => {
 
    const{id}=useParams();//it return id parameter from browser url
    const nav=useNavigate();//it is used to perform navigation automaticaly
 
    const[courses,setCourses]=useState({
        course_name:"",
        course_information:"",
        course_fees:"",
        course_duration:"",
        course_review:"",
        certification:"",
        instructor_information:""
    });
 
    const inputChangeHandler=(event)=>{
        const{type,name,value}=event.target;
        setCourses({...courses,[name]:value});
    }
 
    const editCourse=(event)=>{
        event.preventDefault();
        //console.log(prod)
        axios.put(`http://localhost:8888/courses/${id}`,courses).then(()=>{
            window.alert("Course Edited Successfully");
            nav(`/main/courses`);
        }).catch((error)=>{})
    }
 
    useEffect(()=>{
        console.log(id);
        axios.get(`http://localhost:8888/courses/${id}`).then((res)=>{
            console.log(res.data);
            setCourses(res.data);
        }).catch((error)=>{});
    },[]);
 
 
    return (
        <div>
            <div className='row'>
                <div className='col-sm-3'></div>
                <div className='col-sm-6'>
                    <form onSubmit={(e)=>editCourse(e)}>
                        <div>
                        <label className='form-label'>Enter Course Name</label>
                        <input type='text' name="course_name" onChange={(e)=>inputChangeHandler(e)} value={courses.course_name} className='form-control' />
                        </div>
                        <div>
                        <label className='form-label'>Enter Course Fees </label>
                        <input type='text' name="course_fees" onChange={(e)=>inputChangeHandler(e)} value={courses.course_fees} className='form-control' />
                        </div>
                        <div>
                        <label className='form-label'>Enter Course Duration</label>
                        <input type='text' name="course_duration" onChange={(e)=>inputChangeHandler(e)} value={courses.course_duration} className='form-control' />
                        </div>
                        <div>
                        <label className='form-label'>Enter Course Information</label>
                        <input type='text' name="course_information" onChange={(e)=>inputChangeHandler(e)} value={courses.course_information} className='form-control' />
                        </div>
                        <div>
                        <label className='form-label'>Certification</label>
                        <label className='form-label' value='certification'>Certification :</label>
                        <input type='radio'  id='certification'name='certification' value="true" checked={courses.certification === "true"} onChange={(e) => inputChangeHandler(e)} /> True {" "}&nbsp;
                        <input type='radio'  id='certification'name='certification' value="false" checked={courses.certification === "false"} onChange={(e) => inputChangeHandler(e)} /> False<br /><br />
                        </div>
                        <div>
                        <label className='form-label'>Enter Instructor Information</label>
                        <input type='text' name="instructor_information" onChange={(e)=>inputChangeHandler(e)} value={courses.instructor_information} className='form-control' />
                        </div>
                        <div>
                        <label className='form-label'>Enter Course Review</label>
                        <input type='text' name="course_review" onChange={(e)=>inputChangeHandler(e)} value={courses.course_review} className='form-control' />
                        </div>
                        <button type='submit' className='btn btn-primary mt-2'>Submit</button>
                 </form>
                </div>
                <div className='col-sm-3'></div>
            </div>
        </div>
    )
}
 
export default CourseEditComp