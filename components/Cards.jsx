import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs"
import arrows from "../data/arrows.svg"
import sample1 from "../data/sample1.svg"

const Cards = ({title, bg, num, chg, smp}) => {
  return (
    <div className={`w-96 h-48 bg-white bg-cover bg-no-repeat dark:backdrop-blur-md rounded-md font-rubik dark:bg-sec-dark`}>
      <div className='w-full flex items-center justify-between ml-5 mt-3'>
        <div className='flex gap-2 items-center'>
          <img className="w-10 h-10 " src={`${bg}`}/>
          <p className='relative left-3 font-rubik text-lg font-[500] text-text dark:text-white'>{title}</p>
        </div>
        <BsThreeDotsVertical className='relative dark:text-white right-10'/>
      </div>
      <div>
        <h1 className='text-3xl font-bold relative ml-6 top-5 text-slate-700 dark:text-white'>${num}</h1> 
      </div>
      <div className='mt-5 flex pr-5 pl-5 w-full justify-between'>
        <div className='flex font-semibold items-end'>
          <div className='flex gap-2 pb-3 ml-3'>
            <img src={`${arrows.src}`}/>
            <h1 className='text-primary dark:text-accent'>%{chg}</h1>
          </div>
        </div>
        <div className="relative bottom-2 w-[120px] h-[65px] bg-cover bg-center" style={{backgroundImage: `url("${smp}")`}}>

        </div>
      </div>
    </div>
  );
}

export default Cards

// 'text': '#080208',
// 'background': '#fdf7fd',
// 'primary': '#581759',
// 'secondary': '#e9aeea',
// 'accent': '#a02aa2',