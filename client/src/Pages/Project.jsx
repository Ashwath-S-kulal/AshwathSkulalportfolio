import React from 'react';
import PortfolioImg from "../Images/PorfolioImg.jpg";
import AgriBookImg from '../Images/ABS.jpg';
import SMDImg from '../Images/SMDIMG.png';
import AuthImg from '../Images/Authentication.jpg';
import SSWPImg from '../Images/SSWPIMG.webp';
import { Link } from 'react-router-dom';

export default function Project() {
  // Array of project data
  const projects = [
    {
      img: AuthImg,
      title: "MERN Authentication",
      desc: "This MERN stack website offers a user-friendly platform built with React.js. It features secure sign-up and sign-in options, including Google authentication, and allows users to update their username, email, and password with privacy protection. The platform ensures safe and efficient access for users.",
      link: "https://mern-authentication-web.onrender.com",
      linkText: "Open in Web →"
    },
    {
      img: "https://cdn.vectorstock.com/i/1000v/05/72/blue-chat-app-icon-on-background-3d-vector-42730572.jpg",
      title: "MERN Comment Page",
      desc: "This MERN stack website built with React.js. It features Commenting on post that can store on database and display on web, and allows users to update and delete their Comments. ",
      link: "https://mern-comment-page.onrender.com",
      linkText: "Open in Web →"
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/lR_Radiant.png?v=1734949919",
      title: "Boat Advertising app",
      desc: "Its a frontend made by using React.js and Tailwind CSS ",
      link: "https://boat-product-advertising-frontend.vercel.app/",
      linkText: "Open in Web →"
    },
    {
      img: PortfolioImg,
      title: "Static Portfolio website",
      desc: "My personal portfolio website showcases my skills, projects, and experiences. It is built using HTML, CSS, and JavaScript. It serves as a central hub where visitors can learn more about me.",
      link: "https://ashwath-s-kulal.github.io/Porfolio-web/",
      linkText: "Open in Web →"
    },
    {
      img: AgriBookImg,
      title: "Agri Booking system",
      desc: "This is a frontend project built with React.js, focused on connecting farmers and contractors through a digital platform. It simplifies the booking and availability of farming equipment, making it easier for small and mid-scale farmers to access essential tools.",
      link: "https://agricultural-booking-system.vercel.app/",
      linkText: "Open in Web →"
    },
    {
      img: SMDImg,
      title: "Social Media Dashboard",
      desc: "A Social Media Dashboard is an interactive tool that allows users to monitor, analyze, and visualize data from social media platforms. It is used to track engagement metrics such as likes, comments, shares, and followers from pre-stored database data.",
      link: "https://github.com/Ashwath-S-kulal/Social-Media-Dashboard",
      linkText: "Open GitHub →"
    },
    
    {
      img: SSWPImg,
      title: "Simple Static Web",
      desc: "This is the Simple Static Website, made by using HTML CSS, This is my First Website and Hosted on Netlify.",
      link: "https://simplestaticweb.netlify.app/",
      linkText: "Open in Web →"
    }
  ];

  return (
    <div>
      <h1 className='text-3xl text-center text-white font-semibold my-7 mt-5'>Projects</h1>

      {/* Projects Grid */}
      <div className="flex flex-wrap justify-center gap-9 pb-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative w-72 h-80 overflow-hidden shadow-lg group cursor-pointer"
          >
            {/* Project Image */}
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-96 object-cover"
            />

            {/* Hover Content */}
            <div className="absolute bottom-14 left-0 right-0 bg-gray-800 text-white px-6 py-4 
                            translate-y-full group-hover:translate-y-14 transition-transform duration-500 ease-in-out">
              <h3 className="text-lg font-bold">{project.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{project.desc}</p>
              <Link to={project.link} target="_blank">
                <p className="text-yellow-400 font-semibold text-sm mt-4">
                  {project.linkText}
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
