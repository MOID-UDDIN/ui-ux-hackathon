import React from 'react'
import Image from 'next/image'

function Featured() {
  return (
    <div className='w-[1440px]'>
     <div className='w-[1344px] h-[977px] mt-[48px] ml-[48px]'>
        <p className='w-[96.26px] h-[27px] mb-[20px] font-medium text-[23px] text-[#111111]'>Featured</p>
        <Image src = "/featured/running.svg" alt = "Running" width={1344} height={700}/>
        <div className='w-[1008px] h-[177px] mt-[48px] ml-[168px]'>
            <p className='w-[806px] h-[60px] ml-[100.25px] text-[54px] font-medium text-[#111111] whitespace-nowrap'>STEP INTO WHAT FEELS GOOD</p>
            <p className='w-[473px] h-[24px] mt-[20px] ml-[268.06px] text-[15px] text-[#111111]'>Cause everyone should know the feeling of running in that perfect pair.</p>
            <button className='w-[152.42px] h-[39px] rounded-[30px] py-[7.5px] pr-[23.92px] pl-[22.5px] bg-[#111111] ml-[424.78px] mt-[20px]'>
                    <p className='w-[106px] h-[24px] text-[15px] font-medium text-[#FFFFFF]'>Find Your Shoe</p>
                </button>
        </div>
    </div> 
    </div>
  )
}

export default Featured
