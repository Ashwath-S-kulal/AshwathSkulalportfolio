import { FaArrowAltCircleUp, FaArrowAltCircleDown } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub,FaExternalLinkAlt  } from "react-icons/fa";

export default function Project() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const projects = [
    {
      img: "https://material.dahuasecurity.com/uploads/image/20240516/news0516300200.png",
      title: "MERN Authentication",
      desc: "This MERN stack website offers a user-friendly platform built with React.js. It features secure sign-up and sign-in options, including Google authentication, and allows users to update their username, email, and password with privacy protection. The platform ensures safe and efficient access for users.",
      link: "https://mern-authentication-web.onrender.com",
      GitLink: "https://github.com/Ashwath-S-kulal/MERN-Authentication-Web",
    },
    {
      img: "https://cdn.vectorstock.com/i/1000v/05/72/blue-chat-app-icon-on-background-3d-vector-42730572.jpg",
      title: "MERN Comment Page",
      desc: "This MERN stack website built with React.js. It features Commenting on post that can store on database and display on web, and allows users to update and delete their Comments.",
      link: "https://mern-comment-page.onrender.com",
      GitLink: "https://github.com/Ashwath-S-kulal/MERN-Comment-Page",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/lR_Radiant.png?v=1734949919",
      title: "Boat Advertising app",
      desc: "Its a frontend made by using React.js and Tailwind CSS ",
      link: "https://smartwatch-product-showcase-website.vercel.app/",
      GitLink: "https://github.com/Ashwath-S-kulal/Boat-product-advertising-frontend",
    },
    {
      img: "https://miro.medium.com/v2/resize:fit:1400/1*Onh9cW9KtGjDrlf5NzGYMw.jpeg",
      title: "Static Portfolio website",
      desc: "My personal portfolio website showcases my skills, projects, and experiences. It is built using HTML, CSS, and JavaScript. It serves as a central hub where visitors can learn more about me.",
      link: "https://ashwath-s-kulal.github.io/Porfolio-web/",
      GitLink: "https://github.com/Ashwath-S-kulal/Porfolio-web",
    },
    {
      img: "https://shopscanner.com/wp-content/uploads/2024/03/young-woman-controlling-plantation-scaled-e1711567975796-768x813.jpg",
      title: "Agri Booking system",
      desc: "This is a frontend project built with React.js, focused on connecting farmers and contractors through a digital platform. It simplifies the booking and availability of farming equipment, making it easier for small and mid-scale farmers to access essential tools.",
      link: "https://agricultural-booking-system.vercel.app/",
      GitLink: "https://github.com/Ashwath-S-kulal/Agricultural-booking-system",
    },
    {
      img: "https://www.albeadvance.com/wp-content/uploads/2025/04/review.png",
      title: "Social Media Dashboard",
      desc: "A Social Media Dashboard is an interactive tool that allows users to monitor, analyze, and visualize data from social media platforms. It is used to track engagement metrics such as likes, comments, shares, and followers from pre-stored database data.",
      link: "https://github.com/Ashwath-S-kulal/Social-Media-Dashboard",
      GitLink: "https://github.com/Ashwath-S-kulal/Social-Media-Dashboard",
    },
    {
      img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRMeO_O53PHFJ5enVA3L-E76oBh2YjLYfZ31XXAQ-cJ6_NiK0TA",
      title: "Simple Static Web",
      desc: "This is the Simple Static Website, made by using HTML CSS, This is my First Website and Hosted on Netlify.",
      link: "https://simplestaticweb.netlify.app/",
      GitLink: "https://github.com/Ashwath-S-kulal/Simple-Static-Web",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl text-center text-white font-semibold my-7 mt-5">
        Projects
      </h1>

      <div className="flex flex-wrap justify-center gap-9 pb-10">
        {projects.map((project, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={index}
              className="relative w-72 h-80 overflow-hidden shadow-lg rounded-2xl cursor-pointer"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              onClick={() => handleToggle(index)}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-96 object-cover"
              />

              <div
                className={`absolute bottom-14 left-0 right-0 bg-gray-800 text-white px-6 py-4 
                  transition-transform duration-500 ease-in-out
                  ${isActive ? "translate-y-14" : "translate-y-full"}`}
              >
                <div className="flex justify-between items-center">
                  <h3 className="flex items-center text-lg font-bold gap-2 ">
                    {project.title}
                  </h3>
                  <span>
                    {isActive ? (
                      <FaArrowAltCircleDown />
                    ) : (
                      <FaArrowAltCircleUp />
                    )}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mt-2">{project.desc}</p>
                <div className="flex justify-end mt-3">
                  
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-3 py-2 bg-yellow-600 text-white rounded-lg shadow-md hover:bg-yellow-700 text-sm "
                  >
                    Open Popup
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 backdrop-blur-sm px-6">
          <div className="bg-gray-900 rounded-2xl shadow-lg p-6 w-96 relative text-white">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
            >
              ✕
            </button>

            <h2 className="text-xl font-semibold mb-2">
              {selectedProject.title}
            </h2>
            <img
              src={selectedProject.img}
              alt={selectedProject.title}
              className="w-full h-40 object-cover rounded-lg mb-3"
            />
            <p className=" mb-4 text-white">{selectedProject.desc}</p>

            <div className="flex justify-between">
              <Link
                to={selectedProject.link}
                target="_blank"
                className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 flex items-center gap-2"
              >
                <FaExternalLinkAlt /> Website
              </Link>
              <Link
                to={selectedProject.GitLink}
                target="_blank"
                className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 flex items-center gap-2"
              >
              <FaGithub/>GitHub
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
