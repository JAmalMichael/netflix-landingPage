import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[#141414] pt-5'>
    <div  
    className='max-w-[70%] 
    mx-auto overflow-auto text-[#999] text-sm '>
    <p className='mb-[0.5rem] mt-4'>Questions? Call 1-866-579-7172</p>
    <div className='grid grid-cols-4 gap-[2rem]'>
        <ul>
            <li className='leading-[1.9]'><a href="/" className=" text-[#999] text-sm">FAQ</a></li>
            <li className='leading-[1.9]'><a href="/" className=" text-[#999] text-sm">Investor Relations</a></li>
            <li className='leading-[1.9]'><a href="/" className=" text-[#999] text-sm">Ways To Watch</a></li>
            <li className='leading-[1.9]'><a href="/" className=" text-[#999] text-sm">Corporate Information</a></li>
            <li className='leading-[1.9]'><a href="/" className=" text-[#999] text-sm">Netflix Originals</a></li>
        </ul>
        <ul>
            <li className='leading-[1.9]'><a href="/" className=" text-[#999] text-sm">Help Center</a></li>
            <li className='leading-[1.9]'><a href="/" className=" text-[#999] text-sm">Jobs</a></li>
            <li className='leading-[1.9]'><a href="/" className=" text-[#999] text-sm">Terms Of Use</a></li>
            <li className='leading-[1.9]'><a href="/" className=" text-[#999] text-sm">Contact Us</a></li>
        </ul>
        <ul>
            <li className='leading-[1.9]'><a href="/" className=" text-[#999] text-sm">Account</a></li>
            <li className='leading-[1.9]'><a href="/" className=" text-[#999] text-sm">Redeem Gift Cards</a></li>
            <li className='leading-[1.9]'><a href="/" className=" text-[#999] text-sm">Privacy</a></li>
            <li className='leading-[1.9]'><a href="/" className=" text-[#999] text-sm">Speed Test</a></li>
        </ul>
        <ul>
            <li className='leading-[1.9]'><a href="/" className=" text-[#999] text-sm">Media Center</a></li>
            <li className='leading-[1.9]'><a href="/" className=" text-[#999] text-sm">Buy Gift Cards</a></li>
            <li className='leading-[1.9]'><a href="/" className=" text-[#999] text-sm">Cookie Preferences</a></li>
            <li className='leading-[1.9]'><a href="/" className=" text-[#999] text-sm">Legal Notices</a></li>
        </ul>
    </div>
    </div>
</footer>
  )
}

export default Footer