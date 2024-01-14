import React from 'react'
import design from '../assets/illustration.png'
import code from '../assets/programming.png'

const Experience = () => {
  return (
    <div className="lg:flex gap-10">
        <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
            <img src={code} width={100} height={100} alt='/' className='mx-auto' />
            <h3 className="text-xl font-medium pt-8 pb-2  ">
                Backend
            </h3>
            <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
            </p>
            <h4 className="py-4 text-teal-600">Tools I use</h4>
            <p className="text-gray-800 py-1">Java</p>
            <p className="text-gray-800 py-1">SQL, PL/SQL</p>
            <p className="text-gray-800 py-1">Spring</p>
            <p className="text-gray-800 py-1">git</p>
        </div>
        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
            <img src={design} width={100} height={100} alt='/' className='mx-auto' />
            <h3 className="text-xl font-medium pt-8 pb-2 ">
                Frontend
            </h3>
            <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
            </p>
            <h4 className="py-4 text-teal-600">Tools I use</h4>
            <p className="text-gray-800 py-1">React</p>
            <p className="text-gray-800 py-1">Javascript</p>
            <p className="text-gray-800 py-1">HTML</p>
            <p className="text-gray-800 py-1">CSS</p>
        </div>
    </div>
  )
}

export default Experience
