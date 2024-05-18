import React from 'react'
import {FaDoorOpen, FaTabletAlt, FaTags} from 'react-icons/fa'

const Tab = () => {
  return (
    <section className="bg-[#141414] pt-[1rem] border-b-red-700 border-r-0 text-gray-400">
    <div className='grid grid-cols-3 items-center justify-center text-center'>
    <div className='py-[1.5rem] px-0 hover:text-white hover:cursor-pointer border-b-red-700 flex
    justify-center items-center flex-col'>
    <FaDoorOpen className='w-10 h-10'/>
    <p className='hidden sm:inline-block text-[1.2rem] pt-[0.5rem]'>Cancle at any time</p>
    </div>
    <div className='py-[1.5rem] px-0  hover:text-white hover:cursor-pointer flex
    justify-center items-center flex-col'>
    <FaTabletAlt className='w-10 h-10'/>
    <p className='hidden sm:inline-block text-[1.2rem] pt-[0.5rem]'>Watch anywhere</p>
    </div> 
    <div className='py-[1.5rem] px-0  hover:text-white hover:cursor-pointer flex
    justify-center items-center flex-col'>
    <FaTags className='w-10 h-10'/>
    <p className='hidden sm:inline-block text-[1.2rem] pt-[0.5rem]'>Pick your price</p>
    </div>
    </div>
    </section>
  )
}

export default Tab