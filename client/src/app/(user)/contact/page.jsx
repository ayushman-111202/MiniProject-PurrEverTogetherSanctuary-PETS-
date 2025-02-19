import React from 'react';

const Contact = () => {
  return (
    <div className="bg-orange-200 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Contact Form Section */}
      <section className="py-16 px-6 sm:px-8 lg:px-16">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-gray-900 dark:text-white mb-8">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            We love hearing from our community. If you have any questions or feedback, please don't hesitate to reach out.
          </p>
          <form className="max-w-lg mx-auto space-y-6">
            {/* Name */}
            <div className="relative">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white text-lg placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
                placeholder="Your Name"
              />
            </div>
            {/* Email */}
            <div className="relative">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white text-lg placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
                placeholder="Your Email"
              />
            </div>
            {/* Subject */}
            <div className="relative">
              <label htmlFor="subject" className="sr-only">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white text-lg placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
                placeholder="Subject"
              />
            </div>
            {/* Message */}
            <div className="relative">
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                rows="6"
                className="w-full p-4 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white text-lg placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-200"
                placeholder="Your Message"
              />
            </div>
            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-600 focus:outline-none transition duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Shelter Info Section */}
      <section className="py-16 px-6 sm:px-8 lg:px-16 bg-gray-200 dark:bg-gray-800">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-gray-900 dark:text-white mb-8">
            Our Shelter
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            Visit us at our shelter or contact us for more details:
          </p>
          <address className="text-lg text-gray-900 dark:text-gray-100 mb-8">
            <p>123 Pet Lane, Lucknow, India</p>
            <p>Phone: +91 xxxxxxxxxx</p>
            <p>Email: purrevertogether@pets.com</p>
          </address>
          {/* Map (Google Map Embed) */}
          <div className="overflow-hidden rounded-lg shadow-lg">
            <iframe
              className="w-full h-96"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3174.259328906508!2d-122.08424948506322!3d37.422065779822545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbbd3483f5c59%3A0x9c2839ff80ccf5cc!2sGoogleplex!5e0!3m2!1sen!2sus!4v1674413324633!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-screen-xl mx-auto text-center">
          <p>&copy; 2025 PurrEverTogetherSanctuary. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
