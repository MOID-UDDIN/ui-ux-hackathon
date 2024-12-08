import React from 'react'
import Image from 'next/image'

function BestOfAirMax() {
  return (
<div className='w-[1440px] h-[604.36px] mt-[48px]'>
  <div className='w-[1440px] h-[52px] flex items-center justify-between'>
    <p className='w-[161.59px] h-[27px] ml-[48px] text-[22px] font-medium text-[#111111] whitespace-nowrap'>Best of Air Max</p>
    <div className='w-[164.75px] ml-[1000px] pl-[7px] gap-[12.38px] flex items-center'>
      <p className='w-[37px] text-[15px] font-medium text-[#111111]'>Shop</p>
      <Image src="/bestofairmax/leftArrow.svg" alt="Left Arrow" width={48} height={48} />
      <Image src="/bestofairmax/rightArrow.svg" alt="Right Arrow" width={48} height={48} />
    </div>
  </div>
  <div className='w-[1440px] h-[540.36px] flex'>
    {/* Cards */}
    <div className='w-[441.36px] h-[510.36px] ml-[48px]'>
      <Image src="/bestofairmax/shoe1.svg" alt='Shoe' width={441.36} height={441.36} />
      <div className='w-[425.36px] h-[48px] mt-[21px] flex justify-between items-center'>
        <div className='w-[134.27px] pr-[3.27px]'>
          <p className='text-[15px] font-medium text-[#111111]'>Nike Air Max Pulse</p>
          <p className='text-[15px] text-[#757575]'>Women's Shoes</p>
        </div>
        <p className='text-[15px] font-medium text-[#111111]'>₹ 13 995</p>
      </div>
    </div>
     {/* Cards */}
     <div className='w-[441.36px] h-[510.36px] ml-[48px]'>
      <Image src="/bestofairmax/shoe1.svg" alt='Shoe' width={441.36} height={441.36} />
      <div className='w-[425.36px] h-[48px] mt-[21px] flex justify-between items-center'>
        <div className='w-[134.27px] pr-[3.27px]'>
          <p className='text-[15px] font-medium text-[#111111]'>Nike Air Max Pulse</p>
          <p className='text-[15px] text-[#757575]'>Men's Shoes</p>
        </div>
        <p className='text-[15px] font-medium text-[#111111]'>₹ 13 995</p>
      </div>
    </div>
     {/* Cards */}
     <div className='w-[441.36px] h-[510.36px] ml-[48px]'>
      <Image src="/bestofairmax/shoe2.svg" alt='Shoe' width={441.36} height={441.36} />
      <div className='w-[425.36px] h-[48px] mt-[21px] flex justify-between items-center'>
        <div className='w-[134.27px] pr-[3.27px]'>
          <p className='text-[15px] font-medium text-[#111111]'>Nike Air Max Pulse</p>
          <p className='text-[15px] text-[#757575]'>Men's Shoes</p>
        </div>
        <p className='text-[15px] font-medium text-[#111111]'>₹ 16 995</p>
      </div>
    </div>
     {/* Cards */}
     <div className='w-[441.36px] h-[510.36px] ml-[48px]'>
      <Image src="/bestofairmax/shoe1.svg" alt='Shoe' width={441.36} height={441.36} />
      <div className='w-[425.36px] h-[48px] mt-[21px] flex justify-between items-center'>
        <div className='w-[134.27px] pr-[3.27px]'>
          <p className='text-[15px] font-medium text-[#111111]'>Nike Air Max Pulse</p>
          <p className='text-[15px] text-[#757575]'>Women's Shoes</p>
        </div>
        <p className='text-[15px] font-medium text-[#111111]'>₹ 13 995</p>
      </div>
    </div>
    
  </div>
</div>


  )
}

export default BestOfAirMax
