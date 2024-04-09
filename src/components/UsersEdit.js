import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import PublishTwoToneIcon from '@mui/icons-material/PublishTwoTone';

const UsersEdit = () => {
    const {id}= useParams()
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
    const editUser =(event)=>{ 
        event.preventDefault();
        if(!users.enrollment.trim()){
            document.getElementById('eerr').innerHTML=" Enrollment field is required";
            return false;
        }
        if(!users.enrollment.match("[0-9]")){
            document.getElementById('eerr').innerHTML=" Enrollment field must contain numbers";
            return false;
        }
        if (!users.name.trim()) {
            document.getElementById('nerr').innerHTML=" Name field cannot be empty";
            return false;
          }
          if (!users.name.match("[a-zA-Z]{3,15}")) {
            document.getElementById('nerr').innerHTML="Name must contain only character min-3 and max-15";
            return false;
          }
          if(!users.password.trim()){
            document.getElementById('perr').innerHTML="Password input is mandatory";
            return false;
        }
          if (!users.contact.trim()) {
            document.getElementById('cerr').innerHTML="Contact is required";
            return false;
          }
          if (!users.contact.match("[0-9]{10}")){
            document.getElementById('cerr').innerHTML="Contact Number invalid";
            return false;
          }          
          if (!users.role.trim()) {
            document.getElementById('rerr').innerHTML="Role Field cannot be empty";
            return false;
          }
        console.log(users);
        axios.put(`http://localhost:8888/users/${id}`, users).then(()=>{
            window.alert('Users Record edited successfully');
            nav('/main/users');
        }).catch((error)=>{

        })
    }
    useEffect(()=>{
        console.log(id);
        axios.get(`http://localhost:8888/users/${id}`).then((res)=>{
            console.log(res.data);
            setUsers(res.data)
        }).catch((error)=>{});
    },[])
    return (
        <div>
            <h2>Edit User Record: </h2>
           <div className='row'>
                <div className='col-sm-3'></div>
                <div className='col-sm-6'>
                    <form onSubmit={(e)=>editUser(e)}>
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

export default UsersEdit
