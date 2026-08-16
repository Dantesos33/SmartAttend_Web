import React from 'react';
import { Download, Sparkles } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#F8F9F7] to-[#EEF2E8] text-center border-t border-[#E5E7EB]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF7ED] border border-[#98CE94]/30 text-[#4E8E4A] text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-[#98CE94]" />
          <span>Transform Classroom Attendance</span>
        </div>

        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#363543] leading-tight">
          Make attendance smarter.
        </h2>

        <p className="text-lg text-[#73737C] max-w-2xl mx-auto leading-relaxed">
          Simple for students. Useful for teachers. Organized for institutions.
        </p>

        <div className="pt-4">
          <a
            href="#download"
            className="inline-flex items-center justify-center gap-2 px-9 py-4 text-base font-bold text-[#183017] bg-[#98CE94] hover:bg-[#82BE7D] rounded-xl shadow-xl shadow-[#98CE94]/35 hover:-translate-y-1 transition-all cursor-pointer"
          >
            <Download className="w-5 h-5 text-[#183017]" />
            Download SmartAttend Now
          </a>
        </div>

        <p className="text-xs text-[#A1A1AA] pt-2 font-medium">
          Android APK Package • SMI University Final Year Project
        </p>

      </div>
    </section>
  );
};
