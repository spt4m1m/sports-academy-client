import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import client1 from "../../assets/imgs/client1.jpg"
import client2 from "../../assets/imgs/client2.jpg"
import client3 from "../../assets/imgs/client3.jpg"
import client4 from "../../assets/imgs/client4.jpg"
import client5 from "../../assets/imgs/client5.jpg"
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./testimonials.css"

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import { Fade } from "react-awesome-reveal";

const Testimonials = () => {
    return (
        <Fade delay={500} cascade duration={1000}>
            <div className=" mx-auto bg-base-200">
                <h1 className='text-primary text-xl md:text-4xl text-center my-5'>Our Student Testimonials</h1>
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="card bg-neutral h-full">
                            <div className="card-body">
                                <div className="flex">
                                    <div className="avatar rounded">
                                        <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={client1} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-center items-center">
                                            <h2 className="card-title ml-5">SP Tamim</h2>
                                            <p className="text-xs text-primary">Biker</p>
                                        </div>
                                        <div className="rating rating-xs ml-6">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-primary" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-primary" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-primary" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-primary" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-primary" checked />
                                        </div>
                                    </div>
                                </div>
                                <p className="text-xs mt-5">Bike sports, also known as cycling sports, encompass a wide range of activities and disciplines, including road cycling, mountain biking, track cycling, BMX, and cyclocross, among others. Here are some common feedback points regarding bike sports. if anyone interested in bike then I suggest to join Sport Academy</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card h-full bg-neutral">
                            <div className="card-body">
                                <div className="flex">
                                    <div className="avatar rounded">
                                        <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={client2} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-center items-center">
                                            <h2 className="card-title ml-5">Rakibul Islam</h2>
                                            <p className="text-xs text-primary">Swimer</p>
                                        </div>
                                        <div className="rating rating-xs ml-6">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-primary" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-primary" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-primary" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-primary" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-primary" checked />
                                        </div>
                                    </div>
                                </div>
                                <p className="text-xs mt-10">Full-Body Workout: Swimming is a low-impact sport that engages almost all major muscle groups in the body. It provides an excellent full-body workout, strengthening the arms, legs, core, and back muscles. It is also a great cardiovascular exercise that improves lung capacity and overall endurance.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card h-full bg-neutral">
                            <div className="card-body">
                                <div className="flex">
                                    <div className="avatar rounded">
                                        <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={client3} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-center items-center">
                                            <h2 className="card-title ml-5">Siam Pande</h2>
                                            <p className="text-xs text-primary">Wrestler</p>
                                        </div>
                                        <div className="rating rating-xs ml-6">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-primary" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-primary" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-primary" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-primary" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-primary" checked />
                                        </div>
                                    </div>
                                </div>
                                <p className="text-xs mt-10">Wrestling sports, such as freestyle wrestling, Greco-Roman wrestling, and folkstyle wrestling, are physically demanding and require a combination of strength, skill, and strategy. Here is some feedback about wrestling sports Physical Fitness: Wrestling is a highly intense sport that requires athletes to be in peak physical condition. It develops strength, power, agility, and endurance.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card h-full bg-neutral">
                            <div className="card-body">
                                <div className="flex">
                                    <div className="avatar rounded">
                                        <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={client4} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-center items-center">
                                            <h2 className="card-title ml-5">Reajul Islam</h2>
                                            <p className="text-xs text-primary">Chesser</p>
                                        </div>
                                        <div className="rating rating-xs ml-6">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-primary" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-primary" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-primary" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-primary" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-primary" checked />
                                        </div>
                                    </div>
                                </div>
                                <p className="text-xs mt-10">Skill Building: Chess is a game that requires continuous learning and improvement. As players engage in regular practice and study, they develop tactical and positional awareness, calculation abilities, and the ability to foresee and plan several moves ahead. These skills can be applied to other areas of life as well.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card h-full bg-neutral">
                            <div className="card-body">
                                <div className="flex">
                                    <div className="avatar rounded">
                                        <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={client5} />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-center items-center">
                                            <h2 className="card-title ml-5">Sajjad Mia</h2>
                                            <p className="text-xs text-primary">Athlete</p>
                                        </div>
                                        <div className="rating rating-xs ml-6">
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-primary" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-primary" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-primary" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-primary" checked />
                                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-primary" checked />
                                        </div>
                                    </div>
                                </div>
                                <p className="text-xs mt-10">Physical Fitness and Performance: Athlete sports demand high levels of physical fitness and performance. Athletes engage in rigorous training programs to develop their strength, speed, agility, endurance, and flexibility. Regular participation in athlete sports contributes to improved overall health, cardiovascular fitness, and body composition.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </Fade>
    );
};

export default Testimonials;