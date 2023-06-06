import React from 'react';
import logo from '../../assets/imgs/web_logo.png'

const Navbar = () => {
    const user = false;
    const navlist = <>
        <li><a href="">Home</a></li>
        <li><a href="">Instructor</a></li>
        <li><a href="">Classes</a></li>
        {
            user == true ? <><li><a href="">Dashboard</a></li>
                <li><a href="">Profile</a></li></> : <><li><a href="">Login</a></li>
                <li><a href="">Register</a></li></>
        }
    </>
    return (
        <div className="navbar bg-neutral-focus">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-white">
                        {navlist}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">
                    <img className='w-32' src={logo} alt="logo" />
                </a>
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