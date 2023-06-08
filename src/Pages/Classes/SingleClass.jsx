import React from 'react';

const SingleClass = ({ singleClass, refetch }) => {
    const { classimg, classname, instructorname, instructoremail, availableseat, price } = singleClass;
    return (
        <div className="card w-96 bg-neutral gap-5 m-5 shadow-xl mx-auto text-white">
            <figure><img src={classimg} alt="class img" /></figure>
            <div className="card-body">
                <h2 className="card-title">{classname}</h2>
                <p>Instructor Name : {instructorname}</p>
                <p>Instructor Email : {instructoremail}</p>
                <p>Available Seats : {availableseat}</p>
                <p>Price : {price}Tk.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Select</button>
                </div>
            </div>
        </div>
    );
};

export default SingleClass;