import React from 'react'

const Tab2 = () => {
  return (
    <div  className=' text-white mt-6'>
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
  )
}

export default Tab2