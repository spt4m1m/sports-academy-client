import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from 'react-query';
import Loader from '../../Components/Loader/Loader';
import SingleClass from './SingleClass';

const Classes = () => {
    const [axiosSecure] = useAxiosSecure()
    const { isLoading, data: classes, refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axiosSecure(`/classes?status=approved`);
            return res.data;
        }
    }
    );
    if (isLoading) {
        return <Loader />
    }
    return (
        <div>
            <h1 className='text-center text-3xl py-10 text-primary'>Sports Classes</h1>
            <div className='grid md:grid-cols-3'>
                {
                    classes.map(singleClass => <SingleClass key={singleClass._id} singleClass={singleClass} refetch={refetch} />)
                }
            </div>
        </div>
    );
};

export default Classes;