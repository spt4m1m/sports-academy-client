import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import ActiveRoute from '../../Components/ActiveRoute/ActiveRoute';
import { Icon } from '@iconify/react';
import { Toaster } from 'react-hot-toast';
import useUserRole from '../../hooks/useUserRole/useUserRole';

const Dashboard = () => {
    const [userRole] = useUserRole();
    let role = '';
    if (userRole == 'admin') {
        role = 'Admin'
    } else if (userRole == 'instructor') {
        role = "Instructor"
    } else {
        role = "Student"
    }
    return (
        <div>
            <h1 className='text-center text-3xl font-semibold text-primary'>{role} Dashboad</h1>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content p-10 text-white">
                    {/* <!-- Page content here --> */}
                    <Outlet />
                    <Toaster />
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-72 h-full bg-base-200 text-white">
                        {/* <!-- Sidebar content here --> */}
                        {
                            userRole == 'admin' && <>
                                <li><ActiveRoute to="/dashboard/admin/manageClasses"><Icon icon="ic:outline-class" />Manage Classes</ActiveRoute></li>
                                <li><ActiveRoute to="/dashboard/admin/manageUsers"><Icon icon="fa-regular:user" />Manage Users</ActiveRoute></li>
                            </>
                        }
                        {
                            userRole == 'instructor' && <>
                                <li><ActiveRoute to="/dashboard/instructor/myclasses"><Icon icon="ic:outline-class" />My Classes</ActiveRoute></li>
                                <li><ActiveRoute to="/dashboard/instructor/addclass"><Icon icon="fa-regular:user" />Add Class</ActiveRoute></li>
                            </>
                        }
                        {
                            userRole == 'student' && <>
                                <li><ActiveRoute to="/dashboard/student/selectedclass"><Icon icon="ic:outline-class" />Selected Classes</ActiveRoute></li>
                                <li><ActiveRoute to="/dashboard/student/enrolledclass"><Icon icon="fa-regular:user" />Enrolled Class</ActiveRoute></li>
                                <li><ActiveRoute to="/dashboard/student/payment"><Icon icon="fa-regular:user" />Payment</ActiveRoute></li>
                            </>
                        }
                        <div className="divider">OR</div>
                        <li><Link to="/home"><Icon icon="tabler:home" />Back To Home</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;