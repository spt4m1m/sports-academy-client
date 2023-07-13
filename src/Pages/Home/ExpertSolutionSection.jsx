import React from 'react';
import img from '../../assets/imgs/expertimage.jpg';
import './experSolution.css'

const ExpertSolutionSection = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-3xl font-bold md:w-[600px] text-primary">Get Instant Access To
                            Expert solution</h1>
                        <p className="py-6 md:w-[500px]">The ultimate planning solution for busy women who want to reach their personal goals.Effortless comfortable eye-catching unique detail</p>
                        <div className="list mt-4 mb-5">
                            <ul>
                                <li data-number="1">
                                    <strong>Sign up in website</strong>
                                    <p className="text-muted md:w-[400px] mt-3 text-sm">The right mentoring relationship can be a powerful tool for professional growth. Bark up the right tree.</p>
                                </li>
                                <li data-number="2">
                                    <strong>Enroll your course</strong>
                                    <p className="text-muted md:w-[400px] mt-3 text-sm">The right mentoring relationship can be a powerful tool for professional growth. Bark up the right tree.</p>
                                </li>
                                <li data-number="3">
                                    <strong>Start from now</strong>
                                    <p className="text-muted md:w-[400px] mt-3 text-sm">The right mentoring relationship can be a powerful tool for professional growth. Bark up the right tree.</p>
                                </li>
                                <li data-number="4">
                                    <strong>Guide from best mentor</strong>
                                    <p className="text-muted md:w-[400px] mt-3 text-sm">The right mentoring relationship can be a powerful tool for professional growth. Bark up the right tree.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpertSolutionSection;