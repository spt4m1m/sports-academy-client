import React from 'react';
import Banner from './Banner';
import PopularClasses from './PopularClasses';
import PopularInstructors from './PopularInstructors';
import Activities from './Activities';
import Aboutus from './Aboutus';

const Home = () => {
    return (
        <div>
            <Banner />
            <Aboutus />
            <PopularClasses />
            {/* extra section */}
            <Activities />
            <PopularInstructors />
        </div>
    );
};

export default Home;