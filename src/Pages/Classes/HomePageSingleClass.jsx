import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const HomePageSingleClass = ({ singleClass, refetch }) => {
    const { user } = useContext(AuthContext);
    const { classimg, classname, instructorname, instructoremail, availableseat, price } = singleClass;

    return (
        <div className={availableseat == 0 ? `card w-96 bg-red-600 gap-5 m-5 shadow-xl mx-auto text-white` : `card w-96 bg-neutral gap-5 m-5 shadow-xl mx-auto text-white`}>
            <figure><img src={classimg} alt="class img" /></figure>
            <div className="card-body">
                <h2 className="card-title">{classname}</h2>
                <p>Instructor Name : {instructorname}</p>
                <p>Instructor Email : {instructoremail}</p>
                <p>Available Seats : {availableseat}</p>
                <p>Price : {price}Tk.</p>
            </div>
        </div>
    );
};

export default HomePageSingleClass;