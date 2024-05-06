import React from 'react'
import {FaDoorOpen, FaTabletAlt, FaTags} from 'react-icons/fa'
import { FaChevronRight } from "react-icons/fa"
import Table from './Table'

const Tab = () => {
  return (
    <section className="bg-[#141414] pt-[1rem] border-b-red-700 border-r-0 text-gray-400 ">
    <div className='grid grid-cols-3 items-center justify-center text-center'>
    <div className='py-[1.5rem] px-0 hover:text-white hover:cursor-pointer flex
    justify-center items-center flex-col '>
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
    <div className=''>
    <container className=''>
    <div id="tab-1-content" 
    className='text-white flex flex-col justify-center items-center sm:flex-row flex-1 mx-auto hidden'>
          <div className=' w-[50%] sm:w-[30%]'>
            <p>If you decide Netflix isnt for you - no problem
            . No commitment. Can watch online anytime.</p>
            <button className='bg-red-700 items-center h-10 w-[2rem] px-2'>
            Watch anytime
            </button>
         </div>
          <div className=' w-[30%]'>
          <img 
          src="https://i.ibb.co/J2xDJV7/tab-content-1.png"
           alt="" 
           width={300}
           height={300} />
           </div>
    </div>
    
    <div id="tab-2-content" className='flex flex-col justify-center items-center text-white'>
      <div className='flex flex-col items-center '>
        <p className='text-center'>Watch TV shows and movies anytime, anywhere - personalised for you.
        </p>
        <a href="/" 
        className='mx-auto text-center my-5'
        >Watch Free For 30 days</a>
      </div>
      <div>
      <div  className='sm:w-[20%] flex flex-col items-center '>
      <img src="https://i.ibb.co/DpdN7Gn/tab-content-2-1.png"
       alt="" width={500} height={500}/>
       <p>Watch your TV</p>
       <p className='w-[70%]'>Smart TVs, Playstation, Xbox, Chromscast,
       Apple TV, Bluu-ray
       players and more.</p>
      </div>
      <div className='sm:w-[20%] flex flex-col items-center '>
      <img src="https://i.ibb.co/R3r1SPX/tab-content-2-2.png"
       alt=""  width={500} height={500}/>
       <p>Watch instantly or download for later</p>
       <p>Available on phone and tablet, wherever you go.
       </p>
      </div>
      <div className='sm:w-[20%] flex flex-col items-center '>
      <img src="https://i.ibb.co/gDhnwWn/tab-content-2-3.png" 
      alt="" width={500} height={500}/>
      <p>Use any computer</p>
      <p>Watch right on Netflix.com</p>
      </div>
      </div>
    </div>

    <div id="tab-3-content" className='hidden'>
      <div>
      <p>
        Choose one plan and watch everything on Netflix.
      </p>
      <a href="/">Watch Free for 30 Days</a>
      </div>
    </div>
    <Table />
    </container>
    </div>
    </section>
  )
}

export default Tab