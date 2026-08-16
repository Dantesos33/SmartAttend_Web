import React from 'react';
import { UserPlus, Scan, CheckCircle2, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Register',
      description: 'Students create their account and register their facial information through the application.',
      icon: UserPlus,
      tag: 'One-time setup',
    },
    {
      num: '02',
      title: 'Recognize',
      description: "During attendance, the system detects and verifies the student's face in real time.",
      icon: Scan,
      tag: 'Live camera scan',
    },
    {
      num: '03',
      title: 'Record',
      description: 'Once the identity is successfully verified, the attendance record is automatically stored.',
      icon: CheckCircle2,
      tag: 'Instant database log',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-[#F8F9F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dark Charcoal Container */}
        <div className="bg-[#363543] text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl relative overflow-hidden">
          
          {/* Subtle Ambient Mint Glow in Dark Card */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#98CE94]/20 rounded-full blur-3xl pointer-events-none" />

          {/* Section Header */}
          <div className="max-w-3xl relative z-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#98CE94] mb-3 block">
              HOW IT WORKS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              How SmartAttend works
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#A1A1AA] leading-relaxed">
              Attendance becomes a simple three-step process.
            </p>
          </div>

          {/* 3 Steps Cards Wrapper */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="group relative bg-[#2A2935]/80 border border-[#4B4A5A] rounded-2xl p-7 hover:border-[#98CE94] transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Step Number & Tag */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-4xl font-extrabold text-[#98CE94] tracking-tight">
                        {step.num}
                      </span>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-gray-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                        {step.tag}
                      </span>
                    </div>

                    {/* Icon & Title */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-[#98CE94]/20 text-[#98CE94] flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#98CE94] transition-colors">
                        {step.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-[#A1A1AA] leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Flow Arrow Indicator for steps 1 & 2 */}
                  {idx < steps.length - 1 && (
                    <div className="hidden md:flex justify-end pt-4">
                      <ArrowRight className="w-5 h-5 text-[#98CE94]/50 group-hover:text-[#98CE94] group-hover:translate-x-1 transition-all" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
