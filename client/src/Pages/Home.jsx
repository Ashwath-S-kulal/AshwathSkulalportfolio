import React from 'react';
import imageAshwath from '../Images/dev-environment.jpg';
import { Link } from 'react-router-dom';
import profilePicture from '../Images/profilepicture1.jpg';
import { FaLinkedin, FaTwitter, FaFacebook, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import Image from "../Images/123.png"

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-full font-sans">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        <aside className="bg-gray-800  text-center md:col-span-1 max-h-fit">
          <div className='py-6'>
            <img
              src={profilePicture}
              alt="Ashwath S"
              className="w-36 rounded-full mx-auto mb-4 border-2 border-yellow-400"
            />
            <h2 className="text-xl font-bold">Ashwath S</h2>
            <p className="text-gray-400">Computer Science Engineer</p>
          </div>
          <hr className="border-t border-gray-600 " />

          <div className='bg-gray-800 p-4 h-72 overflow-y-auto' style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }} >

            <div className="mt-1 px-10">
              <h3 className="font-bold text-lg">Skills</h3>
              <hr className="border-t border-gray-600 mb-3 mt-0" />

              {/* Skills List */}
              {[
                { name: "HTML", level: "90%" },
                { name: "CSS", level: "95%" },
                { name: "JavaScript", level: "60%" },
                { name: "React JS", level: "65%" },
                { name: "C", level: "70%" },
                { name: "Java", level: "50%" },
                { name: "DBMS", level: "65%" }
              ].map((skill, index) => (
                <div key={index} className="flex items-center gap-2 mb-2">
                  <p className="text-sm w-24 text-left">{skill.name}</p>
                  <div className="w-40 bg-gray-700 h-2 rounded">
                    <div
                      className="bg-yellow-400 h-2 rounded"
                      style={{ width: skill.level }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>



            <div className="mt-6 text-left space-y-2 px-10">
              <h3 className="font-bold text-lg text-center">Address</h3>
              <hr className="border-t border-gray-600 mb-3 mt-0 " />
              <p><strong>Residence:</strong> India</p>
              <p><strong>City:</strong> Kundapura</p>
            </div>

            <div className="mt-6 px-10 ">
              <h3 className="font-bold text-lg text-center">Languages</h3>
              <hr className="border-t border-gray-600 mb-3 mt-0 " />
              <div className="flex justify-start gap-3">
                <span>Kannada :</span><span>100%</span>
              </div>
              <div className="flex justify-start gap-3">
                <span>English :</span><span>80%</span>
              </div>
              <div className="flex justify-start gap-3">
                <span>Hindi :</span><span>70%</span>
              </div>
            </div>
          </div>

          <hr className="border-t border-gray-600" />
          <div className="py-5 flex justify-around text-xl text-gray-400 px-4">
            <Link to="https://www.linkedin.com/in/ashwath-s-56a5b2334/" target='_blank'><FaLinkedin /></Link>
            <Link to="https://www.facebook.com/ashwath.s.137135/" target='_blank'> <FaFacebook /></Link>
            <Link to="https://github.com/Ashwath-S-kulal" target='_blank'><FaGithub /></Link>
            <Link to="https://x.com/Ashwath52870943" target='_blank'><FaXTwitter /></Link>
            <Link to="https://www.instagram.com/ashwath.s.kulal/" target='_blank'><FaInstagram /></Link>
            <Link to="https://wa.me/918431294514" target='_blank'><FaWhatsapp /></Link>
          </div>
        </aside>

        <main className="md:col-span-2">

          <section className="bg-gray-800 p-6 flex flex-col md:flex-row justify-center sm:gap-0 md:gap-20 text-center mb-5">
            <div>
              <img src={Image} alt="Img" className="w-72 block mx-auto" />
            </div>
            <div className="flex flex-col gap-5 justify-center items-center mt-6 md:mt-0">
              <h2 className="text-white text-5xl font-bold">I'm Ashwath S</h2>
              <p className="text-gray-300">Computer Science Engineer</p>
              <div className="flex gap-6 md:gap-4">
                <a href='mailto:ashwathkulal2004@gmail.com' target='blank'>
                  <button className="px-10 py-2 ring-2 sm:min-w-32 md:min-w-40 ring-blue-900 rounded-lg hover:bg-yellow-500 text-sm"> Email </button>
                </a>
                <a href="https://ashwathskulalportfolio.onrender.com//pdfs/RESUME2.0.pdf" download="RESUME_Ashwath_S.pdf">
                  <button className="px-10 py-2 ring-2 sm:min-w-32 md:min-w-40 ring-blue-900 rounded-lg hover:bg-yellow-500 text-sm"> Get CV</button>
                </a>
              </div>
            </div>
          </section>


          <section className="bg-gray-800 p-6 pr-0 py-4 relative overflow-hidden">
            <div className="md:flex justify-between items-center">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold leading-snug">
                  Discover my Amazing Art Space!
                </h1>
                <p className="text-yellow-400 font-mono text- md:text-lg">
                  <span className='text-white'>&lt;code&gt;</span> I build web interfaces. <span className='text-white'>&lt;/code&gt;</span>

                </p>
                <div className="flex space-x-4 mt-4">
                  <Link to='/portfolio'>

                    <div className="flex space-x-4 mt-4 mb-3">
                      <button className="text-yellow-400 text-lg font-bold border-b border-yellow-400 hover:text-yellow-200 hover:border-yellow-200 hover:transition-colors hover:duration-300 hover:ease-in-out">
                        Explore now &rarr;
                      </button>
                    </div>
                  </Link>

                </div>
              </div>
              <div>

              </div>
              <img
                src={imageAshwath}
                alt="Ashwath"
                className="hidden md:block w-80 h-60 object-cover rounded-2xl mt-6 mr-8 pb-7"
              />
            </div>
          </section>





        </main>
      </div>
    </div>
  );
};
