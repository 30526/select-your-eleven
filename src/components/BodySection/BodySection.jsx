import React from 'react';
import './bodysection.css'

const BodySection = () => {
    return (
        <div className='md:px-0 px-8'>
            <div className='border-2 border-white max-w-[1200px] mx-auto bg-[#fffdfd41] p-3 
            rounded-4xl mt-30 translate-y-20'>
                <div className='bg-white bg-body text-center py-20 rounded-3xl px-3 md:px-0'>
                    <h2 className='my-4 text-3xl font-bold'>Subscribe to our Newsletter</h2>
                    <p className=''>Get the latest updates and news right in your inbox!</p>
                    <div className='my-4'>
                        <input type="email" placeholder="Your email here" className="input rounded-xl w-fit md:w-lg" />
                        <button className='bg-button btn w-[100px] rounded-xl ml-2'></button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BodySection;