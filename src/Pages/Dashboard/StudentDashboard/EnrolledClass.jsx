import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from 'react-query';
import Loader from '../../../Components/Loader/Loader';

const EnrolledClass = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const { isLoading, data: enrolledclass, refetch } = useQuery({
        queryKey: ['enrolledclass'],
        queryFn: async () => {
            const res = await axiosSecure(`/enrolledclass?email=${user?.email}`);
            return res.data;
        }
    }
    );
    if (isLoading) {
        return <Loader />
    };


    return (
        <div>
            <h1 className='text-3xl text-center'>Enrolled {enrolledclass.length} Classes</h1>

            {
                enrolledclass.length > 0 ? <div className="overflow-x-auto mt-10">
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
                                enrolledclass.map((eclass, index) => <tr key={eclass._id}>
                                    <td>{index + 1}</td>
                                    <td>{eclass.classname}</td>
                                    <td>{eclass.availableseat}</td>
                                    <td>{eclass.price}</td>
                                    <td><button onClick={() => deleteSelectedClass(eclass._id)} className='btn bg-red-600 normal-case text-white btn-xs'>Delete</button></td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div> : <h1 className='text-xl text-primary text-center my-10'>you didn't enrolled any class yet!</h1>
            }


        </div>
    );
};

export default EnrolledClass;