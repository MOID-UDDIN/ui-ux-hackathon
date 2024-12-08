import React from 'react';

const Categories = () => {
  return (
    <div className='w-[1440px] '>
    <div className="w-[880px] h-[192px] ml-[300px]">
      <div className="grid grid-cols-4 gap-4">
        <div>
          <h2 className="text-[15px] font-normal mb-4 text-[#111111]">Icons</h2>
          <ul className='w-[184px] h-[144px] text-[15px] text-[#757575]'>
            <li className="mb-2">Air Force 1</li>
            <li className="mb-2">Huarache</li>
            <li className="mb-2">Air Max 90</li>
            <li>Air Max 95</li>
          </ul>
        </div>
        <div>
          <h2 className="text-[15px] font-normal mb-4 text-[#111111]">Shoes</h2>
          <ul className='w-[184px] h-[144px] text-[15px] text-[#757575]'>
            <li className="mb-2">All Shoes</li>
            <li className="mb-2">Custom Shoes</li>
            <li className="mb-2">Jordan Shoes</li>
            <li>Running Shoes</li>
          </ul>
        </div>
        <div>
          <h2 className="text-[15px] font-normal mb-4 text-[#111111]">Clothing</h2>
          <ul className='w-[184px] h-[144px] text-[15px] text-[#757575]'>
            <li className="mb-2">All Clothing</li>
            <li className="mb-2">Modest Wear</li>
            <li className="mb-2">Hoodies & Pullovers</li>
            <li>Shirts & Tops</li>
          </ul>
        </div>
        <div>
          <h2 className="text-[15px] font-normal mb-4 text-[#111111]">Kids'</h2>
          <ul className='w-[184px] h-[144px] text-[15px] text-[#757575]'>
            <li className="mb-2">Infant & Toddler Shoes</li>
            <li className="mb-2">Kids' Shoes</li>
            <li className="mb-2">Kids' Jordan Shoes</li>
            <li>Kids' Basketball Shoes</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Categories;