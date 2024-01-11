import React from 'react'
import logo from '../assets/logo.svg'
import pizzaImg from '../assets/pizza.png'
import pizzaCover from '../assets/pizzaCover.png'

const Home = () => {
  return (
    <div className='flex md:flex-row flex-col-reverse justify-between'>
      {/* Description */}
      <div className='flex flex-col md:mx-[80px] mx-16 md:mt-0 mt-10 justify-center md:h-screen relative'>
        {/* Logo image */}
        <img src={logo} alt="Logo" className='hidden md:flex absolute top-5 w-[107px] h-[83px] flex-shrink-0' />
        {/* Main desc */}
        <div className='flex flex-col md:items-start items-center'>
          <h2 className='text-[#0E2368] font-sans md:text-6xl text-[35px] font-bold md:max-w-sm max-w-60 py-4 md:text-start text-center'>Discover the <span className='text-[#E23744]'>Best</span> Food and Drinks</h2>
          <p className='text-[#444957] md:max-w-[345px] max-w-[249px] md:text-start text-center md:text-[16.445px] text-[11px] font-sans font-normal'>Naturally made Healthcare Products for the better care & support of your body.</p>
          <button className='text-white font-sans md:text-[18px] text-[12.66px] font-bold md:leading-9 leading-3 md:tracking-[0.18px] tracking-[0.123px] flex md:w-[190px] w-[120px] md:h-[63px] h-[40px] md:px-[34px] px-[30px] md:py-[14] py-[12px] md:text-start text-center md:gap-[7px] gap-[6px] flex-shrink-0 md:rounded-[34px] rounded-[30px] bg-[#E23744] justify-center items-center mt-[34px] whitespace-nowrap'>Explore Now!</button>
        </div>
      </div>
      {/* Pizza Image */}
      <div className='flex relative'>
        <img src={pizzaImg} alt="pizzaImg" className='' />
        <img src={pizzaCover} alt="pizzaCover" className='absolute'/>
      </div>
    </div>
  )
}

export default Home