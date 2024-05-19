import React from 'react'

const Tab1 = () => {
  return (
    <div 
    className='text-white grid grid-cols-1 gap-1 w-[100%] mt-4 sm:grid-cols-2 pb-4'>
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
  )
}

export default Tab1