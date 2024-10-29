import React from 'react';

// Import Assets
import emailImage from '../assets/mail.png';
import phoneImage from '../assets/phone.png';

const Navbar = () => {
    return (
        <div className="flex flex-wrap items-center bg-[#388FCB] min-h-12 text-white justify-center gap-y-3 sm:justify-between px-5 md:px-14 py-2 z-10 transition-all duration-300 shadow-lg">
            {/* Left Section */}
            <div className="flex gap-x-3 md:gap-x-5 items-center flex-wrap">
                <div className="flex items-center gap-x-1 text-xs cursor-pointer transition-transform duration-300 transform hover:scale-125">
                    <img src={emailImage} alt="Email" className="w-4" />
                    <div>info@abc.com</div>
                </div>
                <div className="flex items-center gap-x-1 text-xs cursor-pointer transition-transform duration-300 transform hover:scale-125">
                    <img src={phoneImage} alt="Phone" className="w-4" />
                    <div>+123 456 789</div>
                </div>
            </div>

            {/* Right Section */}
            <div className="flex gap-x-2 md:gap-x-3 items-center mt-2 md:mt-0">
                <div className="text-xs cursor-pointer hover:underline transition duration-300">
                    Privacy Policy
                </div>
                <div className="bg-white w-[0.5px] h-6"></div>
                <div className="text-xs cursor-pointer hover:underline transition duration-300">
                    Terms and Conditions
                </div>
            </div>
        </div>
    );
};

export default Navbar;
