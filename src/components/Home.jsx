import React from 'react'
import {
    AiFillLinkedin,
    AiFillGithub,
  } from "react-icons/ai";
import deved from "../assets/IMG_8499-Edit.jpg";

const Home = () => {
  return (
    <div className="text-center p-10 py-10">
      <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
            Martin Matta
      </h2>
      <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
            Full stack developer.
      </h3>
      <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            Freelancer providing services for programming and design content
            needs. Join me down below and let's get cracking!
      </p>
      <div className="text-5xl flex justify-center gap-8 py-3 text-gray-600 dark:text-gray-400">
        <a href="https://github.com/MartinMatta">
          <AiFillGithub />
        </a>
        <a href="https://sk.linkedin.com/in/martin-matta-797261199">
          <AiFillLinkedin />
        </a>
      </div>
      <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-56 h-56 relative overflow-hidden mb-4 md:mt-20 mt-12 md:h-96 md:w-96 ">
        <img src={deved} layout="fill" objectFit="cover" alt='/' />
      </div>
    </div>
  )
}

export default Home
