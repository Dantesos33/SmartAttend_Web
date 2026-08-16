import React, { useState } from 'react';
import { 
  Users, 
  UserCheck, 
  Code2, 
  Layers, 
  Cpu, 
  Sparkles, 
  CheckCircle2, 
  FileText, 
  Award,
  GraduationCap,
  LayoutGrid,
  Table as TableIcon
} from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  leadBadge: string;
  avatarBg: string;
  avatarText: string;
  mainResponsibilities: string;
  responsibilitiesList: string[];
  focusAreas: string[];
}

const teamMembers: TeamMember[] = [
  {
    id: 'noman',
    name: 'Noman Ahmed',
    role: 'Project Lead',
    leadBadge: 'Project Leadership & AI',
    avatarBg: 'from-[#8ECB8A] to-[#68B463]',
    avatarText: 'NA',
    mainResponsibilities:
      'Leads the project, develops the core face-recognition component, identifies technical requirements and application flow, report and document development, contributes to website development, assists with UI design, and performs testing throughout development.',
    responsibilitiesList: [
      'Leads overall project execution & milestone planning',
      'Develops core biometric face-recognition engine & vector pipelines',
      'Identifies technical requirements and full application architectural flow',
      'Authors project reports, IEEE documentation, & technical papers',
      'Contributes to landing website development & UI design assets',
      'Performs rigorous validation and quality testing throughout development'
    ],
    focusAreas: ['Core Face Recognition', 'System Architecture', 'UI/UX Design', 'Project Documentation']
  },
  {
    id: 'muhaddis',
    name: 'Muhaddis Afzal',
    role: 'Application Development Lead',
    leadBadge: 'Mobile & Backend Lead',
    avatarBg: 'from-[#363543] to-[#201F29]',
    avatarText: 'MA',
    mainResponsibilities:
      'Leads mobile application development, develops the face-recognition backend, manages database development, develops the frontend of the application, and works on API development and integration.',
    responsibilitiesList: [
      'Leads native Android mobile application architecture',
      'Develops face-recognition backend services & model integration',
      'Manages cloud Firestore database schemas, security rules, & indexing',
      'Designs and implements interactive mobile frontend interfaces',
      'Builds, secures, and connects RESTful APIs and real-time synchronization pipelines'
    ],
    focusAreas: ['Android Development', 'Backend Engineering', 'Database Management', 'API Integration']
  },
  {
    id: 'ahmed',
    name: 'Ahmed Zaheer',
    role: 'Tester & Researcher',
    leadBadge: 'QA & Research Lead',
    avatarBg: 'from-[#64748B] to-[#475569]',
    avatarText: 'AZ',
    mainResponsibilities:
      'Performs application testing, collects development resources, conducts research, manages project arrangements, and leads the final application presentation.',
    responsibilitiesList: [
      'Performs comprehensive end-to-end and edge-case application testing',
      'Collects technical datasets, development benchmarks, and AI resources',
      'Conducts algorithm research on lighting variance and spoof prevention',
      'Manages project logistics, academic arrangements, and timelines',
      'Leads final project defense, live demonstration, and presentation deliverables'
    ],
    focusAreas: ['Quality Assurance', 'Algorithm Research', 'Resource Logistics', 'Final Presentation']
  }
];

