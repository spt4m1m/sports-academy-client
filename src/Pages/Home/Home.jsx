import React from 'react';
import Banner from './Banner';
import PopularClasses from './PopularClasses';
import PopularInstructors from './PopularInstructors';
import Activities from './Activities';

const Home = () => {
    return (
        <div>
            <Banner />
            <PopularClasses />
            {/* extra section */}
            <Activities />
            <PopularInstructors />
        </div>
    );
};

export default Home;