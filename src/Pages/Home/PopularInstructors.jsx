import React from 'react';
import { useQuery } from 'react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Loader from '../../Components/Loader/Loader';
import Instructor from '../Instructors/Instructor';

const PopularInstructors = () => {
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
            <h1 className='text-center text-3xl py-10 text-primary'>TOur Popular Instructors</h1>

            <div className='grid md:grid-cols-4'>
                {
                    instructors.slice(0, 6).map(instructor => <Instructor key={instructor._id} instructor={instructor} />)
                }
            </div>

        </div>
    );
};

export default PopularInstructors;