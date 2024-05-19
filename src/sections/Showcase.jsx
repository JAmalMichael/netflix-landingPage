import { FaChevronRight } from "react-icons/fa"
import Tab from "../components/Tab"



const Showcase = () => {
  return (
    <>
    <div 
    className="bg-[url('https://i.ibb.co/vXqDmnh/background.jpg')] bg-cover bg-center w-100% 
    w-100% font-sans shadow-[inset_100px_100px_250px_#000000,_inset_-100px_-100px_250px_#000000] "
    >
    <div className='h-[90px] relative z-2 flex justify-between items-center p-5'>
    <img 
    src="https://i.ibb.co/r5krrdz/logo.png" 
    alt="" 
    className='w-[170px] sm:mx-auto'/>
       <a href='/' className='w-20 h-8 bg-red-500 rounded-md text-white text-center text-md my-auto hover:opacity-[0.9]'>
       Sign-in
       </a>
    </div>
    <div className='relative z-2 w-65% mx-auto my-auto 
    flex flex-col justify-center items-center text-center mt-[9rem] text-white'>
      <h1 className="font-bold text-[3.2rem] sm:text-[5.2rem]
      mt-0 mr-0 mb-[1rem]">See What's next</h1>
      <p className="text-[###] font-normal text-[1.9rem] leading-[1.25] mt-0 mr-0 mb-[3rem] sm:text-[2.5rem]">Watch anywhere Cancel Anytime</p>
      <div className="flex bg-red-700 py-[0.4rem] px-[1.3rem] text-sm text-center mr-[0.5rem] 
      shadow-[0 1px 0 rgba(0, 0, 0, 0.45)] hover:opacity-[0.9] rounded-sm sm:text-xl z-20
       h-19 inline-block">
      <a href="/" className="my-auto">
      Watch Free For 30 Days 
      </a>
      <FaChevronRight className="my-auto"/>
      </div>  
    </div>
    </div>
    <Tab/> 
    </>
  )
}

export default Showcase