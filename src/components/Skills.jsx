import React from "react";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaNodeJs,
  FaPython,
  FaGoogle,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFlask,
  SiBootstrap,
  SiMysql,
  SiFigma,
  SiMongodb,
  SiPostgresql,
  SiSqlite,
  SiPython,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "React.js", icon: <FaReact className="text-blue-400 text-5xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-5xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 text-5xl" /> },
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500 text-5xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-5xl" /> },
    { name: "Python", icon: <FaPython className="text-yellow-400 text-5xl" /> },
    { name: "Flask", icon: <SiFlask className="text-gray-400 text-5xl" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500 text-5xl" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-600 text-5xl" /> },
    { name: "Google Cloud", icon: <FaGoogle className="text-blue-500 text-5xl" /> },
    { name: "Figma", icon: <SiFigma className="text-pink-500 text-5xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-5xl" /> },
    { name: "SQLAlchemy", icon: <SiPython className="text-purple-400 text-5xl" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700 text-5xl" /> },
    { name: "SQLite", icon: <SiSqlite className="text-blue-400 text-5xl" /> },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-teal-400">
          My Skills
        </h2>
        <div className="overflow-hidden">
          <div
            className="flex space-x-12 animate-scroll"
            style={{ animation: "scroll 20s linear infinite" }}
          >
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center space-y-2">
                {skill.icon}
                <span className="text-lg font-medium">{skill.name}</span>
              </div>
            ))}
            {/* Duplicate skills for seamless scrolling */}
            {skills.map((skill, index) => (
              <div key={`duplicate-${index}`} className="flex flex-col items-center space-y-2">
                {skill.icon}
                <span className="text-lg font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;