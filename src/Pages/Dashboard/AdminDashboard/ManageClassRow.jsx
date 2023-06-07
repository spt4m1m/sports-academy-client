import React from 'react';
import { Icon } from '@iconify/react';
import { toast } from 'react-hot-toast';

const ManageClassRow = ({ singleClass, index, refetch }) => {
    const { classimg, classname, instructorname, instructoremail, availableseat, price, status, _id } = singleClass;

    const approveClass = (id) => {
        const sure = window.confirm('approve this calss?');
        if (sure) {
            fetch(`${import.meta.env.VITE_APP_API_URL}/classes/${id}?status=approved`, {
                method: "PUT",
                headers: {
                    authorization: `Bearer ${localStorage.getItem('access-token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.result.modifiedCount > 0) {
                        toast.success('class approved')
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
            <td className='flex items-center'><Icon className='text-green-500' icon="material-symbols:circle" />{status}</td>
            <td>
                <div>
                    <td><button disabled={status == 'deny'} onClick={() => approveClass(_id)} className='btn bg-green-600 normal-case text-white btn-xs'>Approve</button></td>
                    <td><button disabled={status == "approved"} className='btn bg-red-600 normal-case text-white btn-xs'>Deny</button></td>
                    <td><button className='btn btn-primary btn-outline btn-xs'>Feedback</button></td>
                </div>
            </td>
        </tr>
    );
};

export default ManageClassRow;