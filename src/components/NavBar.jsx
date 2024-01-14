import React from 'react'
import Switcher from './Switcher';

const NavBar = () => {

  return (
    <div className="py-10 mb-12 flex justify-between dark:text-white">
        <h1 className="font-burton text-xl">Martin</h1>
        <ul className="flex items-center">
            <li> 
                <Switcher />
            </li>
            <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                  download="../assets/resume.pdf"
                  target='_blank'
                  rel='noreferrer'
                >
                  Resume
                </a>
            </li>
        </ul>
    </div>
  )
}

export default NavBar
