import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from 'react-query';
import Loader from '../../../Components/Loader/Loader';
import { toast } from 'react-hot-toast';
import Swal from 'sweetalert2';

const UpdateClass = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure()
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { isLoading, data: prevClass, refetch } = useQuery({
        queryKey: ['prevClass'],
        queryFn: async () => {
            const res = await axiosSecure(`/classes/${id}`);
            return res.data;
        }
    }
    );
    if (isLoading) {
        return <Loader />
    }
    const { classname, classimg, availableseat, price } = prevClass.result;

    const onSubmit = async (data) => {
        const { classname, classimg, availableseat, price } = data;
        const classData = {
            classname,
            classimg,
            instructorname: user.displayName,
            instructoremail: user.email,
            availableseat: parseInt(availableseat),
            price: parseInt(price),
            status: 'pending'
        };
        fetch(`${import.meta.env.VITE_APP_API_URL}/classes/update/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('access-token')}`
            },
            body: JSON.stringify(classData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.result.modifiedCount > 0) {
                    Swal.fire({
                        title: 'class update success',
                        icon: 'success'
                    })
                    navigate('/dashboard/instructor/myclasses')
                }
            })
    };



    return (
        <div>
            <div>
                <h1 className='text-3xl underline text-center'>Update Class</h1>
                <div className='md:w-1/2 mx-auto my-10 bg-base-300 p-10 rounded-xl'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="relative z-0 w-full mb-6 group">
                            <input defaultValue={classname} {...register("classname")} type="text" name="classname" id="classname" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required />
                            <label htmlFor="classname" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Class Name</label>
                        </div>
                        <div className='relative z-0 w-full mb-6 group'>
                            <input defaultValue={classimg} {...register("classimg")} type="text" name="classimg" id="classimg" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required />
                            <label htmlFor="classimg" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Class Image Url</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input {...register("instructorname")} readOnly value={user.displayName} disabled type="text" name="instructorname" id="instructorname" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required />
                            <label htmlFor="instructorname" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Instructor Name</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input {...register("instructoremail")} readOnly value={user.email} disabled type="text" name="instructoremail" id="instructoremail" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required />
                            <label htmlFor="instructoremail" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Instructor Email</label>
                        </div>
                        <div className="grid md:grid-cols-2 md:gap-6">
                            <div className="relative z-0 w-full mb-6 group">
                                <input defaultValue={availableseat} {...register("availableseat")} type="text" name="availableseat" id="availableseat" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required />
                                <label htmlFor="availableseat" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Available Seats</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input defaultValue={price} {...register("price")} type="text" name="price" id="price" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required />
                                <label htmlFor="price" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
                            </div>
                        </div>
                        <div className='text-center'>
                            <button type="submit" className="btn btn-primary btn-outline w-1/3 ">Update</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='text-center'>
                <Link to="/dashboard/instructor/myClasses" className='btn btn-primary btn-outline'>Go Back</Link>
            </div>
        </div>
    );
};

export default UpdateClass;