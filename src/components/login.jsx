import React from 'react';
import { Link } from "react-router-dom";
function ServiceForm() {
  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center  -my-23 md:my-15 p-6">
      <form className="bg-blue-500 text-white p-6 rounded-2xl w-full max-w-lg shadow-xl animate-fade-in">
        <h2 className="text-2xl font-bold mb-2 text-center">Request a Service</h2>
    

        


        
        {/* Full Name */}
        <div className="mb-2">
          <label className="block ">Full Name</label>
          <input
            type="text"
            className="w-full px-4 md:py-2 rounded-md bg-blue-100 text-blue-900 focus:outline-none border-2 border-transparent focus:border-blue-700 transition-all"
            placeholder="Enter your full name"
          />
        </div>

        {/* Email */}
        <div className="mb-2">
          <label className="block ">Email</label>
          <input
            type="email"
            className="w-full px-4 md:py-2 rounded-md bg-blue-100 text-blue-900 focus:outline-none border-2 border-transparent focus:border-blue-700 transition-all"
            placeholder="Enter your email"
          />
        </div>

        {/* Address */}
        <div className="mb-2">
          <label className="block ">Address</label>
          <input
            type="text"
            className="w-full px-4 md:py-2 rounded-md bg-blue-100 text-blue-900 focus:outline-none border-2 border-transparent focus:border-blue-700 transition-all"
            placeholder="Enter your address"
          />
        </div>

        {/* Age */}
        <div className="mb-2">
          <label className="block mb-1">Age</label>
          <input
            type="number"
            className="w-full px-4 md:py-2 rounded-md bg-blue-100 text-blue-900 focus:outline-none border-2 border-transparent focus:border-blue-700 transition-all"
            placeholder="Enter your age"
          />
        </div>

        {/* Location */}
        <div className="mb-4">
          <label className="block ">Location</label>
          <input
            type="text"
            className="w-full px-4 md:py-2 rounded-md bg-blue-100 text-blue-900 focus:outline-none border-2 border-transparent focus:border-blue-700 transition-all"
            placeholder="Enter your location"
          />
        </div>

     

        {/* Submit Button */}
        <button
          type="submit"
          className="w-25 ml-30 bg-white text-blue-600 md:py-2 rounded-md font-semibold hover:bg-blue-200 transition-all duration-300 border border-white hover:border-blue-100"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ServiceForm;
