import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ProtectedRoute = (props) => {
    const {RoutingComponent} = props;
    const nav = useNavigate();
    
    useEffect(()=>{
        if(!sessionStorage.getItem('user')){
            nav('/');
        }
    },[])

    return (
        <div>
            {/* <h2>This is Protected Route Component</h2> */}
            <RoutingComponent> </RoutingComponent>
        </div>
    )
}

export default ProtectedRoute
