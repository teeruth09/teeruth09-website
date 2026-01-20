import { BookOpen } from "lucide-react";

const EDUCATION = [
  {
    id: 1,
    degree: "Science - Math General Program",
    institution: "Satriwitthaya 2 School",
    year: "2019 - 2021",
    gpa: "GPA 3.87",
    description: "Completed a Science–Mathematics program with strong academic performance, focusing on analytical thinking and problem-solving skills.",
    image: "/education/sw2_logo.png",
  },
  {
    id: 2,
    degree: "King Mongkut's Institute of Technology Ladkrabang",
    institution: "B. Engineering (Computer Engineering)",
    year: "Expected 2026",
    gpa: "GPA 3.12",
    description: "Studying Computer Engineering with hands-on experience in software development, databases, and system design through academic projects and laboratory work.",
    image: "/education/kmitl_logo.png",
  }
];


export const EducationSection = () => (
  <section className="py-20 bg-slate-50">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex items-center mb-10">
        <BookOpen className="text-blue-600 mr-3" size={28}/>
        <h2 className="text-3xl font-bold text-gray-900">Education</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {EDUCATION.map((edu) => (
          <div key={edu.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-start space-x-4 hover:shadow-md transition">
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-100 overflow-hidden border border-gray-200">
              <img src={edu.image} alt={edu.institution} className="w-full h-full object-cover" />
            </div>
            <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold text-gray-900">
                        {edu.degree}
                    </h3>
                    <p className="text-blue-600 font-medium">
                        {edu.institution}
                    </p>
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">{edu.year}</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-3 line-clamp-3">
                    {edu.description}
                </p>
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg font-semibold">
                    🎓  {edu.gpa}
                </span>
                </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);