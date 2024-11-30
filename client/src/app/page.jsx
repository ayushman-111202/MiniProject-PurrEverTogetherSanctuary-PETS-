import { IconBrandFacebook, IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandX, IconBrandYoutube } from '@tabler/icons-react';
import React from 'react'

const Home = () => {

  return (
    <div className='flex flex-col justify-center items-center h-screen w-full bg-white'>

      {/* upper div */}
      <div className='z-10 h-2/5 w-full'>
        <div className='w-full h-full text-center pt-10'
          style={{ backgroundImage: 'url("banner.png")', backgroundPosition: 'bottom' }}>

          <h1 className='text-7xl text-green-500 font-bold'>#EmpathyInAction</h1>
          <p className='text-white text-3xl mt-2'>Compassionate care for the forgotten and neglected</p>

          <div className='mt-5 flex justify-between pb-4'>

            <ul className='flex justify-end gap-10 px-10 text-slate-400'>
              <li>
                <a
                  className='hover:text-blue-300'
                  target='_blank'
                  href="#">
                  Virtual First-Aid
                </a>
              </li>
              <li>
                <a
                  className='hover:text-blue-300'
                  target='_blank'
                  href="#">
                  Contact
                </a>
              </li>
              <li>
                <a
                  className='hover:text-blue-300'
                  target='_blank'
                  href="#">
                  E-mail
                </a>
              </li>
            </ul>

            <ul className='flex justify-start gap-10 px-10 text-slate-400'>
              <li>
                <a href="https://www.linkedin.com/in/ayushman-111202-" target='_blank' className='hover:text-blue-300'>
                  <IconBrandLinkedin size={35} />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/ayushman_111202_" target='_blank' className='hover:text-blue-300'>
                  <IconBrandInstagram size={35} />
                </a>
              </li>
              <li>
                <a href="https://x.com/Ayushman_1311" target='_blank' className='hover:text-blue-300'>
                  <IconBrandX size={35} />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/ayushman.shukla.35977897" target='_blank' className='hover:text-blue-300'>
                  <IconBrandFacebook size={35} />
                </a>
              </li>
              <li>
                <a href="https://www.github.com/ayushman-111202" target='_blank' className='hover:text-blue-300'>
                  <IconBrandGithub size={35} />
                </a>
              </li>
            </ul>

          </div>

        </div>
      </div>
      {/* upper div end */}


      {/* gallery */}
      <div className='flex justify-center items-center h-screen w-full gap-7'>
        <div className='h-3/5 w-[9%] hover:h-4/5 hover:w-[18%] hover:ease-linear blur hover:blur-none'>
          <img
            className='object-cover h-full w-full'
            src="cat.jpg" alt="" />
        </div>

        <div className='h-3/5 w-[9%] hover:h-4/5 hover:w-[18%] hover:ease-linear blur hover:blur-none'>
          <img
            className='object-cover h-full w-full'
            src="cow.jpg" alt="" />
        </div>

        <div className='h-3/5 w-[9%] hover:h-4/5 hover:w-[18%] hover:ease-linear blur hover:blur-none'>
          <img
            className='object-cover h-full w-full'
            src="parrot.jpg" alt="" />
        </div>

        <div className='h-3/5 w-[9%] hover:h-4/5 hover:w-[18%] hover:ease-linear blur hover:blur-none'>
          <img
            className='object-cover h-full w-full'
            src="dog.jpg" alt="" />
        </div>

        <div className='h-3/5 w-[9%] hover:h-4/5 hover:w-[18%] hover:ease-linear blur hover:blur-none'>
          <img
            className='object-cover h-full w-full'
            src="cat (2).jpg" alt="" />
        </div>

        <div className='h-3/5 w-[9%] hover:h-4/5 hover:w-[18%] hover:ease-linear blur hover:blur-none'>
          <img
            className='object-cover h-full w-full'
            src="horse.jpg" alt="" />
        </div>

        <div className='h-3/5 w-[9%] hover:h-4/5 hover:w-[18%] hover:ease-linear blur hover:blur-none'>
          <img
            className='object-cover h-full w-full'
            src="sparrow.jpg" alt="" />
        </div>

        <div className='h-3/5 w-[9%] hover:h-4/5 hover:w-[18%] hover:ease-linear blur hover:blur-none'>
          <img
            className='object-cover h-full w-full'
            src="bunnies.jpg" alt="" />
        </div>
      </div>
      {/* gallery end */}

    </div>
  )
}

export default Home;
