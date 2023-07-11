import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from 'react-query';
import Loader from '../../Components/Loader/Loader';
import { Fade } from 'react-awesome-reveal';
import HomePageSingleClass from '../Classes/HomePageSingleClass';

const PopularClasses = () => {
    const [axiosSecure] = useAxiosSecure()
    const { isLoading, data: classes } = useQuery({
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
        <Fade delay={500} cascade duration={1000}>
            <div>
                <h1 className='text-primary text-xl md:text-4xl text-center my-5'>Popular  Classes</h1>
                <div className='grid md:grid-cols-3'>
                    {
                        classes.slice(0, 6).map(singleClass => <HomePageSingleClass key={singleClass._id} singleClass={singleClass} />)
                    }
                </div>
            </div>
        </Fade>
    );
};

export default PopularClasses;