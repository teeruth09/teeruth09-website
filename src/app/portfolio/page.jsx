"use client";
import React, { useState } from 'react';
import { 
  Code, 
  Server, 
  Wrench, 
  Database, 
  Layout, 
  Globe, 
  Cpu, 
  Layers, 
  GitBranch, 
  Terminal,
  Briefcase,
  GraduationCap,
  Cloud
} from 'lucide-react';
import { EXPERIENCES, PROJECTS } from '@/data/content';
import Image from 'next/image';
import { PortfolioSection } from '@/components/portfolio/PortfolioSection';

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-16">
      <PortfolioSection/>
    </div>
  );
}