export const TeamSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  return (
    <section id="team" className="py-20 lg:py-28 bg-[#F8F9F7] relative overflow-hidden border-t border-[#E5E7EB]/60">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#98CE94]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#363543]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEF7ED] border border-[#98CE94]/30 text-[#4E8E4A] text-xs font-extrabold uppercase tracking-widest mb-3">
              <Users className="w-3.5 h-3.5 text-[#4E8E4A]" />
              <span>PROJECT LEADERSHIP</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#363543] leading-tight">
              Team Members & Responsibilities
            </h2>
            <p className="text-base text-[#73737C] mt-3 leading-relaxed">
              Meet the engineering team behind SmartAttend. A collaborative Final Year Project (FYP) dedicated to modernizing classroom attendance with computer vision and seamless mobile experience.
            </p>
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center gap-1.5 bg-white p-1.5 rounded-2xl border border-[#E5E7EB] shadow-2xs self-start md:self-auto">
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-[#363543] text-white shadow-xs'
                  : 'text-[#73737C] hover:text-[#363543] hover:bg-gray-50'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Cards View</span>
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                viewMode === 'table'
                  ? 'bg-[#363543] text-white shadow-xs'
                  : 'text-[#73737C] hover:text-[#363543] hover:bg-gray-50'
              }`}
            >
              <TableIcon className="w-3.5 h-3.5" />
              <span>Table Matrix</span>
            </button>
          </div>
        </div>

        {/* View Mode: Cards Grid */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group relative bg-white border border-[#E5E7EB] rounded-3xl p-7 sm:p-8 shadow-xs hover:shadow-xl hover:border-[#98CE94] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Corner Subtle Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#98CE94]/15 to-transparent rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  {/* Top Centered Profile Section */}
                  <div className="flex flex-col items-center text-center mb-6">
                    {/* Centered Avatar Initials Squircle Badge */}
                    <div className="relative mb-3.5 group-hover:scale-105 transition-transform duration-300">
                      <div className="absolute -inset-1 bg-[#98CE94]/30 rounded-3xl blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className={`relative w-16 h-16 rounded-[22px] bg-gradient-to-br ${member.avatarBg} text-white font-black text-xl flex items-center justify-center shadow-md border-[3px] border-white`}>
                        {member.avatarText}
                      </div>
                    </div>

                    {/* Member Name */}
                    <h3 className="text-xl sm:text-2xl font-black text-[#363543] group-hover:text-[#4E8E4A] transition-colors leading-tight">
                      {member.name}
                    </h3>

                    {/* Member Primary Role */}
                    <p className="text-sm font-bold text-[#4E8E4A] mt-1">
                      {member.role}
                    </p>

                    {/* Specialization Lead Pill Badge */}
                    <div className="mt-2.5">
                      <span className="inline-flex items-center text-[11px] font-bold tracking-wide text-[#363543] bg-[#EEF7ED] border border-[#98CE94]/40 px-3 py-1 rounded-full shadow-2xs">
                        {member.leadBadge}
                      </span>
                    </div>
                  </div>

                  {/* Summary Description */}
                  <div className="bg-[#F8F9F7] p-3.5 rounded-2xl border border-[#E5E7EB]/80 mb-5">
                    <p className="text-xs text-[#52525B] leading-relaxed italic">
                      "{member.mainResponsibilities}"
                    </p>
                  </div>

                  {/* Structured Responsibilities Breakdown */}
                  <div className="space-y-3">
                    <p className="text-xs font-extrabold text-[#363543] uppercase tracking-wider flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#4E8E4A]" />
                      Key Responsibilities:
                    </p>
                    <div className="space-y-2">
                      {member.responsibilitiesList.map((resp, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-[#52525B] leading-snug">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#8ECB8A] mt-1.5 flex-shrink-0" />
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Tags: Focus Domains */}
                <div className="pt-6 mt-6 border-t border-[#E5E7EB] relative z-10">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#A1A1AA] mb-2.5">
                    Core Specializations
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {member.focusAreas.map((area) => (
                      <span
                        key={area}
                        className="text-[11px] font-semibold text-[#363543] bg-[#F8F9F7] group-hover:bg-[#EEF7ED] group-hover:text-[#4E8E4A] px-2.5 py-1 rounded-lg border border-[#E5E7EB] transition-colors"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View Mode: Structured Table Matrix */}
        {viewMode === 'table' && (
          <div className="bg-white border border-[#E5E7EB] rounded-3xl overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#F1F3EE] border-b border-[#E5E7EB] text-xs font-extrabold text-[#363543] uppercase tracking-wider">
                    <th className="py-4 px-6 w-1/4">Team Member</th>
                    <th className="py-4 px-6 w-1/5">Role</th>
                    <th className="py-4 px-6 w-1/2">Main Responsibilities</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E7EB] text-sm">
                  {teamMembers.map((member) => (
                    <tr key={member.id} className="hover:bg-[#FAFBF9] transition-colors">
                      {/* Name & Initials */}
                      <td className="py-5 px-6 align-top">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${member.avatarBg} text-white font-bold text-sm flex items-center justify-center shadow-2xs flex-shrink-0`}>
                            {member.avatarText}
                          </div>
                          <div>
                            <span className="font-bold text-[#363543] block">
                              {member.name}
                            </span>
                            <span className="text-[11px] text-[#73737C]">
                              {member.leadBadge}
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* Role Pill */}
                      <td className="py-5 px-6 align-top">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-[#EEF7ED] text-[#4E8E4A] border border-[#98CE94]/30">
                          {member.role}
                        </span>
                      </td>

                      {/* Main Responsibilities Detailed */}
                      <td className="py-5 px-6 align-top">
                        <p className="text-xs text-[#52525B] leading-relaxed mb-3">
                          {member.mainResponsibilities}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {member.focusAreas.map((area) => (
                            <span
                              key={area}
                              className="text-[10px] font-semibold text-[#73737C] bg-[#F8F9F7] px-2 py-0.5 rounded border border-[#E5E7EB]"
                            >
                              {area}
                            </span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Project Context Callout Footer */}
        <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xs">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#EEF7ED] text-[#4E8E4A] flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#363543]">
                Sindh Madressatul Islam University (SMIU)
              </h4>
              <p className="text-xs text-[#73737C] mt-0.5">
                Department of Computer Science · Final Year Capstone Project (FYP)
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F8F9F7] border border-[#E5E7EB] text-xs font-bold text-[#363543]">
            <Award className="w-4 h-4 text-[#8ECB8A]" />
            <span>Academic Supervision & Peer Validation</span>
          </div>
        </div>

      </div>
    </section>
  );
};
