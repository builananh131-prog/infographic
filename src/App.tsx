/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { TIMELINE_STAGES } from './data/treebankData';
import { Navbar } from './components/Navbar';
import { BambooSvgVisualizer } from './components/BambooSvgVisualizer';
import { TimelineControls } from './components/TimelineControls';
import { StageDetailCard } from './components/StageDetailCard';
import { ImpactCalculator } from './components/ImpactCalculator';
import { VillageNetwork } from './components/VillageNetwork';
import { PartnershipModel } from './components/PartnershipModel';
import { FscStandardsModal } from './components/FscStandardsModal';
import { SpeciesGuideModal } from './components/SpeciesGuideModal';
import { CircleDot, Share2, Check } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'simulator' | 'calculator' | 'villages' | 'pillars'>('simulator');
  const [currentYear, setCurrentYear] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isFscModalOpen, setIsFscModalOpen] = useState<boolean>(false);
  const [isSpeciesModalOpen, setIsSpeciesModalOpen] = useState<boolean>(false);
  const [copiedShare, setCopiedShare] = useState<boolean>(false);

  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Xử lý chuyển năm & hiệu ứng pháo hoa khi đến năm thứ 5 đạt chuẩn FSC
  const handleYearChange = (year: number) => {
    setCurrentYear(year);
    if (year === 5) {
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#10b981', '#34d399', '#facc15', '#fef08a']
        });
      } catch {
        // Bỏ qua nếu môi trường không hỗ trợ canvas
      }
    }
  };

  // Vòng lặp tự động phát
  useEffect(() => {
    if (isPlaying) {
      autoplayTimerRef.current = setInterval(() => {
        setCurrentYear((prev) => {
          const next = prev >= 5 ? 1 : prev + 1;
          if (next === 5) {
            try {
              confetti({
                particleCount: 40,
                spread: 50,
                origin: { y: 0.7 },
                colors: ['#10b981', '#34d399', '#facc15']
              });
            } catch {
              // bỏ qua
            }
          }
          return next;
        });
      }, 3500);
    } else {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    }

    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [isPlaying]);

  const handleReset = () => {
    setIsPlaying(false);
    handleYearChange(1);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedShare(true);
    setTimeout(() => setCopiedShare(false), 2000);
  };

  const currentStageData = TIMELINE_STAGES[currentYear] || TIMELINE_STAGES[1];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-emerald-500 selection:text-white relative">
      {/* Nền gradient ánh sáng sinh thái */}
      <div className="fixed inset-0 bg-gradient-to-br from-emerald-950/70 via-slate-950 to-teal-950/80 -z-10 pointer-events-none" />
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Vùng chứa nội dung chính */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-5 flex-grow flex flex-col justify-between">
        {/* Thanh tiêu đề & điều hướng */}
        <Navbar
          activeTab={activeTab}
          onTabChange={setActiveTab}
          onOpenFscModal={() => setIsFscModalOpen(true)}
          onOpenSpeciesModal={() => setIsSpeciesModalOpen(true)}
        />

        {/* Tab 1: Mô phỏng hành trình tăng trưởng sinh thái */}
        {activeTab === 'simulator' && (
          <div className="space-y-4 my-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
              {/* Cột trái: Đồ họa SVG mô phỏng sinh thái */}
              <div className="lg:col-span-7 flex flex-col">
                <BambooSvgVisualizer
                  data={currentStageData}
                  year={currentYear}
                  onYearChange={handleYearChange}
                  onReset={handleReset}
                />
              </div>

              {/* Cột phải: Thẻ chi tiết giai đoạn */}
              <div className="lg:col-span-5 flex flex-col justify-between gap-3.5">
                <TimelineControls
                  currentYear={currentYear}
                  onYearChange={handleYearChange}
                  isPlaying={isPlaying}
                  onTogglePlay={() => setIsPlaying(!isPlaying)}
                />

                <StageDetailCard
                  data={currentStageData}
                  onOpenFscModal={() => setIsFscModalOpen(true)}
                  onOpenStakeholdersModal={() => setActiveTab('pillars')}
                />
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Bộ tính toán tác động & hấp thụ CO2 */}
        {activeTab === 'calculator' && (
          <div className="my-auto">
            <ImpactCalculator />
          </div>
        )}

        {/* Tab 3: 14 Bản làng xã Tam Thái */}
        {activeTab === 'villages' && (
          <div className="my-auto">
            <VillageNetwork />
          </div>
        )}

        {/* Tab 4: Mô hình 4 nhà & Chuỗi giá trị */}
        {activeTab === 'pillars' && (
          <div className="my-auto">
            <PartnershipModel />
          </div>
        )}

        {/* Chân trang & Thông tin liên kết 4 nhà */}
        <footer className="mt-8 pt-4 border-t border-slate-800/80 text-slate-400 text-xs flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-center md:text-left">
            <CircleDot className="w-4 h-4 text-emerald-400 flex-shrink-0 animate-pulse" />
            <span className="leading-snug">
              <strong className="text-emerald-300">Mô hình 4 nhà liên kết:</strong> Chính quyền xã - Tổ chức phát triển (TreeBank & Quỹ RED) - Nhà khoa học (ĐH Vinh) - Doanh nghiệp bao tiêu (Phê La & Đạm Phú Mỹ)
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition cursor-pointer flex items-center gap-1.5 text-[11px]"
              title="Chia sẻ liên kết"
            >
              {copiedShare ? (
                <>
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">Đã sao chép liên kết!</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3 h-3 text-slate-400" />
                  <span>Chia sẻ</span>
                </>
              )}
            </button>

            <span className="text-[11px] text-slate-500 whitespace-nowrap">
              © 2026 Dự án Phát triển Vùng Nguyên Liệu Bền Vững Xã Tam Thái, Tỉnh Nghệ An
            </span>
          </div>
        </footer>
      </div>

      {/* Cửa sổ 10 Tiêu chuẩn FSC */}
      <FscStandardsModal
        isOpen={isFscModalOpen}
        onClose={() => setIsFscModalOpen(false)}
      />

      {/* Cửa sổ Hồ sơ loài cây Mét & Luồng */}
      <SpeciesGuideModal
        isOpen={isSpeciesModalOpen}
        onClose={() => setIsSpeciesModalOpen(false)}
      />
    </div>
  );
}
