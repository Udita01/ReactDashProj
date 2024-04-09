import React, {useState, useEffect} from 'react'
import axios from 'axios';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import AddToPhotosTwoToneIcon from '@mui/icons-material/AddToPhotosTwoTone';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import { Button, Modal} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

const Users = () => {
    const [user,setUser] = useState([]);
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
        axios.get(`http://localhost:8888/users?page=${pageNumber}`).then((res)=>{
            console.log(res.data);
            setUser(res.data);
        }).catch((error)=>{})
    }
    const deleteUser =(id)=>{
        if(window.confirm(`Are you sure to delete record with Id:${id}`)){
            axios.delete(`http://localhost:8888/users/${id}`).then(()=>{
            window.alert('Record deleted successfully');
            fetchData();
            }).catch((error)=>{})
    }
}
    return (
        <div>
            <h2>User Module</h2>
            <Link to='/main/usersadd' className='btn btn-outline-success btm-sm'><AddToPhotosTwoToneIcon /> Add</Link><br /><br/>
            <table className='table table-striped table-hover table-dark table-sm'>
                <thead>
                    <tr>
                        <th>Sr.no</th><th>Enrollment Id</th><th>User Name</th><th>Role</th><th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.length>0 && user.slice(pageNumber * itemsPerPage, (pageNumber + 1) * itemsPerPage).map((val,index)=>{
                            return <tr key={index}>
                                <td>{val.id}</td>
                                <td>{val.enrollment}</td>
                                <td>{val.name}</td>
                                <td>{val.role}</td>
                                <td>
                                    <button type='button' className='btn btn-outline-primary btn-sm' onClick={()=>handleShow(val)}><VisibilityTwoToneIcon /></button>{" "}|{" "}

                                    <Link to = {`/main/usersedit/${val.id}`} className='btn btn-outline-warning btn-sm'>
                                        <EditNoteIcon /> </Link>{" "}|{" "}
                                    <button className='btn btn-outline-danger btn-sm' onClick={()=>deleteUser(val.id)}>
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
  pageCount={Math.ceil(user.length / itemsPerPage)}
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
                <Modal.Title>{show.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <label>User Id:  <strong>{show.enrollment}</strong><br />
                Name:  <strong>{show.name}</strong><br />
                Password:  <strong>{show.password}</strong><br />
                Contact:  <strong>{show.contact}</strong><br />
                Role:  <strong>{show.role}</strong><br /></label>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="outline-warning" onClick={handleClose}>
                Close
                </Button>
                {/* <Button variant="success">Understood</Button> */}
                </Modal.Footer>
            </Modal>
            
        
        </div>
    )
}

export default Users
