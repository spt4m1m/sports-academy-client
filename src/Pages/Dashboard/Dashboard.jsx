import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <h1 className='text-center text-3xl py-10 text-primary'>This is Dashboard</h1>
            <div className='text-center'><Link className='btn btn-primary' to='/home'>Home</Link></div>
        </div>
    );
};

export default Dashboard;