import React from 'react'
import Image from 'next/image'

function Header() {
  return (
    <div className='w-[1440px] h-[60px] flex bg-[#FFFFFF]'>
    <Image src="/header/nikeSymbol.svg" alt="Nike" width={58.85} height={20.54} className='ml-[38.26px]' />
    <div className='w-[1211px] h-[60px] relative'>
      <ul className='flex justify-center items-center mt-[19.73px] text-black text-[15px] gap-[14px]'>
        <li>News & Featured</li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
        <li>Sale</li>
        <li>SNKRS</li>
      </ul>
      
      <div className='w-[180px] h-[40px] flex items-center bg-[#F5F5F5] rounded-[100px] absolute top-1/2 -translate-y-1/2 right-[38px]'>
        <div className='w-[40px] h-[36px] flex items-center justify-center'>
          <Image src="/header/search.svg" alt="Search Icon" width={16.72} height={16.72} />
        </div>
        <div className='w-[84px] h-[18px]'>
          <p className='w-[50.9px] h-[17px] text-[15px] font-medium text-[#CCCCCC]'>Search</p>
        </div>
      </div>
    </div>
    
    <div className='w-[84px] h-[60px] flex py-[12px] gap-[12px]'>
      <Image src="/header/heart.svg" alt="heart" width={36} height={36} />
      <Image src="/header/bag.svg" alt="bag" width={36} height={36} />
    </div>
  </div>
  

  )
}

export default Header
