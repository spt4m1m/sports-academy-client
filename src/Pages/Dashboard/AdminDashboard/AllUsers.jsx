import React from 'react';
import { toast } from 'react-hot-toast';

const AllUsers = ({ user, index, refetch }) => {
    const { name, email } = user;

    // delete user 
    const deleteUser = (user) => {
        const sure = window.confirm(`are you sure ? you want to delete ${user.name}`);
        if (sure) {
            fetch(`${import.meta.env.VITE_APP_API_URL}/users/${user._id}`, {
                method: "DELETE",
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${localStorage.getItem('access-token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('delete success')
                        refetch()
                    }
                })
        }
    };

    // make admin 
    const makeAdmin = (user) => {
        const sure = window.confirm(`are you sure ? you want to make admin ${user.name}`);
        if (sure) {
            fetch(`${import.meta.env.VITE_APP_API_URL}/users/admin/${user.email}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${localStorage.getItem('access-token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        toast.success('make admin success')
                        refetch()
                    }
                })
        }
    }

    // remove admin 
    const removeAdmin = (user) => {
        const sure = window.confirm(`are you sure ? you want to remove admin ${user.name}`);
        if (sure) {
            fetch(`${import.meta.env.VITE_APP_API_URL}/users/removeadmin/${user.email}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${localStorage.getItem('access-token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        toast.success('remove admin success')
                        refetch()
                    }
                })
        }
    }


    // make  instructor 
    const makeInstructor = (user) => {
        const sure = window.confirm(`are you sure ? you want to make instructor ${user.name}`);
        if (sure) {
            fetch(`${import.meta.env.VITE_APP_API_URL}/users/instructor/${user.email}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${localStorage.getItem('access-token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        toast.success('make instructor success')
                        refetch()
                    }
                })
        }
    }
    // remove  instructor 
    const removeInstructor = (user) => {
        const sure = window.confirm(`are you sure ? you want to remove instructor ${user.name}`);
        if (sure) {
            fetch(`${import.meta.env.VITE_APP_API_URL}/users/removeinstructor/${user.email}`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${localStorage.getItem('access-token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        toast.success('remove instructor success')
                        refetch()
                    }
                })
        }
    }
    return (
        <tr>
            <td>{index + 1}</td>
            <td>
                <div className="flex items-center space-x-3">

                    <div>
                        <div className="font-bold">{name}</div>
                    </div>
                </div>
            </td>
            <td>
                <div>
                    <p>{email}</p>
                </div>
            </td>
            <td>
                {user.role == "instructor" ? <button onClick={() => removeInstructor(user)} className="btn bg-red-700 text-white btn-xs">remove instructor</button> : <button onClick={() => makeInstructor(user)} className="btn bg-green-700 text-white btn-xs">make instructor</button>}
            </td>
            <td>{user.role == "admin" ? <button onClick={() => removeAdmin(user)} className="btn bg-red-700 text-white btn-xs">remove admin</button> : <button onClick={() => makeAdmin(user)} className="btn bg-green-700 text-white btn-xs">make admin</button>}</td>
            <th>
                <button onClick={() => deleteUser(user)} className="btn bg-red-700 text-white btn-xs">Delete</button>
            </th>
        </tr>
    );
};

export default AllUsers;