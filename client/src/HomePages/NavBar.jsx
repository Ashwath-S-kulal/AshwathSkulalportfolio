import React from 'react'
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaHome,
  FaUser,
  FaFileAlt,
  FaImage,
  FaBriefcase,
  FaBars,
  FaEnvelope,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "../Images/profilepicture1.jpg"
import { useState } from "react";
import { Menu, X } from "lucide-react"; // for hamburger icon


export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div >
      <div
        className="h-screen sticky left-0 top-16 w-64 bg-gray-800 text-gray-200  flex-col transition-all duration-300 py-14 min-h-screen hidden md:block"
      >
        <div className="flex flex-col items-center py-6">
          <img
            src={Image}
            alt="Profile"
            className="w-40 rounded-full ring-4 "
          />
        <h3 className="mt-3 text-lg font-semibold">Ashwath S </h3>
        </div>

        <div className="flex justify-center gap-3 mb-6">
          <a href="https://x.com/Ashwath52870943" target='blank' className="bg-gray-800 p-2 rounded-full hover:bg-blue-500">
            <FaXTwitter />
          </a>
          <a href="https://www.facebook.com/ashwath.s.137135/" target='blank' className="bg-gray-800 p-2 rounded-full hover:bg-blue-500">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/ashwath.s.kulal/" target='blank' className="bg-gray-800 p-2 rounded-full hover:bg-blue-500">
            <FaInstagram />
          </a>
          <a href="https://github.com/Ashwath-S-kulal" target='blank' className="bg-gray-800 p-2 rounded-full hover:bg-blue-500">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/ashwath-s-56a5b2334/" target='blank' className="bg-gray-800 p-2 rounded-full hover:bg-blue-500">
            <FaLinkedinIn />
          </a>
        </div>

        <nav className="flex-1">
          <ul className="space-y-4 px-4">
            <li>
              <a href="#home" className="flex items-center gap-3 hover:text-blue-500">
                <FaHome />Home
              </a>
            </li>
            <li>
              <a href="#about" className="flex items-center gap-3 hover:text-blue-500">
                <FaUser />About
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 hover:text-blue-500">
                <FaFileAlt />Resume
              </a>
            </li>
            <li>
              <a href="#skills" className="flex items-center gap-3 hover:text-blue-500">
                <FaImage />Skill
              </a>
            </li>
            <li>
              <a href="#projects" className="flex items-center gap-3 hover:text-blue-500">
                <FaBriefcase />Projects
              </a>
            </li>
            <li>
              <a href="#education" className="flex items-center gap-3 hover:text-blue-500">
                <FaBars /> Education
              </a>
            </li>
            <li>
              <a href="#contact" className="flex items-center gap-3 hover:text-blue-500">
                <FaEnvelope /> Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>


      
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex fixed md:hidden z-50 bg-gray-900 bg-opacity-0 w-full justify-end text-white justify-self-end mr-5 pt-3 pb-2"
        >
          {isOpen ? <X size={28}/> : <Menu size={28} />}
        </button>

      {isOpen && (
        <div className="block md:hidden bg-gray-900 opacity-90 px-4 pb-3 space-y-2 font-semibold  fixed top-26 right-3 z-10 w-fit overflow-hidden">
          
          <ul className="space-y-4 px-4 pt-3  ">
            <li>
              <a href="#home" className="text-sm flex items-center gap-3 hover:text-blue-500 text-white pt-9" onClick={() => setIsOpen(false)}>
                <FaHome />Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-sm flex items-center gap-3 hover:text-blue-500 text-white" onClick={() => setIsOpen(false)}>
                <FaUser />About
              </a>
            </li>
            <li>
              <a href="#" className="text-sm flex items-center gap-3 hover:text-blue-500 text-white" onClick={() => setIsOpen(false)}>
                <FaFileAlt />Resume
              </a>
            </li>
            <li>
              <a href="#skills" className="text-sm flex items-center gap-3 hover:text-blue-500 text-white" onClick={() => setIsOpen(false)}>
                <FaImage />Skill
              </a>
            </li>
            <li> 
              <a href="#projects" className="text-sm flex items-center gap-3 hover:text-blue-500 text-white" onClick={() => setIsOpen(false)}>
                <FaBriefcase />Projects
              </a>
            </li>
            <li>
              <a href="#education" className="text-sm flex items-center gap-3 hover:text-blue-500 text-white" onClick={() => setIsOpen(false)}>
                <FaBars /> Education
              </a>
            </li>
            <li>
              <a href="#contact" className="text-sm flex items-center gap-3 hover:text-blue-500 text-white" onClick={() => setIsOpen(false)}>
                <FaEnvelope /> Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}