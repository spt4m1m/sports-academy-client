import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import ActiveRoute from '../../Components/ActiveRoute/ActiveRoute';
import { Icon } from '@iconify/react';

const Dashboard = () => {
    return (
        <div>
            <h1 className='text-center text-3xl font-semibold text-primary'>Admin Dashboad</h1>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content p-10 text-white">
                    {/* <!-- Page content here --> */}
                    <Outlet />
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-white">
                        {/* <!-- Sidebar content here --> */}
                        <li><ActiveRoute to="/dashboard/manageClasses"><Icon icon="ic:outline-class" />Manage Classes</ActiveRoute></li>
                        <li><ActiveRoute to="/dashboard/manageUsers"><Icon icon="fa-regular:user" />Manage Users</ActiveRoute></li>
                        <div className="divider">OR</div>
                        <li><Link to="/home"><Icon icon="tabler:home" />Back To Home</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;