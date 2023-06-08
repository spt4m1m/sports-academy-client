import React from 'react';
import { Icon } from '@iconify/react';
import Swal from 'sweetalert2';

const ClassRow = ({ singleClass, index }) => {
    const { classname, enrolled, status, feedback } = singleClass;
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
    };
    const seeFeedback = () => {
        Swal.fire({
            title: "Feedback from Admin",
            text: feedback
        })
    }
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{classname}</td>
            <td>{enrolled}</td>
            <td className='flex items-center'>{span}</td>
            <td>{feedback ? <button onClick={seeFeedback} className='btn btn-primary btn-sm btn-outline'>see feedback</button> : <span>not given</span>}</td>
            <td><button className='btn btn-primary btn-outline btn-sm'>update</button></td>
        </tr>

    );
};

export default ClassRow;