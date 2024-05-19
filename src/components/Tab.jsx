import React from 'react'
import {FaDoorOpen, FaTabletAlt, FaTags} from 'react-icons/fa'

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
    <div id="tab-1-content" >
      <div>
          <div>
            <p>If you decide Netflix isnt for you - no problem
            . No commitment. Can online anytime.</p>
            <a href="#">Watch free for 30 days</a>
          </div>
          <img 
          src="https://i.ibb.co/J2xDJV7/tab-content-1.png"
           alt="" />
      </div>
    </div>
    
    <div id="tab-2-content">
      <div>
        <p>Watch TV shows and movies anytime, anywhere - personalised for you.
        </p>
        <a href="/">Watch Free For 30 days</a>
      </div>
      <div>
      <img src="https://i.ibb.co/DpdN7Gn/tab-content-2-1.png"
       alt="" />
       <p>Watch your TV</p>
       <p>Smart TVs, Playstation, Xbox, Chromscast,
       Apple TV, Bluu-ray
       players and more.</p>
      </div>
      <div>
      <img src="https://i.ibb.co/R3r1SPX/tab-content-2-2.png"
       alt="" />
       <p>Watch instantly or download for later</p>
       <p>Available on phone and tablet, wherever you go.
       </p>
      </div>
      <div>
      <img src="https://i.ibb.co/gDhnwWn/tab-content-2-3.png" 
      alt="" />
      <p>Use any computer</p>
      <p>Watch right on Netflix.com</p>
      </div>
    </div>
    <div id="tab-3-content">
      <div>
      <p>
        Choose one plan and watch everything on Netflix.
      </p>
      <a href="/">Watch Free for 30 Days</a>
      </div>
    </div>
    </section>
  )
}

export default Tab