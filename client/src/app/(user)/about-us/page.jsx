import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4 text-green-600">About PurreverTogetherSanctuary (P.E.T.S.)</h1>
          <p className="text-lg mb-6">
            PurreverTogetherSanctuary (P.E.T.S.) is a sanctuary dedicated to rescuing, rehabilitating, and rehoming animals in need.
            Founded with love, compassion, and a commitment to the well-being of animals, our mission is to provide a safe and loving environment for all creatures, large and small.
          </p>
          <img
            src="PETS_Sanctuary.png"
            alt="P.E.T.S. Sanctuary"
            className="mx-auto rounded-lg shadow-md"
          />
        </div>

        {/* Motto Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-center mb-4">Our Motto</h2>
          <p className="text-lg italic">
            "A Home for Every Animal, A Heart for Every Rescue."
          </p>
          <img
            src="motto_img.jpg"
            alt="Motto Image"
            className="mx-auto rounded-lg shadow-md mt-6"
          />
        </div>

        {/* Cause Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-center mb-4">Our Cause</h2>
          <p className="text-lg">
            At PurreverTogetherSanctuary (P.E.T.S.), we believe every animal deserves a second chance. Our cause is to provide shelter, care, and love for abandoned, abused, and neglected animals. We work tirelessly to ensure that every animal finds a loving forever home. Through education, community outreach, and partnerships, we aim to raise awareness about animal welfare and the importance of adoption over purchasing.
          </p>
          <img
            src="cause_img.jpg"
            alt="Cause Image"
            className="mx-auto rounded-lg shadow-md mt-6"
          />
        </div>

        {/* History Section */}
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-center mb-4">Our Story</h2>
          <p className="text-lg">
            Established in 2015, PurreverTogetherSanctuary began with a shared vision between our founders, who saw the need for a compassionate haven for abandoned and neglected animals. What started as a small initiative soon grew into a fully-fledged sanctuary thanks to the dedication of our founders, co-founders, volunteers, and members.
            <br />
            Over the years, we have rescued hundreds of animals, providing them with medical care, rehabilitation, and most importantly, love. Our sanctuary has not only become a safe haven for animals but a beacon of hope for the community, offering adoption services, education, and outreach to promote animal welfare.
          </p>
          {/* <img
            src="https://placekitten.com/800/400"
            alt="Story Image"
            className="mx-auto rounded-lg shadow-md mt-6"
          /> */}
        </div>

        {/* Founders Section */}
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-center mb-4">Meet the Founders</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <img
                src="portrait_1.jpg"
                alt="Founder 1"
                className="w-40 h-40 mx-auto rounded-full shadow-md mb-4"
              />
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-lg">Founder & CEO</p>
              <p className="mt-4">
                John Doe, the visionary behind PurreverTogetherSanctuary, has always been passionate about animal welfare. With years of experience in animal care, John turned his dream of creating a safe haven for animals into a reality.
              </p>
            </div>
            <div className="text-center">
              <img
                src="portrait_3.jpg"
                alt="Founder 2"
                className="w-40 h-40 mx-auto rounded-full shadow-md mb-4"
              />
              <h3 className="text-xl font-semibold">Jane Smith</h3>
              <p className="text-lg">Co-Founder & Director of Operations</p>
              <p className="mt-4">
                Jane Smith co-founded PurreverTogetherSanctuary alongside John. She brings over 15 years of experience in animal care and organizational management, ensuring the sanctuary runs smoothly and efficiently.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-center mb-4">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="portrait_4.jpg"
                alt="Volunteer 1"
                className="w-40 h-40 mx-auto rounded-full shadow-md mb-4"
              />
              <h3 className="text-xl font-semibold">Tommy Hill</h3>
              <p className="text-lg">Volunteer Coordinator</p>
            </div>
            <div className="text-center">
              <img
                src="portrait_2.jpg"
                alt="Volunteer 2"
                className="w-40 h-40 mx-auto rounded-full shadow-md mb-4"
              />
              <h3 className="text-xl font-semibold">Emily Watson</h3>
              <p className="text-lg">Animal Care Specialist</p>
            </div>
            <div className="text-center">
              <img
                src="portrait_5.jpg"
                alt="Volunteer 3"
                className="w-40 h-40 mx-auto rounded-full shadow-md mb-4"
              />
              <h3 className="text-xl font-semibold">Oliver Chang</h3>
              <p className="text-lg">Adoption Specialist</p>
            </div>
          </div>
        </div>

        {/* Awards Section */}
        <div className="mb-10">
          <h2 className="text-3xl font-semibold text-center mb-4">Awards & Achievements</h2>
          <p className="text-lg text-center">
            PurreverTogetherSanctuary has been recognized for its outstanding contribution to animal welfare. We are honored to have received multiple awards for our efforts to make the world a better place for animals.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="text-center">
              <img
                src="certificate1.png"
                alt="Award 1"
                className="w-40 h-40 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Best Animal Rescue Organization</h3>
              <p className="text-lg">Awarded in 2024 by Animal Welfare Council</p>
            </div>
            <div className="text-center">
              <img
                src="certificate2.png"
                alt="Award 2"
                className="w-40 h-40 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Outstanding Volunteer Program</h3>
              <p className="text-lg">Awarded in 2025 by Pet Lovers Association</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
