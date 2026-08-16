import React from 'react';
import { 
  Users, 
  GraduationCap, 
  Check, 
  X, 
  Camera, 
  UserPlus, 
  Plus, 
  FileText, 
  Home, 
  Clock, 
  Bell,
  Wifi,
  Battery
} from 'lucide-react';

interface MobileScreenProps {
  theme?: 'dark' | 'light';
  className?: string;
}

/**
 * Light Mode App Screen - Exact representation of SmartAttend Light Theme
 */
export const LightMobileScreen: React.FC<MobileScreenProps> = ({ className = '' }) => {
  return (
    <div 
      className={`w-full h-full bg-[#F5F8F5] text-[#1E293B] flex flex-col justify-between select-none pointer-events-none font-sans overflow-hidden ${className}`}
      style={{ aspectRatio: '9/19.5' }}
    >
      {/* Android Top Status Bar */}
      <div className="pt-2 px-4 flex items-center justify-between text-[10px] font-semibold text-[#1E293B]">
        <span>12:39</span>
        <div className="flex items-center gap-1.5 text-[9px]">
          <span className="text-[8px] font-bold">VoWiFi</span>
          <Wifi className="w-2.5 h-2.5" />
          <div className="flex items-center gap-0.5">
            <div className="w-2 h-2 rounded-full border border-[#1E293B] flex items-center justify-center">
              <span className="text-[6px] font-bold"></span>
            </div>
            <span className="text-[8px] font-bold">37%</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="px-3.5 pt-2 flex-1 flex flex-col justify-between">
        
        {/* Header: Greeting & Profile */}
        <div>
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[11px] font-medium text-[#64748B] flex items-center gap-1">
                Good Morning, <span className="inline-block text-xs">👋</span>
              </p>
              <h2 className="text-xl font-black text-[#1E293B] tracking-tight mt-0.5">
                Haider
              </h2>
              <div className="mt-1 inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#E5F2E3] text-[#3B7337] text-[8.5px] font-bold">
                Today: Friday, August 14, 2026
              </div>
            </div>

            {/* Profile Avatar */}
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-200 to-amber-100 p-0.5 shadow-sm border border-white flex items-center justify-center overflow-hidden flex-shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80" 
                alt="Haider"
                className="w-full h-full object-cover rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* 2x2 Stats Cards Grid */}
          <div className="grid grid-cols-2 gap-2.5 mt-3.5">
            
            {/* Total Students (Mint Green Highlight Card) */}
            <div className="bg-[#8ECB8A] text-white p-3 rounded-2xl shadow-sm flex flex-col justify-between h-[86px]">
              <div className="w-6 h-6 rounded-lg bg-white/25 flex items-center justify-center text-white">
                <Users className="w-3.5 h-3.5" />
              </div>
              <div>
                <p className="text-[9px] font-medium text-white/90">Total Students</p>
                <p className="text-lg font-black text-white leading-none mt-0.5">1</p>
              </div>
            </div>

            {/* Classes */}
            <div className="bg-white border border-[#E8ECE7] p-3 rounded-2xl shadow-2xs flex flex-col justify-between h-[86px]">
              <div className="w-6 h-6 rounded-lg bg-[#EEF5ED] text-[#4E8E4A] flex items-center justify-center">
                <GraduationCap className="w-3.5 h-3.5" />
              </div>
              <div>
                <p className="text-[9px] font-medium text-[#64748B]">Classes</p>
                <p className="text-lg font-black text-[#1E293B] leading-none mt-0.5">1</p>
              </div>
            </div>

            {/* Present Today */}
            <div className="bg-white border border-[#E8ECE7] p-3 rounded-2xl shadow-2xs flex flex-col justify-between h-[86px]">
              <div className="w-6 h-6 rounded-lg bg-[#EEF5ED] text-[#3B7337] flex items-center justify-center">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <div>
                <p className="text-[9px] font-medium text-[#64748B]">Present Today</p>
                <p className="text-lg font-black text-[#3B7337] leading-none mt-0.5">0</p>
              </div>
            </div>

            {/* Absent Today */}
            <div className="bg-white border border-[#E8ECE7] p-3 rounded-2xl shadow-2xs flex flex-col justify-between h-[86px]">
              <div className="w-6 h-6 rounded-lg bg-[#FEECEC] text-[#DC2626] flex items-center justify-center">
                <X className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <div>
                <p className="text-[9px] font-medium text-[#64748B]">Absent Today</p>
                <p className="text-lg font-black text-[#DC2626] leading-none mt-0.5">0</p>
              </div>
            </div>

          </div>

          {/* Quick Actions Header */}
          <div className="mt-3.5 mb-2">
            <h3 className="text-xs font-black text-[#1E293B]">Quick Actions</h3>
          </div>

          {/* Quick Actions 2x2 Grid */}
          <div className="grid grid-cols-2 gap-2.5">
            
            {/* Take Attendance */}
            <div className="bg-white border border-[#E8ECE7] p-2.5 rounded-2xl shadow-2xs flex flex-col items-center justify-center text-center h-[76px]">
              <div className="w-7 h-7 rounded-xl bg-[#EEF5ED] text-[#4E8E4A] flex items-center justify-center mb-1">
                <Camera className="w-4 h-4" />
              </div>
              <p className="text-[9px] font-bold text-[#1E293B]">Take Attendance</p>
            </div>

            {/* Add Student */}
            <div className="bg-white border border-[#E8ECE7] p-2.5 rounded-2xl shadow-2xs flex flex-col items-center justify-center text-center h-[76px]">
              <div className="w-7 h-7 rounded-xl bg-[#EEF5ED] text-[#4E8E4A] flex items-center justify-center mb-1">
                <UserPlus className="w-4 h-4" />
              </div>
              <p className="text-[9px] font-bold text-[#1E293B]">Add Student</p>
            </div>

            {/* Classes */}
            <div className="bg-white border border-[#E8ECE7] p-2 rounded-2xl shadow-2xs flex flex-col items-center justify-center text-center h-[52px]">
              <div className="w-5 h-5 rounded-lg bg-[#EEF5ED] text-[#4E8E4A] flex items-center justify-center">
                <Plus className="w-3.5 h-3.5 stroke-[3]" />
              </div>
            </div>

            {/* Reports */}
            <div className="bg-white border border-[#E8ECE7] p-2 rounded-2xl shadow-2xs flex flex-col items-center justify-center text-center h-[52px]">
              <div className="w-5 h-5 rounded-lg bg-[#EEF5ED] text-[#4E8E4A] flex items-center justify-center">
                <FileText className="w-3.5 h-3.5" />
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Floating Navigation Dock */}
        <div className="relative mt-2 mb-1">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl py-1.5 px-3 border border-[#E8ECE7] shadow-sm flex items-center justify-between text-[8px] font-semibold text-[#94A3B8]">
            <div className="flex flex-col items-center text-[#3B7337]">
              <Home className="w-3.5 h-3.5 mb-0.5" />
              <span>Home</span>
            </div>
            <div className="flex flex-col items-center">
              <GraduationCap className="w-3.5 h-3.5 mb-0.5" />
              <span>Classes</span>
            </div>

            {/* Center Floating Shutter Button */}
            <div className="relative -top-3">
              <div className="w-9 h-9 rounded-full bg-[#8ECB8A] shadow-[0_4px_12px_rgba(142,203,138,0.5)] flex items-center justify-center text-white border-2 border-white">
                <Camera className="w-4 h-4" />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <Clock className="w-3.5 h-3.5 mb-0.5" />
              <span>History</span>
            </div>
            <div className="flex flex-col items-center">
              <Bell className="w-3.5 h-3.5 mb-0.5" />
              <span>Alerts</span>
            </div>
          </div>
        </div>

      </div>

      {/* Android System Navigation Bar (Pill / 3-Buttons) */}
      <div className="pb-1.5 pt-0.5 flex justify-center items-center gap-8 text-[#CBD5E1]">
        <div className="w-2.5 h-2.5 border border-[#94A3B8] rounded-[2px]" />
        <div className="w-2.5 h-2.5 rounded-full border border-[#94A3B8]" />
        <div className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-r-[6px] border-r-[#94A3B8]" />
      </div>
    </div>
  );
};

/**
 * Dark Mode App Screen - Exact representation of SmartAttend Dark Theme
 */
export const DarkMobileScreen: React.FC<MobileScreenProps> = ({ className = '' }) => {
  return (
    <div 
      className={`w-full h-full bg-[#0F1626] text-white flex flex-col justify-between select-none pointer-events-none font-sans overflow-hidden ${className}`}
      style={{ aspectRatio: '9/19.5' }}
    >
      {/* Android Top Status Bar */}
      <div className="pt-2 px-4 flex items-center justify-between text-[10px] font-semibold text-slate-300">
        <span>12:39</span>
        <div className="flex items-center gap-1.5 text-[9px]">
          <span className="text-[8px] font-bold">VoWiFi</span>
          <Wifi className="w-2.5 h-2.5" />
          <div className="flex items-center gap-0.5">
            <div className="w-2 h-2 rounded-full border border-slate-300 flex items-center justify-center">
              <span className="text-[6px] font-bold"></span>
            </div>
            <span className="text-[8px] font-bold">37%</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="px-3.5 pt-2 flex-1 flex flex-col justify-between">
        
        {/* Header: Greeting & Profile */}
        <div>
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[11px] font-medium text-[#94A3B8] flex items-center gap-1">
                Good Morning, <span className="inline-block text-xs">👋</span>
              </p>
              <h2 className="text-xl font-black text-white tracking-tight mt-0.5">
                Haider
              </h2>
              <div className="mt-1 inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#182338] text-[#98CE94] text-[8.5px] font-bold border border-[#98CE94]/20">
                Today: Friday, August 14, 2026
              </div>
            </div>

            {/* Profile Avatar */}
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-400 to-amber-200 p-0.5 shadow-sm border border-slate-700 flex items-center justify-center overflow-hidden flex-shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80" 
                alt="Haider"
                className="w-full h-full object-cover rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* 2x2 Stats Cards Grid */}
          <div className="grid grid-cols-2 gap-2.5 mt-3.5">
            
            {/* Total Students (Mint Green Highlight Card) */}
            <div className="bg-[#8ECB8A] text-[#132A13] p-3 rounded-2xl shadow-md flex flex-col justify-between h-[86px]">
              <div className="w-6 h-6 rounded-lg bg-white/30 flex items-center justify-center text-white">
                <Users className="w-3.5 h-3.5" />
              </div>
              <div>
                <p className="text-[9px] font-semibold text-[#183017]">Total Students</p>
                <p className="text-lg font-black text-white leading-none mt-0.5">1</p>
              </div>
            </div>

            {/* Classes */}
            <div className="bg-[#182338] border border-[#23324E] p-3 rounded-2xl shadow-sm flex flex-col justify-between h-[86px]">
              <div className="w-6 h-6 rounded-lg bg-[#223350] text-[#98CE94] flex items-center justify-center">
                <GraduationCap className="w-3.5 h-3.5" />
              </div>
              <div>
                <p className="text-[9px] font-medium text-[#94A3B8]">Classes</p>
                <p className="text-lg font-black text-white leading-none mt-0.5">1</p>
              </div>
            </div>

            {/* Present Today */}
            <div className="bg-[#182338] border border-[#23324E] p-3 rounded-2xl shadow-sm flex flex-col justify-between h-[86px]">
              <div className="w-6 h-6 rounded-lg bg-[#223350] text-[#98CE94] flex items-center justify-center">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <div>
                <p className="text-[9px] font-medium text-[#94A3B8]">Present Today</p>
                <p className="text-lg font-black text-[#98CE94] leading-none mt-0.5">0</p>
              </div>
            </div>

            {/* Absent Today */}
            <div className="bg-[#182338] border border-[#23324E] p-3 rounded-2xl shadow-sm flex flex-col justify-between h-[86px]">
              <div className="w-6 h-6 rounded-lg bg-[#2E202A] text-[#F87171] flex items-center justify-center">
                <X className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <div>
                <p className="text-[9px] font-medium text-[#94A3B8]">Absent Today</p>
                <p className="text-lg font-black text-[#F87171] leading-none mt-0.5">0</p>
              </div>
            </div>

          </div>

          {/* Quick Actions Header */}
          <div className="mt-3.5 mb-2">
            <h3 className="text-xs font-black text-white">Quick Actions</h3>
          </div>

          {/* Quick Actions 2x2 Grid */}
          <div className="grid grid-cols-2 gap-2.5">
            
            {/* Take Attendance */}
            <div className="bg-[#182338] border border-[#23324E] p-2.5 rounded-2xl shadow-sm flex flex-col items-center justify-center text-center h-[76px]">
              <div className="w-7 h-7 rounded-xl bg-[#223350] text-[#98CE94] flex items-center justify-center mb-1">
                <Camera className="w-4 h-4" />
              </div>
              <p className="text-[9px] font-bold text-white">Take Attendance</p>
            </div>

            {/* Add Student */}
            <div className="bg-[#182338] border border-[#23324E] p-2.5 rounded-2xl shadow-sm flex flex-col items-center justify-center text-center h-[76px]">
              <div className="w-7 h-7 rounded-xl bg-[#223350] text-[#98CE94] flex items-center justify-center mb-1">
                <UserPlus className="w-4 h-4" />
              </div>
              <p className="text-[9px] font-bold text-white">Add Student</p>
            </div>

            {/* Classes */}
            <div className="bg-[#182338] border border-[#23324E] p-2 rounded-2xl shadow-sm flex flex-col items-center justify-center text-center h-[52px]">
              <div className="w-5 h-5 rounded-lg bg-[#223350] text-[#98CE94] flex items-center justify-center">
                <Plus className="w-3.5 h-3.5 stroke-[3]" />
              </div>
            </div>

            {/* Reports */}
            <div className="bg-[#182338] border border-[#23324E] p-2 rounded-2xl shadow-sm flex flex-col items-center justify-center text-center h-[52px]">
              <div className="w-5 h-5 rounded-lg bg-[#223350] text-[#98CE94] flex items-center justify-center">
                <FileText className="w-3.5 h-3.5" />
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Floating Navigation Dock */}
        <div className="relative mt-2 mb-1">
          <div className="bg-[#141C2E]/95 backdrop-blur-md rounded-2xl py-1.5 px-3 border border-[#23324E] shadow-lg flex items-center justify-between text-[8px] font-semibold text-[#64748B]">
            <div className="flex flex-col items-center text-[#98CE94]">
              <Home className="w-3.5 h-3.5 mb-0.5" />
              <span>Home</span>
            </div>
            <div className="flex flex-col items-center">
              <GraduationCap className="w-3.5 h-3.5 mb-0.5" />
              <span>Classes</span>
            </div>

            {/* Center Floating Shutter Button */}
            <div className="relative -top-3">
              <div className="w-9 h-9 rounded-full bg-[#8ECB8A] shadow-[0_0_16px_rgba(142,203,138,0.6)] flex items-center justify-center text-[#183017] border-2 border-[#0F1626]">
                <Camera className="w-4 h-4" />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <Clock className="w-3.5 h-3.5 mb-0.5" />
              <span>History</span>
            </div>
            <div className="flex flex-col items-center">
              <Bell className="w-3.5 h-3.5 mb-0.5" />
              <span>Alerts</span>
            </div>
          </div>
        </div>

      </div>

      {/* Android System Navigation Bar (Pill / 3-Buttons) */}
      <div className="pb-1.5 pt-0.5 flex justify-center items-center gap-8 text-[#475569]">
        <div className="w-2.5 h-2.5 border border-[#64748B] rounded-[2px]" />
        <div className="w-2.5 h-2.5 rounded-full border border-[#64748B]" />
        <div className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-r-[6px] border-r-[#64748B]" />
      </div>
    </div>
  );
};
