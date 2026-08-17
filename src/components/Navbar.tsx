import React, { useState, useEffect } from 'react';
import { Smartphone, Download, BookOpen, Menu, X, ShieldCheck } from 'lucide-react';
import { ModalType } from '../types';
import { SmartAttendLogo } from './SmartAttendLogo';

interface NavbarProps {
  onOpenModal: (modal: ModalType) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Roles', href: '#roles' },
    { name: 'Team', href: '#team' },
    { name: 'Download', href: '#download' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F8F9F7]/90 backdrop-blur-md border-b border-[#E5E7EB]/80 shadow-xs py-3.5'
          : 'bg-[#F8F9F7] py-4 border-b border-[#E5E7EB]/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <SmartAttendLogo size={36} variant="dark" />
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-xl tracking-tight text-[#363543] group-hover:text-[#4E8E4A] transition-colors">
                SmartAttend
              </span>
              <span className="text-[10px] uppercase tracking-widest font-bold px-1.5 py-0.5 bg-[#EEF7ED] text-[#4E8E4A] rounded-full border border-[#98CE94]/30">
                FYP
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#73737C] hover:text-[#363543] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#98CE94] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => onOpenModal('manual')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#363543] bg-white border border-[#E5E7EB] rounded-lg hover:bg-gray-50 transition-all cursor-pointer shadow-2xs"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#73737C]" />
              User Manual
            </button>
            <a
              href="#download"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-[#363543] rounded-lg hover:bg-[#2A2935] hover:-translate-y-0.5 transition-all shadow-sm cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-[#98CE94]" />
              Download App
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#363543] hover:bg-gray-200/60 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#E5E7EB] px-6 py-6 space-y-4 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#363543] hover:text-[#98CE94] py-1 border-b border-gray-100"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal('manual');
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-[#363543] bg-[#F8F9F7] border border-[#E5E7EB] rounded-lg"
            >
              <BookOpen className="w-4 h-4 text-[#73737C]" />
              User Manual
            </button>
            <a
              href="#download"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-bold text-white bg-[#363543] rounded-lg text-center"
            >
              <Download className="w-4 h-4 text-[#98CE94]" />
              Download App (APK)
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
