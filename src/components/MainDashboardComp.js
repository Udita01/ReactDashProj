import React from 'react'
// import FooterComp from './FooterComp'
import NavComp from './NavComp'
import { Outlet } from 'react-router-dom'


const MainDashBoardComp = () => {
    return (
        <div className='container'>
            {/* <h2>This is Main Dashboard Component</h2> */}
            <div className='card border-primary'>
                <div className='card-header border-primary'><NavComp /></div>
                <div className='card-body border-primary'><Outlet /></div>
                <div className='card-footer border-primary'>This is Footer </div>
            </div>
            
        </div>
    )
}

export default MainDashBoardComp