import React, { useState } from "react";

const ProjectData = [
  {
    id: 1,
    name: "MERN Authentication",
    type: "MERN Webs",
    image: "https://3.imimg.com/data3/GH/QI/MY-11765206/corn.jpg",
  },
  {
    id: 2,
    name: "MERN Comment Web",
    type: "MERN Webs",
    image: "https://cdn.pixabay.com/photo/2023/07/30/07/23/soft-wheat-8158264_1280.jpg",
  },
  {
    id: 3,
    name: "Static Portfolio Web",
    type: "Static Webs ",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg",
  },
  {
    id: 4,
    name: "Boat Clone Web",
    type: "Static Webs & frontends",
    image: "https://cdn.pixabay.com/photo/2023/07/30/07/23/soft-wheat-8158264_1280.jpg",
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
    <div className="flex  bg-gray-800 mx-5 mt-3 ">
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
              <button className=" px-6 pb-4 w-full text-yellow-500 hover:text-yellow-300">Open in Web</button>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
}
