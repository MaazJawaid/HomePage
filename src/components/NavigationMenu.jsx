import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

// Import Assets
import logoImage from '../assets/logo.png';

const NavigationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { title: 'Home', textColor: 'text-black' },
    { title: 'About Us', textColor: 'text-black' },
    { title: 'Wholesale', textColor: 'text-black' },
    { title: 'Service', textColor: 'text-gray-700' },
    { title: 'News', textColor: 'text-gray-700' },
    { title: 'How it Works', textColor: 'text-gray-700' },
  ];

  return (
    <div className="relative">
      {/* Desktop and Tablet Navigation */}
      <div className="hidden md:flex justify-center py-4">
        <div className="flex gap-x-8 items-center">
          {menuItems.slice(0, 3).map((item) => (
            <div key={item.title} className="group cursor-pointer font-medium">
              <div className={item.textColor}>{item.title}</div>
              <div className="bg-green-600 w-0 h-1 rounded-xl group-hover:w-full transition-all duration-300 ease-in-out"></div>
            </div>
          ))}
          <div>
            <img src={logoImage} alt="Logo" className="w-28 mb-5" />
          </div>
          {menuItems.slice(3).map((item) => (
            <div key={item.title} className="group cursor-pointer font-medium">
              <div className={item.textColor}>{item.title}</div>
              <div className="bg-green-600 w-0 h-1 rounded-xl group-hover:w-full transition-all duration-300 ease-in-out"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="flex md:hidden justify-between items-center p-4">
        <img src={logoImage} alt="Logo" className="w-20" />
        <button 
          onClick={toggleMenu} 
          className="text-black p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out ${
          isOpen ? 'opacity-50 visible' : 'opacity-0 invisible'
        } z-20`}
        onClick={toggleMenu}
      />

      {/* Sidebar Menu */}
      <div 
        className={`fixed top-0 right-0 w-3/4 max-w-xs h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-30 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-5 flex flex-col h-full">
          <div className="flex justify-end mb-6">
            <button 
              onClick={toggleMenu}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="flex flex-col gap-y-6">
            {menuItems.map((item) => (
              <div key={item.title} className="group cursor-pointer">
                <div className={`${item.textColor} font-medium text-lg`}>
                  {item.title}
                </div>
                <div className="bg-green-600 w-0 h-1 rounded-xl group-hover:w-full transition-all duration-300 ease-in-out"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationMenu;