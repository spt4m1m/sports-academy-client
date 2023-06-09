import React from 'react';
import Banner from './Banner';
import PopularClasses from './PopularClasses';
import PopularInstructors from './PopularInstructors';
import Activities from './Activities';
import Aboutus from './Aboutus';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <Banner />
            {/* extra section about */}
            <Aboutus />
            <PopularClasses />
            {/* extra section activities */}
            <Activities />
            <PopularInstructors />
            {/* extra section testimonials */}
            <Testimonials />
        </div>
    );
};

export default Home;