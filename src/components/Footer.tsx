import React from 'react';
import { ModalType } from '../types';
import { SmartAttendLogo } from './SmartAttendLogo';
import { Download } from 'lucide-react';

interface FooterProps {
  onOpenModal: (modal: ModalType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenModal }) => {
  return (
    <footer className="bg-[#363543] text-white pt-16 pb-12 border-t border-[#4B4A5A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#4B4A5A]">
          
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <SmartAttendLogo size={42} variant="light" />
              <div>
                <h3 className="text-xl font-extrabold tracking-tight text-white">SmartAttend</h3>
                <span className="text-[10px] text-[#98CE94] font-mono tracking-wider">v1.0.4 PROD</span>
              </div>
            </div>
            <p className="text-sm text-[#A1A1AA] max-w-sm leading-relaxed">
              Smart attendance management through facial recognition. Built for students, teachers, and university administrators.
            </p>
            <div className="pt-1 text-xs text-[#98CE94] font-semibold">
              Final Year Project (FYP) · SMI University
            </div>
          </div>

          {/* Product Navigation Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#98CE94]">
              Product
            </h4>
            <ul className="space-y-2 text-sm text-[#A1A1AA]">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-white transition-colors">
                  Team Members
                </a>
              </li>
              <li>
                <a href="#download" className="hover:text-white transition-colors">
                  Download
                </a>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('manual')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  User Manual
                </button>
              </li>
              <li>
                <a
                  href="assets/usermanual.pdf"
                  download="usermanual.pdf"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors text-left cursor-pointer text-[#98CE94]"
                >
                  <Download className="w-3.5 h-3.5" />
                  User Manual PDF
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#98CE94]">
              Legal & Info
            </h4>
            <ul className="space-y-2 text-sm text-[#A1A1AA]">
              <li>
                <button
                  onClick={() => onOpenModal('privacy')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenModal('scanner')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Interactive Face Scanner Demo
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-[#A1A1AA] gap-2">
          <div>Developed as a Final Year Project at SMI University</div>
          <div>© 2026 SmartAttend. All rights reserved.</div>
        </div>

      </div>
    </footer>
  );
};