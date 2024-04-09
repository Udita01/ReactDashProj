import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Modal, Button, Pagination } from 'react-bootstrap';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import AddToPhotosTwoToneIcon from '@mui/icons-material/AddToPhotosTwoTone';
import VisibilityTwoToneIcon from '@mui/icons-material/VisibilityTwoTone';
import ReactPaginate from 'react-paginate';
 
 
const BranchesComp = () => {
 
 
    const [branch, setBranch] = useState([]);
 
    const [show, setShow] = useState(false);
    
    const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 10;

    const handleClose = () => setShow(false);
    const handleShow = (data) => {
        setShow(true);
        setShow(data);
    }
 
    useEffect(() => {
        fetchData(pageNumber);
    }, [pageNumber])
 
    const fetchData = (pageNumber) => {
        axios.get(`http://localhost:8888/branches?page=${pageNumber}`).then((res) => {
            console.log(res.data);
            setBranch(res.data);
        }).catch((error) => { })
    }
 
    const deleteRec = (id) => {
        if (window.confirm(`Are you sure to delete record with id:${id}`)) {
            axios.delete(`http://localhost:8888/branches/${id}`).then(() => {
                window.alert("Record deleted Successfully")
                fetchData();
             }).catch((error) => { })
            
        }
 
    }
 
 
 
 
    return (
        <div>
            <h2>Branch Module</h2>
            <Link to="/main/addbr" className='btn btn-outline-success'><AddToPhotosTwoToneIcon /> Add</Link><br /><br />
            <table className='table table-striped table-hover table-dark '>
                <thead>
                    <tr>
                        <th>Id</th><th>Name</th><th>Phone</th><th>Email</th><th>Address</th><th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        branch.length > 0 && branch.slice(pageNumber * itemsPerPage, (pageNumber + 1) * itemsPerPage).map((val, index) => {
                            return <tr key={index}>
                                <td>{val.id}</td>
                                <td>{val.name}</td>
                                <td>{val.phone}</td>
                                <td>{val.email}</td>
                                <td>{val.address}</td>
                                <td>
                                    <button type='button' className='btn btn-outline-primary btn-sm' onClick={() => handleShow(val)}><VisibilityTwoToneIcon /></button>{" "}|{" "}
                                    <Link to={`/main/editbran/${val.id}`} className='btn btn-outline-warning btn-sm'>
                                        <EditNoteIcon />
                                    </Link>{" "}|{" "}
                                   
                                    <button type='button' className='btn btn-outline-danger btn-sm' onClick={() => deleteRec(val.id)}><DeleteIcon /></button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
 
            <ReactPaginate
  previousLabel={'Previous'}
  nextLabel={'Next'}
  pageCount={Math.ceil(branch.length / itemsPerPage)}
  onPageChange={({ selected }) => setPageNumber(selected)}
  containerClassName={'pagination'}
  pageLinkClassName={'page-link'}
  activeClassName={'active'}
/>
 
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{show.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label>Id:<strong>{show.id}</strong></label><br></br>
                    <label>Name:<strong>{show.name}</strong></label><br></br>
                    <label>Phone:<strong>{show.phone}</strong></label><br></br>
                    <label>Email:<strong>{show.email}</strong></label><br></br>
                    <label>Address:<strong>{show.address}</strong></label><br></br>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>
 
 
        </div>
 
    )
   
 
 
}
 
 
 
export default BranchesComp