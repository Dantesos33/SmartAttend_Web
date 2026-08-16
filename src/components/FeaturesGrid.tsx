import React from 'react';
import { ScanFace, CheckSquare, CalendarCheck, ShieldCheck, Sparkles } from 'lucide-react';

export const FeaturesGrid: React.FC = () => {
  const features = [
    {
      id: 'f-1',
      badge: 'Feature 01',
      title: 'Face Recognition',
      description: 'Identify registered students through facial recognition and reduce the need for manual attendance.',
      icon: ScanFace,
      highlights: ['Face landmark vectorization', 'Real-time camera feed', 'Low lighting support'],
    },
    {
      id: 'f-2',
      badge: 'Feature 02',
      title: 'Automated Attendance',
      description: 'Record attendance digitally after successful student verification.',
      icon: CheckSquare,
      highlights: ['Instant timestamping', 'No paper sign-in sheets', 'Automatic status update'],
    },
    {
      id: 'f-3',
      badge: 'Feature 03',
      title: 'Attendance Management',
      description: 'Teachers and administrators can manage and monitor attendance records in one organized system.',
      icon: CalendarCheck,
      highlights: ['Classroom-level view', 'CSV & Excel export', 'Historical analytics'],
    },
    {
      id: 'f-4',
      badge: 'Feature 04',
      title: 'Role-Based Access',
      description: 'Separate experiences for students, teachers, and administrators help keep system functions organized and controlled.',
      icon: ShieldCheck,
      highlights: ['Student portal', 'Teacher dashboard', 'Admin management'],
    },
  ];

  return (
    <section id="features" className="py-20 bg-[#F8F9F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#4E8E4A] mb-3 block">
            FEATURES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#363543] leading-tight">
            Everything needed for smarter attendance.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#73737C] leading-relaxed">
            SmartAttend combines automated identity verification with simple attendance management tools for educational environments.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative bg-white border border-[#E5E7EB] rounded-2xl p-8 shadow-xs hover:shadow-lg hover:border-[#98CE94] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#EEF7ED] text-[#4E8E4A] flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6 text-[#4E8E4A]" />
                    </div>
                    <span className="text-xs font-bold tracking-wider text-[#4E8E4A] bg-[#EEF7ED] px-3 py-1 rounded-full border border-[#98CE94]/30">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-extrabold text-[#363543] mb-3 group-hover:text-[#4E8E4A] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#73737C] leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Micro-Bullet Highlights */}
                <div className="pt-4 border-t border-[#E5E7EB] flex flex-wrap gap-2">
                  {item.highlights.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#363543] bg-[#F8F9F7] px-2.5 py-1 rounded-md border border-[#E5E7EB]"
                    >
                      <Sparkles className="w-3 h-3 text-[#98CE94]" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
