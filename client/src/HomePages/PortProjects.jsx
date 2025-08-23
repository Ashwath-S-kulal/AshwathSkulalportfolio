import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const ProjectData = [
  {
    id: 1,
    name: "MERN Authentication",
    type: "MERN Webs",
    image: "https://material.dahuasecurity.com/uploads/image/20240516/news0516300200.png",
    link:"https://mern-authentication-web.onrender.com"
  },
  {
    id: 2,
    name: "MERN Comment Web",
    type: "MERN Webs",
    image: "https://cdn.vectorstock.com/i/1000v/05/72/blue-chat-app-icon-on-background-3d-vector-42730572.jpg",
    link:"https://mern-comment-page.onrender.com"
  },
  {
    id: 3,
    name: "Static Portfolio Web",
    type: "Static Webs ",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*Onh9cW9KtGjDrlf5NzGYMw.jpeg",
    link:"https://ashwath-s-kulal.github.io/Porfolio-web/"
  },
  {
    id: 4,
    name: "Boat Clone Web",
    type: "Static Webs & frontends",
    image: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/lR_Radiant.png?v=1734949919",
    link:"https://boat-product-advertising-frontend.vercel.app/"
  },
  {
    id: 5,
    name: "Agri Booking system",
    type: "frontends",
    image: "https://shopscanner.com/wp-content/uploads/2024/03/young-woman-controlling-plantation-scaled-e1711567975796-768x813.jpg",
    link:"https://agricultural-booking-system.vercel.app/"
  },
  {
    id: 6,
    name: "Social Media Dashboard",
    type: "Static Webs & frontends",
    image: "https://www.albeadvance.com/wp-content/uploads/2025/04/review.png",
    link:"https://github.com/Ashwath-S-kulal/Social-Media-Dashboard"
  },
  {
    id: 7,
    name: "Simple Static Web",
    type: "Static Webs & frontends",
    image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRMeO_O53PHFJ5enVA3L-E76oBh2YjLYfZ31XXAQ-cJ6_NiK0TA",
    link:"https://simplestaticweb.netlify.app/"
  },
];

export default function PortProjects() {
  const [search, setSearch] = useState("");
  const [projectFilter, setProjectFilter] = useState("");

  const filteredProjects = ProjectData.filter((project) => {
    return (
      project.name.toLowerCase().includes(search.toLowerCase()) &&
      (projectFilter ? project.type.includes(projectFilter) : true)
    );
  });

  return (
    <div className="flex  bg-gray-800 mx-5 mt-3 pt-10">
      <div className="max-w-full min-w-screen px-6 py-5 w-full">
        <h2 className="text-3xl text-white font-bold border-b-4 border-blue-600 inline-block pb-1 mb-4">
          Projects
        </h2>
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-6 space-y-4 md:space-y-0 w-full mt-6">
          <input
            type="text"
            placeholder="Search projects by name ..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 border rounded-lg p-2 bg-gray-600"
          />
          <select
            value={projectFilter}
            onChange={(e) => setProjectFilter(e.target.value)}
            className="border rounded-lg p-2 bg-gray-600 text-slate-400 px-5"
          >
            <option value="">Filter by type</option>
            <option value="MERN">MERN Webs</option>
            <option value="frontends">Frontends</option>
            <option value="Static">Static Webs</option>
          </select>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-700 rounded-xl shadow hover:shadow-lg transition overflow-hidden relative"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-48 w-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-1">
                  <h2 className="text-lg font-semibold text-white">{project.name}</h2>
                </div>
                <p className="text-xs text-white mb-2">{project.type}</p>
              </div>
              <button className=" px-6 pb-4 w-full text-yellow-500 hover:text-yellow-300">
                <NavLink to={project.link} target="blank">Open in Web</NavLink> 
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
}
