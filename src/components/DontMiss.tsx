import React from 'react'
import Image from 'next/image'

function DontMiss() {
  return (
    <div className='w-[1440px]'>
      <div className='w-[1344px] h-[977px] mt-[48px] ml-[48px]'>
      <p className='w-[111.48px] h-[27px] mb-[20px] font-medium text-[22px] text-[#111111]'>Don't Miss</p>
      <Image src = "/dontmiss/branding.svg" alt='branding' width={1344} height={700}/>
      <div className='w-[1008px] h-[177px] mt-[48px] ml-[168px]'>
            <p className='w-[512px] h-[60px] ml-[247.97px] text-[52px] font-medium text-[#111111] whitespace-nowrap'>FLIGHT ESSENTIALS</p>
            <p className='w-[531px] h-[24px] mt-[20px] ml-[250px] text-[15px] text-[#111111]'>Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>
            <button className='w-[80.38px] h-[39px] rounded-[30px] py-[7.5px] pr-[21.88px] pl-[21.5px] bg-[#111111] ml-[460.81px] mt-[20px]'>
                    <p className='w-[37px] h-[24px] text-[15px] font-medium text-[#FFFFFF]'>Shop</p>
                </button>
        </div>
      </div>
    </div>
  )
}

export default DontMiss
