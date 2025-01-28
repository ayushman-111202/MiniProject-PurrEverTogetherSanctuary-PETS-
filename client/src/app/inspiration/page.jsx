import React from 'react';

const Inspiration = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className="flex h-full items-center justify-center bg-blue-100">
        <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-10 md:px-10">
          <div>
            <h1 className="mb-2 text-3xl font-bold text-gray-600">
              <span className="text-green-600">Hi,</span> I'm OSSUM the Bunny!
            </h1>
            <p className="mb-6 text-black">
              {/* The journey of founding an animal shelter often begins with a simple yet profound inspiration. For me, it was Ossum and Possum, my adorable pet bunny couple, who ignited a passion that would soon transform the lives of countless animals. Ossum and Possum, with their playful antics and boundless affection, were more than just pets—they were family. Their companionship opened my eyes to the incredible bonds that can form between humans and animals.

              As I watched them thrive in a safe and loving environment, I realized that many animals were not as fortunate. Stray, abandoned, and neglected animals all deserved a chance to find their own HOME — a place where they could feel loved and protected. This realization led me to take the leap and start an animal shelter, a haven for creatures in need, inspired by the pure joy and unconditional love I experienced through my bunnies. */}
              One half of the dynamic bunny duo with my best buddy, Possum. Our human has always pampered us with love and care, making sure we have everything we need to hop around happily. One day, while nibbling on some fresh veggies and enjoying our cozy home, I noticed our human looking out the window with a thoughtful expression.
                <br /><br />
              I could sense that they were thinking about something important. And you know what? It turns out, they were dreaming up a way to help other animals just like us. Inspired by the happiness that Possum and I bring them every day, they decided to start an animal shelter. This place wouldn't just be any shelter; it would be a sanctuary full of love, kindness, and second chances.
                <br /><br />
              Our human wanted to make sure that every animal out there could find a safe place to call home, just like we did. And so, with a heart full of compassion and a dream inspired by two little bunnies, the shelter was born. Now, countless animals get to experience the same joy and warmth that we do every single day.
            </p>
            <div className="flex justify-center space-x-5">
              <button className="flex w-full items-center justify-center gap-1 rounded-2xl bg-yellow-300 p-5 py-3 font-semibold text-white hover:text-yellow-300 hover:bg-white">
                Follow
              </button>
              <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white p-5 py-3 font-semibold">
                Contribute your own BLOG!
              </button>
            </div>
          </div>
          <div className='h-4/5 rounded-3xl overflow-hidden '>
            <img
              src="osm2.jpg"
              alt="Bunny Image"
              className="object-top"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Inspiration;