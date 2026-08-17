import React from 'react';
import { Download, BookOpen } from 'lucide-react';
import { ModalType } from '../types';
import { LightMobileScreen, DarkMobileScreen } from './MobileScreens';
import { SmartAttendLogo } from './SmartAttendLogo';

interface HeroProps {
  onOpenModal: (modal: ModalType) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-[#F8F9F7] via-[#F8F9F7] to-[#F1F3EE]">
      {/* Subtle Background Mesh Glow */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-radial from-[#98CE94]/20 via-[#98CE94]/10 to-transparent blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#EEF7ED] border border-[#98CE94]/30">
              <SmartAttendLogo size={18} variant="dark" />
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#4E8E4A]">
                SmartAttend · Smart Attendance System
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#363543] leading-[1.08]">
              Future of Attendance Tracking.<br />
              <span className="text-[#363543]"></span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#73737C] leading-relaxed max-w-xl">
              SmartAttend is a digital attendance management system that uses facial recognition to make classroom attendance faster, more reliable, and easier to manage.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#download"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold text-[#183017] bg-[#98CE94] hover:bg-[#82BE7D] rounded-xl shadow-lg shadow-[#98CE94]/30 hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#183017]" />
                Download App
              </a>
              <button
                onClick={() => onOpenModal('manual')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#363543] bg-white border border-[#E5E7EB] hover:bg-gray-50 rounded-xl shadow-2xs hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-[#73737C]" />
                User Manual
              </button>
            </div>

          </div>

          {/* Right Column: Static Floating Mobile Screen Canvas */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[480px] h-[550px] flex items-center justify-center pointer-events-none select-none">
              
              {/* Radial glow background ring */}
              <div className="absolute w-[360px] h-[360px] bg-[#98CE94]/25 rounded-full blur-3xl animate-pulse-glow pointer-events-none" />

              {/* Phone 02 (Dark Mode Screen - Back / Offset Right) */}
              <div className="absolute top-4 right-2 sm:right-6 z-10 w-[240px] sm:w-[250px] bg-[#0A0F1D] rounded-[42px] p-[5px] border-[6px] border-[#1E293B] shadow-[0_25px_50px_-12px_rgba(15,23,42,0.35)] animate-float-back">
                {/* Modern Phone Top Bezel & Camera Pin */}
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0A0F1D] border border-slate-700/80 shadow-inner flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-blue-950/60" />
                  </div>
                </div>

                {/* Screen Housing */}
                <div className="rounded-[34px] overflow-hidden w-full relative">
                  <DarkMobileScreen />
                  
                  {/* Subtle Screen Glass Reflection Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08] pointer-events-none" />
                </div>
              </div>

              {/* Phone 01 (Light Mode Screen - Front / Offset Left) */}
              <div className="absolute bottom-2 left-2 sm:left-6 z-20 w-[245px] sm:w-[255px] bg-[#FFFFFF] rounded-[42px] p-[5px] border-[6px] border-[#363543] shadow-[0_30px_60px_-15px_rgba(54,53,67,0.3)] animate-float-front">
                {/* Modern Phone Top Bezel & Camera Pin */}
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#1E293B] border border-slate-600/50 shadow-inner flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-blue-900/60" />
                  </div>
                </div>

                {/* Screen Housing */}
                <div className="rounded-[34px] overflow-hidden w-full relative border border-[#E5E7EB]/60">
                  <LightMobileScreen />
                  
                  {/* Subtle Screen Glass Reflection Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.05] to-white/[0.12] pointer-events-none" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
