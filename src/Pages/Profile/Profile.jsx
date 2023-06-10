import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Profile = () => {
    return (
        <Fade delay={500} cascade duration={1000}>
            <div className='mt-12'>
                <h1 className='text-center text-3xl py-10 text-primary'>This is Profile Page</h1>
            </div>
        </Fade>
    );
};

export default Profile;