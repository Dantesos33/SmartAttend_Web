import React, { useState } from 'react';
import { X, ShieldCheck, BookOpen, Download, Scan, CheckCircle2, FileText, Camera, RefreshCw } from 'lucide-react';
import { ModalType } from '../types';

interface ModalsProps {
  activeModal: ModalType;
  onClose: () => void;
}

export const Modals: React.FC<ModalsProps> = ({ activeModal, onClose }) => {
  const [scanProgress, setScanProgress] = useState(0);
  const [demoState, setDemoState] = useState<'idle' | 'scanning' | 'complete'>('idle');

  if (!activeModal) return null;

  const startDemoScan = () => {
    setDemoState('scanning');
    setScanProgress(0);

    const interval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setDemoState('complete');
          return 100;
        }
        return prev + 10;
      });
    }, 150);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#363543]/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#E5E7EB] max-h-[85vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#73737C] hover:bg-gray-100 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* 01: PRIVACY POLICY MODAL */}
        {activeModal === 'privacy' && (
          <div className="space-y-6 text-[#363543]">
            <div className="flex items-center gap-3 border-b border-[#E5E7EB] pb-4">
              <div className="w-10 h-10 rounded-xl bg-[#EEF7ED] text-[#4E8E4A] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-[#4E8E4A]" />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold">Privacy Policy</h2>
                <p className="text-xs text-[#73737C]">SmartAttend Data Handling & Security Protocols</p>
              </div>
            </div>

            <p className="text-sm text-[#73737C] leading-relaxed">
              This Privacy Policy outlines how SmartAttend handles information collected during system operation.
            </p>

            <div className="space-y-4">
              <div className="bg-[#F8F9F7] p-4 rounded-xl border border-[#E5E7EB]">
                <h3 className="text-sm font-bold text-[#363543]">1. Information Collected</h3>
                <p className="text-xs text-[#73737C] mt-1 leading-relaxed">
                  SmartAttend collects user account credentials (name, email, role), classroom information, and attendance logs.
                </p>
              </div>

              <div className="bg-[#F8F9F7] p-4 rounded-xl border border-[#E5E7EB]">
                <h3 className="text-sm font-bold text-[#363543]">2. Facial Recognition Information</h3>
                <p className="text-xs text-[#73737C] mt-1 leading-relaxed">
                  Facial embeddings are extracted for identity verification. Raw face image data is processed locally and securely vectorised for identity comparison only.
                </p>
              </div>

              <div className="bg-[#F8F9F7] p-4 rounded-xl border border-[#E5E7EB]">
                <h3 className="text-sm font-bold text-[#363543]">3. Attendance Records</h3>
                <p className="text-xs text-[#73737C] mt-1 leading-relaxed">
                  Attendance records are retained digitally and restricted strictly to authorized teachers and institution administrators.
                </p>
              </div>

              <div className="bg-[#F8F9F7] p-4 rounded-xl border border-[#E5E7EB]">
                <h3 className="text-sm font-bold text-[#363543]">4. Data Security</h3>
                <p className="text-xs text-[#73737C] mt-1 leading-relaxed">
                  All data transmitted between the Android mobile client and backend infrastructure is encrypted using standard secure protocols.
                </p>
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-[#363543] text-white text-xs font-bold rounded-xl hover:bg-[#2A2935] transition-colors cursor-pointer"
              >
                Close Policy
              </button>
            </div>
          </div>
        )}

        {/* 02: USER MANUAL MODAL */}
        {activeModal === 'manual' && (
          <div className="space-y-6 text-[#363543]">
            <div className="flex items-center gap-3 border-b border-[#E5E7EB] pb-4">
              <div className="w-10 h-10 rounded-xl bg-[#EEF7ED] text-[#4E8E4A] flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-[#4E8E4A]" />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold">SmartAttend User Manual</h2>
                <p className="text-xs text-[#73737C]">Complete documentation & operating instructions</p>
              </div>
            </div>

            <p className="text-sm text-[#73737C] leading-relaxed">
              Complete documentation and operating instructions for the SmartAttend mobile app.
            </p>

            <div className="space-y-4">
              <div className="border border-[#E5E7EB] rounded-2xl p-4 bg-white shadow-2xs">
                <span className="text-xs font-extrabold text-[#4E8E4A] uppercase">Section 1</span>
                <h3 className="text-base font-bold text-[#363543] mt-0.5">Application Installation</h3>
                <p className="text-xs text-[#73737C] mt-1 leading-relaxed">
                  Download the official <code className="bg-gray-100 px-1 py-0.5 rounded text-[#363543]">.apk</code> file using the download button on this website, enable "Install from Unknown Sources" on your Android device settings, and complete installation.
                </p>
              </div>

              <div className="border border-[#E5E7EB] rounded-2xl p-4 bg-white shadow-2xs">
                <span className="text-xs font-extrabold text-[#4E8E4A] uppercase">Section 2</span>
                <h3 className="text-base font-bold text-[#363543] mt-0.5">Student Registration</h3>
                <ul className="text-xs text-[#73737C] mt-1 space-y-1 list-disc list-inside">
                  <li>Log in with your assigned student credentials.</li>
                  <li>Navigate to <b>Profile → Face Registration</b>.</li>
                  <li>Capture a clear facial picture in good lighting conditions.</li>
                </ul>
              </div>

              <div className="border border-[#E5E7EB] rounded-2xl p-4 bg-white shadow-2xs">
                <span className="text-xs font-extrabold text-[#4E8E4A] uppercase">Section 3</span>
                <h3 className="text-base font-bold text-[#363543] mt-0.5">Marking & Reviewing Attendance</h3>
                <p className="text-xs text-[#73737C] mt-1 leading-relaxed">
                  Teachers select the active classroom, initiate face detection mode, review flagged student records, and confirm final submitted logs.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E5E7EB] flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = 'assets/usermanual.pdf';
                  link.download = 'usermanual.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#98CE94] text-[#183017] text-xs font-bold rounded-xl hover:bg-[#82BE7D] transition-all cursor-pointer shadow-sm"
              >
                <Download className="w-4 h-4 text-[#183017]" />
                Download User Manual PDF
              </button>
              <button
                onClick={onClose}
                className="px-5 py-2.5 bg-[#F8F9F7] text-[#363543] border border-[#E5E7EB] text-xs font-semibold rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
              >
                Close Manual
              </button>
            </div>
          </div>
        )}

        {/* 03: INTERACTIVE FACE SCANNER DEMO MODAL */}
        {activeModal === 'scanner' && (
          <div className="space-y-6 text-[#363543]">
            <div className="flex items-center gap-3 border-b border-[#E5E7EB] pb-4">
              <div className="w-10 h-10 rounded-xl bg-[#EEF7ED] text-[#4E8E4A] flex items-center justify-center">
                <Scan className="w-5 h-5 text-[#4E8E4A]" />
              </div>
              <div>
                <h2 className="text-2xl font-extrabold">Biometric Face Scanner Simulator</h2>
                <p className="text-xs text-[#73737C]">Test live face vector extraction & matching engine</p>
              </div>
            </div>

            {/* Live Camera Simulation Screen */}
            <div className="bg-[#111827] rounded-2xl p-6 text-white text-center relative overflow-hidden border-2 border-[#98CE94]/50">
              
              {/* Corner Reticles */}
              <div className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-[#98CE94]"></div>
              <div className="absolute top-4 right-4 w-5 h-5 border-t-2 border-r-2 border-[#98CE94]"></div>
              <div className="absolute bottom-4 left-4 w-5 h-5 border-b-2 border-l-2 border-[#98CE94]"></div>
              <div className="absolute bottom-4 right-4 w-5 h-5 border-b-2 border-r-2 border-[#98CE94]"></div>

              {demoState === 'scanning' && (
                <div className="absolute inset-x-0 h-1 bg-[#98CE94] shadow-[0_0_15px_#98CE94] animate-scan" />
              )}

              {demoState === 'idle' && (
                <div className="py-8 space-y-3">
                  <div className="w-16 h-16 rounded-full border-2 border-dashed border-[#98CE94] flex items-center justify-center mx-auto text-[#98CE94]">
                    <Camera className="w-8 h-8 text-[#98CE94]" />
                  </div>
                  <p className="text-sm font-bold text-white">Camera Viewport Ready</p>
                  <p className="text-xs text-gray-400">Click below to simulate facial recognition analysis</p>
                </div>
              )}

              {demoState === 'scanning' && (
                <div className="py-8 space-y-3">
                  <div className="w-16 h-16 rounded-full border-2 border-[#98CE94] bg-[#98CE94]/20 flex items-center justify-center mx-auto text-[#98CE94] animate-pulse">
                    <RefreshCw className="w-8 h-8 animate-spin text-[#98CE94]" />
                  </div>
                  <p className="text-sm font-bold text-[#98CE94]">Analyzing Face Mesh ({scanProgress}%)</p>
                  <div className="w-48 bg-gray-800 h-2 rounded-full mx-auto overflow-hidden">
                    <div className="bg-[#98CE94] h-full transition-all duration-150" style={{ width: `${scanProgress}%` }}></div>
                  </div>
                </div>
              )}

              {demoState === 'complete' && (
                <div className="py-6 space-y-2 animate-in zoom-in-90 duration-200">
                  <CheckCircle2 className="w-14 h-14 text-[#98CE94] mx-auto" />
                  <h3 className="text-lg font-extrabold text-white">Verification 100% Successful</h3>
                  <div className="bg-gray-800/80 p-3 rounded-xl max-w-xs mx-auto border border-[#98CE94]/40 text-xs text-left space-y-1">
                    <p className="font-bold text-white">Student: Ayan Ahmed</p>
                    <p className="text-gray-300">Roll: BSCS-2022-042</p>
                    <p className="text-[#98CE94] font-extrabold">Confidence Match: 99.4%</p>
                    <p className="text-gray-400 text-[10px]">Status: Logged into Firestore Database</p>
                  </div>
                </div>
              )}

            </div>

            <div className="flex gap-3">
              <button
                onClick={startDemoScan}
                disabled={demoState === 'scanning'}
                className="flex-1 py-3 bg-[#98CE94] hover:bg-[#82BE7D] text-[#183017] font-bold text-xs rounded-xl shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Scan className="w-4 h-4 text-[#183017]" />
                {demoState === 'scanning' ? 'Processing...' : 'Run Vector Test Scan'}
              </button>
              <button
                onClick={onClose}
                className="px-5 py-3 bg-[#F8F9F7] text-[#363543] border border-[#E5E7EB] font-semibold text-xs rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};