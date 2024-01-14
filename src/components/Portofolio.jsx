import React from 'react'
import web1 from '../assets/web1.png'
import web2 from '../assets/web2.png'
import web4 from '../assets/web4.png'

const Portofolio = () => {

    const projects = [
        {
            id: 1,
            src: web1,
            link: "https://github.com/fireclint/food-app-react-tailwind/blob/main/src/components/Navbar.jsx"
        },
        {
            id: 2,
            src: web2,
            link: "https://github.com/fireclint/food-app-react-tailwind/blob/main/src/components/Navbar.jsx"
        },
        {
            id: 3,
            src: web4,
            link: "https://github.com/fireclint/food-app-react-tailwind/blob/main/src/components/Navbar.jsx"
        }
    ]

  return (
    <div>
        <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">

            {
                projects.map(({id, src, link}) => (
                    <div key={id} className="basis-1/3 flex-1 shadow-md shadow-gray-200 dark:shadow-gray-800 rounded-lg">
                        <img
                            className="rounded-t-lg object-cover"
                            width={"100%"}
                            height={"100%"}
                            layout="responsive"
                            alt='/'
                            src={src}
                        />
                        <div className='text-center'>
                            <p className='mx-auto dark:text-white py-3'>
                                <a href={link}>Code</a>
                            </p>
                        </div>
                    </div>
                ))
            }
            
          </div>
    </div>
  )
}

export default Portofolio
