import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user,loading}=use(AuthContext);
    const location=useLocation();
    //console.log(location.pathname);

    if(loading)
    {
        return <span>Loading..</span>
    }

    if(!user)
    {
        return <Navigate state={location.pathname} to='/signin'></Navigate>
    }
    return children;
};

export default PrivateRoute;