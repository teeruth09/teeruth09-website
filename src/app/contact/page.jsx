"use client";
import React from 'react';
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';
import { USER_INFO } from '@/data/content';
import { ContactSection } from '@/components/ContactSection';

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto  space-y-12 min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">

      <ContactSection/>

    </div>
  );
}
