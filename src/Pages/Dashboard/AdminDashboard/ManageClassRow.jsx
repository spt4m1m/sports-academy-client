import React from 'react';
import { Icon } from '@iconify/react';

const ManageClassRow = ({ singleClass, index }) => {
    const { classimg, classname, instructorname, instructoremail, availableseat, price, status } = singleClass;
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
                    <td><button className='btn btn-primary btn-outline btn-xs'>Approve</button></td>
                    <td><button className='btn bg-red-600 normal-case text-white btn-xs'>Deny</button></td>
                    <td><button className='btn btn-primary btn-outline btn-xs'>Feedback</button></td>
                </div>
            </td>
        </tr>
    );
};

export default ManageClassRow;