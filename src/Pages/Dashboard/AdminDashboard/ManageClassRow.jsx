import React from 'react';
import { Icon } from '@iconify/react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ManageClassRow = ({ singleClass, index, refetch }) => {
    const { classimg, classname, instructorname, instructoremail, availableseat, price, status, _id, feedback } = singleClass;

    let span;
    switch (status) {
        case 'approved':
            span = <span className='flex items-center'><Icon className='text-green-500' icon="el:ok-sign" />Approved</span>;
            break;
        case 'deny':
            span = <span className='flex items-center'><Icon className='text-red-500' icon="gridicons:cross-circle" />Denied</span>;
            break;
        default:
            span = <span className='flex items-center'><Icon className='text-green-500' icon="material-symbols:circle" />Pending</span>
    }


    // approve class by admin 
    const approveClass = (id) => {
        const sure = window.confirm('approve this calss?');
        if (sure) {
            fetch(`${import.meta.env.VITE_APP_API_URL}/classes/${id}?status=approved`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${localStorage.getItem('access-token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.result.modifiedCount > 0) {
                        Swal.fire({
                            title: 'Class Approved',
                            icon: 'success'
                        })
                        refetch();
                    }
                })
        }
    };

    // deny class 
    const denyClass = (id) => {
        const sure = window.confirm('deny this calss?');
        if (sure) {
            fetch(`${import.meta.env.VITE_APP_API_URL}/classes/${id}?status=deny`, {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${localStorage.getItem('access-token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.result.modifiedCount > 0) {
                        Swal.fire({
                            title: 'class denied',
                            icon: 'error'
                        })
                        refetch();
                    }
                })
        }
    };

    return (
        <tr>
            <th>{index + 1}</th>
            <td><div className="avatar">
                <div className="mask mask-squircle w-12 h-12">
                    <img src={classimg} alt="class img" />
                </div>
            </div></td>
            <td>{classname}</td>
            <td>{instructorname}</td>
            <td>{instructoremail}</td>
            <td>{availableseat}</td>
            <td>{price}Tk.</td>
            {/* <td className='flex items-center'> {status == 'approved' ? <span className='flex items-center'><Icon className='text-green-500' icon="el:ok-sign" />Approved</span> : <span className='flex items-center'><Icon className='text-red-500' icon="gridicons:cross-circle" />Denied</span>}</td> */}
            <td>{span}</td>
            <td>
                <div>
                    <td>{status == 'approved' ? <span className='flex items-center'><Icon className='text-green-500' icon="el:ok-sign" />Approved</span> : <button disabled={status == 'deny'} onClick={() => approveClass(_id)} className='btn bg-green-600 normal-case text-white btn-xs'>Approve</button>}</td>
                    <td>{status == 'deny' ? <span className='flex items-center'><Icon className='text-red-500' icon="gridicons:cross-circle" />Denied</span> : <button disabled={status == "approved"} onClick={() => denyClass(_id)} className='btn bg-red-600 normal-case text-white btn-xs'>Deny</button>}</td>
                    <td>{feedback ? <span disabled className='bg-green-500 text-white btn btn-sm normal-case'>Feedback sended</span> : <Link to={`/dashboard/admin/manageClasses/feedback/${_id}`} className='btn btn-primary btn-outline btn-xs'>Feedback</Link>}</td>
                </div>
            </td>
        </tr>
    );
};

export default ManageClassRow;