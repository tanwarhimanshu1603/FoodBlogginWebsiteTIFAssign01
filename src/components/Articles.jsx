import React, { useEffect, useState } from 'react'
import leftArrowDisabled from '../assets/leftarrowDisabled.svg'
import leftArrow from '../assets/leftarrow.svg'
import rightArrow from '../assets/rightarrow.svg'
import rightArrowDisabled from '../assets/rightarrowdisabled.svg'
import grilledTomatoes from '../assets/grilledTomatoes.png'
import snacksForTravel from '../assets/snacksForTravel.png'
import postWorkoutRecipes from '../assets/postWorkoutRecipes.png'
import grillCorn from '../assets/grillCorn.png'
import crunchWrapSupreme from '../assets/crunchWrapSupreme.png'
import brocolliCheeseSoup from '../assets/brocolliCheeseSoup.png'

const cards = {
  firstCardGroup: [
    {
      id: 1,
      img: grilledTomatoes,
      cardHeading: 'Grilled  Tomatoes at Home',
      cardPara: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
    },
    {
      id: 2,
      img: snacksForTravel,
      cardHeading: 'Snacks for Travel',
      cardPara: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
    },
    {
      id: 3,
      img: postWorkoutRecipes,
      cardHeading: 'Post-workout Recipes',
      cardPara: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
    },
  ],
  secondCardGroup: [
      {
        id: 1,
        img: grillCorn,
        cardHeading: 'How To Grill Corn',
        cardPara: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
      },  
      {
        id: 2,
        img: crunchWrapSupreme,
        cardHeading: 'Crunchwrap Supreme',
        cardPara: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
      },  
      {
        id: 3,
        img: brocolliCheeseSoup,
        cardHeading: 'Broccoli Cheese Soup',
        cardPara: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
      },  
  ]
}

const Articles = () => {

  const [cardGroup,setCardGroup] = useState(1);
  const [cardsList,setCardsList] = useState([]);

  useEffect(()=>{
    if(cardGroup === 1){
      setCardsList(cards.firstCardGroup);
    }else setCardsList(cards.secondCardGroup);
  },[cardGroup])

  return (
    <div className='md:mt-[158px] mt-[100px] md:mx-[150px]'>
      <h2 className='md:w-[461px] md:h-[84px] flex-shrink-0 text-[#0E2368] font-sans md:text-[56px]  text-[28px] font-semibold md:leading-[42px] leading-[54px] md:tracking-[2.24px] tracking-[1.12px] md:text-start text-center'>Latest Articles</h2>
      {/* Cards */}
      <div className='flex md:flex-row flex-col md:items-start items-center md:mt-[41px] mt-[23px] md:space-x-[41px] md:space-y-0 space-y-[61px]'>
        {/* Card */}
        {
          cardsList.map(card => {
            return <div key={card.id} className='md:w-[381px] w-[271px] md:h-[500px] h-[450px] flex flex-col items-center flex-shrink-0 md:rounded-[20.937px] rounded-[26.773px] md:border-[1.37px] border-[0.86px] border-solid md:border-[#93A2D3A2] border-[#373737]'>
              <img src={card.img} alt={`${card.img}`} className='md:w-[326px] w-[204px] md:h-[257px] py-[27px]'/>
              <div className='flex flex-col md:items-start md:px-[42px] items-center md:space-y-10 space-y-5'>
                <div className='space-y-4'>
                  <h3 className='text-[#0E2368] md:text-[21px] text-[16px] font-bold md:leading-[27px] leading-[35px] md:tracking-[0px] tracking-[0.8px]'>{card.cardHeading}</h3>
                  <p className='md:w-[295px] w-[217px] flex md:h-[61px] h-[106px] text-[#444957] font-sans md:text-[15px] text-[12px] md:font-normal md:leading-[27px] md:tracking-[-0.3px]'>{card.cardPara}</p>
                </div>
                <div className='flex md:w-[131px] w-[118px] h-[26px] md:h-[42px] md:px-[26px] px-[33px] md:py-[3px] py-[4px] justify-center items-center md:gap-[10px] gap-[13px] flex-shrink-0 md:rounded-[21px] rounded-[27px] md:border-[1px] border-[2px] border-solid border-[#424961] whitespace-nowrap'>
                  <p className='text-[#424961] font-sans md:text-[16.445px] text-[11px] md:font-semibold md:leading-[35.593px] leading-[46px] md:tracking-[0.493px] tracking-[0.33px]'>Read More</p>
                </div>
              </div>
            </div>
          })
        }
      </div>
      {/* Slider */}
      <div className='flex space-x-2 items-center justify-center text-center md:mt-[65px] mt-[52px] md:mb-[65px] mb-[52px]'>
        {/* Left Slider Icon */}
        {
          cardGroup === 1 ? <img src={leftArrowDisabled} alt="leftArrowDisabled" className='cursor-not-allowed'/> : <img onClick={() => setCardGroup(1)} src={leftArrow} alt="leftArrow" className='cursor-pointer' />
        }
        <p className='text-[#424961] font-sans text-[22px]  md:font-normal md:leading-[27.218px]'>{cardGroup}/2</p>
        {/* Right Slider Icon */}
        {
          cardGroup === 1 ? <img onClick={() => setCardGroup(2)} src={rightArrow} alt="rightArrow" className='cursor-pointer'/> : <img onClick={() => setCardGroup(2)} src={rightArrowDisabled} alt="rightArrowDisabled" className='cursor-not-allowed' />
        }
      </div>
    </div>
  )
}

export default Articles