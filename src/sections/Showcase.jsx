import React from 'react'
import { Link } from 'react-router-dom'

const Showcase = () => {
  return (
    <div 
    className="bg-[url('https://i.ibb.co/vXqDmnh/background.jpg')] bg-cover bg-center w-100% 
    h-93vh "
    >
    <div className="after:content-[''] after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-[rgba(0,0,0, 0.6)]
    after:shadow-[inset 120px 100px 250px #000000, inset -120px -100px 250px #000000];">
    </div>
    <div className='h-[90px] relative z-2 flex items-center p-5'>
    <img 
    src="https://i.ibb.co/r5krrdz/logo.png" 
    alt="" 
    className='mx-auto w-[170px] '/>
       <a href='/' className='w-20 h-8 bg-red-500 rounded-md text-black text-center text-md my-auto'>
       Sign-in
       </a>
    </div>
    <div>
    </div>
    </div>
  )
}

export default Showcase