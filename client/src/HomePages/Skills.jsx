import React from "react";

const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 65 },
  { name: "React", level: 80 },
  { name: "C programming", level: 75 },
  { name: "Java", level: 50 },
];

export default function Skills() {
  return (
    <div className="bg-gray-800 p-8 shadow mx-5 my-5 pt-20">
      <h2 className="text-3xl text-white font-bold border-b-4 border-blue-600 inline-block pb-1 mb-8">
          Skills
        </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1">
              <span className="font-medium text-white">{skill.name}</span>
              <span className="text-white text-sm font-semibold">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-yellow-500 h-3 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
