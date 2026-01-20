import { Link } from "lucide-react";

export const ProjectCard = ({ project, onClick }) => (
  <div 
    onClick={() => onClick(project)}
    className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer flex flex-col h-full transform hover:-translate-y-1"
  >
    <div className="relative h-48 overflow-hidden bg-gray-100">
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
    </div>
    <div className="p-6 flex flex-col flex-grow">
  <h3 className="text-xl font-bold text-gray-900 mb-1">
    {project.title}
  </h3>

  <span className="inline-block mb-2  py-0.5 text-xs font-medium  bg-blue-50 text-blue-700 rounded-md">
    {project.role}
  </span>

  <span className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
    {project.period}
  </span>

  <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
    {project.shortDesc}
  </p>

  <div className="flex flex-wrap gap-2 mb-4">
    {project.tech.map((t, index) => (
      <span key={index} className="px-2.5 py-1 text-xs font-mediumrounded-full bg-slate-50 text-slate-700border border-slate-200 hover:bg-blue-50 hover:text-blue-700transition">
        {t}
      </span>
    ))}
  </div>

  {/* Buttons */}
  <div className="flex gap-3 mt-auto">
    {project.liveUrl && (
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noreferrer"
        className="flex-1 text-center px-3 py-2 text-sm font-medium  bg-blue-600 text-white rounded-lg  hover:bg-blue-700 transition"
        onClick={(e) => e.stopPropagation()}
      >
        View
      </a>
    )}

    {project.githubUrls?.map((repo, index) => (
      <a
        key={index}
        href={repo.url}
        target="_blank"
        rel="noreferrer"
        className="flex-1 text-center px-3 py-2 text-sm font-medium border border-gray-300 text-gray-700 rounded-lg  hover:bg-gray-50 transition"
        onClick={(e) => e.stopPropagation()}
      >
        {repo.label}
      </a>
    ))}
  </div>
</div>

  </div>
);