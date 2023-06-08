import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from 'react-query';
import Loader from '../../../Components/Loader/Loader';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const SelectedClass = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure()
    const { isLoading, data: selectedClass, refetch } = useQuery({
        queryKey: ['selectedclass'],
        queryFn: async () => {
            const res = await axiosSecure(`/selectedclass?email=${user?.email}`);
            return res.data;
        }
    }
    );
    if (isLoading) {
        return <Loader />
    };

    const deleteSelectedClass = (id) => {
        fetch(`${import.meta.env.VITE_APP_API_URL}/selectedclass/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.result.deletedCount > 0) {
                    Swal.fire({
                        title: 'Delete Class Success',
                        icon: 'success'
                    })
                    refetch();
                }
            })
    }
    return (
        <div>
            <h1 className='text-3xl underline text-center'>Selected Classes</h1>
            <div className='flex justify-center my-5'>
                <Link to="/dashboard/student/paymentmethod" className='btn bg-green-600 normal-case text-white btn-sm'>Payment</Link>
            </div>
            {
                selectedClass.result.length > 0 ? <div className="overflow-x-auto mt-10">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className='text-white text-md text-sm'>
                                <th></th>
                                <th>Class Name</th>
                                <th>Available Seat</th>
                                <th>Price</th>
                                <th className='text-center'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                selectedClass.result.map((sclass, index) => <tr key={sclass._id}>
                                    <td>{index + 1}</td>
                                    <td>{sclass.classname}</td>
                                    <td>{sclass.availableseat}</td>
                                    <td>{sclass.price}</td>
                                    <td><button onClick={() => deleteSelectedClass(sclass._id)} className='btn bg-red-600 normal-case text-white btn-xs'>Delete</button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div> : <h1 className='text-xl text-primary text-center my-10'>you didn't selected any class yet!</h1>
            }
        </div>
    );
};

export default SelectedClass;