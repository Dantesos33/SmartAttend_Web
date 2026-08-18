import React, { useState } from 'react';
import { QrCode, Download, BookOpen, Smartphone, Check, Sparkles, ExternalLink, FileText } from 'lucide-react';
import { ModalType } from '../types';
import { SmartAttendLogo } from './SmartAttendLogo';
import qrCode from '../../assets/qrcode.png';

interface DownloadSectionProps {
  onOpenModal: (modal: ModalType) => void;
}

export const DownloadSection: React.FC<DownloadSectionProps> = ({ onOpenModal }) => {
  // Google Drive URLs for APK and User Manual
  const GOOGLE_DRIVE_APK_URL = 'https://drive.google.com/file/d/1FJKVJHsauKD1Iit8AUhHqR_9O8I_TOpc/view?usp=sharing';
  // Replace with your actual Google Drive link for the User Manual PDF
  const GOOGLE_DRIVE_MANUAL_URL = 'https://drive.google.com/file/d/YOUR_MANUAL_FILE_ID/view?usp=sharing';

  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  
  const [downloadingManual, setDownloadingManual] = useState(false);
  const [manualSuccess, setManualSuccess] = useState(false);

  const handleDownloadApk = () => {
    setDownloading(true);
    setDownloadSuccess(false);

    setTimeout(() => {
      setDownloading(false);
      setDownloadSuccess(true);
      window.open(GOOGLE_DRIVE_APK_URL, '_blank', 'noopener,noreferrer');
    }, 800);
  };

  const handleDownloadManual = () => {
    setDownloadingManual(true);
    setManualSuccess(false);

    setTimeout(() => {
      setDownloadingManual(false);
      setManualSuccess(true);
      window.open(GOOGLE_DRIVE_MANUAL_URL, '_blank', 'noopener,noreferrer');
    }, 800);
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
            Download the SmartAttend Android application and official user documentation to experience a simpler way to manage classroom attendance.
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
              <span>Version 3.0 • Android & iOS</span>
            </div>
          </div>

          {/* Card 02: Direct APK Download */}
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-8 shadow-xs text-center flex flex-col items-center justify-between hover:shadow-md transition-all">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#EEF7ED] flex items-center justify-center mx-auto mb-4 border border-[#98CE94]/30 shadow-2xs">
                <SmartAttendLogo size={40} variant="light" />
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
                <span className="text-[#4E8E4A]">104 MB</span>
              </div>
              <p className="text-[11px] text-[#73737C]">SHA256 Verified Build · Version 3.0</p>
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
                    <span>Opening Google Drive...</span>
                  </>
                ) : downloadSuccess ? (
                  <>
                    <Check className="w-4 h-4 text-[#4E8E4A]" />
                    <span>Opened in Drive! Click to Re-open</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 text-[#98CE94]" />
                    <span>Download from Drive (104 MB)</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-0.5 text-white/60" />
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
              <h3 className="text-xl font-bold text-[#363543]">Official User Manual</h3>
              <p className="text-xs text-[#73737C] mt-2 mb-6 leading-relaxed">
                Access the complete Version 3.0 documentation for installation guidelines, face registration best practices, and role guides.
              </p>
            </div>

            {/* Manual Info Box */}
            <div className="w-full bg-[#F8F9F7] p-4 rounded-xl border border-[#E5E7EB] mb-6 space-y-1 text-left">
              <div className="flex justify-between text-xs font-bold text-[#363543]">
                <span>UserManual.pdf</span>
                <span className="text-[#4E8E4A]">v3.0 Guide</span>
              </div>
              <p className="text-[11px] text-[#73737C]">Installation · Roles · Troubleshooting</p>
            </div>

            {/* Manual Action Buttons Container */}
            <div className="w-full space-y-2.5">
              <button
                onClick={handleDownloadManual}
                disabled={downloadingManual}
                className="w-full py-3 px-4 bg-[#363543] hover:bg-[#2A2935] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
              >
                {downloadingManual ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    <span>Opening Manual...</span>
                  </>
                ) : manualSuccess ? (
                  <>
                    <Check className="w-4 h-4 text-[#98CE94]" />
                    <span>Manual Opened in Drive!</span>
                  </>
                ) : (
                  <>
                    <FileText className="w-4 h-4 text-[#98CE94]" />
                    <span>Download Manual (Drive)</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-0.5 text-white/60" />
                  </>
                )}
              </button>

              <button
                onClick={() => onOpenModal('manual')}
                className="w-full py-2.5 px-4 bg-white hover:bg-gray-50 border border-[#E5E7EB] text-[#363543] font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-[#73737C]" />
                <span>Preview In-App Modal</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};