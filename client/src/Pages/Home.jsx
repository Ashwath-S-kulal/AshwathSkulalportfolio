import React from 'react';
import imageAshwath from '../Images/dev-environment.jpg';
import { Link } from 'react-router-dom';
import profilePicture from '../Images/profilepicture.jpg';
import { FaLinkedin,  FaTwitter, FaFacebook, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import {  FaXTwitter} from "react-icons/fa6";

export default function Home(){
  return (
    <div className="bg-gray-900 text-white min-h-full font-sans">
      {/* Container */}
      <div className="grid md:grid-cols-3 gap-6 p-6">
        {/* Sidebar */}
        <aside className="bg-gray-800  text-center md:col-span-1">
          <div className='py-6'>
            <img
            src={profilePicture} // Replace with actual image
            alt="Ashwath S"
            className="w-36 rounded-full mx-auto mb-4 border-2 border-yellow-400"
            />
            <h2 className="text-xl font-bold">Ashwath S</h2>
            <p className="text-gray-400">Engineer</p>
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
          <div className="py-4 flex justify-around text-xl text-gray-400">
            <Link to="https://www.linkedin.com/in/ashwath-s-56a5b2334/" target='_blank'><FaLinkedin /></Link>
            <Link to="https://www.facebook.com/ashwath.s.137135/" target='_blank'> <FaFacebook /></Link>
            <Link to="https://github.com/Ashwath-S-kulal" target='_blank'><FaGithub /></Link>
            <Link to="https://x.com/Ashwath52870943" target='_blank'><FaXTwitter /></Link>
            <Link to="https://www.instagram.com/ashwath.s.kulal/" target='_blank'><FaInstagram/></Link>
            <Link to="https://wa.me/918431294514" target='_blank'><FaWhatsapp/></Link>
          </div>
        </aside>

        {/* Main Content */}
        <main className="md:col-span-2">
          {/* Header Section */}
          <section className="bg-gray-800 p-6 pr-0 pb-0 relative overflow-hidden">
            <div className="md:flex justify-between items-center">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold leading-snug">
                  Discover my Amazing Art Space!
                </h1>
                <p className="text-yellow-400 font-mono text- md:text-lg">
                  <span className='text-white'>&lt;code&gt;</span> I build web interfaces. <span className='text-white'>&lt;/code&gt;</span>
                    
                </p>
                <div className="flex space-x-4 mt-4">
                  <Link to='/project'>
                
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
                  src={imageAshwath} // Replace with actual image
                  alt="Ashwath"
                  className="hidden md:block w-80 h-60 object-cover rounded-2xl mt-6 mr-8 pb-7"
                />
            </div>
          </section>

          {/* Stats */}
          <section className="bg-gray-800 p-6 flex justify-between gap-5 text-center my-8">
            <p className='font-medium'>I’m passionate about learning and building, Email me if you’d like to connect or collaborate!</p>
              <Link to='mailto:ashwathkulal2004@gmail.com' target='_blank'>
              <button className="bg-yellow-400 text-black font-bold px-12 py-2  hover:bg-yellow-500">
                      EMAIL
              </button>
              </Link>
          </section>

          
          <section className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'SSLC',
                description:
                  'Morarji Desai English Medium Residential School Koteshwara, Kundapura',
              },
              {
                title: 'PUC',
                description:
                  'Karnataka Public School Bidkalkatte, Kundapura',
              },
              {
                title: 'ENGINEERING',
                description:
                  'Shree Dharmasthala Manjunatheshwara Institute of Techmology Ujire, Dakshinakannada',
              },
              
            ].map((service) => (
              <div
                key={service.title}
                className="bg-gray-800 p-6 hover:shadow-lg"
              >
                <h3 className="text-white font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{service.description}</p>
              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
};
