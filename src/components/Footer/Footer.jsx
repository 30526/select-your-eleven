import React from 'react';
import logoImg from '../../assets/logo-footer.png'

const Footer = () => {
    return (
        <footer className=' bg-[#06091A]'>
            <div className='pt-30 md:w-[1200px] mx-auto pb-5 md:pb-20'>
                <img className='mx-auto' src={logoImg} alt="Footer logo image" />
                <div className='flex flex-col md:flex-row md:justify-between items-start mt-10 text-[#bbb9b9] className="font-bold 
                 px-5 gap-4 md:gap-0 '>
                    <div>
                        <h3 className="text-white mb-4 font-bold text-2xl">About Us</h3>
                        <ul>
                            <li>We are a passionate team </li>
                            <li>dedicated to providing the best</li>
                            <li>services to our customers.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white mb-4 font-bold text-2xl">Quick Links</h3>
                        <ul className='list-disc pl-5'>
                            <li><a href="">Home</a></li>
                            <li><a href="">Service</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white mb-4 font-bold text-2xl">Subscribe</h3>
                        <p>Subscribe to our newsletter for the
                            <br /> latest updates.</p>
                        <div className='mt-2'>
                            <input type="email" placeholder="Your email here" className="input rounded-xl w-fit rounded-r-none" />
                            <button className='bg-button btn w-[100px] rounded-xl rounded-l-none'></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='py-5 text-center text-gray-500 border-t-1 border-gray-600'>@2025 All Rights Reserved.</div>
        </footer>
    );
};

export default Footer;