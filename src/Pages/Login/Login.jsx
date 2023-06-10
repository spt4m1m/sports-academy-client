import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useForm } from 'react-hook-form';
import showpassimg from '../../assets/imgs/show-pass.svg'
import hidepassimg from '../../assets/imgs/hide-pass.svg'
import { AuthContext } from '../../Providers/AuthProvider';
import { toast } from 'react-hot-toast';
import Loader from '../../Components/Loader/Loader';
import { Fade } from 'react-awesome-reveal';

const Login = () => {
    const navigate = useNavigate()
    const { loginUser, authLoading, setAuthLoading, googleLogin } = useContext(AuthContext)
    const [showPass, setShowPass] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        const email = data.email;
        const password = data.password;
        loginUser(email, password)
            .then(res => {
                const user = res.user;
                if (user) {
                    toast.success("login success");
                    setAuthLoading(false)
                    navigate('/home')
                }
            })
            .catch(error => toast.error(error.message))
    }


    // google login 
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const user = result.user;
                const saveUser = { name: user.displayName, img: user.photoURL, email: user.email, role: 'student' };
                fetch(`${import.meta.env.VITE_APP_API_URL}/users`, {
                    method: 'POST',
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data) {
                            navigate('/')
                            toast.success('success')
                        }
                    })
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
        <Fade delay={500} cascade duration={1000}>
            <section className="h-screen">
                <div className="px-6 h-full">
                    <div
                        className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
                    >
                        <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                            <h1 className='text-4xl py-10 underline-offset-2'>Please Login !</h1>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="flex flex-row items-center justify-center lg:justify-start">
                                    <p className="text-lg mb-0 mr-4">Login in with</p>
                                    <button
                                        onClick={handleGoogleLogin}
                                        type="button"
                                        data-mdb-ripple="true"
                                        data-mdb-ripple-color="light"
                                        className='text-4xl'
                                    > <Icon icon="devicon:google" />
                                    </button>
                                </div>

                                <div
                                    className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                                >
                                    <p className="text-center font-semibold mx-4 mb-0">Or</p>
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



                                <div className="text-center lg:text-left">
                                    <button
                                        type="submit"
                                        className="btn btn-primary text-xl btn-outline"
                                    >
                                        Login
                                    </button>
                                    <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                                        Don't have an account?
                                        <Link
                                            to="/register"
                                            className="text-primary transition duration-200 ease-in-out underline"
                                        >Register</Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </Fade>
    );
};

export default Login;