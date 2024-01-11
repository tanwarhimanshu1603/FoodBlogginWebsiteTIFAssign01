import React from 'react'
import aboutImg from '../assets/aboutImg.png'

const About = () => {
  return (
    <div className='md:mt-[186px] mt-[64px] md:flex md:space-x-4 bg-gradient-to-b from-[#1E2A5D1A] from-30.91% via-[#303E521A] via-64.79%% to-[#3C509D1A] to-91.94%'>
      {/* About Image */}
      <div className='md:w-1/2 flex justify-center'>
        <img src={aboutImg} alt="AboutImg" className='md:flex hidden w-[384px] h-[468px]'/>
      </div>
      {/* About Content */}
      <div className='md:w-1/2 md:h-[468px] h-[516px] flex flex-col md:items-start items-center justify-center md:space-y-6 space-y-[21px]'>
        <h2 className='md:w-[422px] w-[120px] md:h-[26px] text-[#0E2368] md:text-[45px] text-[26px] font-semibold md:leading-[27px] leading-[35px] md:text-start text-center'>About Us</h2>
        <p className='md:w-[447px] w-[275px] md:text-start text-center md:h-[138px] h-[138px] text-[#444957] font-sans md:text-[15px] text-[11px] md:font-normal md:leading-[27px] leading-[21px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.</p>
        <button className='md:w-[132px] w-[96px] h-[25px] md:h-[42px] md:px-[26px] px-[33px] md:py-[3px] py-[4px] flex items-center justify-center text-center md:gap-[10px] gap-[13px] md:rounded-[21px] rounded-[27px] bg-[#E23744] flex-shrink-0 text-white font-sans md:text-[16px] text-[11px] md:font-semibold md:leading-[36px] leading-[46px] md:tracking-[0.48px] tracking-[0.33px] whitespace-nowrap'>Read More</button>
      </div>
    </div>
  )
}

export default About