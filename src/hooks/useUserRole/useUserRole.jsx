import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const useUserRole = () => {
    const { user } = useContext(AuthContext);
    const [load, setLoad] = useState(true)
    const [userRole, setUserRole] = useState([]);
    useEffect(() => {
        fetch(`${import.meta.env.VITE_APP_API_URL}/users/single/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setUserRole(data)
                setLoad(false)
            })
    }, []);
    // console.log(userRole);
    return [userRole.role];
};

export default useUserRole;