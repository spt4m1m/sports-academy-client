import React from 'react';

const Instructor = ({ instructor }) => {
    return (
        <div className="card card-compact w-64 bg-neutral mx-auto text-white shadow-xl m-5">
            <figure><img src={instructor.img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="">Instructor Name : <span className='text-primary'>{instructor.name}</span></h2>
                <h2 className="">Instructor Email : <span className='text-primary'>{instructor.email}</span></h2>
            </div>
        </div>
    );
};

export default Instructor;