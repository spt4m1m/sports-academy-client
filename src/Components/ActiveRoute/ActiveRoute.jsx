import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveRoute = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive, isPending }) => isActive ? "font-semibold text-primary underline" : "font-semibold"}
        >
            {children}
        </NavLink>
    );
};

export default ActiveRoute; 