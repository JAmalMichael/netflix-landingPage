import React, {useState} from 'react'
import {FaDoorOpen, FaTabletAlt, FaTags} from 'react-icons/fa'
import Tab1 from './Tab1'
import Tab2 from './Tab2'
import Tab3 from './Tab3'

const Tab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabContent = [
    {title: 'Cancle at any time', content: <Tab1 /> },
    {title: 'Watch Anywhere', content: <Tab2 /> },
    {title: 'Pick your price', content: <Tab3 /> }
  ]


  return (
    <section className="bg-[#141414] pt-[1rem] text-gray-400 ">
    <div className='grid grid-cols-3 items-center justify-center text-center '> 
     {tabContent.map((tab, index) => (
      <div 
      key={index}
      onClick={() => setActiveTab(index)}
      className={`py-[1.5rem] px-0 hover:text-white hover:cursor-pointer flex
      justify-center items-center flex-col  
       ${activeTab === index ? 'border-b-2 border-red-700' : 'border-b-0'}`} >
       <FaDoorOpen className='w-10 h-10'/>
       <p className='hidden sm:inline-block text-[1.2rem'>{tab.title}</p>
       </div>
     ))}
    </div>


    <div className=''>
    <container className=''>
      {tabContent.map((tab, index) => (
        <div key={index} className={`${activeTab === index ? 'block' : 'hidden'}`}>
          {tab.content }       
        </div>
      ))}
    </container>
    </div>
    </section>
  )
}

export default Tab