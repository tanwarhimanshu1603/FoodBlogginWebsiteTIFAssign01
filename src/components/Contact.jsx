import React from 'react'
import logo from '../assets/logo.svg'
import { FaInstagram,FaTwitter,FaFacebookF } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className='flex md:flex-row flex-col md:pt-0 pt-[52px] md:h-[362px] md:items-center  md:justify-between justify-center  md:px-[103px] px-[43px] bg-[#F8F8F8]'>
      {/* Logo */}
      <div className='flex items-center justify-center'>
        <img src={logo} alt="logo" />
      </div>
      {/* Contact Us */}
      <div className='md:mt-0 mt-[42px]'>
        <h3 className='flex-shrink-0 md:w-[94px] w-[119px] md:h-[27px] h-[35px] text-[#0E2368] font-sans md:text-[18.843px] text-[15.771px] font-semibold md:leading-[27.218px] leading-[34.804px] md:tracking-[0.565px] tracking-[0.473px] whitespace-nowrap'>Contact Us</h3>
        {/* Address */}
        <div className='md:mt-[14px] md:space-y-[15px] text-[#646874] font-sans font-normal'>
          <p className='md:w-[228px] w-[288px] md:h-[69px] md:text-[14.656px] text-[8.762px] md:leading-[23.031px] leading-[12.66px]'>Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</p>
          <p className='md:w-[232px] w-[293px] h-[29px] md:h-[23px] md:text-[14.656px] text-[8.672px] leading-[29.45px] md:leading-[23.031px]'>example2020@gmail.com</p>
          <p className='md:w-[91px] md:h-[23px] md:text-[14.656px] text-[8.762px] md:leading-[23.031px] leading-[29.45px] whitespace-nowrap'>(904) 443-0343</p>
        </div>
      </div>
      {/* More */}
      <div className='md:mt-0 mt-[29px]'>
        <h3 className='flex-shrink-0 md:w-[94px] w-[119px] md:h-[27px] h-[35px] text-[#0E2368] font-sans md:text-[18.843px] text-[15.771px] font-semibold md:leading-[27.218px] leading-[34.804px] md:tracking-[0.565px] tracking-[0.473px] whitespace-nowrap'>More</h3>
        {/* Address */}
        <div className='md:mt-[14px] md:space-y-[15px] space-y-[6px] text-[#646874] font-sans font-normal'>
          <p className=''>About Us</p>
          <p className=''>Product</p>
          <p className=''>Career</p>
          <p className=''>Contact Us</p>
        </div>
      </div>
      {/* Social Links and copyright */}
      <div className='flex md:flex-col flex-col-reverse md:items-start items-center md:h-[188px] md:justify-between md:mt-0 mt-[30px] md:mb-0 mb-[50px]'>
        <div>
          <h3 className='md:flex hidden flex-shrink-0 md:w-[94px] w-[119px] md:h-[27px] h-[35px] text-[#0E2368] font-sans md:text-[18.843px] text-[15.771px] font-semibold md:leading-[27.218px] leading-[34.804px] md:tracking-[0.565px] tracking-[0.473px] whitespace-nowrap '>Social Links</h3>
          {/* Address */}
          <div className='flex md:space-x-2 space-x-8 mt-[11px]'>
            <FaInstagram size={30} className='text-[#0E2368] md:text-[18.843px] text-[15.771px]'/>
            <FaTwitter size={30}  className='text-[#0E2368] md:text-[18.843px] text-[15.771px]'/>
            <FaFacebookF size={30} className='text-[#0E2368] md:text-[18.843px] text-[15.771px]'/>
          </div>
        </div>
        <div className='md:w-[197px] md:h-[25px] flex-shrink-0'>
          <p className='text-[#828B9C] text-center md:text-[14.656px] text-[8.762px] font-normal md:leading-[25.124px] leading-[32.127pxd]' style={{fontFamily: 'Roboto'}}>© 2022 Food Truck Example</p>
        </div>
      </div>
    </div>
  )
}

export default Contact