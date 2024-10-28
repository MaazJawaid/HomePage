import React from 'react';
import iphoneImage2 from '../assets/iphoneImage2.png';

const Cards = () => {
    const cardData = [
        {
            id: 1,
            title: "iPhone 14 Pro Max",
            description: "Apple iPhone 14 Pro 512GB Gold (MQ233)"
        },
        {
            id: 2,
            title: "iPhone 14 Pro Max",
            description: "Apple iPhone 14 Pro 512GB Gold (MQ233)"
        },
        {
            id: 3,
            title: "iPhone 14 Pro Max",
            description: "Apple iPhone 14 Pro 512GB Gold (MQ233)"
        },
        {
            id: 4,
            title: "iPhone 14 Pro Max",
            description: "Apple iPhone 14 Pro 512GB Gold (MQ233)"
        }
    ];

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 my-6 sm:my-8 lg:my-10">
                {cardData.map((card) => (
                    <div
                        key={card.id}
                        className="flex justify-center items-center flex-wrap rounded-lg p-[3px] mx-auto w-full max-w-[300px] transform transition-transform duration-300 hover:scale-105"
                        style={{
                            background: 'linear-gradient(180deg, #7CC140 0%, #388FCB 100%)',
                        }}
                    >
                        <div className="flex flex-col items-center gap-2 bg-white rounded-md p-4 shadow-lg w-full h-full">
                            <img 
                                src={iphoneImage2} 
                                alt="Mobile" 
                                className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain"
                            />
                            <div className="text-base sm:text-lg font-semibold text-center">
                                {card.title}
                            </div>
                            <div className="text-xs sm:text-sm text-gray-500 text-center">
                                {card.description}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cards;