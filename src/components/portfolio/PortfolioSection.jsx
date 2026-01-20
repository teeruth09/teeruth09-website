import { EXPERIENCES, PROJECTS, SKILLS, SKILLS_WITH_DETAILS } from "@/data/content";
import { useState } from "react";

const { GraduationCap, Code, Briefcase } = require("lucide-react");
import Image from 'next/image';
import Link from "next/link";

const { ProjectCard } = require("./ProjectCard");

export const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen pt-5 pb-12 bg-slate-50">   
      <div className="max-w-6xl mx-auto px-4">
        
        {/* 1. Skills Section (Updated with Progress Bars) */}
        <section className="mb-20">
          <div className="flex items-center mb-8">
              <Code className="text-blue-600 mr-3" size={28}/>
              <h2 className="text-3xl font-bold text-gray-900">My Skills</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SKILLS_WITH_DETAILS.map((skillGroup, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-6 pb-3 border-b border-gray-100">
                  {skillGroup.icon}
                  <h3 className="text-xl font-bold text-gray-800 ml-3">{skillGroup.category}</h3>
                </div>
                
                <div className="space-y-5">
                  {skillGroup.items.map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between items-center mb-1">
                        <div className="flex items-center text-gray-700 font-medium">
                          <Image
                            src={item.iconSrc}
                            alt={item.name}
                            width={30}
                            height={16}
                          />
                          <h3 className="text-sm font-bold ml-3">{item.name}</h3>
                        </div>
                        <span className="text-xs font-semibold text-gray-500">{item.level}%</span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-blue-600 h-2.5 rounded-full transition-all duration-1000 ease-out" 
                          style={{ width: `${item.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. Experience Section */}
        <section className="mb-20">
          <div className="flex items-center mb-8">
              <Briefcase className="text-blue-600 mr-3" size={28}/>
              <h2 className="text-3xl font-bold text-gray-900">Experience</h2>
          </div>
          <div className="space-y-6">
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4 hover:border-blue-200 transition-colors">
                <div className="md:w-1/4">
                  <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm font-semibold shadow-sm">
                    {exp.period}
                  </span>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                  <div className="text-blue-600 font-medium mb-2">{exp.company}</div>
                  <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Projects Section */}
        <section>
          <div className="flex items-center mb-8 justify-between">
              <div className="flex items-center">
                  <GraduationCap className="text-blue-600 mr-3" size={28}/>
                  <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
              </div>
              <span className="text-sm text-gray-500 hidden sm:block">Click on the card to view details</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onClick={(p) => setSelectedProject(p)} 
              />
            ))}
          </div>
        </section>

      </div>
      
      {/* Modal / Detail View (แบบง่าย) */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 relative shadow-2xl">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
            <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-64 object-cover rounded-xl mb-6" />
            <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
            <p className="text-gray-500 mb-4">{selectedProject.shortDesc}</p>
            <div className="prose text-gray-700 mb-6">{selectedProject.fullDesc}</div>
            <div className="flex flex-wrap gap-2">
               {selectedProject.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium">{t}</span>
               ))}
            </div>
            {/* Buttons */}
            <div className="flex gap-3 mt-6">
              {selectedProject.slug && (
                <Link
                  href={`/portfolio/${selectedProject.slug}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center px-3 py-2 text-sm font-medium  bg-blue-600 text-white rounded-lg  hover:bg-blue-700 transition"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Full Details
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}