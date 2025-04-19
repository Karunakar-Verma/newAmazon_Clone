import React from 'react';
import { IoMenu } from 'react-icons/io5';

const navItems = [
  'Fresh',
  'MX Player',
  'Sell',
  'BestSellers',
  'Mobiles',
  "Today's Deal",
  'Prime',
  'Customer Services',
  'New Release',
  'Electronic',
  'Fashion',
  'Amazon Pay',
  'Home & Kitchen',
];

const SecondBar = () => {
  return (
    <div className="flex items-center bg-[#232f3e] text-white px-6 py-3 overflow-x-auto whitespace-nowrap space-x-6 scrollbar-hide">
      <div className="flex items-center gap-2 text-lg font-semibold cursor-pointer hover:border border-white-1 p-1 rounded-md">
        <IoMenu className="text-2xl" />
        <span>All</span>
      </div>
      {navItems.map((item, index) => (
        <div key={index} className="cursor-pointer hover:border border-white-1 p-1 rounded-md">
          {item}
        </div>
      ))}
    </div>
  );
};

export default SecondBar;
