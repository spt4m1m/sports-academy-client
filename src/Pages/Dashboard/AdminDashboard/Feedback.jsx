import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from 'react-query';
import Loader from '../../../Components/Loader/Loader';
import { toast } from 'react-hot-toast';
import Swal from 'sweetalert2';

const Feedback = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [axiosSecure] = useAxiosSecure()
    const { isLoading, data: sportsClass } = useQuery({
        queryKey: ['sportsClass'],
        queryFn: async () => {
            const res = await axiosSecure(`/classes/${id}`);
            return res.data;
        }
    }
    );
    if (isLoading) {
        return <Loader />
    };

    const handleFeedback = (e) => {
        e.preventDefault();
        const feedbackmsg = e.target.feedbackmsg.value;
        fetch(`${import.meta.env.VITE_APP_API_URL}/classes/feedback/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('access-token')}`
            },
            body: JSON.stringify({ feedbackmsg })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.result.modifiedCount > 0) {
                    Swal.fire({
                        title: 'send feedback success',
                        icon: 'success'
                    })
                    navigate('/dashboard/admin/manageClasses')
                    e.target.reset();
                }
            })
    }

    return (
        <div>
            <h1 className='text-center text-xl'>Send Feedback for {sportsClass.result.classname}</h1>
            <div className='text-center'>
                <form onSubmit={handleFeedback} className='text-center my-10 flex flex-col w-1/3 mx-auto'>
                    <textarea name='feedbackmsg' className="textarea textarea-primary" placeholder="Bio"></textarea>
                    <button type='submit' className='btn btn-primary btn-sm my-10'>Send</button>
                </form>
                <Link className='btn btn-primary btn-sm btn-outline' to="/dashboard/admin/manageClasses">Go Back</Link>
            </div>
        </div>
    );
};

export default Feedback;