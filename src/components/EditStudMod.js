import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import PublishTwoToneIcon from '@mui/icons-material/PublishTwoTone';

const EditStudMod = () => {
    const { id } = useParams()
    const nav = useNavigate();
    const [stud, setStud] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        dob: '',
        contact: '',
        address: '',
        email: '',
        bloodGroup: '',
        age: ''

    });
    const inputChangeHandler = (event) => {
        const { type, name, value } = event.target;
        setStud({ ...stud, [name]: value });
    }
    useEffect(() => {
        console.log(id);
        axios.get(`http://localhost:8888/students/${id}`).then((res) => {
            console.log(res.data);
            setStud(res.data)
        }).catch((error) => { });
    }, [])
    const editStud = (event) => {
        event.preventDefault();
        if (!stud.firstName.trim()) {
            document.getElementById('fnerr').innerHTML=" First Name field cannot be empty";
            return false;
          }
          if (!stud.firstName.match("[a-zA-Z]{3,15}")) {
            document.getElementById('fnerr').innerHTML="First Name must contain only character min-3 and max-15";
            return false;
          }
          if (!stud.lastName.trim()) {
            document.getElementById('lnerr').innerHTML="Last Name field cannot be empty";
            return false;
          }
          if (!stud.lastName.match("[a-zA-Z]{3,15}")) {
            document.getElementById('lnerr').innerHTML="Last Name must contain only character min-3 and max-15";
            return false;
          }
          if (!stud.contact.trim()) {
            document.getElementById('pnerr').innerHTML="Contact is required";
            return false;
          }
          if (!stud.contact.match("[0-9]{10}")){
            document.getElementById('pnerr').innerHTML="Contact Number invalid";
            return false;
          }          
          if (!stud.email.trim()) {
            document.getElementById('emerr').innerHTML="Email is required";
            return false;
          }
          if (!stud.email.match("[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}")){
            document.getElementById('emerr').innerHTML="Email invalid";
            return false;
          }
          if(!stud.gender){
            document.getElementById('gerr').innerHTML="Please select your Gender";
            return false;
        }
          if (!stud.address.trim()) {
            document.getElementById('aderr').innerHTML="Address is required";
            return false;
          }
          if (!stud.dob) {
            document.getElementById('doberr').innerHTML="Please Select Your Date of Birth";
            return false;
          }
        console.log(stud);
        axios.put(`http://localhost:8888/students/${id}`, stud).then(() => {
            window.alert('Student Record updated successfully');
            nav('/main/studmod');
        }).catch((error) => {

        })
    }
    return (
        <div>
            <h2>Update Student Details</h2>
            <div className='row'>
                <div className='col-sm-3'></div>
                <div className='col-sm-6'>
                    <form onSubmit={(e) => editStud(e)}>
                        <div><label for='firstName'>Student First Name:</label><input type='text' name='firstName' className='form-control' id='firstName' value={stud.firstName} onChange={(e) => inputChangeHandler(e)} /></div><br />
                        <p id='fnerr'style={{color:'red', fontSize:'10px'}}></p>
                        <div><label for='lastName'>Student Last Name:</label><input type='text' name='lastName' className='form-control' id='lastName' value={stud.lastName} onChange={(e) => inputChangeHandler(e)} /></div><br />
                        <p id='lnerr'style={{color:'red', fontSize:'10px'}}></p>
                        <div><label for='email'>Student Email:</label><input type='text' id='email' name='email' className='form-control' value={stud.email} onChange={(e) => inputChangeHandler(e)} /></div><br />
                        <p id='emerr'style={{color:'red', fontSize:'10px'}}></p>
                        <div><label for='contact'>Student Contact:</label><input type='text' id='contact' name='contact' className='form-control' value={stud.contact} onChange={(e) => inputChangeHandler(e)} /></div><br />
                        <p id='pnerr'style={{color:'red', fontSize:'10px'}}></p>
                        <div><div><label>Select Your Gender: </label>
                            <input type='radio' name='gender' value="male" checked={stud.gender === "male"} onChange={(e) => inputChangeHandler(e)} /> Male {" "}&nbsp;
                            <input type='radio' name='gender' value="female" checked={stud.gender === "female"} onChange={(e) => inputChangeHandler(e)} /> Female</div><br /></div><br />
                            <p id='gerr'style={{color:'red', fontSize:'10px'}}></p>
                        <div><label for='address'>Student Address:</label><input type='text' name='address' id='address' className='form-control' value={stud.address} onChange={(e) => inputChangeHandler(e)} /></div><br />
                        <p id='aderr'style={{color:'red', fontSize:'10px'}}></p>
                        <div><label for='age'>Student Age:</label><input type='text' name='age' id='age' className='form-control' value={stud.age} onChange={(e) => inputChangeHandler(e)} /></div><br />
                        <div><label for='bloodgrp'>Student Blood Group:</label><input type='text' name='bloodgrp' id='bloodgrp' className='form-control' value={stud.bloodGroup} onChange={(e) => inputChangeHandler(e)} /></div><br />
                        <div><label for='dob'>Student D.O.B.:</label><input type='date' name='dob' id='dob' className='form-control' value={stud.dob} onChange={(e) => inputChangeHandler(e)} /></div><br />
                        <p id='doberr'style={{color:'red', fontSize:'10px'}}></p>
                        <div><label for='temporaryAddress'>Student Temporary Address:</label><input type='text' name='temporaryAddress' id='temporaryAddress' className='form-control' value={stud.temporaryAddress} onChange={(e) => inputChangeHandler(e)} /></div><br />
                        <div><label for='permanentAddress'>Student Permanent Address:</label><input type='text' name='permanentAddress' id='permanentAddress' className='form-control' value={stud.permanentAddress} onChange={(e) => inputChangeHandler(e)} /></div><br />
                        <div><label for='personalNumber'>Student Personal Number:</label><input type='text' name='personalNumber' id='personalNumber' className='form-control' value={stud.personalNumber} onChange={(e) => inputChangeHandler(e)} /></div><br />
                        <div><label for='guardianNumber'>Student Guardian Number:</label><input type='text' name='guardianNumber' id='guardianNumber' className='form-control' value={stud.guardianNumber} onChange={(e) => inputChangeHandler(e)} /></div><br />
                        <div><label for='nationality'>Student Nationality:</label><input type='text' name='nationality' id='nationality' className='form-control' value={stud.nationality} onChange={(e) => inputChangeHandler(e)} /></div><br />
                        <div><label for='course'>Student Course:</label><input type='text' name='course' id='course' className='form-control' value={stud.course} onChange={(e) => inputChangeHandler(e)} /></div><br />
                        <div><label for='educationDetails'>Student Education Details:</label><input type='text' name='educationDetails' id='educationDetails' className='form-control' value={stud.educationDetails} onChange={(e) => inputChangeHandler(e)} /></div><br />
                        <div><label for='resources'>Student Resources:</label><input type='text' name='resources' id='resources' className='form-control' value={stud.resources} onChange={(e) => inputChangeHandler(e)} /></div><br />

                        <button type='submit' className='btn btn-outline-success'><PublishTwoToneIcon />Submit</button>


                    </form></div>
                <div className='col-sm-3'></div></div>

        </div>
    )
}

export default EditStudMod