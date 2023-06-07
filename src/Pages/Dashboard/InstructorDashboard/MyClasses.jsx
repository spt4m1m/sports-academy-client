import React, { useContext } from 'react';
import { AuthContext } from "../../../Providers/AuthProvider"
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from 'react-query';
import Loader from '../../../Components/Loader/Loader';
import ClassRow from './ClassRow';

const MyClasses = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure()
    const { isLoading, data: classes, refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axiosSecure(`/classes?email=${user?.email}`);
            return res.data;
        }
    }
    );
    console.log(classes);
    if (isLoading) {
        return <Loader />
    }
    return (
        <div>
            <h1 className='text-3xl text-center'>My Classes - You added total {classes.length} classes</h1>

            <div className="overflow-x-auto mt-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='text-white text-md'>
                            <th></th>
                            <th>Name</th>
                            <th>Total Enrolled</th>
                            <th>Status</th>
                            <th>Feedback</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((singleClass, index) => <ClassRow key={singleClass._id} singleClass={singleClass} index={index} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClasses;