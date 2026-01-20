"use client";
import React from 'react';
import { Calendar } from 'lucide-react';
import { ACTIVITIES } from '@/data/content'; // ดึงข้อมูลจากไฟล์ data
import { ActivitySection } from '@/components/activity/ActivitySection';

export default function ActivityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-16">
      <ActivitySection/>
    </div>
  );
}