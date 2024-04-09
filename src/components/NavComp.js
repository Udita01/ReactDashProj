import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import BadgeTwoToneIcon from '@mui/icons-material/BadgeTwoTone';
import SchoolTwoToneIcon from '@mui/icons-material/SchoolTwoTone';
import AccountBoxTwoToneIcon from '@mui/icons-material/AccountBoxTwoTone';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import BusinessTwoToneIcon from '@mui/icons-material/BusinessTwoTone';
import DashboardTwoToneIcon from '@mui/icons-material/DashboardTwoTone';



const NavComp = () => {
    const nav= useNavigate()
    return(
        <div style={{backgroundColor:'azure', height:'100%', boxSizing:'border-box'}}>
            <Link to='' className='btn' style={{margin:'20px', width:'100%', textAlign:'justify'}}><DashboardTwoToneIcon /> {' '}&nbsp;&nbsp;&nbsp;Main Dashboard</Link><br />
            <Link to='empmod' className='btn' style={{margin:'20px', width:'100%', textAlign:'justify'}}><BadgeTwoToneIcon/> {' '}&nbsp;&nbsp;&nbsp;Employee</Link><br />
            <Link to='branches' className='btn' style={{margin:'20px', width:'100%', textAlign:'justify'}}><BusinessTwoToneIcon/> {' '}&nbsp;&nbsp;&nbsp;Branches</Link><br /><br />
            <Link to='courses' className='btn' style={{marginLeft:'20px', width:'100%', textAlign:'justify'}}><MenuBookTwoToneIcon/> {' '}&nbsp;&nbsp;&nbsp;Courses</Link><br /><br />
            <Link to='studmod' className='btn' style={{margin:'20px', width:'100%', textAlign:'justify'}}><SchoolTwoToneIcon/> {' '}&nbsp;&nbsp;&nbsp;Students</Link><br /><br />
            {sessionStorage.user ==='Admin' && <Link to='users' className='btn' style={{marginLeft:'18px',width:'100%', textAlign:'justify'}}>
                <AccountBoxTwoToneIcon/> {' '}&nbsp;&nbsp;&nbsp;Users</Link>}

        </div>
    )
     
}
export default NavComp;