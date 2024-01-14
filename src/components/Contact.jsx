import React from 'react'

const Contact = () => {
  return (
    <div>
        <h3 className="text-3xl py-1 dark:text-white ">Contact</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Submit the form below to get in touch with me.
        </p>
        <div className="flex justify-center items-center pt-8">
        <form
            action="https://getform.io/f/4416de6d-4d53-4ddc-92ca-90eac690fd8a"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md dark:text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md dark:text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md dark:text-white focus:outline-none"
            ></textarea>

            <button className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Send
            </button>
          </form>
          
        </div>
    </div>
  )
}

export default Contact
