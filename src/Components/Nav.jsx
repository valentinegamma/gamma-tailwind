import React from 'react'
import gammalogo from '../assets/gamma_logo.png'

function Nav() {
  return (
      <nav className='flex justify-evenly text-gray-400 bg-primary py-3 text-base'>
        <img src={gammalogo} className=' w-full max-w-[8rem]'/>
        <ul className='flex gap-10 cursor-pointer '>
          <li className='hover:text-gray-200 duration-300 ease-in-out'>about</li>
          <li className='hover:text-gray-200 duration-300 ease-in-out'>portfolio</li>
          <li className='hover:text-gray-200 duration-300 ease-in-out'>projects</li>
          <li className='hover:text-gray-200 duration-300 ease-in-out'>contact</li>
          <li className='hover:text-gray-200 duration-300 ease-in-out'>services</li>
          <li className='hover:text-gray-200 duration-300 ease-in-out'>blog</li>
        </ul>
        <span className='font-medium text-gray-200 border border-gray-400 rounded-xl px-4 hover:border-gray-200 hover:text-gray-200 duration-300 ease-in-out cursor-pointer'>Contact me</span>
      </nav>
  )
}

export default Nav