import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen w-full bg-white'>
      
      {/* upper div */}
      <div className='z-10 h-2/5 w-full border border-red-500 mt-14'>

      </div>
      {/* upper div end */}


      {/* gallery */}
      <div className='flex justify-center items-center h-screen w-full gap-7'>
        <div className='h-3/5 w-[9%] hover:h-4/5 hover:w-[18%] hover:ease-linear'>
          <img
            className='object-cover h-full w-full'
            src="cat.jpg" alt="" />
        </div>

        <div className='h-3/5 w-[9%] hover:h-4/5 hover:w-[18%] hover:ease-linear'>
          <img
            className='object-cover h-full w-full'
            src="cow.jpg" alt="" />
        </div>

        <div className='h-3/5 w-[9%] hover:h-4/5 hover:w-[18%] hover:ease-linear'>
          <img
            className='object-cover h-full w-full'
            src="parrot.jpg" alt="" />
        </div>

        <div className='h-3/5 w-[9%] hover:h-4/5 hover:w-[18%] hover:ease-linear'>
          <img
            className='object-cover h-full w-full'
            src="dog.jpg" alt="" />
        </div>

        <div className='h-3/5 w-[9%] hover:h-4/5 hover:w-[18%] hover:ease-linear'>
          <img
            className='object-cover h-full w-full'
            src="cat (2).jpg" alt="" />
        </div>

        <div className='h-3/5 w-[9%] hover:h-4/5 hover:w-[18%] hover:ease-linear'>
          <img
            className='object-cover h-full w-full'
            src="horse.jpg" alt="" />
        </div>

        <div className='h-3/5 w-[9%] hover:h-4/5 hover:w-[18%] hover:ease-linear'>
          <img
            className='object-cover h-full w-full'
            src="sparrow.jpg" alt="" />
        </div>

        <div className='h-3/5 w-[9%] hover:h-4/5 hover:w-[18%] hover:ease-linear'>
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
