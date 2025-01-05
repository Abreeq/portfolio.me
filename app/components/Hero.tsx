import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div id="home" className="relative w-full min-h-screen pb-7 bg-[#111a22] -z-0 overflow-hidden text-white px-10 sm:px-20 md:px-40 lg:px-56 xl:px-64 2xl:px-80">
      <div className="flex flex-wrap flex-col items-center justify-center pt-28 group"> {/* Added group here */}
        <div className="dot"></div>
        <Image
          src="/images/Abreeq.jpg"
          className="rounded-xl"
          width={200}
          height={200}
          objectFit="cover"
          alt="hero"
        />
        <div>
          <h1 className="text-3xl font-bold">Mohammad Abreeq</h1>
          <h2 className="text-xl font-semibold text-gray-400">
            Computer Science Student
          </h2>
        </div>
        <a
          href="https://instagram.com/abreeq__"
          target="_blank"
          className="bg-white text-black px-4 py-2 rounded-full mt-3 text-lg font-semibold hover:bg-black hover:text-white transition-all duration-500 ease-in"
        >
          Follow
        </a>
      </div>

      <div className="flex flex-col pt-7 group"> {/* Keep the group here as well */}
        <h1 className="text-2xl font-bold">About Me</h1>
        <div className="w-16 h-1 bg-white group-hover:w-28 transition-all duration-500 ease-in"></div>
        <h2 className="text-justify pt-2 text-md font-semibold text-gray-400">
          I'm <span className="text-lg font-bold text-white">Mohammad Abreeq,</span> a Computer Science student at
          University of Kashmir. I'm a passionate learner, and a dedicated
          full-stack developer passionate about building user-friendly and
          efficient digital solutions. Skilled in technologies like HTML, CSS,
          JavaScript, React, Node.js, Nextjs, MySql and MongoDB, I enjoy creating dynamic web
          applications and solving challenging problems. With a strong
          foundation in programming and continuous learning, I strive to stay
          updated with emerging technologies. Let’s connect and work on
          innovative projects that make a difference in the digital world!
        </h2>
        <div className="flex justify-center align-middle pt-7">
          <div className="w-36 h-1 bg-white group-hover:w-44 transition-all duration-500 ease-in neon-effect"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
