import React, { useState } from 'react';
import { User, Scan, CheckCircle2, Database, ShieldCheck, Check } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const flowSteps = [
    {
      id: 'step-1',
      title: 'Student Registration',
      subtitle: 'Facial profile created',
      icon: User,
      detail: 'Student creates account and securely registers facial feature embeddings via mobile camera.',
    },
    {
      id: 'step-2',
      title: 'Face Recognition',
      subtitle: 'Real-time vector extraction',
      icon: Scan,
      detail: 'Camera detects face during attendance window and converts facial landmarks into mathematical vectors.',
    },
    {
      id: 'step-3',
      title: 'Identity Verification',
      subtitle: 'Biometric matching engine',
      icon: ShieldCheck,
      detail: 'System matches live vector against registered student database with over 99.2% confidence threshold.',
    },
    {
      id: 'step-4',
      title: 'Attendance Recorded',
      subtitle: 'Timestamped database entry',
      icon: CheckCircle2,
      detail: 'Status is saved with exact timestamp, class ID, subject, and student roll number.',
    },
    {
      id: 'step-5',
      title: 'Attendance Management',
      subtitle: 'Live portal & exports',
      icon: Database,
      detail: 'Teachers and administrators instantly review class rosters, analytics, and generate reports.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#F8F9F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main About Box */}
        <div className="bg-white border border-[#E5E7EB] rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xs relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Story & Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#4E8E4A] block">
                ABOUT SMARTATTEND
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#363543] leading-tight">
                Attendance without the paperwork.
              </h2>
              <p className="text-base text-[#73737C] leading-relaxed">
                Traditional attendance methods can be time-consuming, difficult to manage, and vulnerable to manual errors. SmartAttend provides a digital approach to classroom attendance by combining facial recognition with a centralized attendance management system.
              </p>
              <p className="text-base text-[#73737C] leading-relaxed">
                The system is designed to help students, teachers, and administrators manage attendance through a simple and organized digital experience.
              </p>

              {/* Key Value Points */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#E5E7EB]">
                <div className="flex items-center gap-2.5 text-xs font-bold text-[#363543]">
                  <div className="w-5 h-5 rounded-full bg-[#EEF7ED] text-[#4E8E4A] flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-[#4E8E4A]" />
                  </div>
                  <span>Zero Manual Roll Calls</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-bold text-[#363543]">
                  <div className="w-5 h-5 rounded-full bg-[#EEF7ED] text-[#4E8E4A] flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-[#4E8E4A]" />
                  </div>
                  <span>Automated Records</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-bold text-[#363543]">
                  <div className="w-5 h-5 rounded-full bg-[#EEF7ED] text-[#4E8E4A] flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-[#4E8E4A]" />
                  </div>
                  <span>High Biometric Security</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-bold text-[#363543]">
                  <div className="w-5 h-5 rounded-full bg-[#EEF7ED] text-[#4E8E4A] flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-[#4E8E4A]" />
                  </div>
                  <span>SMI University FYP</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Process Flow */}
            <div className="lg:col-span-6 bg-[#F8F9F7] p-6 sm:p-8 rounded-2xl border border-[#E5E7EB] space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#E5E7EB]">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#363543]">
                  System Lifecycle Flow
                </span>
                <span className="text-[10px] font-bold text-[#4E8E4A] bg-[#EEF7ED] px-2 py-0.5 rounded-full border border-[#98CE94]/30">
                  Click step to explore
                </span>
              </div>

              {/* Vertical Step Timeline */}
              <div className="space-y-2">
                {flowSteps.map((step, idx) => {
                  const Icon = step.icon;
                  const isActive = activeStep === idx;
                  return (
                    <div key={step.id}>
                      <button
                        onClick={() => setActiveStep(idx)}
                        className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                          isActive
                            ? 'bg-white border-[#98CE94] shadow-sm text-[#363543]'
                            : 'bg-transparent border-transparent hover:bg-white/60 text-[#73737C]'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-colors ${
                              isActive
                                ? 'bg-[#98CE94] text-[#183017]'
                                : 'bg-[#E5E7EB] text-[#73737C]'
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-sm font-bold">{step.title}</p>
                            <p className="text-[11px] text-[#A1A1AA]">{step.subtitle}</p>
                          </div>
                        </div>

                        <span
                          className={`w-2.5 h-2.5 rounded-full ${
                            isActive ? 'bg-[#98CE94]' : 'bg-gray-300'
                          }`}
                        />
                      </button>

                      {/* Active step explanation box */}
                      {isActive && (
                        <div className="ml-11 my-2 p-3 bg-white rounded-lg border border-[#98CE94]/40 text-xs text-[#363543] animate-in fade-in duration-200 shadow-2xs">
                          {step.detail}
                        </div>
                      )}

                      {idx < flowSteps.length - 1 && (
                        <div className="w-0.5 h-3 bg-[#98CE94]/40 ml-7 my-0.5" />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
