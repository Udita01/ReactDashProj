import React, {useEffect, useState}  from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import PublishTwoToneIcon from '@mui/icons-material/PublishTwoTone';

const EditEmpMod = () => {
    const {id}= useParams()
    const nav = useNavigate();
    const [emp, setEmp] = useState({
        empid:'',
        first_name:'',
        last_name:'',
        email:'',
        contact:'',
        gender:'',
        tempaddress:'',
        permaddress:'',
        dept:'',
        salary:'',
        age:'',
        bloodgrp:''
    });
    const inputChangeHandler=(event)=>{
            const{type, name, value} = event.target;
            setEmp({...emp,[name]:value});
    }
    useEffect(()=>{
        console.log(id);
        axios.get(`http://localhost:8888/employees/${id}`).then((res)=>{
            console.log(res.data);
            setEmp(res.data)
        }).catch((error)=>{});
    },[])
    const editEmp =(event)=>{ 
        event.preventDefault();
        if(!emp.empid.trim()){
            document.getElementById('eierr').innerHTML = "Employee ID field can't be empty";
            return false;
        }
        if (!emp.first_name.trim()) {
            document.getElementById('fnerr').innerHTML = "First Name field can't be empty";
            return false;
          }
          if (!emp.first_name.match("[a-zA-Z]{3,15}")) {
            document.getElementById('fnerr').innerHTML = "First Name must contain only character min-3 and max-15";
            return false;
          }
          if (!emp.last_name.trim()) {
            document.getElementById('lnerr').innerHTML = "First Name field can't be empty";
            return false;
          }
          if (!emp.last_name.match("[a-zA-Z]{3,15}")) {
            document.getElementById('lnerr').innerHTML = "First Name must contain only character min-3 and max-15";
            return false;
          }if (!emp.email.trim()) {
            document.getElementById('mailerr').innerHTML ="Email is required";
            return false;
          }
          if (!emp.email.match("[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}")){
            document.getElementById('mailerr').innerHTML ="Email invalid";
            return false;
          }
          if (!emp.contact.trim()) {
            document.getElementById('cerr').innerHTML ="Contact is required";
            return false;
          }
          if (!emp.contact.match("[0-9]{10}")){
            document.getElementById('cerr').innerHTML ="Contact Number invalid";
            return false;
          }
          if(!emp.gender){
            document.getElementById('gerr').innerHTML="Please select your Gender";
            return false;
        }
          if (!emp.tempaddress.trim()) {
            document.getElementById('taderr').innerHTML ="Temporary Address is required";
            return false;
          }
          if (!emp.permaddress.trim()) {
            document.getElementById('paderr').innerHTML ="Permanent Address is required";
            return false;
          }
          if (!emp.salary.trim()) {
            document.getElementById('salerr').innerHTML ="Salary is required";
            return false;
          }
          if (!emp.dept.trim()) {
            document.getElementById('deerr').innerHTML ="Department is required";
            return false;
          }
          if (!emp.age.trim()) {
            document.getElementById('ageerr').innerHTML ="Age is required";
            return false;
          }
          if (emp.age < 22 || emp.age > 59) {
            document.getElementById('ageerr').innerHTML ="Age must be between 22 to 59";
            return false;
          }
          if (!emp.bloodgrp.trim()) {
            document.getElementById('bgerr').innerHTML ="Blood Group is required";
            return false;
          }
        console.log(emp);
        axios.put(`http://localhost:8888/employees/${id}`, emp).then(()=>{
            window.alert('Employee Record updated successfully');
            nav('/main/empmod');
        }).catch((error)=>{

        })
    }
    return (
        <div>
            <h2>Update Employee Details:</h2>
           <div className='row'>
                <div className='col-sm-3'></div>
                <div className='col-sm-6'>
                    <form onSubmit={(e)=>editEmp(e)}>
                    
                    <div><label for='empid'>Employee Id:</label><input type='text' id='empid' name='empid' className='form-control' value={emp.empid} onChange={(e)=>inputChangeHandler(e)} /></div><br />
                    <p id='eierr' style={{color:'red', fontSize:'10px'}}></p>
                        <div><label for='first_name'>Employee First Name:</label><input type='text' name='first_name' className='form-control' id='first_name' value={emp.first_name} onChange={(e)=>inputChangeHandler(e)} /></div><br />
                        <p id='fnerr' style={{color:'red', fontSize:'10px'}}></p>
                        <div><label for='last_name'>Employee Last Name:</label><input type='text' name='last_name' className='form-control' id='last_name' value={emp.last_name} onChange={(e)=>inputChangeHandler(e)} /></div><br />
                        <p id='lnerr' style={{color:'red', fontSize:'10px'}}></p>
                        <div><label for='email'>Employee Email:</label><input type='text' id='email' name='email' className='form-control' value={emp.email} onChange={(e)=>inputChangeHandler(e)} /></div><br />
                        <p id='mailerr' style={{color:'red', fontSize:'10px'}}></p>
                        <div><label for='contact'>Employee Contact:</label><input type='text' id='contact' name='contact' className='form-control' value={emp.contact} onChange={(e)=>inputChangeHandler(e)} /></div><br />
                        <p id='cerr' style={{color:'red', fontSize:'10px'}}></p>
                        <div><div><label>Select Your Gender: </label>
                <input type='radio' name='gender' value="male" checked={emp.gender==="male"} onChange={(e)=>inputChangeHandler(e)} /> Male {" "}&nbsp;
                <input type='radio' name='gender' value="female" checked={emp.gender==="female"} onChange={(e)=>inputChangeHandler(e)} /> Female</div><br /></div>
                <br />
                <p id='gerr'style={{color:'red', fontSize:'10px'}}></p>
                        <div><label for='tempaddress'>Employee Temporary Address:</label><input type='text' name='tempaddress' id='tempaddress' className='form-control' value={emp.tempaddress} onChange={(e)=>inputChangeHandler(e)} /></div><br />
                        <p id='taderr' style={{color:'red', fontSize:'10px'}}></p>
                        <div><label for='permaddress'>Employee Permanent Address:</label><input type='text' name='permaddress' id='permaddress' className='form-control' value={emp.permaddress} onChange={(e)=>inputChangeHandler(e)} /></div><br />
                        <p id='paderr' style={{color:'red', fontSize:'10px'}}></p>
                        <div><label for='salary'>Employee Salary:</label><input type='text' id='salary' name='salary' className='form-control' value={emp.salary} onChange={(e)=>inputChangeHandler(e)} /></div><br />
                        <p id='salerr' style={{color:'red', fontSize:'10px'}}></p>
                        <div><label for='dept'>Employee Department:</label><input type='text' name='dept' id='dept' className='form-control' value={emp.dept} onChange={(e)=>inputChangeHandler(e)} /></div><br />
                        <p id='deerr' style={{color:'red', fontSize:'10px'}}></p>
                        <div><label for='age'>Employee Age:</label><input type='text' name='age' id='age' className='form-control' value={emp.age} onChange={(e)=>inputChangeHandler(e)} /></div><br />
                        <p id='ageerr' style={{color:'red', fontSize:'10px'}}></p>
                        <div><label for='bloodgrp'>Employee Blood Group:</label><input type='text' name='bloodgrp' id='bloodgrp' className='form-control' value={emp.bloodgrp} onChange={(e)=>inputChangeHandler(e)} /></div><br />
                        <p id='bgerr' style={{color:'red', fontSize:'10px'}}></p>
                        <button type='submit' className='btn btn-outline-success'><PublishTwoToneIcon />Submit</button>
                
                
                </form></div>
                <div className='col-sm-3'></div></div>
 
        </div>
    )
}

export default EditEmpMod