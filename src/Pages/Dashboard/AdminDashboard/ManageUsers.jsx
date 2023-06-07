
import React from 'react';
import AllUsers from './AllUsers';
import Loader from '../../../Components/Loader/Loader';
import { useQuery } from 'react-query';

const ManageUsers = () => {
    const { isLoading, data: users } = useQuery('users', () =>
        fetch(`${import.meta.env.VITE_APP_API_URL}/users`).then(res =>
            res.json()
        )
    );
    if (isLoading) {
        return <Loader />
    }
    return (
        <div>
            <h1 className='text-3xl text-center'>Total Users {users.length}</h1>

            <div className="overflow-x-auto mt-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-white text-sm'>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Make Instructor</th>
                            <th>Make Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody className='text-gray-200'>
                        {/* row 1 */}
                        {
                            users.map((user, index) => <AllUsers key={user._id} user={user} index={index} />)
                        }
                    </tbody>

                </table>
            </div>


        </div>
    );
};

export default ManageUsers;