import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const Footer = () => {
    return (
        <footer className="w-full max-w-[1440px] h-[331px] bg-black">
  <div className="w-full max-w-[1372px] mx-auto mt-[40px] flex justify-between">
    {/* Navigation Links Section */}
    <div className="flex space-x-[150px] items-start mt-[80px] ">
      {/* Column 1 */}
      <div className="flex flex-col text-xs text-white space-y-2">
        <h3 className="font-bold">FIND A STORE</h3>
        <h3 className="font-bold">BECOME A MEMBER</h3>
        <h3 className="font-bold">SIGN UP FOR EMAIL</h3>
        <h3 className="font-bold">SEND US FEEDBACK</h3>
        <h3 className="font-bold">STUDENT DISCOUNTS</h3>
      </div>

      {/* Column 2 */}
      <div className="flex flex-col text-xs text-white space-y-2">
        <h3 className="font-bold">GET HELP</h3>
        <p className="text-gray-500">Order Status</p>
        <p className="text-gray-500">Delivery</p>
        <p className="text-gray-500">Returns</p>
        <p className="text-gray-500">Payment Options</p>
        <p className="text-gray-500">Contact Us On Nike.com Inquiries</p>
        <p className="text-gray-500">Contact Us On All Other Inquiries</p>
      </div>

      {/* Column 3 */}
      <div className="flex flex-col text-xs text-white space-y-2">
        <h3 className="font-bold">ABOUT NIKE</h3>
        <p className="text-gray-500">News</p>
        <p className="text-gray-500">Careers</p>
        <p className="text-gray-500">Investors</p>
        <p className="text-gray-500">Sustainability</p>
      </div>
    </div>

    {/* Social Media Icons Section */}
    <div className="flex space-x-4 items-start mt-[80px] mr-[50px]">
      <Image src="/footer/twitter.svg" alt="Twitter" width={24} height={24} />
      <Image src="/footer/facebook.svg" alt="Facebook" width={24} height={24} />
      <Image src="/footer/youtube.svg" alt="YouTube" width={24} height={24} />
      <Image src="/footer/instagram.svg" alt="Instagram" width={24} height={24} />
    </div>
  </div>

  {/* Footer Bottom Section */}
  <div className="mt-8 flex flex-wrap justify-between items-center text-xs text-gray-400">
    {/* Country and Copyright */}
    <div className="flex items-center gap-2 ml-5 mt-5">
      <Image src="/footer/location.svg" alt="location"  width={18}  height={15}/>
      <p>India</p>
      <p>© 2023 Nike, Inc. All Rights Reserved</p>
    </div>

    
    <div className="flex flex-wrap gap-4 mr-5 mt-5">
      <p className="hover:underline">Guides</p>
      <p className="hover:underline">Terms of Sale</p>
      <p className="hover:underline">Terms of Use</p>
      <p className="hover:underline">Nike Privacy Policy</p>
    </div>
  </div>
</footer>

      
    );
  };
  
  export default Footer; 