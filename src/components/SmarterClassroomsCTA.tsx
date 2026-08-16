import React from 'react';
import { Download, Smartphone, Sparkles } from 'lucide-react';
import { SmartAttendLogo } from './SmartAttendLogo';

export const SmarterClassroomsCTA: React.FC = () => {
  return (
    <section className="py-12 bg-[#F8F9F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#363543] text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Ambient Mint Blur Ring */}
          <div className="absolute top-1/2 right-12 -translate-y-1/2 w-64 h-64 bg-[#98CE94]/25 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Column: CTA Content */}
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#98CE94] flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                SMARTER CLASSROOMS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                A smarter way to manage attendance.
              </h2>
              <p className="text-base sm:text-lg text-[#A1A1AA] leading-relaxed max-w-2xl">
                From student verification to attendance records, SmartAttend brings the entire attendance process into one simple digital experience.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#download"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-bold text-[#183017] bg-[#98CE94] hover:bg-[#82BE7D] rounded-xl shadow-lg shadow-[#98CE94]/30 hover:-translate-y-0.5 transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4 text-[#183017]" />
                  Download SmartAttend
                </a>
              </div>
            </div>

            {/* Right Column: Official SmartAttend App Icon Showcase */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="relative group">
                {/* Mint Glow backplate */}
                <div className="absolute -inset-4 bg-[#98CE94]/30 rounded-3xl blur-xl group-hover:bg-[#98CE94]/50 transition-all duration-500" />
                <div className="relative bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-[36px] shadow-2xl group-hover:scale-105 transition-transform duration-300">
                  <SmartAttendLogo size={140} showBackground={true} />
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
