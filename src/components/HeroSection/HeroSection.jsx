import React from 'react';
import heroImg from '../../assets/banner-main.png'
import './hero.css'
const HeroSection = () => {
    return (
        <div className=' px-4'>
            <div className='bg-img max-w-[1200px] mx-auto text-center
         bg-[#131313] py-15  rounded-4xl mt-10' >
                <img className='mx-auto' src={heroImg} alt="" />
                <h2 className='text-white text-4xl font-bold my-4'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
                <p className='text-gray-400 font-lg'>Beyond Boundaries Beyond Limits</p>
                <button className='bg-btn btn my-4 object-cover w-[150px] border-1 border-white rounded-full'></button>
            </div>
        </div>
    );
};

export default HeroSection;