import React from 'react'
import {FaDoorOpen, FaTabletAlt, FaTags} from 'react-icons/fa'
import { FaChevronRight } from "react-icons/fa"
import Table from './Table'

const Tab = () => {
  return (
    <section className="bg-[#141414] pt-[1rem] text-gray-400 ">
    <div className='grid grid-cols-3 items-center justify-center text-center '>
    <div className='py-[1.5rem] px-0 hover:text-white hover:cursor-pointer flex
    justify-center items-center flex-col border-b-2 border-red-700'>
    <FaDoorOpen className='w-10 h-10'/>
    <p className='hidden sm:inline-block text-[1.2rem'>Cancle at any time</p>
    </div>
    <div className='py-[1.5rem] px-0  hover:text-white hover:cursor-pointer flex
    justify-center items-center flex-col'>
    <FaTabletAlt className='w-10 h-10'/>
    <p className='hidden sm:inline-block text-[1.2rem] '>Watch anywhere</p>
    </div> 
    <div className='py-[1.5rem] px-0  hover:text-white hover:cursor-pointer flex
    justify-center items-center flex-col'>
    <FaTags className='w-10 h-10'/>
    <p className='hidden sm:inline-block text-[1.2rem] '>Pick your price</p>
    </div>
    </div>
    <div className=''>
    <container className=''>
    <div id="tab-1-content" 
    className='text-white grid grid-cols-1 gap-1 w-[100%] mt-4 sm:grid-cols-2 mb-4 hidden'>
          <div className='sm:w-[30%] grid grid-cols-2 mx-auto gap-2 text-center sm:grid-cols-1 sm:mr-0'>
            <p className='text-sm sm:text-md'>If you decide Netflix isnt for you - no problem
            . No commitment. Can watch online anytime.</p>
            <form>
            <button className='bg-red-700 px-5 my-2 hover:opacity-[0.9]'>
            Watch anytime
            </button>
            </form>
         </div>
          <div className=' w-[30%] mx-auto sm:mx-0'>
          <img 
          src="https://i.ibb.co/J2xDJV7/tab-content-1.png"
           alt="" 
           width={300}
           height={300} />
           </div>
    </div>
    
    <div id="tab-2-content" className=' text-white mt-6'>
      <div className='grid grid-cols-1 justify-center w-[80%] mx-auto text-lg font-bold mb-6
      sm:grid-cols-2 sm:w-[60%] items-center'>
        <p className='text-center sm:text-xl'>Watch TV shows and movies anytime, anywhere - personalised for you.
        </p>
        <button className='bg-red-700 px-5 hover:opacity-[0.9] h-7 font-medium mt-2'>
            Watch free for 30 days
        </button>
        </div>
      <div className='grid grid-cols-1 justify-center items-center text-center sm:grid-cols-3'>
      <div  className='flex flex-col items-center '>
      <img src="https://i.ibb.co/DpdN7Gn/tab-content-2-1.png"
       alt="" width={300} height={300}/>
       <p>Watch your TV</p>
       <p className='w-[70%] text-gray-500'>Smart TVs, Playstation, Xbox, Chromscast,
       Apple TV, Bluu-ray
       players and more.</p>
      </div>
      <div className='flex flex-col items-center mb-4'>
      <img src="https://i.ibb.co/R3r1SPX/tab-content-2-2.png"
       alt=""  width={300} height={300} className='mb-0'/>
       <p className='mt-0'>Watch instantly or download for later</p>
       <p className='text-gray-500'>Available on phone and tablet, wherever you go.
       </p>
      </div>
      <div className='flex flex-col items-center '>
      <img src="https://i.ibb.co/gDhnwWn/tab-content-2-3.png" 
      alt="" width={300} height={300}/>
      <p>Use any computer</p>
      <p className='text-gray-500'>Watch right on Netflix.com</p>
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