import React, { useContext } from 'react';
import Authcontext from '../Context/Authcontext';
import { Navigate, useLocation } from 'react-router';

const Privateroute = ({children}) => {
    const {user ,loading} = useContext(Authcontext) ;
    const location = useLocation()
    console.log(location)
    
    if(loading){
        return <span className="loading loading-ring loading-xl"></span>
    }

    if(user){
        return children
    }
    return <Navigate to='/login' state={location?.pathname}></Navigate>
        
};

export default Privateroute;