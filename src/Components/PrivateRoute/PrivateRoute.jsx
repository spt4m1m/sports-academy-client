import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Loader from '../Loader/Loader';

const PrivateRoute = ({ children }) => {
    const { user, authLoading } = useContext(AuthContext);
    const location = useLocation()
    if (authLoading) {
        return <Loader />
    }

    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoute;