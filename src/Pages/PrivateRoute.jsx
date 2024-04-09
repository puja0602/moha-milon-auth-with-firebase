import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    // console.log(children)
    const {user} = useContext(AuthContext)
    const location = useLocation();
    console.log(location)
    if(user){
        return children;
    }
    return <Navigate to='/login' state={location.pathname}></Navigate>
    
};

export default PrivateRoute;