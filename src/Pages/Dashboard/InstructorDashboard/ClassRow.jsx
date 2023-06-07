import React from 'react';
import { Icon } from '@iconify/react';

const ClassRow = ({ singleClass, index }) => {
    const { classname, enrolled, status } = singleClass;
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{classname}</td>
            <td>{enrolled}</td>
            <td className='flex items-center'><Icon className='text-green-500' icon="material-symbols:circle" />{status}</td>
            <td>not given</td>
            <td><button className='btn btn-primary btn-outline btn-sm'>update</button></td>
        </tr>
    );
};

export default ClassRow;