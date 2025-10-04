import React from 'react';
import './bodysection.css'

const BodySection = () => {
    return (
        <div className='border-2 border-white mt-40'>
            <div className='max-w-[800px] mx-auto bg-white p-3 bg-opacity-30 z-1'>
                <div className=' bg-body text-center py-10 rounded-4xl'>
                    <h2 className='my-4 text-3xl font-bold'>Subscribe to our Newsletter</h2>
                    <p className=''>Get the latest updates and news right in your inbox!</p>
                    <div className='my-4'>
                        <input type="email" placeholder="Your email here" className="input rounded-xl" />
                        <button className='bg-button btn w-[100px] rounded-xl ml-2'></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BodySection;