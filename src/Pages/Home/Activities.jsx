import React from 'react';
import { Fade } from 'react-awesome-reveal';

const Activities = () => {
    return (
        <Fade delay={500} cascade duration={1000}>
            <div className='mt-20 mb-10'>
                <div className="card w-96 md:w-[1000px] bg-neutral shadow-xl mx-auto">
                    <div className="card-body">
                        <h2 className="card-title justify-center underline text-primary mb-3">Our Vision</h2>
                        <p>1. Providing opportunities to learn new skills, games and activities</p>
                        <p>2. Offering activities that explore, and push, one's limits while providing stress management opportunities</p>
                        <p>3. Supporting activities that promote social interaction within the diverse community at the University of WUB students.</p>
                        <p>4. Providing opportunities that examine, and challenge, the values and life choices of students</p>
                        <p>5. Offering competitive and recreational settings that facilitate individual and team development
                        </p>
                    </div>
                </div>

                {/* mission  */}
                <div className="card w-96 md:w-[1000px] bg-neutral shadow-xl mx-auto my-10">
                    <div className="card-body">
                        <h2 className="card-title justify-center underline text-primary mb-3">Our Mission</h2>
                        <p>WUB Sports Club is a social impact organization that aims to promote a lifelong enjoyment of sports, while emphasizing a positive consumer experience and instilling the core values of discipline, teamwork, safety, respect and integrity.</p>
                        <p>To promote and provide playing opportunities to individuals at all abilities and ages and to enhance the sporting experience of club members</p>
                        <p>Our goal is to position Steel Sports as the gold standard of sports, fitness, training, education, entertainment and lifestyle products, services and facilities.</p>
                    </div>
                </div>


                {/* policy  */}
                <div className="card w-96 md:w-[1000px] bg-neutral shadow-xl mx-auto my-10">
                    <div className="card-body">
                        <h2 className="card-title justify-center underline text-primary mb-3">Our Policy</h2>
                        <p>WUB Sport Club generally arranges some sort for both indoor and outdoor games. Our outdoor sports activities are-</p>
                        <div className='ml-10'>
                            1. Cricket, football, golf, netball etc <br />
                            2. This club selects the participants from each department for sports competitions or any sports event outside the university. <br />
                            3. Our club competes the club of other universities in sanctioned leagues, tournaments and matches each year.
                        </div>
                        <p>Our indoor sports activities are-</p>
                        <div className='ml-10'>
                            1. Badminton, Basketball, Gym, Swimming, table tennis, chess, pool, keram etc <br />
                            2. Students participate indoor sports comple <br />
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default Activities;