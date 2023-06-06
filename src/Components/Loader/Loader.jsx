import React from 'react';
import { RingLoader } from 'react-spinners';

const Loader = () => {
    return (
        <div className='flex justify-center items-center h-[90vh]'>
            <RingLoader
                color="#e1b12c"
                size={136}
            />
        </div>
    );
};

export default Loader;