const { ExternalLink, ArrowLeft } = require("lucide-react");

export const ProjectDetail = ({ project, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 bg-slate-50 animate-in fade-in zoom-in duration-300">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="mb-6 flex items-center text-gray-600 hover:text-blue-600 transition"
        >
          <ArrowLeft size={20} className="mr-2" /> กลับไปหน้าผลงาน
        </button>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="h-64 md:h-96 w-full bg-gray-200 relative">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{project.title}</h1>
                <p className="text-xl text-gray-600">{project.shortDesc}</p>
              </div>
              <a 
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                เยี่ยมชมเว็บไซต์ <ExternalLink size={16} className="ml-2" />
              </a>
            </div>

            <div className="prose max-w-none text-gray-600 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">รายละเอียดโปรเจกต์</h3>
              <p className="leading-relaxed">{project.fullDesc}</p>
            </div>

            <div className="border-t border-gray-100 pt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};