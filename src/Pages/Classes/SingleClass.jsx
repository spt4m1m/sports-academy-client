import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import useUserRole from '../../hooks/useUserRole/useUserRole';

const SingleClass = ({ singleClass, refetch }) => {
    const [userRole] = useUserRole();
    const [isSelected, setIsSelected] = useState(false)
    const { user } = useContext(AuthContext);
    const { classimg, classname, instructorname, instructoremail, availableseat, price } = singleClass;
    const handleSelect = (classData) => {
        // console.log('selec class', classData);
        const { classname, availableseat, price } = classData;
        const { displayName, email } = user;
        const selectedClassData = {
            classname,
            availableseat,
            price,
            studentname: displayName,
            studentemail: email,
        }
        fetch(`${import.meta.env.VITE_APP_API_URL}/selectedclass`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('access-token')}`
            },
            body: JSON.stringify(selectedClassData),
        })
            .then(res => res.json())
            .then(data => {
                if (data.result.insertedId) {
                    Swal.fire({
                        title: "Class Selected!!",
                        icon: "success"
                    })
                    setIsSelected(true)
                }
            })
    }
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
                    {
                        isSelected ? <span className='bg-green-500 p-2 rounded-md'>Class Selected</span> : <button disabled={userRole == 'instructor' || userRole == 'admin' || user == null} onClick={() => handleSelect(singleClass)} className="btn btn-primary">Select Class</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default SingleClass;