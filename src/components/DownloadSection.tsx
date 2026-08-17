import React, { useState } from 'react';
import { QrCode, Download, BookOpen, Smartphone, Check, Sparkles, ExternalLink } from 'lucide-react';
import { ModalType } from '../types';
import { SmartAttendLogo } from './SmartAttendLogo';
import qrCode from '../../assets/qrcode.png';

interface DownloadSectionProps {
  onOpenModal: (modal: ModalType) => void;
}

export const DownloadSection: React.FC<DownloadSectionProps> = ({ onOpenModal }) => {
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadApk = () => {
    setDownloading(true);
    setDownloadSuccess(false);

    // Simulate APK download
    setTimeout(() => {
      setDownloading(false);
      setDownloadSuccess(true);

      // Trigger dummy download file
      const element = document.createElement('a');
      const file = new Blob(['SmartAttend APK Installation Package Demo - SMI University FYP Project'], {
        type: 'text/plain',
      });
      element.href = URL.createObjectURL(file);
      element.download = 'SmartAttend-v2.1-release.apk';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }, 1200);
  };

  return (
    <section id="download" className="py-20 bg-[#F8F9F7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#4E8E4A] mb-3 block">
            DOWNLOAD SECTION
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#363543] leading-tight">
            Get SmartAttend
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#73737C] leading-relaxed">
            Download the SmartAttend Android application and experience a simpler way to manage classroom attendance.
          </p>
        </div>

        {/* 3 Download Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 01: Scan & Download */}
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-8 shadow-xs text-center flex flex-col items-center justify-between hover:shadow-md transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#EEF7ED] text-[#4E8E4A] flex items-center justify-center mx-auto mb-4">
                <QrCode className="w-5 h-5 text-[#4E8E4A]" />
              </div>
              <h3 className="text-xl font-bold text-[#363543]">Scan & Download</h3>
              <p className="text-xs text-[#73737C] mt-2 mb-6 leading-relaxed">
                Scan the QR code with your Android device camera to download the SmartAttend application directly.
              </p>
            </div>

            {/* QR Code Container */}
            <div className="my-2">
              <div className="w-36 h-36 border-2 border-dashed border-[#98CE94] bg-[#EEF7ED] rounded-2xl p-3 flex flex-col items-center justify-center relative group">
                <img
                  src={qrCode}
                  alt="Scan to download SmartAttend"
                  className="w-28 h-28 object-contain"
                  draggable={false}
                />

                <div className="absolute inset-0 bg-black/60 backdrop-blur-xs rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2 text-center">
                  <span className="text-[10px] font-bold text-white">Direct APK Scan URL Linked</span>
                </div>
              </div>
              <span className="text-[11px] font-semibold text-[#A1A1AA] mt-2 block">
                Scan with Phone Camera
              </span>
            </div>

            <div className="w-full pt-4 border-t border-[#E5E7EB] text-xs font-bold text-[#4E8E4A] flex items-center justify-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#98CE94]" />
              <span>Version 2.1 • Android 8.0+</span>
            </div>
          </div>

          {/* Card 02: Direct APK Download */}
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-8 shadow-xs text-center flex flex-col items-center justify-between hover:shadow-md transition-all">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#EEF7ED] flex items-center justify-center mx-auto mb-4 border border-[#98CE94]/30 shadow-2xs">
                <SmartAttendLogo size={40} variant="dark" />
              </div>
              <h3 className="text-xl font-bold text-[#363543]">Download for Android</h3>
              <p className="text-xs text-[#73737C] mt-2 mb-6 leading-relaxed">
                Direct APK installation package for Android mobile smartphones and tablets.
              </p>
            </div>

            {/* APK Info Box */}
            <div className="w-full bg-[#F8F9F7] p-4 rounded-xl border border-[#E5E7EB] mb-6 space-y-1 text-left">
              <div className="flex justify-between text-xs font-bold text-[#363543]">
                <span>SmartAttend.apk</span>
                <span className="text-[#4E8E4A]">24.8 MB</span>
              </div>
              <p className="text-[11px] text-[#73737C]">SHA256 Verified Build · SMI University</p>
            </div>

            {/* Action Download Button */}
            <div className="w-full">
              <button
                onClick={handleDownloadApk}
                disabled={downloading}
                className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm ${
                  downloadSuccess
                    ? 'bg-[#EEF7ED] text-[#4E8E4A] border border-[#98CE94]'
                    : 'bg-[#363543] hover:bg-[#2A2935] text-white'
                }`}
              >
                {downloading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    <span>Preparing Download...</span>
                  </>
                ) : downloadSuccess ? (
                  <>
                    <Check className="w-4 h-4 text-[#4E8E4A]" />
                    <span>APK Downloaded! Click to Re-download</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 text-[#98CE94]" />
                    <span>Download APK (24.8 MB)</span>
                  </>
                )}
              </button>
              <span className="text-[10px] text-[#A1A1AA] mt-2 block">
                Official Android Application
              </span>
            </div>
          </div>

          {/* Card 03: User Manual */}
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-8 shadow-xs text-center flex flex-col items-center justify-between hover:shadow-md transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#EEF7ED] text-[#4E8E4A] flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-5 h-5 text-[#4E8E4A]" />
              </div>
              <h3 className="text-xl font-bold text-[#363543]">Need help getting started?</h3>
              <p className="text-xs text-[#73737C] mt-2 mb-6 leading-relaxed">
                Read the SmartAttend User Manual for installation instructions and guidance on using the application.
              </p>
            </div>

            {/* Manual Highlight Snippet */}
            <div className="w-full bg-[#F8F9F7] p-4 rounded-xl border border-[#E5E7EB] mb-6 text-left space-y-1.5 text-xs text-[#73737C]">
              <p className="font-bold text-[#363543]">Included Instructions:</p>
              <p className="text-[11px]">• APK Installation & permissions guide</p>
              <p className="text-[11px]">• Face registration lighting best practices</p>
              <p className="text-[11px]">• Teacher session activation & exports</p>
            </div>

            <button
              onClick={() => onOpenModal('manual')}
              className="w-full py-3.5 px-4 bg-white hover:bg-gray-50 border border-[#E5E7EB] text-[#363543] font-bold text-xs rounded-xl flex items-center justify-center gap-2 shadow-2xs hover:border-gray-400 transition-all cursor-pointer"
            >
              <BookOpen className="w-4 h-4 text-[#73737C]" />
              <span>Read / Download User Manual</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
