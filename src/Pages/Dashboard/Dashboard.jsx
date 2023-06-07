import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div>
            <h1 className='text-center text-3xl font-semibold text-primary'>Admin Dashboad</h1>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center text-white">
                    {/* <!-- Page content here --> */}
                    <Outlet />
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-white">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to="/dashboard/manageClasses">Manage Classes</Link></li>
                        <li><Link to="/dashboard/manageUsers">Manage Users</Link></li>
                    </ul>

                </div>
            </div>
            <div className='text-center'><Link className='btn btn-primary' to='/home'>Home</Link></div>
        </div>
    );
};

export default Dashboard;