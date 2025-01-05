import React from 'react'

const Contact = () => {
  return (
    <>
    <div id="contact" className="relative w-full min-h-screen pb-7 bg-[#111a22] overflow-hidden text-white z-0 px-10 sm:px-20 md:px-40 lg:px-56 xl:px-64 2xl:px-80">
      <div className="flex flex-wrap flex-col items-center justify-center">
        <div className="dot4"></div>
        <h1 className="text-3xl font-bold">Contact</h1>
        <div className="w-16 h-1 mt-1 bg-white group-hover:w-28 transition-all duration-500 ease-in"></div>
      </div>
      <div className="flex flex-wrap gap-5 mt-10 border border-white rounded-lg p-5">
  <form className="flex flex-col w-full space-y-5">
    <div className="flex flex-col mx-2 gap-2">
      <label htmlFor="name" className="text-lg font-semibold text-white">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Enter your name"
        className="p-3 rounded-lg bg-[#2d3748] text-white border-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
    </div>

    <div className="flex flex-col mx-2 gap-2">
      <label htmlFor="email" className="text-lg font-semibold text-white">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
        className="p-3 rounded-lg bg-[#2d3748] text-white border-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
    </div>

    <div className="flex flex-col mx-2 gap-2">
      <label htmlFor="mobile" className="text-lg font-semibold text-white">Mobile Number</label>
      <input
        type="tel"
        id="mobile"
        name="mobile"
        placeholder="Enter your mobile number"
        className="p-3 rounded-lg bg-[#2d3748] text-white border-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
    </div>

    <div className="flex flex-col mx-2 gap-2">
      <label htmlFor="message" className="text-lg font-semibold text-white">Message</label>
      <textarea
        id="message"
        name="message"
        rows={5}
        placeholder="Enter your message"
        className="p-3 rounded-lg bg-[#2d3748] text-white border-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      ></textarea>
    </div>

    <div className="flex justify-center">
      <button
        type="submit"
        className="bg-blue-500 text-white font-semibold py-3 px-10 rounded-lg transition-all duration-300 hover:bg-blue-600 focus:outline-none"
      >
        Submit
      </button>
    </div>
  </form>
</div>

      </div>
      </>
  )
}

export default Contact