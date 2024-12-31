'use client'
import React, { useState } from "react";

const DonationPage = () => {
  const [donationAmount, setDonationAmount] = useState("");
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [donationMessage, setDonationMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your donation submission logic here
    alert(`Thank you for your generous donation of $${donationAmount}!`);
  };

  return (
    <div className="h-[90%] w-full object-contain"
      style={{
        backgroundImage: 'url("footprints.webp")',
        backgroundPosition: 'top'
      }}>
      <div className="max-w-3xl mx-auto p-6 bg-orange-300 rounded-lg shadow-lg my-5">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Support Our Animal Shelter</h1>
        <p className="text-lg text-center text-gray-600 mb-8">
          Your donation helps us provide food, shelter, and medical care for abandoned and rescued animals. Every contribution counts!
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label htmlFor="donorName" className="text-lg text-gray-700">Your Name</label>
            <input
              type="text"
              id="donorName"
              value={donorName}
              onChange={(e) => setDonorName(e.target.value)}
              placeholder="Enter your name"
              required
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="donorEmail" className="text-lg text-gray-700">Your Email</label>
            <input
              type="email"
              id="donorEmail"
              value={donorEmail}
              onChange={(e) => setDonorEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="donationAmount" className="text-lg text-gray-700">Donation Amount</label>
            <input
              type="number"
              id="donationAmount"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
              placeholder="Enter donation amount"
              required
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="donationMessage" className="text-lg text-gray-700">Message (Optional)</label>
            <textarea
              id="donationMessage"
              value={donationMessage}
              onChange={(e) => setDonationMessage(e.target.value)}
              placeholder="Leave a message for the animals (optional)"
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-green-500 text-white text-lg font-semibold rounded-md hover:bg-green-600 transition duration-300"
          >
            Donate Now
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600 text-lg">
            Your support makes a difference. Thank you for helping us make the world a better place for animals!
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonationPage;

// import React from 'react'

// const Donate = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default Donate
