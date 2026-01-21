"use client"
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation'
import { USER_INFO } from "@/data/content";
import { useForm, ValidationError } from '@formspree/react';


const { Mail, MapPin, Github, Linkedin } = require("lucide-react");

export function ContactSection() {

  const router = useRouter()
  
  const [state, handleSubmit] = useForm("xgoodvgl");

  useEffect(() => {
    if (state.succeeded) {
      const timer = setTimeout(() => {
        router.push('/')
      }, 2000) // redirect หลัง 2 วิ

      return () => clearTimeout(timer)
    }
  }, [state.succeeded, router])

  if (state.succeeded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="bg-white p-10 rounded-xl shadow text-center">
          <h2 className="text-2xl font-semibold mb-2">
            Message Sent Successfully 🎉
          </h2>
          <p className="text-gray-600">
            Thank you for your message. Redirecting to the home page...
          </p>
        </div>
      </div>
    )
  }

  return (

    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        <div className="bg-blue-600 p-10 text-white md:w-2/5 flex flex-col justify-between">
          <div>
              <h2 className="text-3xl font-bold mb-6">Let's Chat!</h2>
              <p className="text-blue-100 mb-8">
                If you are interested in collaborating or would like to dicuss further,you can contact me through the various channels.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="text-blue-200" />
                  <span>{USER_INFO.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="text-blue-200" />
                  <span>Bangkok, Thailand</span>
                </div>
              </div>
          </div>
          <div className="mt-12 flex space-x-4">
              <a href={USER_INFO.github} className="p-2 bg-blue-700 rounded-full hover:bg-blue-800 transition"><Github size={20}/></a>
              <a href={USER_INFO.linkedin} className="p-2 bg-blue-700 rounded-full hover:bg-blue-800 transition"><Linkedin size={20}/></a>
          </div>
        </div>
        
        <div className="p-10 md:w-3/5">
          <form className="space-y-6" onSubmit={handleSubmit}>
          {/* <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">ชื่อของคุณ</label>
            <input 
              type="text" 
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              placeholder="John Doe"
            />
          </div> */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input 
              id="email"
              type="email" 
              name="email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              placeholder="teeruth2546@gmail.com"
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              placeholder="message..."
            ></textarea>
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
          </div>
          <button type="submit" className="w-full bg-gray-900 text-white font-bold py-3 rounded-lg hover:bg-black transition transform active:scale-95" disabled={state.submitting}>
            Submit
          </button>
        </form>
        </div>
      </div>
    </div>
  )
};