import React from 'react';
import { Sprout, Award, Calculator, MapPin, RefreshCw, Trees } from 'lucide-react';

interface Props {
  activeTab: 'simulator' | 'calculator' | 'villages' | 'pillars';
  onTabChange: (tab: 'simulator' | 'calculator' | 'villages' | 'pillars') => void;
  onOpenFscModal: () => void;
  onOpenSpeciesModal: () => void;
}

export const Navbar: React.FC<Props> = ({
  activeTab,
  onTabChange,
  onOpenFscModal,
  onOpenSpeciesModal
}) => {
  return (
    <header className="border-b border-emerald-800/40 pb-5 mb-6 space-y-4">
      {/* Thanh trên cùng với huy hiệu và nút tra cứu nhanh */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
          <Sprout className="w-3.5 h-3.5 text-emerald-400" />
          <span>Dự Án Phát Triển Lâm Nghiệp Bền Vững - Xã Tam Thái, Nghệ An</span>
        </div>

        <div className="flex items-center gap-2">
          {/* Nút xem hồ sơ loài cây */}
          <button
            onClick={onOpenSpeciesModal}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700/80 hover:border-emerald-500/50 text-xs text-slate-300 hover:text-white transition cursor-pointer shadow-sm"
          >
            <Trees className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden sm:inline">Hồ Sơ Cây Mét / Luồng</span>
            <span className="sm:hidden">Loài cây</span>
          </button>

          {/* Nút xem 10 tiêu chuẩn FSC */}
          <button
            onClick={onOpenFscModal}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-400/10 border border-amber-400/30 hover:bg-amber-400/20 text-xs text-amber-300 hover:text-amber-200 transition cursor-pointer shadow-sm font-semibold"
          >
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">10 Tiêu Chuẩn FSC</span>
            <span className="sm:hidden">Tiêu chuẩn FSC</span>
          </button>
        </div>
      </div>

      {/* Tiêu đề chính mới và 4 khung thống kê (đã bỏ khung Bao tiêu: Phê La 100%) */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase">
            HIỆU QUẢ TRONG GIAI ĐOẠN ĐẦU CỦA <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 bg-clip-text text-transparent">DỰ ÁN ĐẦU TƯ XANH</span>
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
            Hành trình phủ xanh đất dốc và nâng cao sinh kế bền vững cho người dân 14 bản làng tại <strong className="text-emerald-300 font-semibold">xã Tam Thái, tỉnh Nghệ An</strong>.
          </p>
        </div>

        {/* 4 Khung Thống Kê (Đã bỏ khung Bao tiêu: Phê La 100%) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 flex-shrink-0">
          <div className="glass-card px-3.5 py-2 rounded-xl text-center border border-emerald-500/20 shadow-md">
            <div className="text-[10px] text-emerald-300/80 uppercase font-semibold">Cây giống</div>
            <div className="text-base sm:text-lg font-black text-white">20.000+</div>
          </div>
          <div className="glass-card px-3.5 py-2 rounded-xl text-center border border-emerald-500/20 shadow-md">
            <div className="text-[10px] text-emerald-300/80 uppercase font-semibold">Bản làng</div>
            <div className="text-base sm:text-lg font-black text-white">14</div>
          </div>
          <div className="glass-card px-3.5 py-2 rounded-xl text-center border border-emerald-500/20 shadow-md">
            <div className="text-[10px] text-emerald-300/80 uppercase font-semibold">Tỷ lệ sống</div>
            <div className="text-base sm:text-lg font-black text-emerald-400">≥ 85%</div>
          </div>
          <div className="glass-card px-3.5 py-2 rounded-xl text-center border border-emerald-500/20 shadow-md">
            <div className="text-[10px] text-emerald-300/80 uppercase font-semibold">Tiêu chuẩn</div>
            <div className="text-base sm:text-lg font-black text-amber-400">FSC</div>
          </div>
        </div>
      </div>

      {/* Thanh Điều Hướng Các Tab */}
      <nav className="flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-none border-t border-slate-800/80 pt-3">
        <button
          onClick={() => onTabChange('simulator')}
          className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition whitespace-nowrap cursor-pointer ${
            activeTab === 'simulator'
              ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-950/60 ring-1 ring-emerald-400/50'
              : 'text-slate-400 hover:text-white hover:bg-slate-900'
          }`}
        >
          <Trees className="w-4 h-4 text-emerald-400" />
          <span>Mô Phỏng Sinh Thái</span>
        </button>

        <button
          onClick={() => onTabChange('calculator')}
          className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition whitespace-nowrap cursor-pointer ${
            activeTab === 'calculator'
              ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-950/60 ring-1 ring-emerald-400/50'
              : 'text-slate-400 hover:text-white hover:bg-slate-900'
          }`}
        >
          <Calculator className="w-4 h-4 text-emerald-400" />
          <span>Bộ Tính Hiệu Quả & Hấp Thụ CO₂</span>
        </button>

        <button
          onClick={() => onTabChange('villages')}
          className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition whitespace-nowrap cursor-pointer ${
            activeTab === 'villages'
              ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-950/60 ring-1 ring-emerald-400/50'
              : 'text-slate-400 hover:text-white hover:bg-slate-900'
          }`}
        >
          <MapPin className="w-4 h-4 text-emerald-400" />
          <span>14 Bản Làng Xã Tam Thái</span>
        </button>

        <button
          onClick={() => onTabChange('pillars')}
          className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition whitespace-nowrap cursor-pointer ${
            activeTab === 'pillars'
              ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-950/60 ring-1 ring-emerald-400/50'
              : 'text-slate-400 hover:text-white hover:bg-slate-900'
          }`}
        >
          <RefreshCw className="w-4 h-4 text-emerald-400" />
          <span>Mô Hình 4 Nhà & Chuỗi Giá Trị</span>
        </button>
      </nav>
    </header>
  );
};
