import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useForm } from 'react-hook-form';
import showpassimg from '../../assets/imgs/show-pass.svg'
import hidepassimg from '../../assets/imgs/hide-pass.svg'
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../Providers/AuthProvider';
import Loader from '../../Components/Loader/Loader';

const Register = () => {
    const navigate = useNavigate()
    const { registerUser, updateUserProfile, authLoading, setAuthLoading, googleLogin } = useContext(AuthContext)
    const [showPass, setShowPass] = useState(false);
    const [showCPass, setShowCPass] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        if (data.confirmpassword !== data.password) {
            return toast.error("password don't match")
        }
        const email = data.email;
        const password = data.password;
        const name = data.name;
        const photoUrl = data.photoUrl
        registerUser(email, password)
            .then(res => {
                const user = res.user;
                if (user) {
                    updateUserProfile(user, name, photoUrl)
                        .then(() => {
                            toast.success("Register Successfully")
                            setAuthLoading(false)
                            navigate('/home')
                        })
                        .catch(error => toast.error(error.message))
                }
            })
            .catch(error => toast.error(error.message))
    }

    // google login 
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                toast.success(`Successfull login with ${user.displayName}`)
                setAuthLoading(false)
                navigate('/')
            })
            .catch(error => {
                if (error.message == 'Firebase: Error (auth/popup-closed-by-user).') {
                    toast.error("Login cancelled by user")
                    setAuthLoading(false)
                }
            })
    }

    if (authLoading) {
        return <Loader />
    }

    return (
        <section className="h-screen-full mb-10">
            <div className="px-6 h-full">
                <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
                >
                    <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                        <h1 className='text-4xl py-10 underline-offset-2 text-primary'>Register With Your Info !</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex flex-row items-center justify-center lg:justify-start">
                                <p className="text-lg mb-0 mr-4 text-white">Register with</p>
                                <button
                                    onClick={handleGoogleLogin}
                                    type="button"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    className='text-4xl'
                                ><Icon icon="devicon:google" />
                                </button>

                            </div>

                            <div
                                className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                            >
                                <p className="text-center font-semibold mx-4 mb-0 text-white">Or</p>
                            </div>


                            {/* <!-- Name input --> */}
                            <div className="mb-6">
                                <input
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: "name must required"
                                        }
                                    })}
                                    type="text"
                                    name='name'
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
                                    placeholder="Your Name*" required
                                />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className='text-red-500'>{errors.name.message}</span>}
                                </label>
                            </div>
                            {/* <!-- Photo Link input --> */}
                            <div className="mb-6">
                                <input
                                    {...register("photoUrl", {
                                        required: {
                                            value: true,
                                            message: "photoUrl Must Required"
                                        }
                                    })}
                                    type="text"
                                    name='photoUrl'
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
                                    placeholder="Photo Url*" required
                                />
                                <label className="label">
                                    {errors.photoUrl?.type === 'required' && <span className='text-red-500'>{errors.photoUrl.message}</span>}
                                </label>
                            </div>

                            {/* <!-- Email input --> */}
                            <div className="mb-6">
                                <input
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: "email must required"
                                        }
                                    })}
                                    type="email"
                                    name='email'
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
                                    placeholder="Email address*" required
                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className='text-red-500'>{errors.email.message}</span>}
                                </label>
                            </div>

                            {/* <!-- Password input --> */}
                            <div className="mb-6 relative">
                                <input
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: "password must required"
                                        },
                                        min: 6,
                                        pattern: {
                                            value: /^(?=.*[A-Z])(?=.*[#$^+=!*()@%&]).{6,}$/g,
                                            message: "Password must have minimum 6 length and 1 Capital Letter and 1 Special Character"
                                        },
                                    })}
                                    type={showPass == true ? "text" : "password"}
                                    name='password'
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
                                    placeholder="Password*" required
                                />
                                <img className='absolute cursor-pointer w-8 top-2 right-2'
                                    title={showPass ? "Hide password" : "Show password"}
                                    src={showPass ? showpassimg : hidepassimg}
                                    onClick={() => setShowPass(!showPass)}
                                />
                                <label className='label'>
                                    {errors.password?.type === 'required' && <span className='text-red-500'>{errors.password.message}</span>}
                                    {errors.password?.type === 'pattern' && <span className='text-red-500'>{errors.password.message}</span>}
                                </label>
                            </div>

                            {/* <!-- confirm Password input --> */}
                            <div className="mb-6 relative">
                                <input
                                    {...register("confirmpassword", {
                                        required: {
                                            value: true,
                                            message: "confirm password must required"
                                        },
                                        min: 6,
                                        pattern: {
                                            value: /^(?=.*[A-Z])(?=.*[#$^+=!*()@%&]).{6,}$/g,
                                            message: "Password must have minimum 6 length and 1 Capital Letter and 1 Special Character"
                                        },
                                    })}
                                    type={showCPass == true ? "text" : "password"}
                                    name='confirmpassword'
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
                                    placeholder="Confirm Password*" required
                                />
                                <img className='absolute cursor-pointer w-8 top-2 right-2'
                                    title={showCPass ? "Hide password" : "Show password"}
                                    src={showCPass ? showpassimg : hidepassimg}
                                    onClick={() => setShowCPass(!showCPass)}
                                />
                                <label className='label'>
                                    {errors.confirmpassword?.type === 'required' && <span className='text-red-500'>{errors.confirmpassword.message}</span>}
                                    {errors.confirmpassword?.type === 'pattern' && <span className='text-red-500'>{errors.confirmpassword.message}</span>}
                                </label>
                            </div>

                            {/* Gender  */}
                            <div className="mb-6">
                                <input
                                    {...register("gender")}
                                    type="text"
                                    name='gender'
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
                                    placeholder="Gender"
                                />
                            </div>


                            {/* phn Number  */}
                            <div className="mb-6">
                                <input
                                    {...register("number")}
                                    type="text"
                                    name='number'
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
                                    placeholder="Phone Number"
                                />
                            </div>

                            {/* Address  */}
                            <div className="mb-6">
                                <input
                                    {...register("address")}
                                    type="text"
                                    name='address'
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none"
                                    placeholder="address"
                                />
                            </div>


                            <div className="text-center lg:text-left">
                                <button
                                    type="submit"
                                    className="btn btn-primary text-xl btn-outline"
                                >
                                    Register
                                </button>
                                <p className="text-sm font-semibold mt-2 pt-1 mb-0 text-white">
                                    Already Have an account?
                                    <Link
                                        to="/login"
                                        className="text-primary underline transition duration-200 ease-in-out"
                                    > Login </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;