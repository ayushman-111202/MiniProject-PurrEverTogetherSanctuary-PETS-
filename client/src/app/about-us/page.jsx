import React from 'react'

const About = () => {
  return (
    <div>
      <div className='bg-gradient-to-b from-green4 to-green3 h-[50vh] w-full flex gap-10 p-10 items-center justify-center'>
        <h1 className='text-5xl text-orange-600 bg-orange-200 font-bold border border-orange-900 h-full flex items-center w-3/5 justify-center rounded-full'>Mission</h1>
        <p className='text-3xl text-white'>Our mission is to provide a safe haven for stray, abandoned, and neglected animals, offering them care, love, and a second chance at life. We strive to promote animal welfare and inspire the community to treat all animals with kindness and respect.</p>
      </div>

      <div className='bg-gradient-to-b from-green3 to-green2 h-[50vh] w-full flex gap-10 p-10 items-center justify-center'>
        <p className='text-3xl text-white'>We envision a world where every animal has a loving home and is treated with dignity and compassion. Through education, advocacy, and hands-on care, we aim to reduce the number of homeless animals and create a more compassionate society.</p>
        <h1 className='text-5xl text-orange-600 bg-orange-200 font-bold border border-orange-900 h-full flex items-center w-3/5 justify-center rounded-full'>Vision</h1>
      </div>

      <div className='h-[50vh] w-full flex flex-col gap-10 p-10 justify-center items-center bg-gradient-to-b from-green2 to-cyan-400'>
        <h1 className='text-5xl text-black font-bold h-1/3 flex items-center rounded-3xl'>Values</h1>
        <ul className='h-2/3 flex gap-10 justify-between w-full text-center'>
          <li className='w-1/4 h-auto shadow-2xl rounded-2xl flex flex-col gap-7 bg-yellow-100'>
            <h2 className='bg-yellow-300 h-1/4 text-center justify-center flex items-center text-2xl font-bold rounded-t-2xl'>Compassion</h2>
            <p className='text-black text-md italic'>We are committed to treating all animals with empathy and kindness.</p>
          </li>
          <li className='w-1/4 h-auto shadow-2xl rounded-2xl flex flex-col gap-7 bg-yellow-100'>
            <h2 className='bg-yellow-300 h-1/4 text-center justify-center flex items-center text-2xl font-bold rounded-t-2xl'>Education</h2>
            <p className='text-black text-md italic'>We promote awareness and understanding of animal welfare issues.</p>
          </li>
          <li className='w-1/4 h-auto shadow-2xl rounded-2xl flex flex-col gap-7 bg-yellow-100'>
            <h2 className='bg-yellow-300 h-1/4 text-center justify-center flex items-center text-2xl font-bold rounded-t-2xl'>Dedication</h2>
            <p className='text-black text-md italic'>We tirelessly work to improve the lives of animals in our care.</p>
          </li>
          <li className='w-1/4 h-auto shadow-2xl rounded-2xl flex flex-col gap-7 bg-yellow-100'>
            <h2 className='bg-yellow-300 h-1/4 text-center justify-center flex items-center text-2xl font-bold rounded-t-2xl'>Integrity</h2>
            <p className='text-black text-md italic'>We maintain transparency and honesty in all our actions.</p>
          </li>
          <li className='w-1/4 h-auto shadow-2xl rounded-2xl flex flex-col gap-7 bg-yellow-100'>
            <h2 className='bg-yellow-300 h-1/4 text-center justify-center flex items-center text-2xl font-bold rounded-t-2xl'>Community</h2>
            <p className='text-black text-md italic'>We believe in the power of community and collaboration to achieve our goals.</p>
          </li>
        </ul>
      </div>

      <div className='h-[50vh] flex items-center pt-14 flex-col gap-10'>
        <h2 className='text-4xl font-bold text-orange-600'>Brief History</h2>
        <p className='text-center text-2xl text-black'>Our animal shelter was founded in 2024 by a group of passionate animal lovers who saw a pressing need to address the plight of homeless animals in our community. Inspired by the love and joy brought into our lives by our own pets, Ossum and Possum, we set out to create a sanctuary where animals could find refuge and hope. Over the years, our shelter has grown from a small operation to a thriving organization, thanks to the unwavering support of our volunteers and donors.</p>
      </div>

      <div className='bg-blue-100'>
        <h2 className='text-4xl font-bold text-orange-600 text-center'>Team Members/Volunteers</h2>
        <p>Our dedicated team is the heart and soul of our shelter. From our experienced staff to our compassionate volunteers, every member plays a crucial role in ensuring the well-being of the animals. Our team includes:</p>
        <ul className='flex justify-evenly'>
          <li>
            <h1>Founder and Director</h1>
            <p>Ayushman Shukla</p>
          </li>
          <li>
            <h1>Veterinarians</h1>
            <p>George</p>
            <p>George</p>
            <p>George</p>
            <p>George</p>
          </li>
          <li>
            <h1>Animal Caregivers</h1>
            <p>George</p>
            <p>George</p>
            <p>George</p>
            <p>George</p>
          </li>
          <li>
            <h1>Volunteers</h1>
            <p>George</p>
            <p>George</p>
            <p>George</p>
            <p>George</p>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default About
