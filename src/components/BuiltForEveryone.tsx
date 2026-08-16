import React, { useState } from 'react';
import { User, GraduationCap, ShieldAlert, CheckCircle2, ChevronRight, Layers } from 'lucide-react';
import { UserRole } from '../types';

export const BuiltForEveryone: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<UserRole>('student');

  const roleCards = [
    {
      role: 'student' as UserRole,
      badge: 'Student',
      title: 'For Students',
      description: 'Register facial information, verify attendance through face recognition, and view personal attendance records.',
      icon: User,
      capabilities: [
        'Quick camera face profile registration',
        'Instant attendance verification in class',
        'Personal monthly attendance percentage & trends',
        'Instant notifications for marked classes',
      ],
      sampleScreen: 'Student Face Scan & Log View',
    },
    {
      role: 'teacher' as UserRole,
      badge: 'Teacher',
      title: 'For Teachers',
      description: 'Manage classes, monitor student attendance, and keep track of attendance records digitally.',
      icon: GraduationCap,
      capabilities: [
        'Live classroom session activation',
        'Real-time student face scan monitoring',
        'Manual override & absence justification',
        'One-click CSV & Excel report exporting',
      ],
      sampleScreen: 'Live Class Roster & Monitor View',
    },
    {
      role: 'admin' as UserRole,
      badge: 'Administrator',
      title: 'For Administrators',
      description: 'Manage users, academic information, and system-level attendance data through a centralized platform.',
      icon: ShieldAlert,
      capabilities: [
        'University-wide department & course setup',
        'Student & Faculty credential management',
        'Biometric data security & audit logs',
        'Institution-wide attendance analytics',
      ],
      sampleScreen: 'System Administration Dashboard',
    },
  ];

  const activeRoleData = roleCards.find((r) => r.role === selectedRole)!;

  return (
    <section id="roles" className="py-20 bg-[#F8F9F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#4E8E4A] mb-3 block">
            BUILT FOR EVERYONE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#363543] leading-tight">
            One system. Three experiences.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#73737C] leading-relaxed">
            SmartAttend brings students, teachers, and administrators together in one simple attendance ecosystem.
          </p>
        </div>

        {/* 3 Role Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {roleCards.map((card) => {
            const Icon = card.icon;
            const isSelected = selectedRole === card.role;
            return (
              <div
                key={card.role}
                onClick={() => setSelectedRole(card.role)}
                className={`cursor-pointer bg-white border rounded-2xl p-8 transition-all duration-300 text-center flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#98CE94] ring-2 ring-[#98CE94]/30 shadow-lg scale-[1.02]'
                    : 'border-[#E5E7EB] shadow-xs hover:border-[#98CE94] hover:-translate-y-1'
                }`}
              >
                <div>
                  <div className="inline-block px-3 py-1 bg-[#EEF7ED] text-[#4E8E4A] text-xs font-extrabold rounded-full uppercase tracking-wider mb-4 border border-[#98CE94]/30">
                    {card.badge}
                  </div>

                  <div className="w-12 h-12 mx-auto rounded-xl bg-gray-100 text-[#363543] flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#4E8E4A]" />
                  </div>

                  <h3 className="text-xl font-bold text-[#363543] mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#73737C] leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-center gap-1.5 text-xs font-extrabold text-[#4E8E4A]">
                  <span>{isSelected ? 'Currently Selected' : 'Explore Capabilities'}</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Role Detail Panel */}
        <div className="mt-8 bg-white border border-[#E5E7EB] rounded-2xl p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-[#E5E7EB]">
            <div>
              <span className="text-xs font-extrabold uppercase text-[#4E8E4A]">
                Role Breakdown — {activeRoleData.title}
              </span>
              <h4 className="text-lg font-bold text-[#363543] mt-1">
                Core Capabilities & Workflow
              </h4>
            </div>
            <div className="inline-flex gap-2">
              {roleCards.map((r) => (
                <button
                  key={r.role}
                  onClick={() => setSelectedRole(r.role)}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                    selectedRole === r.role
                      ? 'bg-[#363543] text-white'
                      : 'bg-gray-100 text-[#73737C] hover:bg-gray-200'
                  }`}
                >
                  {r.badge}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
            {activeRoleData.capabilities.map((cap, i) => (
              <div key={i} className="flex items-start gap-3 bg-[#F8F9F7] p-3.5 rounded-xl border border-[#E5E7EB]">
                <CheckCircle2 className="w-5 h-5 text-[#4E8E4A] flex-shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-[#363543]">{cap}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hierarchy Visual Tree (from spec) */}
        <div className="mt-12 bg-white border border-[#E5E7EB] rounded-2xl p-8 text-center shadow-xs">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#73737C] block mb-4">
            SYSTEM HIERARCHY TREE
          </span>

          <div className="inline-flex flex-col items-center gap-4">
            {/* Master Node */}
            <div className="px-6 py-2.5 bg-[#363543] text-white font-extrabold text-sm rounded-full shadow-sm flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#98CE94]" />
              <span>SMARTATTEND CORE PLATFORM</span>
            </div>

            {/* Connecting Connector Line */}
            <div className="w-0.5 h-6 bg-[#98CE94]"></div>

            {/* Branches */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 relative">
              <div className="px-5 py-2 bg-[#F8F9F7] border border-[#E5E7EB] text-[#363543] font-bold text-xs rounded-xl shadow-2xs hover:border-[#98CE94] transition-colors">
                🎓 STUDENT PORTAL
              </div>
              <div className="px-5 py-2 bg-[#F8F9F7] border border-[#E5E7EB] text-[#363543] font-bold text-xs rounded-xl shadow-2xs hover:border-[#98CE94] transition-colors">
                👨‍🏫 TEACHER DASHBOARD
              </div>
              <div className="px-5 py-2 bg-[#F8F9F7] border border-[#E5E7EB] text-[#363543] font-bold text-xs rounded-xl shadow-2xs hover:border-[#98CE94] transition-colors">
                🏛️ ADMINISTRATOR CONSOLE
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
