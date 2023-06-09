import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from 'react-query';
import Loader from '../../Components/Loader/Loader';
import Instructor from './Instructor';

const Instructors = () => {
    const [axiosSecure] = useAxiosSecure();
    const { isLoading, data: instructors } = useQuery({
        queryKey: ['instructors'],
        queryFn: async () => {
            const res = await axiosSecure(`/instructors`);
            return res.data;
        }
    }
    );
    if (isLoading) {
        return <Loader />
    }
    return (
        <div>
            <h1 className='text-center text-3xl py-10 text-primary'>Total Instructors {instructors.length}</h1>

            <div className='grid md:grid-cols-4'>
                {
                    instructors.map(instructor => <Instructor key={instructor._id} instructor={instructor} />)
                }
            </div>

        </div>
    );
};

export default Instructors;