import React from 'react';

const AllUsers = ({ user, index }) => {
    const { name, email } = user;
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
                <button className="btn bg-red-700 text-white btn-xs">Delete</button>
            </th>
        </tr>
    );
};

export default AllUsers;