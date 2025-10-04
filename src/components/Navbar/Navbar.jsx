import React from 'react';
import logoImg from '../../assets/logo.png'
import coinImg from '../../assets/Currency.png'
const Navbar = ({ availableBalance }) => {
    return (
        <div className="navbar max-w-[1200px] mx-auto px-4 md:px-1 mt-2">
            <div className="flex-1">
                <a className="text-xl"><img
                    className='w-[50px]' src={logoImg} alt="" /></a>
            </div>
            <div className="flex items-center gap-1 border-1 border-gray-200 rounded-full py-1 px-6">
                <span className='font-bold text-lg'>{availableBalance}</span>
                <span className='font-bold text-lg'>Coin</span>
                <span><img src={coinImg} alt="Coin Icon" /></span>
            </div>
        </div>
    );
};

export default Navbar;