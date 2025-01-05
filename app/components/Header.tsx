import React from 'react'

const Header = () => {
  return (
<div className="flex justify-center z-30">
  <nav className="flex gap-4 mt-5 p-5 fixed bg-white/40 backdrop-blur-lg rounded-lg border border-black/20 text-black text-md font-semibold shadow-lg">
    <a href="#home" className="hover:text-[#800080] hover:font-bold">Home</a>
    <a href="#projects" className="hover:text-[#800080] hover:font-bold">Projects</a>
    <a href="#experience" className="hover:text-[#800080] hover:font-bold">Experience</a>
    <a href="#contact" className="hover:text-[#800080] hover:font-bold">Contact</a>
  </nav>
</div>

  )
}

export default Header