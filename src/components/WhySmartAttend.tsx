import React from 'react';
import { Zap, ShieldCheck, FolderCheck, ArrowRight } from 'lucide-react';

export const WhySmartAttend: React.FC = () => {
  const pillars = [
    {
      id: 'pillar-1',
      icon: Zap,
      title: 'Faster Attendance',
      description: 'Reduce the time spent taking attendance manually and streamline the classroom attendance process.',
      metric: '< 2 Seconds',
      metricLabel: 'Verification time',
    },
    {
      id: 'pillar-2',
      icon: ShieldCheck,
      title: 'Reliable Verification',
      description: 'Use facial recognition to help verify student identity before attendance is recorded.',
      metric: 'Biometric Vector',
      metricLabel: 'Prevent proxy attendance',
    },
    {
      id: 'pillar-3',
      icon: FolderCheck,
      title: 'Organized Records',
      description: 'Keep attendance information digitally organized and accessible to authorized users.',
      metric: 'Cloud Sync',
      metricLabel: 'Instant report export',
    },
  ];

  return (
    <section className="py-20 bg-[#F8F9F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#4E8E4A] mb-3 block">
            WHY SMARTATTEND?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#363543] leading-tight">
            A simpler approach to everyday attendance.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#73737C] leading-relaxed">
            SmartAttend replaces repetitive manual attendance processes with a streamlined digital experience designed for modern classrooms.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="group relative bg-white border border-[#E5E7EB] rounded-2xl p-8 shadow-xs hover:shadow-xl hover:border-[#98CE94] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon Frame */}
                  <div className="w-12 h-12 rounded-xl bg-[#EEF7ED] text-[#4E8E4A] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-[#4E8E4A]" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-[#363543] mb-3 group-hover:text-[#4E8E4A] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#73737C] leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                {/* Metric Footer */}
                <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between">
                  <div>
                    <p className="text-xs font-extrabold text-[#363543]">{pillar.metric}</p>
                    <p className="text-[11px] text-[#A1A1AA]">{pillar.metricLabel}</p>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#EEF7ED] flex items-center justify-center text-[#4E8E4A] group-hover:bg-[#98CE94] group-hover:text-[#183017] transition-all">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
