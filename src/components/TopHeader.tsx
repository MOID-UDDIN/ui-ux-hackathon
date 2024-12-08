import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function TopHeader() {
  return (
    <div className='w-[1440px] h-[36px] flex bg-[#F5F5F5]'>
    <Image src="/topheader/basketballPlayer.svg" alt='basketball Player logo' width={24} height={24} className='mt-[6px] ml-[48px]' />
    
    <div className='w-[272.81px] h-[36px] flex ml-[1000px]'>
      <div className='w-[98.5px] h-[34px] py-[10px] pr-[6.13px] pl-[12px] gap-[15.38px] flex'>
        <Link href="/find-a-store" className='w-[62px] h-[14px] font-medium text-[11px] text-[#111111]'>Find a Store</Link>
        <p className='border-r-[3px] border-black h-[14px]'></p>
      </div>
      <div className='w-[51.81px] h-[36px] py-[11px] pr-[4.13px] pl-[8px] gap-[12.69px] flex'>
        <Link href="/help" className='w-[24px] h-[14px] text-[11px] font-medium text-[#111111]'>Help</Link>
        <p className='border-r-[3px] border-black h-[14px]'></p>
      </div>
      <div className='w-[98.5px] h-[34px] py-[10px] pr-[6.13px] pl-[12px] gap-[15.38px] flex'>
        <Link href={"/joinus"}  target="_blank" className='w-[62px] h-[14px] font-medium text-[11px] text-[#111111]  hover:bg-blue-700'>Join Us</Link>
        <p className='border-r-[3px] border-black h-[14px]'></p>
      </div>
      <div className='w-[51.81px] h-[36px] py-[11px] pr-[4.13px] pl-[8px] gap-[12.69px] flex'>
        <Link href={"/login"}  target="_blank" className='w-[24px] h-[14px] text-[11px] font-medium text-[#111111] whitespace-nowrap hover:bg-blue-700'>Login</Link>
      </div>
    </div>
  </div>
  )
}

export default TopHeader
