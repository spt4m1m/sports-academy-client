import React from 'react';
import { Icon } from '@iconify/react';
import sportsman from '../../assets/imgs/great sportsman.jpg'
import healthy from '../../assets/imgs/health.jpeg'
import successports from '../../assets/imgs/successsports.jpg'

const Blogs = () => {
    return (
        <div className=' bg-base-200 py-16'>
            <h1 className="text-3xl font-bold text-primary text-center">Latest from Blogs</h1>
            <div className='grid grid-cols-1 md:grid-cols-3'>
                <div class="card bg-base-100 gap-5 m-5 hover:shadow-xl hover:scale-105 transition ease-in-out delay-150 hover:shadow-primary">
                    <figure class="px-10 pt-10">
                        <img src={sportsman} alt="image" class="rounded-xl" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">How to Become a great Sports Man</h2>
                        <hr />
                        <h1 class="card-title"></h1>
                        <div class="flex justify-between items-center">
                            <div> <p>Write by - <span className='text-primary'>Admin</span></p>
                                <p className='flex justify-center items-center gap-5'><Icon icon="simple-line-icons:calender" /><span className='text-primary'>12/03/2023</span></p>
                            </div>
                            <label class="btn btn-circle"><Icon icon="ep:success-filled" className='text-7xl -mt-3' /></label>
                        </div>
                    </div>
                </div>
                <div class="card bg-base-100 gap-5 m-5 hover:shadow-lg hover:scale-105 transition ease-in-out delay-150 hover:shadow-primary">
                    <figure class="px-10 pt-10">
                        <img src={healthy} alt="image" class="rounded-xl" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">Ways to get healthy and strong body</h2>
                        <hr />
                        <h1 class="card-title"></h1>
                        <div class="flex justify-between items-center">
                            <div> <p>Write by - <span className='text-primary'>Admin</span></p>
                                <p className='flex justify-center items-center gap-5'><Icon icon="simple-line-icons:calender" /><span className='text-primary'>20/03/2023</span></p>
                            </div>
                            <label class="btn btn-circle"><Icon icon="ep:success-filled" className='text-7xl -mt-3' /></label>
                        </div>
                    </div>
                </div>
                <div class="card bg-base-100 gap-5 m-5 hover:shadow-xl hover:scale-105 transition ease-in-out delay-150 hover:shadow-primary">
                    <figure class="px-10 pt-10">
                        <img src={successports} alt="image" class="rounded-xl" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">Tips and Tricks for get succes in sports</h2>
                        <hr />
                        <h1 class="card-title"></h1>
                        <div class="flex justify-between items-center">
                            <div> <p>Write by - <span className='text-primary'>Admin</span></p>
                                <p className='flex justify-center items-center gap-5'><Icon icon="simple-line-icons:calender" /> <span className='text-primary'>16/05/2023</span></p>
                            </div>
                            <label class="btn btn-circle"><Icon icon="ep:success-filled" className='text-7xl -mt-3' /></label>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default Blogs;