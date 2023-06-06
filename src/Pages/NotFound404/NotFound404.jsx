import React from 'react';
import notfound from "../../assets/imgs/notfound404.svg"
import { Link } from 'react-router-dom';

const NotFound404 = () => {
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-center text-3xl py-5 mt-24 text-primary'>Page Not Found</h1>
                <img className='w-80 mx-auto' src={notfound} alt="" />
                <div className='text-center'><Link className='btn btn-primary' to='/home'>Back to Home</Link></div>
            </div>
        </div>
    );
};

export default NotFound404;