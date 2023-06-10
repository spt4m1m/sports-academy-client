import React, { useContext } from 'react';
import logo from '../../assets/imgs/web_logo.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { toast } from 'react-hot-toast';
import defaultprofile from "../../assets/imgs/defaultprofile.jpg"
import ActiveRoute from '../ActiveRoute/ActiveRoute';
import useUserRole from '../../hooks/useUserRole/useUserRole';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [userRole] = useUserRole();
    let dashboardUrl = "";
    if (userRole == 'admin') {
        dashboardUrl = "dashboard/admin/manageClasses"
    } else if (userRole == 'instructor') {
        dashboardUrl = "dashboard/instructor/myclasses"
    } else {
        dashboardUrl = "dashboard/student/selectedclass"
    }
    const handleLogOut = () => {
        logOut()
            .then(() => toast.success('Logout Successfully'))
            .catch(error => toast.error(`${error.message}`))
    }
    const navlist = <>
        <li><ActiveRoute to="/home">Home</ActiveRoute></li>
        <li><ActiveRoute to="/instructors">Instructors</ActiveRoute></li>
        <li><ActiveRoute to="/classes">Classes</ActiveRoute></li>
        {
            user ?
                <>
                    <li><Link className='font-semibold' to={dashboardUrl}>Dashboard</Link></li>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img title={user.displayName} src={user ? user.photoURL : defaultprofile} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                            <li><Link to="/profile">Profile</Link></li>
                            <li><button onClick={handleLogOut}>Logout</button></li>
                        </ul>
                    </div>
                </>
                :
                <>
                    <li><ActiveRoute to="/login">Login</ActiveRoute></li>
                    <li><ActiveRoute to="/register">Register</ActiveRoute></li>
                </>
        }
    </>
    return (
        <div className="navbar bg-neutral-focus fixed top-0 left-0 z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-white">
                        {navlist}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <img className='w-32' src={logo} alt="logo" />
                </Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white">
                    {navlist}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;