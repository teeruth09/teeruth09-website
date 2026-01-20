"use client";
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { USER_INFO } from '@/data/content';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutMeSection';
import { EducationSection } from '@/components/EducationSection';

export default function Home() {
  return (
    <div className="min-h-screen  items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 pt-16">
       <HeroSection/>
       <AboutSection/>
       <EducationSection/>
    </div>
  );
}