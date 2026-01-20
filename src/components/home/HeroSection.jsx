import { USER_INFO } from "@/data/content";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export const HeroSection = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 pt-16">
    <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-2">
          Welcome to my website 👋
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          Hello<br />
          <span className="text-blue-600">{USER_INFO.name}</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-lg mx-auto md:mx-0">
          {USER_INFO.role}
        </p>
        <p className="text-gray-500 max-w-lg mx-auto md:mx-0">
          {USER_INFO.bio}
        </p>
        <div className="flex justify-center md:justify-start space-x-4 pt-4">
          <Link
            href="/portfolio"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-lg shadow-blue-500/30 font-medium"
          >
            Explore My Projects
          </Link>

          <Link
            href="/contact"
            className="px-6 py-3 border border-gray-300 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium"
          >
            Contact
          </Link>
        </div>
        <div className="flex justify-center md:justify-start space-x-4 pt-4 text-gray-400">
            <a href={USER_INFO.github} target="_blank" rel="noreferrer" className="hover:text-gray-800 transition"><Github size={24}/></a>
            <a href={USER_INFO.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-700 transition"><Linkedin size={24}/></a>
            <a href={`mailto:${USER_INFO.email}`} className="hover:text-red-500 transition"><Mail size={24}/></a>
        </div>
      </div>
      <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center relative">
        <div className="absolute top-0 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="relative">
             {/* Profile Image Placeholder */}
            <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition duration-500 border-4 border-white bg-gray-200">
                <img src="/profile/profile.png" alt="Profile" className="w-full h-full object-cover" />
            </div>
        </div>
      </div>
    </div>
  </div>
);