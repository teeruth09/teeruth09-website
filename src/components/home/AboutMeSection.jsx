import { USER_INFO } from "@/data/content";
import { User } from "lucide-react";

export const AboutSection = () => (
  <section className="py-20 bg-white">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex items-center mb-8">
        <User className="text-blue-600 mr-3" size={28}/>
        <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
      </div>
      <div className="flex flex-col md:flex-row gap-10 items-start">
        <div className="w-full md:w-1/3">
           {/* รูปภาพแนว Portrait หรือ Life style */}
           <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gray-200 shadow-lg">
             <img src="/profile/aboutme.png" alt="My Lifestyle" className="w-full h-full object-cover" />
           </div>
        </div>
        <div className="w-full md:w-2/3 space-y-6">
           <h3 className="text-2xl font-bold text-gray-800">
                Learn, Act, and Take Responsibility
           </h3>
           <p className="text-gray-600 leading-relaxed text-lg">
             {USER_INFO.aboutDetail}
           </p>
           <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                 <h4 className="font-bold text-gray-900 mb-1">Responsibility</h4>
                 <p className="text-sm text-gray-500">Take responsibility for assigned tasks and deliver them with accountability.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                 <h4 className="font-bold text-gray-900 mb-1">Team Player</h4>
                 <p className="text-sm text-gray-500">Able to work effectively in a collaborative team environment.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  </section>
);
