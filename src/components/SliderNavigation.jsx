import React, { useState } from 'react';

const SliderNavigation = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalDots = 4;

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : totalDots - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex < totalDots - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className="flex items-center space-x-4 mb-4">
      <button
        onClick={handlePrev}
        className="w-10 h-10 flex items-center justify-center border-2 hover:bg-green-500 hover:text-white duration-500 border-green-500 text-green-500 rounded-full transition-transform transform hover:scale-110"
      >
        <i className="fas fa-chevron-left">{`<`}</i>
      </button>

      {[...Array(totalDots)].map((_, index) => (
        <div
          key={index}
          className={`w-4 h-4 rounded-full transition-all duration-300 ease-in-out
            ${index === activeIndex ? 'bg-green-500 scale-125' : 'bg-blue-200 scale-100'} 
            hover:bg-green-300 hover:scale-110`}
        ></div>
      ))}

      <button
        onClick={handleNext}
        className="w-10 h-10 flex items-center hover:bg-green-500 hover:text-white duration-500 justify-center border-2 border-green-500 text-green-500 rounded-full transition-transform transform hover:scale-110"
      >
        <i className="fas fa-chevron-right">{`>`}</i>
      </button>
    </div>
  );
};

export default SliderNavigation;
