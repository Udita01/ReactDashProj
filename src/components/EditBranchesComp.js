import React, { useEffect,useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios';
 
const EditBranchesComp = () => {
    const {id}= useParams();//return id parameter from browser url
    const nav = useNavigate();//to performnavigation automatically
 
    const [branch,setBranch] = useState({
        id:"",
        name:"",
        post:"",
        email:"",
        address:""
 
    });
 
    const inputChangeHandler=(event)=>{
        const{type,name,value} = event.target;
        setBranch({...branch,[name]:value});
    }
 
    const EditBranches =(event)=>{
        event.preventDefault();
 
        //form val
        if (!branch.name.trim()) {
            document.getElementById('nameError').innerHTML = "Name field can't be empty";
            return false;
          }
          if (!branch.name.match("[a-zA-Z]{3,15}")) {
            document.getElementById('nameError').innerHTML = "Name must contain only character min-3 and max-15";
            return false;
          }
          if (!branch.phone.trim()) {
            document.getElementById('phError').innerHTML ="Phone is required";
            return false;
          }
          if (!branch.phone.match("[0-9]{10}")){
            document.getElementById('phError').innerHTML ="Phone Number invalid";
            return false;
          }          
          if (!branch.email.trim()) {
            document.getElementById('mailError').innerHTML ="Email is required";
            return false;
          }
          if (!branch.email.match("[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}")){
            document.getElementById('mailError').innerHTML ="Email invalid";
            return false;
          }
          if (!branch.address.trim()) {
            document.getElementById('adError').innerHTML ="Address is required";
            return false;
          }
          if (!branch.address.match("[a-zA-Z]{5,50}")) {
            document.getElementById('adError').innerHTML ="Address must contain only character min-5 and max-50";
            return false;
          }
          //form val end
 
        console.log(branch);
        axios.put(`http://localhost:8888/branches/${id}`,branch).then(()=>{
            window.alert("Branches Data Edited Successfully")
            nav('/main/branches');
        }).catch((error)=>{})
    }
   
   
    useEffect(()=>{
        console.log(id);
        axios.get(`http://localhost:8888/branches/${id}`).then((res)=>{
            console.log(res.data);
            setBranch(res.data);
        }).catch((error)=>{});
    },[]);
   
    return (
        <div>
            <h2>Edit Branch</h2>
            <div className='row'>
                <div className='col-sm-3'></div>
                <div className='col-sm-6'>
 
                <form onSubmit={(e)=>EditBranches(e)}>
                <div>
                    <label>Enter Branch Name</label>
                    <input type='text' name='name' className='form-control' onChange={(e)=>inputChangeHandler(e)} value={branch.name} />
                    <p id="nameError" style={{color:'red', fontSize:'11px'}}></p>
                    </div>
 
                    <div>
                    <label>Enter Branch Phone</label>
                    <input type='text' name='phone' className='form-control' value={branch.phone} onChange={(e)=>inputChangeHandler(e)}/>
                    <p id="phError" style={{color:'red', fontSize:'11px'}}></p>
                    </div>
 
                    <div>
                    <label>Enter Branch Email</label>
                    <input type='text' name='email' className='form-control' value={branch.email} onChange={(e)=>inputChangeHandler(e)}/>
                    <p id="mailError" style={{color:'red', fontSize:'11px'}}></p>
                    </div>
 
                    <div>
                    <label>Enter Branch Address</label>
                    <input type='text' name='address' className='form-control' value={branch.address} onChange={(e)=>inputChangeHandler(e)}/>
                    <p id="adError" style={{color:'red', fontSize:'11px'}}></p>
                    </div>
 
                    <button type='submit' className='btn btn-primary mt-2'>Submit</button>
                   
                </form>
 
 
                </div>
                <div className='col-sm-3'></div>
 
            </div>
        </div>
    )
}
 
export default EditBranchesComp