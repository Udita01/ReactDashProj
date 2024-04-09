import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PublishTwoToneIcon from '@mui/icons-material/PublishTwoTone';

const UsersAdd = () => {
    const nav = useNavigate();
    const [users, setUsers] = useState({
        userId:'',
        userName:'',
        password:'',
        role:'',
        contact:'',
    });
    const inputChangeHandler=(event)=>{
            const{type, name, value} = event.target;
            setUsers({...users,[name]:value});
    }
    const addEmp =(event)=>{ 
        event.preventDefault();
        if(!users.enrollment.trim()){
            document.getElementById('eerr').innerHTML=" Enrollment field is required";
            return false;
        }
        else{
          document.getElementById('eerr').innerHTML = "";
        }
        if(!users.enrollment.match("[0-9]")){
            document.getElementById('eerr').innerHTML=" Enrollment field must contain numbers";
            return false;
        }
        else{
          document.getElementById('eerr').innerHTML = "";
        }
        if (!users.name.trim()) {
            document.getElementById('nerr').innerHTML=" Name field cannot be empty";
            return false;
          }
          else{
            document.getElementById('nerr').innerHTML = "";
          }
          if (!users.name.match("[a-zA-Z]{3,15}")) {
            document.getElementById('nerr').innerHTML="Name must contain only character min-3 and max-15";
            return false;
          }
          else{
            document.getElementById('nerr').innerHTML = "";
          }
          if(!users.password.trim()){
            document.getElementById('perr').innerHTML="Password input is mandatory";
            return false;
        }
        else{
          document.getElementById('perr').innerHTML = "";
        }
          if (!users.contact.trim()) {
            document.getElementById('cerr').innerHTML="Contact is required";
            return false;
          }
          else{
            document.getElementById('cerr').innerHTML = "";
          }
          if (!users.contact.match("[0-9]{10}")){
            document.getElementById('cerr').innerHTML="Contact Number invalid";
            return false;
          }      
          else{
            document.getElementById('cerr').innerHTML = "";
          }    
          if (!users.role.trim()) {
            document.getElementById('rerr').innerHTML="Role Field cannot be empty";
            return false;
          }
          else{
            document.getElementById('rerr').innerHTML = "";
          }
        console.log(users);
        axios.post(`http://localhost:8888/users`, users).then(()=>{
            window.alert('Users Record added successfully');
            nav('/main/users');
        }).catch((error)=>{

        })
    }
    return (
        <div>
            <h2>Add New User Record: </h2>
           <div className='row'>
                <div className='col-sm-3'></div>
                <div className='col-sm-6'>
                    <form onSubmit={(e)=>addEmp(e)}>
                    <div><label for='enrollment'>Enrollment Id:</label><input type='text' id='enrollment' name='enrollment' className='form-control' value={users.enrollment} onChange={(e)=>inputChangeHandler(e)} /></div><br />
                    <p id='eerr'style={{color:'red', fontSize:'10px'}}></p>
                        <div><label for='name'>User Name:</label><input type='text' name='name' className='form-control' id='name' value={users.name} onChange={(e)=>inputChangeHandler(e)} /></div><br />
                        <p id='nerr'style={{color:'red', fontSize:'10px'}}></p>
                        <div><label for='password'>User Password:</label><input type='text' name='password' className='form-control' id='password' value={users.password} onChange={(e)=>inputChangeHandler(e)} /></div><br />
                        <p id='perr'style={{color:'red', fontSize:'10px'}}></p>
                        <div><label for='contact'>User Contact:</label><input type='text' id='contact' name='contact' className='form-control' value={users.contact} onChange={(e)=>inputChangeHandler(e)} /></div><br />
                        <p id='cerr'style={{color:'red', fontSize:'10px'}}></p>
                        <div><label for='role'>User Role:</label><input type='text' id='role' name='role' className='form-control' value={users.role} onChange={(e)=>inputChangeHandler(e)} /></div><br />
                        <p id='rerr'style={{color:'red', fontSize:'10px'}}></p>
                        <button type='submit' className='btn btn-outline-success'><PublishTwoToneIcon />Submit</button>
                
                
                
                </form></div>
                <div className='col-sm-3'></div>
                
            </div>
        </div>
    )
}

export default UsersAdd
