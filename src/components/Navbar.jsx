// import React from 'react'

// // Import Assets
// import emailImage from '../assets/mail.png'
// import phoneImage from '../assets/phone.png'

// const Navbar = () => {
//     return (
//         <div className='flex bg-[#388FCB] min-h-12 text-white justify-between px-14 z-10'>
//             <div className='flex gap-x-5'>
//                 <div className='flex items-center gap-x-1 text-xs cursor-pointer'>
//                     <div><img src={emailImage} alt="Email Image" className='w-4' /></div>
//                     <div>info@abc.com</div>
//                 </div>
//                 <div className='flex items-center gap-x-1 text-xs cursor-pointer'>
//                     <div><img src={phoneImage} alt="Email Image" className='w-4' /></div>
//                     <div>+123 456 789</div>
//                 </div>
//             </div>
            
//             <div className='flex gap-x-3'>
//                 <div className='flex items-center text-xs cursor-pointer'>
//                     <div>Privacy Policy</div>
//                 </div>
//                 <div className='bg-white w-[0.5px] h-3/4 self-center'></div>
//                 <div className='flex items-center text-xs cursor-pointer'>
//                     <div>Terms and Conditions</div>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default Navbar


import React from 'react'

// Import Assets
import emailImage from '../assets/mail.png'
import phoneImage from '../assets/phone.png'

const Navbar = () => {
    return (
        <div className="flex flex-wrap items-center bg-[#388FCB] min-h-12 text-white justify-center gap-y-3 sm:justify-between px-5 md:px-14 py-2 z-10">
            {/* Left Section */}
            <div className="flex gap-x-3 md:gap-x-5 items-center flex-wrap">
                <div className="flex items-center gap-x-1 text-xs cursor-pointer">
                    <img src={emailImage} alt="Email" className="w-4" />
                    <div>info@abc.com</div>
                </div>
                <div className="flex items-center gap-x-1 text-xs cursor-pointer">
                    <img src={phoneImage} alt="Phone" className="w-4" />
                    <div>+123 456 789</div>
                </div>
            </div>

            {/* Right Section */}
            <div className="flex gap-x-2 md:gap-x-3 items-center mt-2 md:mt-0">
                <div className="text-xs cursor-pointer">
                    Privacy Policy
                </div>
                <div className="bg-white w-[0.5px] h-6"></div>
                <div className="text-xs cursor-pointer">
                    Terms and Conditions
                </div>
            </div>
        </div>
    );
};

export default Navbar;
