import React,{ useEffect,useState} from 'react'
import axios from 'axios';
import AddToPhotosTwoToneIcon from '@mui/icons-material/AddToPhotosTwoTone';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {Button} from 'react-bootstrap';
import {Modal} from 'react-bootstrap';
import {Table} from 'react-bootstrap';
import EditNoteIcon from '@mui/icons-material/EditNote';
import ReactPaginate from 'react-paginate';
 
 
const CourseDashboardComp = () => {
 
    const [courses,setCourses]=useState([]);
 
    const [show, setShow] = useState(false);
    
    const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 10;
 
    const handleClose = () => setShow(false);
    const handleShow = (data)=>{
        setShow(true)
        setShow(data);
    }
    useEffect(()=>{
        fetchCourse(pageNumber);
    },[pageNumber]);
 
    const fetchCourse=(pageNumber)=>{
 
        axios.get(`http://localhost:8888/courses?page=${pageNumber}`).then((res)=>{
            console.log(res.data);
            setCourses(res.data);
        }).catch((error)=>{})
    }
    const deleteCourse=(id)=>{
        if(window.confirm(`Are you sure to delete record withId:${id}`)){
            axios.delete(`http://localhost:8888/courses/${id}`).then(()=>{
                window.alert("Course Deleted Successfully");
                fetchCourse();
            }).catch((error)=>{})
        }
    }
 
    return (
        <div>
            <h2>Course Module</h2>
            <Link to="/main/addcourse" className='btn btn-outline-success '><AddToPhotosTwoToneIcon /> Add</Link><br /><br />
            <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Sr. No.</th><th>Course Name</th><th>Course Fees</th><th>Course Duration</th><th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {
                    courses.length>0 && courses.slice(pageNumber * itemsPerPage, (pageNumber + 1) * itemsPerPage).map((val,index)=>{
                        return<tr key={index}>
                            <td>{val.id}</td>
                            <td>{val.course_name}</td>
                            <td>{val.course_fees}</td>
                            <td>{val.course_duration}</td>
                            <td>
                                <button type='button'
                                onClick={()=>handleShow(val)}  className='btn btn-outline-primary btn-sm'><VisibilityIcon/></button>{" "}|{" "}
                                <Link to={`/main/editcourse/${val.id}`} className='btn btn-outline-warning btn-sm'><EditNoteIcon /></Link>{" "}|{" "}
                                <button type='button' className='btn btn-outline-danger btn-sm' onClick={()=>deleteCourse(val.id)}><DeleteIcon /></button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
            </Table>
            <ReactPaginate
  previousLabel={'Previous'}
  nextLabel={'Next'}
  pageCount={Math.ceil(courses.length / itemsPerPage)}
  onPageChange={({ selected }) => setPageNumber(selected)}
  containerClassName={'pagination'}
  pageLinkClassName={'page-link'}
  activeClassName={'active'}
/>
            {/* Modal Start Here */}
            <Modal show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            >
        <Modal.Header closeButton>
          <Modal.Title>{show.course_name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <label>Id: </label> <strong>{show.id}</strong><br/>
            <label>Course Name: </label> <strong>{show.course_name}</strong><br/>
            <label>Course Fees: </label> <strong>{show.course_fees}</strong><br/>
            <label>Course Duration: </label> <strong>{show.course_duration}</strong><br/>
            <label>Course Information: </label> <strong>{show.course_information}</strong><br/>
            <label>Certification: </label> <strong>{""+show.certification}</strong><br/>
            <label>Course Review: </label> <strong>{show.course_review}</strong><br/>
            <label>Instructor Information: </label> <strong>{show.instructor_information}</strong><br/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
        </div>
    )
}
 
export default CourseDashboardComp