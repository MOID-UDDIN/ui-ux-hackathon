import React from 'react'
import Image from 'next/image'

function GearUp() {
  return (
    <div className='w-[1440px]'>
      <div className='w-[1344px] h-[561px] mt-[48px] ml-[48px]'>
      <p className='w-[90.9px] h-[27px] mb-[20px] font-medium text-[23px] text-[#111111]'>Gear Up</p>
      <div className='w-[1344px] flex'>
      <div className='w-[666px] h-[509px] ml-[6px]'>
      <div className='w-[211px] ml-[420px] pl-[7px] gap-[12.38px] flex items-center'>
      <p className='w-[83px] text-[15px] font-medium text-[#111111]'>Shop Men's</p>
      <Image src="/bestofairmax/leftArrow.svg" alt="Left Arrow" width={48} height={48} />
      <Image src="/bestofairmax/rightArrow.svg" alt="Right Arrow" width={48} height={48} />
    </div>
        <div className='w-[666px] h-[447px] mt-[12px] flex'>
        {/* Cards */}
        <div className='w-[300px] h-[393px] ml-[48px]'>
  <Image src="/gearup/image1.svg" alt='Image 1' width={300} height={300} />
  <div className='w-[284px] h-[72px] mt-[21px] flex justify-between items-start'>
    <div className='w-[231.53px] pr-[12.53px]'>
      <p className='text-[15px] font-medium text-[#111111]'>Nike Dri-FIT ADV TechKnit Ultra</p>
      <div>
        <p className='text-[15px] text-[#757575]'>Men's Short-Sleeve </p>
        <p className='text-[15px] text-[#757575]'>Running Top</p>
      </div>
    </div>
    <p className='text-[15px] font-medium text-[#111111] mt-[5px]'>₹ 3 895</p>
  </div>
</div>
 {/* Cards */}
 <div className='w-[300px] h-[393px] ml-[48px]'>
  <Image src="/gearup/image2.svg" alt='Image 2' width={300} height={300} />
  <div className='w-[284px] h-[72px] mt-[21px] flex justify-between items-start'>
    <div className='w-[231.53px] pr-[12.53px]'>
      <p className='text-[15px] font-medium text-[#111111]'>Nike Dri-FIT Challenger</p>
      <div>
        <p className='text-[15px] text-[#757575]'>Men's 18cm (approx.) 2-</p>
        <p className='text-[15px] text-[#757575]'>in-1 Versatile Shorts</p>
      </div>
    </div>
    <p className='text-[15px] font-medium text-[#111111] mt-[5px]'>₹ 2 495</p>
  </div>
</div>
</div>
     
     
      </div>
      <div className='w-[666px] h-[509px] ml-[6px]'>
      <div className='w-[234.7px] ml-[420px] pl-[7px] gap-[12.38px] flex items-center'>
      <p className='w-[106px] text-[15px] font-medium text-[#111111] whitespace-nowrap'>Shop Women's</p>
      <Image src="/bestofairmax/leftArrow.svg" alt="Left Arrow" width={48} height={48} />
      <Image src="/bestofairmax/rightArrow.svg" alt="Right Arrow" width={48} height={48} />
    </div>
        <div className='w-[666px] h-[447px] mt-[12px] flex'>
        {/* Cards */}
        <div className='w-[300px] h-[393px] ml-[48px]'>
  <Image src="/gearup/image3.svg" alt='Image 3' width={300} height={300} />
  <div className='w-[284px] h-[72px] mt-[21px] flex justify-between items-start'>
    <div className='w-[231.53px] pr-[12.53px]'>
      <p className='text-[15px] font-medium text-[#111111]'>Nike Dri-FIT ADV Run Division</p>
      <div>
        <p className='text-[15px] text-[#757575]'>Women's Long-Sleeve </p>
        <p className='text-[15px] text-[#757575]'>Running Top</p>
      </div>
    </div>
    <p className='text-[15px] font-medium text-[#111111] mt-[5px]'>₹ 5 295</p>
  </div>
</div>
 {/* Cards */}
 <div className='w-[300px] h-[393px] ml-[48px]'>
  <Image src="/gearup/image4.svg" alt='Image 4' width={300} height={300} />
  <div className='w-[284px] h-[72px] mt-[21px] flex justify-between items-start'>
    <div className='w-[231.53px] pr-[12.53px]'>
      <p className='text-[15px] font-medium text-[#111111]'>Nike Fast</p>
      <div>
        <p className='text-[15px] text-[#757575]'>Women's Mid-Rise 7/8 Running</p>
        <p className='text-[15px] text-[#757575]'>Leggings with Pockets</p>
      </div>
    </div>
    <p className='text-[15px] font-medium text-[#111111] mt-[5px]'>₹ 3 795</p>
  </div>
</div>
</div>
     
     
      </div>
      </div>
      </div>
    </div>
  )
}

export default GearUp
