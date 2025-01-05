import React from 'react'

const Experience = () => {
  return (
    <>
      <div id="experience" className="relative w-full min-h-screen pb-7 bg-[#111a22] overflow-hidden text-white z-0 px-10 sm:px-20 md:px-40 lg:px-56 xl:px-64 2xl:px-80">
        <div className="flex flex-wrap flex-col items-center justify-center pt-5">
          <div className="dot3"></div>
          <h1 className="text-3xl font-bold">Experience</h1>
          <div className="w-16 h-1 mt-1 bg-white group-hover:w-28 transition-all duration-500 ease-in"></div>
        </div>
        <div className="flex flex-wrap gap-5 justify-center mt-10">
          <div className="w-full text-white text-2xl font-semibold border border-white rounded-lg p-5">
            <h2>Frontend Web Developer</h2>
            <div className="w-16 h-1 mb-1 bg-white group-hover:w-28 transition-all duration-500 ease-in"></div>
            <p className="text-gray-400">October 2024 - Present</p>
            <p className="text-gray-400">Farm Fresh Foods</p>
          </div>
          <div className="w-full text-white text-2xl font-semibold border border-white rounded-lg p-5">
            <h2>Backend Developer</h2>
            <div className="w-16 h-1 mb-1 bg-white group-hover:w-28 transition-all duration-500 ease-in"></div>
            <p className="text-gray-400">June 2024 - October 2024</p>
            <p className="text-gray-400">Webinvolve</p>
          </div>
          <div className="w-full text-white text-2xl font-semibold border border-white rounded-lg p-5">
            <h2>Freelance Developer</h2>
            <div className="w-16 h-1 mb-1 bg-white group-hover:w-28 transition-all duration-500 ease-in"></div>
            <p className="text-gray-400">Present</p>
            <p className="text-gray-400">Projects Based</p>
          </div>
          </div>
        </div>
    </>
  )
}

export default Experience