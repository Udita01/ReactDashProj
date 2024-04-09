import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import AddToPhotosTwoToneIcon from '@mui/icons-material/AddToPhotosTwoTone';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import { Button, Modal} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
 
const StudMod = () => {
    const [StudMod,setStudMod] = useState([]);
    const [show, setShow] = useState(false);
    const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 10;
    const handleClose = () => setShow(false);
    const handleShow = (data) => {
        setShow(true);
        setShow(data);
    };
    useEffect(()=>{
        fetchData(pageNumber);
    },[pageNumber]);
const fetchData = (pageNumber)=>{
    axios.get(`http://localhost:8888/students?page=${pageNumber}`).then((res)=>{
        console.log(res.data);
        setStudMod(res.data);
    }).catch((error)=>{})
}
const deleteRec =(id)=>{
    if(window.confirm(`Are you sure to delete record with Id:${id}`)){
        axios.delete(`http://localhost:8888/students/${id}`).then(()=>{
        window.alert('Record deleted successfully');
        fetchData();
        }).catch((error)=>{})
}
 
}
    return (
        <div>
            <h2>Student Module</h2>
            <Link to='/main/StudModadd' className='btn btn-outline-success btm-sm'><AddToPhotosTwoToneIcon /> Add</Link><br /><br/>
            <table className='table table-striped table-hover table-dark table-sm'>
                <thead>
                    <tr>
                        <th>Sr.no</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>Date of Birth</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        StudMod.length>0 && StudMod.slice(pageNumber * itemsPerPage, (pageNumber + 1) * itemsPerPage).map((val,index)=>{
                            return <tr key={index}>
                                <td>{val.id}</td>
                                <td>{val.firstName}</td>
                                <td>{val.lastName}</td>
                                <td>{val.gender}</td>
                                <td>{val.dob}</td>
                                <td>{val.address}</td>
                                <td>{val.email}</td>
 
                               
 
 
                                <td>
                                    <button type='button' className='btn btn-outline-primary btn-sm' onClick={()=>handleShow(val)}><VisibilityTwoToneIcon /></button>{" "}|{" "}
 
                                    <Link to = {`/main/StudModedit/${val.id}`} className='btn btn-outline-warning btn-sm'>
                                        <EditNoteIcon /> </Link>{" "}|{" "}
                                    <button className='btn btn-outline-danger btn-sm' onClick={()=>deleteRec(val.id)}>
                                        <DeleteTwoToneIcon />
                                    </button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
            <ReactPaginate
  previousLabel={'Previous'}
  nextLabel={'Next'}
  pageCount={Math.ceil(StudMod.length / itemsPerPage)}
  onPageChange={({ selected }) => setPageNumber(selected)}
  containerClassName={'pagination'}
  pageLinkClassName={'page-link'}
  activeClassName={'active'}
/>
            {/* modal pop-up code from react-bootstrap */}
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}>
                <Modal.Header closeButton>
                <Modal.Title>{show.firstName+" "+show.lastName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <label>
                Name:  <strong>{show.firstName+" "+show.lastName}</strong><br />
                Email:  <strong>{show.email}</strong><br />
                Contact:  <strong>{show.contact}</strong><br />
                Gender:  <strong>{show.gender}</strong><br />
                Temporary Address: <strong>{show.temporaryAddress}</strong><br />
                Permanent Address: <strong>{show.permanentAddress}</strong><br />
                Age: <strong>{show.age}</strong><br />
                Nationality: <strong>{show.nationality}</strong><br />
                Courses: <strong>{show.course}</strong><br />
                Blood Group: <strong>{show.bloodGroup}</strong><br />
                Personal Number: <strong>{show.personalNumber}</strong><br />
                Guardian Number: <strong>{show.guardianNumber}</strong><br />
                Education Details: <strong>{show.educationDetails}</strong><br />
                Resources: <strong>{show.resources}</strong><br /></label>
 
                </Modal.Body>
                <Modal.Footer>
                <Button variant="outline-warning" onClick={handleClose}>
                Close
                </Button>
                {/* <Button variant="success">Understood</Button> */}
                </Modal.Footer>
            </Modal>
           
        {/* <Pagination currentPage={...} totalPages={...} onPageChange={...} /> */}
        </div>
 
    )
}
 
 export default StudMod