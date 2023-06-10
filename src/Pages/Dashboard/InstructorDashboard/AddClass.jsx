import React, { useContext } from 'react';
import { AuthContext } from "../../../Providers/AuthProvider"
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../hooks/useAxiosSecure'
import { toast } from 'react-hot-toast';
import Swal from 'sweetalert2';
const AddClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();


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
        await axiosSecure.post('/classes', classData).then(res => {
            if (res.data.result.insertedId) {
                Swal.fire({
                    title: 'Class Added',
                    icon: 'success'
                })
                reset();
            }
        })
    };

    return (
        <div>
            <h1 className='text-3xl underline text-center'>Add Class</h1>
            <div className='md:w-1/2 mx-auto my-10 bg-base-300 p-10 rounded-xl'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="relative z-0 w-full mb-6 group">
                        <input {...register("classname")} type="text" name="classname" id="classname" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required />
                        <label htmlFor="classname" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Class Name</label>
                    </div>
                    <div className='relative z-0 w-full mb-6 group'>
                        <input {...register("classimg")} type="text" name="classimg" id="classimg" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required />
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
                            <input {...register("availableseat")} type="text" name="availableseat" id="availableseat" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required />
                            <label htmlFor="availableseat" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Available Seats</label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input {...register("price")} type="text" name="price" id="price" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " required />
                            <label htmlFor="price" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
                        </div>
                    </div>
                    <div className='text-center'>
                        <button type="submit" className="btn btn-primary btn-outline w-1/3 ">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddClass;