import React from 'react'
import Image from 'next/image'

function joinus() {
  return (
    <div className='w-[1440px] h-[833px]'>
      <div className='w-[380px] h-[833px] ml-[515.5px]'>
        <div className='w-[324px] h-[182px] '>
      <Image src = "/login/nikeSymbol.svg" alt = "Nike Symbol"  width={324} height={17}/>
      <p className='w-[231.22px] h-[31px] ml-[46.68px] mt-[10px] text-[18px] font-bold text-center'>BECOME A NIKE MEMBER</p>
      <p className='w-[282.08px] h-[60px] text-center ml-[22.44px] text-[12px] text-[#8D8D8D]'>Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.</p>
      </div>
      <div className='w-[324px] h-[561px]'>
      <div className="w-[324px] h-[40px] px-2 py-2 rounded border border-[#E5E5E5]">
  <p className='w-[290px] h-[16px]  ml-[17px] text-[14px] text-[#8D8D8D]'>Email address</p>
</div>
<div className="w-[324px] h-[40px] mt-[12px] px-2 py-2 rounded border border-[#E5E5E5]">
  <p className='w-[290px] h-[16px]  ml-[17px] text-[14px] text-[#8D8D8D]'>Password</p>
</div>
<div className="w-[324px] h-[40px] px-2 mt-[12px] py-2 rounded border border-[#E5E5E5]">
  <p className='w-[290px] h-[16px]  ml-[17px] text-[14px] text-[#8D8D8D]'>First Name</p>
</div>
<div className="w-[324px] h-[40px] mt-[12px] px-2 py-2 rounded border border-[#E5E5E5]">
  <p className='w-[290px] h-[16px]  ml-[17px] text-[14px] text-[#8D8D8D]'>Last Name</p>
</div>
<div className="w-[324px] h-[40px] mt-[12px] px-2 py-2 rounded border border-[#E5E5E5]">
  <p className='w-[290px] h-[16px]  ml-[17px] text-[14px] text-[#8D8D8D]'>Date of Birth</p>
</div>
<p className='w-[301.85px] h-[14px] ml-[11.38px] mt-[3px] text-[11px] text-[#8D8D8D]'>Get a Nike Member Reward every year on your Birthday.</p>
<div className="w-[324px] h-[40px] mt-[12px] px-2 py-2 rounded border border-[#E5E5E5]">
  <p className='w-[290px] h-[16px]  ml-[17px] text-[14px] text-[#8D8D8D]'>India</p>
  <Image src = "/joinus/downwardArrow.svg" alt = "Downward Arrow" width={10} height={7.14} className='ml-[300px] mb-[2px]'/>
</div>
<div className="w-[324px] h-[40px] mt-[12px] space-x-[16.22px] flex">
<div className="w-[153.89px] h-[40px] mt-[12px] px-2 py-2 rounded border border-[#E5E5E5]">
  <p className='w-[290px] h-[16px]  ml-[19px] text-[14px] text-[#8D8D8D]'>Male</p>
</div>
<div className="w-[153.89px] h-[40px] mt-[12px] px-2 py-2 rounded border border-[#E5E5E5]">
  <p className='w-[290px] h-[16px]  ml-[19px] text-[14px] text-[#8D8D8D]'>Female</p>
</div>
</div>
<div className='w-[324px] h-[28px] mt-[20px] flex justify-between items-center'>
    <Image src="/joinus/Rectangle.svg" alt="Box" width={20} height={20} />
    <p className='text-[#8D8D8D] w-[247px] h-[28px] text-[11px] flex flex-wrap'>
        Sign up for emails to get updates from Nike on products, offers and your Member benefits
    </p>
</div>
<div className='w-[324px] h-[59px] mt-[12px]'>
  <p className='w-[279.31px] h-[30px] text-center ml-[22.44px] text-[12px] text-[#8D8D8D]'>By creating an account, you agree to Nike's Privacy Policy and Terms of Use.</p>
</div>
<div className="w-[324px] h-[40px] mt-[2px] px-2 py-2 rounded bg-[#111111] border border-[#111111]">
  <p className='w-[41.04px] h-[18px]  ml-[140px] text-[11px] text-[#FFFFFF] whitespace-nowrap'>JOIN US</p>
</div>
<p className='w-[129.61px] mt-[20px] ml-[97.3px] text-[12px] text-[#8D8D8D] whitespace-nowrap'>Already a Member? Sign In.</p>

      </div>
      </div>
      
    </div>
  )
}

export default joinus
