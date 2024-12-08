import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <div className='w-[1440px] '>
      <div className='w-[1344px] h-[977px] ml-[48px]'>
      <Image src = "/hero/shoe.svg" alt='Shoe image' width={1344} height={700}/>
      <div className='w-[1008px] h-[229px] mt-[48px] ml-[168px] '>
        <p className='w-[70px] h-[24px] ml-[468.88px] text-[15px] font-medium text-[#111111]'>First Look</p>
        <p className='w-[574px] h-[60px] ml-[250px] text-[56px] font-medium text-[#111111]'>Nike Air Max Pulse</p>
        <div className='w-[1008px] h-[48px] mt-[30px] pr-[248.45px] pl-[248.55px]'>
            <p className='w-[511px] h-[48px] text-[15px] text-[#111111]'>Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
            —designed to push you past your limits and help you go to the max.</p>
        </div>
        <div className='w-[1008px] h-[45px] mt-[20px] pt-[6px] pr-[379.64px] pl-[373.63px] space-x-[6px]'>
                <button className='w-[110.58px] h-[39px] rounded-[30px] py-[7.5px] pr-[22.08px] pl-[21.5px] bg-[#111111]'>
                    <p className='w-[67px] h-[24px] text-[15px] font-medium text-[#FFFFFF]'>Notify Me</p>
                </button>
                <button className='w-[138.16px] h-[39px] rounded-[30px] py-[7.5px] pr-[22.66px] pl-[21.5px] bg-[#111111]'>
                    <p className='w-[94px] h-[24px] text-[15px] font-medium text-[#FFFFFF]'>Shop Air Max</p>
                </button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Hero
