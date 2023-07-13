import React from 'react';
import aboutus from "../../assets/imgs/aboutus.png"
import { Fade } from 'react-awesome-reveal';

const Aboutus = () => {
    return (
        <Fade delay={500} cascade duration={1000}>
            <div>
                <div className="hero h-[800px]">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={aboutus} className="max-w-[200px] md:max-w-md rounded-lg shadow-2xl" />
                        <div className='md:ml-20'>
                            <h1 className="text-3xl md:text-5xl font-bold">About Sports Academy</h1>
                            <p className="py-6 w-md text-sm md:text-md">Sports Academy and 3X NBA Champion Coach Phil Handy's 94FEETOFGAME have teamed up to create the most Elite Skills Camps for female basketball players in grades 7th-12th. Join us August 11-12, 2023 at Sports Academy in Thousand Oaks, California for the SWEAT Elite Skills Camp: Presented by 94FEETOFGAME. Join us at Sports Academy July 7-9, 2023 for year two of the EOT SoCal Showcase! This will be a five-game guarantee tournament for teams playing all three days and a four-game guarantee for teams only playing two days. Learn more & register today!</p>
                            <button className="btn btn-primary">Know More</button>
                        </div>
                    </div>
                </div>

            </div>
        </Fade>
    );
};

export default Aboutus;