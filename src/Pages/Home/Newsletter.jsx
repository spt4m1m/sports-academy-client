import React from 'react';

const Newsletter = () => {
    return (
        <div>
            <div class="text-center bg-base-200 py-14">
                <div class="px-2">
                    <div class="text-center">
                        <h3 className='pt-10'>Keep up to date with the latest updates</h3>
                        <p className='text-3xl py-10'>Subscribe our newsletter to get update news about sports</p>
                    </div>
                    <div class="pb-10 flex justify-center items-center gap-3 px-3">
                        <input type="text" placeholder="Your Email" className="input input-bordered input-primary w-full max-w-xs" />
                        <button class="btn btn-primary btn-outline text-xl normal-case">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;