import React, { useContext } from 'react';
import { Fade } from 'react-awesome-reveal';
import { AuthContext } from '../../Providers/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext)
    return (
        <Fade delay={500} cascade duration={1000}>
            <div className='mt-12'>
                <h1 className='text-center text-3xl py-10 text-primary mt-5'>This is Your Profile {user.displayName}</h1>

                <div className="card card-side bg-neutral my-10 w-1/2 mx-auto shadow-xl">
                    <figure><img className='w-80' src={user.photoURL} alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title"> Name : <span className='text-primary'>{user.displayName}</span></h2>
                        <h2 className="card-title"> Name : <span className='text-primary'>{user.email}</span></h2>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default Profile;