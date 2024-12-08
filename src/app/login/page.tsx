import React from 'react'
import Image from 'next/image'


function login() {
  return (
    <div className='w-[1440px] h-[537px]'>
        <div className='w-[380px] h-[489px] ml-[530px]'>
      <div className='w-[324px] h-[128px] ml-[28px] mt-[28px]'>
      <Image src = "/login/nikeSymbol.svg" alt = "Nike Symbol"  width={324} height={17}/>
      <p className='w-[186.5px] h-[57px] ml-[68.84px] mt-[10px] text-[18px] font-bold text-center'>YOUR ACCOUNT FOR EVERYTHING NIKE</p>
      </div>
      <div className='w-[324px] h-[305px] mt-[15px] ml-[28px]'>
      <div className="w-[324px] h-[40px] px-2 py-2 rounded border border-[#E5E5E5]">
  <p className='w-[290px] h-[16px]  ml-[17px] text-[14px] text-[#8D8D8D]'>Email address</p>
</div>
<div className="w-[324px] h-[40px] mt-[12px] px-2 py-2 rounded border border-[#E5E5E5]">
  <p className='w-[290px] h-[16px]  ml-[17px] text-[14px] text-[#8D8D8D]'>Password</p>
</div>
<div className='w-[324px] h-[20px] mt-[12px] flex'>
<div className='w-[162px] h-[20px]  flex'>
    <Image src ="/login/tick.svg" alt = "Tick" width={20} height={20}/>
    <p className='w-[99.61px] h-[14px] text-[12px] text-[#8D8D8D] ml-[2px]'>Keep me signed in</p>
</div>
<div className='w-[139.61px] h-[14px]  ml-[48px]'>
<p className='text-[12px] text-[#BCBCBC] whitespace-nowrap'>Forgotten your password?</p>
</div>
</div>
<div className='w-[324px] h-[59px] mt-[12px]'>
  <p className='w-[279.31px] h-[30px] text-center ml-[22.44px] text-[12px] text-[#8D8D8D]'>By logging in, you agree to Nike's Privacy Policy and Terms of Use.</p>
</div>
<div className="w-[324px] h-[40px] mt-[12px] px-2 py-2 rounded bg-[#111111] border border-[#111111]">
  <p className='w-[41.04px] h-[18px]  ml-[141.58px] text-[11px] text-[#FFFFFF]'>SIGN IN</p>
</div>
<p className='w-[129.61px] mt-[20px] ml-[97.3px] text-[12px] text-[#8D8D8D]'>Not a Member? Join Us.</p>
      </div>
        </div>
      
    </div>
  )
}

export default login
