import React from 'react'
import Image from 'next/image'

function Essentials() {
  return (
    <div className='w-[1440px]'>
  <div className='w-[1344px] h-[765px] mt-[48px] ml-[48px] relative'> {/* Parent container ko relative karenge */}
    <div className='w-[1344px] h-[592px]'>
      <p className='w-[157.61px] h-[27px] mb-[20px] font-medium text-[22px] text-[#111111]'>The Essentials</p>
      <div className='w-[1356px] h-[540px] flex space-x-[12px]'>
        <div className='w-[540px] h-[540px] relative'>
        <Image src="/essentials/image1.svg" alt="Image 1" width={440} height={540} />
        <button 
          className='absolute top-[452.98px] left-[48px] w-[85.19px] h-[39px] rounded-[30px] py-[7.5px] pr-[20.69px] pl-[21.5px] bg-[#FFFFFF] '>
          <p className='w-[43px] h-[24px] text-[15px] font-medium text-[#111111]'>Men's</p>
        </button>
        </div>
        <div className='w-[540px] h-[540px] relative'>
        <Image src="/essentials/image2.svg" alt="Image 2" width={440} height={540} />
        <button 
          className='absolute top-[452.98px] left-[48px] w-[108.89px] h-[39px] rounded-[30px] py-[7.5px] pr-[22.39px] pl-[21.5px] bg-[#FFFFFF] '>
          <p className='w-[65px] h-[24px] text-[15px] font-medium text-[#111111]'>Women's</p>
        </button>
        </div>
        <div className='w-[540px] h-[540px] relative'>
        <Image src="/essentials/image3.svg" alt="Image 3" width={440} height={540} />
        <button 
          className='absolute top-[452.98px] left-[48px] w-[77.19px] h-[39px] rounded-[30px] py-[7.5px] pr-[22.69px] pl-[21.5px] bg-[#FFFFFF] '>
          <p className='w-[33px] h-[24px] text-[15px] font-medium text-[#111111]'>Kids's</p>
        </button>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Essentials
