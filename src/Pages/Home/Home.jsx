import React from 'react';
import Banner from './Banner';
import PopularClasses from './PopularClasses';
import PopularInstructors from './PopularInstructors';

const Home = () => {
    return (
        <div>
            <Banner />
            <PopularClasses />
            <PopularInstructors />
        </div>
    );
};

export default Home;