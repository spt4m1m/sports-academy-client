import React from 'react';
import { toast } from 'react-hot-toast';

const AllUsers = ({ user, index, refetch }) => {
    const { name, email } = user;
    const deleteUser = (user) => {
        const sure = window.confirm(`are you sure ? you want to delete ${user.name}`);
        if (sure) {
            fetch(`${import.meta.env.VITE_APP_API_URL}/users/${user._id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('delete success')
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
                <button className="btn bg-red-700 text-white btn-xs">make instructor</button>
            </td>
            <td><button className="btn bg-red-700 text-white btn-xs">make admin</button></td>
            <th>
                <button onClick={() => deleteUser(user)} className="btn bg-red-700 text-white btn-xs">Delete</button>
            </th>
        </tr>
    );
};

export default AllUsers;