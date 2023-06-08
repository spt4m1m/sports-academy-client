import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from 'react-query';
import Loader from '../../../Components/Loader/Loader';

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
    }
    return (
        <div>
            <h1 className='text-3xl underline text-center'>Selected Classes</h1>

            <div className="overflow-x-auto mt-10">
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
                                <td><button className='btn bg-green-600 normal-case text-white btn-xs'>Pay</button></td>
                                <td><button className='btn bg-red-600 normal-case text-white btn-xs'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectedClass;