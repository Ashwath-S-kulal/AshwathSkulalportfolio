import Gif from "../Images/gif.gif";
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedinIn
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "../Images/profilepicture1.jpg"
import { FaWhatsapp } from 'react-icons/fa';

export default function App() {
  return (
    <div className="flex h-[500px] md:h-screen px-5 md:p-5 pt-10">
      <div
        className="flex-1 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://png.pngtree.com/thumb_back/fh260/background/20211031/pngtree-abstract-bg-image_914283.png')",
        }}
      >

        <div className="bg-black bg-opacity-60 h-full  justify-center md:h-auto p-5 sm:px-2 md:p-10 sm:rounded-none md:rounded-xl text-center max-w-3xl">
          <div className="block md:hidden bg-black py-3 rounded-3xl bg-opacity-25 mb-2">
            <div className="flex flex-col items-center ">
              <img
                src={Image}
                alt="Profile"
                className="w-28 rounded-full ring-4 "
              />
              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-blue-400 mb-4">
            Ashwath S
          </h2>
            </div>

            <div className="flex justify-center gap-3 ">
              <a href="https://x.com/Ashwath52870943" target='blank' className="text-xs text-white p-1 rounded-full  hover:bg-blue-500">
                <FaXTwitter />
              </a>
              <a href="https://www.facebook.com/ashwath.s.137135/" target='blank' className="text-xs text-white p-1 rounded-full  hover:bg-blue-500">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/ashwath.s.kulal/" target='blank' className="text-xs text-white p-1 rounded-full  hover:bg-blue-500">
                <FaInstagram />
              </a>
              <a href="https://github.com/Ashwath-S-kulal" target='blank' className="text-xs text-white p-1 rounded-full  hover:bg-blue-500">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/ashwath-s-56a5b2334/" target='blank' className="text-xs text-white p-1 rounded-full  hover:bg-blue-500">
                <FaLinkedinIn />
              </a>
              <a href="https://wa.me/918431294514" target='blank' className="text-xs text-white p-1 rounded-full  hover:bg-blue-500">
                <FaWhatsapp />
              </a>
            </div>
          </div>
          <img
            src={Gif}
            alt="gif"
            className="w-40 sm:w-80 md:w-96 lg:w-[500px] mx-auto mb-4"
          />

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-2">
            Welcome to my Website
          </h1>
          


          <p className="text-sm sm:text-base md:text-lg text-gray-400  mt-4">
            Scroll down to know more about me, my skills, and the projects I’ve built.
          
     
            Keep scrolling to explore my journey and connect with me.
          </p>
        </div>
      </div>
    </div>
  );
}
