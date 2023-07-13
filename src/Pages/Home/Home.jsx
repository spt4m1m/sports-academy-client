import React from 'react';
import Banner from './Banner';
import PopularClasses from './PopularClasses';
import PopularInstructors from './PopularInstructors';
import Activities from './Activities';
import Aboutus from './Aboutus';
import Testimonials from './Testimonials';
import ExpertSolutionSection from './ExpertSolutionSection';

const Home = () => {
    return (
        <div>
            <Banner />
            {/* extra section about */}
            <Aboutus />
            <PopularClasses />
            {/* extra section activities */}
            <Activities />
            <ExpertSolutionSection />
            <PopularInstructors />
            {/* extra section testimonials */}
            <Testimonials />
        </div>
    );
};

export default Home;