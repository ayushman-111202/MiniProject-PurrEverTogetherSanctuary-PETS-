import { IconBrandFacebook, IconBrandGithub, IconBrandInstagram, IconBrandLinkedin, IconBrandX } from '@tabler/icons-react';
import React from 'react';

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center h-full w-full bg-white dark:bg-gray-900'>

      {/* upper div */}
      <div className='z-10 h-auto w-full'>
        <div className='w-full h-full text-center pt-10'
          style={{ backgroundImage: 'url("banner.png")', backgroundPosition: 'bottom' }}>

          <h1 className='text-4xl md:text-6xl lg:text-7xl text-green-500 dark:text-green-300 font-bold'>#EmpathyInAction</h1>
          <p className='text-xl md:text-2xl lg:text-3xl text-white dark:text-gray-200 mt-2'>Compassionate care for the forgotten and neglected</p>

          <div className='mt-5 flex flex-col lg:flex-row justify-between pb-4'>

            <ul className='flex justify-center lg:justify-end gap-5 md:gap-8 lg:gap-10 px-5 md:px-8 lg:px-10 text-slate-400 dark:text-slate-300'>
              <li>
                <a className='hover:text-pink-300 dark:hover:text-pink-500 transition-colors duration-300' target='_blank' href="#">
                  Virtual First-Aid
                </a>
              </li>
              <li>
                <a className='hover:text-pink-300 dark:hover:text-pink-500 transition-colors duration-300' target='_blank' href="#">
                  Contact
                </a>
              </li>
              <li>
                <a className='hover:text-pink-300 dark:hover:text-pink-500 transition-colors duration-300' target='_blank' href="#">
                  E-mail
                </a>
              </li>
            </ul>

            <ul className='flex justify-center lg:justify-start gap-5 md:gap-8 lg:gap-10 px-5 md:px-8 lg:px-10 text-slate-400 dark:text-slate-300 mt-5 lg:mt-0'>
              <li>
                <a href="https://www.linkedin.com/in/ayushman-111202-" target='_blank' className='hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300'>
                  <IconBrandLinkedin size={35} />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/ayushman_111202_" target='_blank' className='hover:text-pink-500 dark:hover:text-pink-400 transition-colors duration-300'>
                  <IconBrandInstagram size={35} />
                </a>
              </li>
              <li>
                <a href="https://x.com/Ayushman_1311" target='_blank' className='hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300'>
                  <IconBrandX size={35} />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/ayushman.shukla.35977897" target='_blank' className='hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300'>
                  <IconBrandFacebook size={35} />
                </a>
              </li>
              <li>
                <a href="https://www.github.com/ayushman-111202" target='_blank' className='hover:text-gray-500 dark:hover:text-gray-400 transition-colors duration-300'>
                  <IconBrandGithub size={35} />
                </a>
              </li>
            </ul>

          </div>

        </div>
      </div>
      {/* upper div end */}

      {/* gallery */}
      <div className='flex flex-wrap h-[60vh] justify-center items-center w-full gap-4 md:gap-6 lg:gap-7'>

        <div className='h-3/5 w-[20%] sm:w-[15%] md:w-[12%] lg:w-[9%] hover:h-4/5 hover:w-[25%] sm:hover:w-[20%] md:hover:w-[18%] hover:ease-linear blur-sm hover:blur-none transition-all duration-300'>
          <img className='object-cover h-full w-full' src="cat.jpg" alt="Cat" />
        </div>

        <div className='h-3/5 w-[20%] sm:w-[15%] md:w-[12%] lg:w-[9%] hover:h-4/5 hover:w-[25%] sm:hover:w-[20%] md:hover:w-[18%] hover:ease-linear blur-sm hover:blur-none transition-all duration-300'>
          <img className='object-cover h-full w-full' src="cow.jpg" alt="Cow" />
        </div>

        <div className='h-3/5 w-[20%] sm:w-[15%] md:w-[12%] lg:w-[9%] hover:h-4/5 hover:w-[25%] sm:hover:w-[20%] md:hover:w-[18%] hover:ease-linear blur-sm hover:blur-none transition-all duration-300'>
          <img className='object-cover h-full w-full' src="parrot.jpg" alt="Parrot" />
        </div>

        <div className='h-3/5 w-[20%] sm:w-[15%] md:w-[12%] lg:w-[9%] hover:h-4/5 hover:w-[25%] sm:hover:w-[20%] md:hover:w-[18%] hover:ease-linear blur-sm hover:blur-none transition-all duration-300'>
          <img className='object-cover h-full w-full' src="dog.jpg" alt="Dog" />
        </div>

        <div className='h-3/5 w-[20%] sm:w-[15%] md:w-[12%] lg:w-[9%] hover:h-4/5 hover:w-[25%] sm:hover:w-[20%] md:hover:w-[18%] hover:ease-linear blur-sm hover:blur-none transition-all duration-300'>
          <img className='object-cover h-full w-full' src="cat (2).jpg" alt="Cat 2" />
        </div>

        <div className='h-3/5 w-[20%] sm:w-[15%] md:w-[12%] lg:w-[9%] hover:h-4/5 hover:w-[25%] sm:hover:w-[20%] md:hover:w-[18%] hover:ease-linear blur-sm hover:blur-none transition-all duration-300'>
          <img className='object-cover h-full w-full' src="horse.jpg" alt="Horse" />
        </div>

        <div className='h-3/5 w-[20%] sm:w-[15%] md:w-[12%] lg:w-[9%] hover:h-4/5 hover:w-[25%] sm:hover:w-[20%] md:hover:w-[18%] hover:ease-linear blur-sm hover:blur-none transition-all duration-300'>
          <img className='object-cover h-full w-full' src="sparrow.jpg" alt="Sparrow" />
        </div>

        <div className='h-3/5 w-[20%] sm:w-[15%] md:w-[12%] lg:w-[9%] hover:h-4/5 hover:w-[25%] sm:hover:w-[20%] md:hover:w-[18%] hover:ease-linear blur-sm hover:blur-none transition-all duration-300'>
          <img className='object-cover h-full w-full' src="bunnies.jpg" alt="Bunnies" />
        </div>
      </div>
      {/* gallery end */}

      {/* adopt section */}
      <div className='flex w-full h-[80vh] bg-gradient-to-b from-green-400 to-green-600 justify-center items-center dark:from-gray-900 dark:to-gray-900'>

        <div className='rounded-full w-1/3 h-4/5 m-10 flex justify-center items-center overflow-hidden bg-contain bg-no-repeat bg-yellow-300 dark:bg-yellow-800'
          style={{
            backgroundImage: 'url("adopt-bg.png")',
            backgroundPosition: 'top'
          }}>

          <h1 className='text-7xl font-bold text-white'>
            Adopt
          </h1>
        </div>

        <div className='w-2/3 p-20'>
          <h1 className='font-bold text-3xl text-yellow-300 dark:text-yellow-500 my-5'>Adopt Action: A Second Chance at Life</h1>
          <p className='text-2xl text-white dark:text-gray-200'>
            Take action to Adapt, every animal's story matters. Our mission is to provide loving homes for stray, abandoned, and neglected animals and you can help us in doing that. <br /><br /> At our shelter, we believe that every critter deserves a safe, caring environment to thrive. By adopting from us, you're not just bringing home a pet; you're giving a second chance at life to a furry friend in need. <br /><br />Each adoption saves a life and opens a space for another animal to find refuge. Join us in making a difference—one adoption at a time. Together, we can create a compassionate community for all animals.
          </p>
        </div>

      </div>
      {/* adopt section end*/}

      {/* feed-in-need section */}
      <div className='flex w-full h-[80vh] bg-gradient-to-t from-orange-300 to-orange-500 justify-center items-center dark:from-gray-800 dark:to-gray-900'>

        <div className='w-2/3 p-20'>
          <h1 className='font-bold text-3xl text-green-300 dark:text-green-500 my-5'>Feed a Friend: Make a Difference</h1>
          <p className='text-2xl text-white dark:text-gray-100'>
            Welcome to our Feeding Donation Action, where your generosity nourishes the lives of countless animals in need. Our shelter relies on the kindness of supporters like you to provide nutritious meals for stray, abandoned, and neglected critters. <br /><br /> Every donation, no matter how small, helps us ensure that each furry friend gets the food they need to stay healthy and happy. By contributing to our feeding program, you're not just filling bowls—you're filling hearts with hope and love. Join us in our mission to create a compassionate community where every animal is cared for and cherished.
          </p>
        </div>

        {/* Image background adjustment */}
        <div className='rounded-full w-1/3 h-4/5 m-10 flex justify-center items-center overflow-hidden bg-contain bg-no-repeat bg-opacity-60 dark:bg-green-800'
          style={{
            backgroundImage: 'url("feed-in-need-bg.webp")',
            backgroundPosition: 'center'
          }}>

          <h1 className='text-7xl font-bold text-white'>
            Feed In Need
          </h1>
        </div>

      </div>
      {/* feed-in-need section end*/}


      {/* volunteer section */}
      <div className='w-full h-[80vh] bg-gradient-to-b from-green-500 to-green-700 flex justify-center items-center dark:from-gray-800 dark:to-gray-900'>

        <div className='rounded-full w-1/3 h-4/5 m-10 flex justify-center items-center overflow-hidden bg-contain bg-no-repeat bg-green-200 dark:bg-yellow-800'
          style={{
            backgroundImage: 'url("volunteer-bg.png")',
            backgroundPosition: 'center'
          }}>

          <h1 className='text-7xl font-bold text-white'>
            Volunteer
          </h1>
        </div>

        <div className='w-2/3 p-20'>
          <h1 className='font-bold text-3xl text-yellow-300 dark:text-yellow-500 my-5'>Volunteer with Us: Be a Hero for Animals</h1>
          <p className='text-2xl text-white dark:text-gray-200'>
            At our shelter, every helping hand makes a world of difference. Volunteering with us means providing love and care to animals who need it the most. Whether it's walking dogs, cleaning habitats, or simply spending time with our furry friends, your efforts bring hope and happiness to their lives. <br /><br /> Our volunteers are the backbone of our mission, and we welcome people of all ages and backgrounds to join our compassionate community. By dedicating your time and energy, you're not only enriching the lives of animals but also experiencing the joy of making a real impact. Become a hero for animals today!
          </p>
        </div>

      </div>
      {/* volunteer section end*/}


    </div >
  );
}

export default Home;
