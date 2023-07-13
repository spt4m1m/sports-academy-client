import React from 'react';
import { useQuery } from 'react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Loader from '../../Components/Loader/Loader';
import Instructor from '../Instructors/Instructor';
import { Fade } from 'react-awesome-reveal';

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
        <Fade delay={500} cascade duration={1000}>
            <div>
                <h1 className='text-center text-3xl font-bold py-10 text-primary'>Our Popular Instructors</h1>

                <div className='grid md:grid-cols-4'>
                    {
                        instructors.slice(0, 6).map(instructor => <Instructor key={instructor._id} instructor={instructor} />)
                    }
                </div>

            </div>
        </Fade>
    );
};

export default PopularInstructors;