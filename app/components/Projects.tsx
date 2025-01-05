import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <>
      <div id="projects" className="relative w-full min-h-screen pb-7 bg-[#111a22]  overflow-hidden text-white z-0 px-10 sm:px-20 md:px-40 lg:px-56 xl:px-64 2xl:px-80">
        <div className="flex flex-wrap flex-col items-center justify-center pt-16">
          <div className="dot2"></div>
          <h1 className="text-3xl font-bold">Projects</h1>
          <div className="w-16 h-1 mt-1 bg-white group-hover:w-28 transition-all duration-500 ease-in"></div>
        </div>
        <div className="flex flex-wrap gap-3 justify-center mt-7 ">
          <div className="w-64 h-96 text-white text-2xl font-semibold border border-white rounded-lg p-5">
            <h2>Farm Fresh Foods</h2>
            <div className="w-16 h-1 mb-1 bg-white group-hover:w-28 transition-all duration-500 ease-in"></div>
            <Image
              src="/images/site1.jpeg"
              className="rounded-xl mb-2 max-h-64 hover:blur-none"
              width={400}
              height={300}
              objectFit="contain"
              alt="hero"
            />
            <div className="flex justify-center items-center">
            <a
              href="https://www.farmfreshfoods.in/"
              target="_blank"
              className="bg-white text-black px-4 py-2 rounded-full text-lg font-semibold hover:bg-black hover:text-white transition-all duration-500 ease-in"
            >
              {" "}
              Watch Live{" "}
            </a>
            </div>
          </div>
          <div className="w-64 h-96 text-white text-2xl font-semibold border border-white rounded-lg p-5">
            <h2>Health Scan</h2>
            <div className="w-16 h-1 mb-1 bg-white group-hover:w-28 transition-all duration-500 ease-in"></div>
            <Image
              src="/images/site2.jpeg"
              className="rounded-xl mb-2 max-h-64 hover:blur-none"
              width={400}
              height={400}
              objectFit="fill"
              alt="hero"
            />
            <div className="flex justify-center items-center">
            <a
              href="http://healthscan.zya.me/"
              target="_blank"
              className="bg-white text-black px-4 py-2 rounded-full text-lg font-semibold hover:bg-black hover:text-white transition-all duration-500 ease-in"
            >
              {" "}
              Watch Live{" "}
            </a>
            </div>
          </div>
          <div className="w-64 h-96 text-white text-2xl font-semibold border border-white rounded-lg p-5">
            <h2>Coming Soon</h2>
            <div className="w-16 h-1 mb-7 bg-white group-hover:w-28 transition-all duration-500 ease-in"></div>
            <Image
              src="/images/site3.png"
              className="rounded-xl mb-7 blur-sm max-w-52"
              width={400}
              height={400}
              objectFit="contain"
              alt="hero"
            />
            <div className="flex justify-center items-center">
            <a
              href="#"
              target="_blank"
              className="bg-white text-black px-4 py-2 rounded-full text-lg font-semibold hover:bg-black hover:text-white transition-all duration-500 ease-in"
            >
              {" "}
              Watch Live{" "}
            </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
