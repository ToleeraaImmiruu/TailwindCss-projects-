import React from 'react'
import { TvIcon, UsersIcon, BookOpenIcon } from '@heroicons/react/24/outline'
import { ExclamationCircleIcon } from '@heroicons/react/24/solid'

function Porpuse() {
  const features = [
    {
      icon: <BookOpenIcon className="w-12 h-12 text-blue-600" />,
      title: "Physical Campus",
      desc: "Worship with us in person at one of our physical campuses.",
    },
    {
      icon: <TvIcon className="w-12 h-12 text-blue-600" />,
      title: "Live Streams",
      desc: "eFam is our online community who stream church from wherever they are.",
    },
    {
      icon: <UsersIcon className="w-12 h-12 text-blue-600" />,
      title: "Watch Party",
      desc: "Watch Parties are groups of eFam that stream the worship experience together.",
    },
    {
      icon: <ExclamationCircleIcon className="w-12 h-12 text-yellow-600" />,
      title: "Pop-Up",
      desc: "A Pop-Up is where we bring church to different cities across the nation.",
    },
  ];

  return (
    <div id="services" className="scroll-mt-40 mt-15">
    <section  className=" w-full bg-gray-50 py-12 px-4 md:px-8">
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold">Find the right experience for you.</h1>
        <h4 className="text-lg text-gray-700 mt-3">
          No matter where you are, online or in person, become a part of all God is doing.
        </h4>
      </div>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-6 h-[320px] w-full shadow-md hover:shadow-xl transition duration-300 text-center"
          >
            <div className="flex justify-center mb-4">{f.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">{f.title}</h3>
            <p className="text-gray-600 mt-3 text-sm">{f.desc}</p>

            <button
              className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-white hover:text-blue-600 hover:border hover:border-blue-600 transition duration-300"
            >
              See More
            </button>
          </div>
        ))}
      </div>
      </section>
      </div>
  );
}

export default Porpuse;
