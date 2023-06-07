import React from 'react';
import { useQuery } from 'react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Loader from '../../../Components/Loader/Loader';
import ManageClassRow from './ManageClassRow';

const ManageClasses = () => {
    const [axiosSecure] = useAxiosSecure()
    const { isLoading, data: classes, refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axiosSecure(`/classes`);
            return res.data;
        }
    }
    );
    if (isLoading) {
        return <Loader />
    }
    return (
        <div>
            <h1 className='text-3xl text-center'>Manage Classes - Total Class {classes.length}</h1>


            <div className="overflow-x-auto mt-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-sm text-white'>
                            <th></th>
                            <td>Img</td>
                            <th>Class Name</th>
                            <th>Ins. Name</th>
                            <th>Ins. Email</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th className='text-center mr-10'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((singleClass, index) => <ManageClassRow key={singleClass._id} singleClass={singleClass} index={index} />)
                        }
                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default ManageClasses;